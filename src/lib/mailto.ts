export function getMailtoLink({
  name,
  phone,
  message,
}: {
  name: string;
  phone: string;
  message: string;
}) {
  const subject = encodeURIComponent("Adobzone inquiry");
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`,
  );

  return `mailto:adobzone@gmail.com?subject=${subject}&body=${body}`;
}
