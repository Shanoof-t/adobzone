import { NextResponse } from "next/server";

const GOOGLE_APPS_SCRIPT_URL =
  process.env.GOOGLE_APPS_SCRIPT_URL;

type ContactData = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function isGoogleScriptNotFoundPage(text: string) {
  return /page not found|unable to open the file at present|script.googleusercontent.com\/macros\/echo/i.test(
    text,
  );
}

function normalizePayload(data: ContactData) {
  return {
    name: String(data.name || "").trim(),
    email: String(data.email || "").trim(),
    phone: String(data.phone || "").trim(),
    subject: String(data.subject || "").trim(),
    message: String(data.message || "").trim(),
  };
}

async function submitToGoogleAppsScript(
  payload: ReturnType<typeof normalizePayload>,
) {
  const attempts = [
    {
      name: "json",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
    {
      name: "form",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded;charset=UTF-8",
        Accept: "application/json",
      },
      body: new URLSearchParams(payload).toString(),
    },
  ];

  let lastError: {
    status: number;
    url: string;
    text: string;
  } | null = null;

  for (const attempt of attempts) {
    const googleResponse = await fetch(
      GOOGLE_APPS_SCRIPT_URL!,
      {
        method: "POST",
        redirect: "follow",
        headers: attempt.headers,
        body: attempt.body,
        cache: "no-store",
      },
    );

    const responseText = await googleResponse.text();

    console.log(
      `Google Apps Script (${attempt.name}) response status:`,
      googleResponse.status,
    );

    console.log(
      `Google Apps Script (${attempt.name}) final URL:`,
      googleResponse.url,
    );

    console.log(
      `Google Apps Script (${attempt.name}) response:`,
      responseText,
    );

    if (googleResponse.ok) {
      return {
        googleResponse,
        responseText,
        attemptName: attempt.name,
      };
    }

     if (googleResponse.status === 200) {
      return {
        googleResponse,
        responseText,
        attemptName: attempt.name,
      };
    }

    lastError = {
      status: googleResponse.status,
      url: googleResponse.url,
      text: responseText,
    };

    if (
      isGoogleScriptNotFoundPage(responseText) &&
      attempt.name === "json"
    ) {
      continue;
    }

    return {
      googleResponse,
      responseText,
      attemptName: attempt.name,
      error: lastError,
    };
  }

  if (lastError) {
    throw new Error(
      `Google Apps Script returned HTTP ${lastError.status}. The deployed script URL may be invalid or unpublished. Update GOOGLE_APPS_SCRIPT_URL to the published /exec web app URL.`,
    );
  }

  throw new Error(
    "Google Apps Script request failed without a response.",
  );
}

export async function POST(request: Request) {
  try {
    if (!GOOGLE_APPS_SCRIPT_URL) {
      console.error(
        "GOOGLE_APPS_SCRIPT_URL is missing",
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Google Apps Script URL is not configured.",
        },
        { status: 500 },
      );
    }

    const data =
      (await request.json()) as ContactData;

    const payload = normalizePayload(data);

    // Server-side validation
    if (!payload.name) {
      return NextResponse.json(
        {
          success: false,
          error: "Name is required.",
        },
        { status: 400 },
      );
    }

    if (!payload.email) {
      return NextResponse.json(
        {
          success: false,
          error: "Email is required.",
        },
        { status: 400 },
      );
    }

    if (!payload.phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Phone is required.",
        },
        { status: 400 },
      );
    }

    if (!payload.subject) {
      return NextResponse.json(
        {
          success: false,
          error: "Subject is required.",
        },
        { status: 400 },
      );
    }

    console.log(
      "Sending contact form to Google Apps Script:",
      {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        subject: payload.subject,
      },
    );

    const submission = await submitToGoogleAppsScript(
      payload,
    );

    const { responseText } = submission;

    if (submission.googleResponse.status === 200) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully.",
      });
    }

    if (!submission.googleResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error:
            submission.error?.text?.includes(
              "Page not found",
            ) ||
            submission.error?.text?.includes(
              "unable to open the file at present",
            )
              ? "Google Apps Script is not published or the URL is invalid. Update the deployed /exec URL in the environment variables."
              : `Google Apps Script returned HTTP ${submission.googleResponse.status}.`,
          details: responseText,
        },
        { status: 502 },
      );
    }

    let result: {
      success?: boolean;
      message?: string;
      error?: string;
    };

    try {
      result = JSON.parse(responseText);
    } catch {
      console.error(
        "Google returned invalid JSON:",
        responseText,
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Google Apps Script returned an invalid response.",
          details: responseText,
        },
        { status: 502 },
      );
    }

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            result.error ||
            result.message ||
            "Google Sheets submission failed.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        result.message ||
        "Your message has been submitted successfully.",
    });
  } catch (error) {
    console.error(
      "Contact API error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to submit contact form.",
      },
      { status: 500 },
    );
  }
}