export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Adobzone",

    url: "https://www.adobzone.com",

    logo: "https://www.adobzone.com/logo-icon.svg",

    description:
      "Adobzone provides branding, graphic design, printing, signage, packaging, ID cards, brochures, promotional products, and custom print solutions.",

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
