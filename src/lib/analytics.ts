type EventProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  eventName: "cta_clicked" | "whatsapp_click" | "contact_submitted" | "service_viewed",
  properties: EventProperties = {},
) {
  if (typeof window === "undefined") return;

  const payload = { event: eventName, ...properties };

  if (window.dataLayer) {
    window.dataLayer.push(payload);
    return;
  }

  window.dataLayer = [payload];
}

export function trackWhatsAppClick(serviceName?: string) {
  trackEvent("whatsapp_click", {
    service: serviceName ?? "general",
  });
}

export function trackCtaClick(label: string) {
  trackEvent("cta_clicked", { label });
}

export function trackContactSubmitted() {
  trackEvent("contact_submitted");
}
