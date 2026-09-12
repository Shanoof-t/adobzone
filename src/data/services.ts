export interface Service {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  image: string;
  message: string;
  color: string;
  size?: "feature" | "regular";
}

export const services: Service[] = [
  {
    id: "social-poster",
    name: "Social Media Poster",
    shortLabel: "Branding",
    description: "Scroll-stopping design for campaigns, launches, and daily posts.",
    image: "/services/social-media-poster-image.png",
    message:
      "Hi Adobzone, I need a custom social media poster design for my brand. Please share pricing and the production process.",
    color: "from-[#f2d0c5] via-[#f8efe9] to-[#f5c89c]",
    size: "feature",
  },
  {
    id: "mug",
    name: "Mug",
    shortLabel: "Gifting",
    description: "Personalised mugs for corporate gifting and retail branding.",
    image: "/services/mug.jpg",
    message:
      "Hi Adobzone, I want custom mug printing for my business. Please share options, pricing, and minimum quantities.",
    color: "from-[#f3c5a5] via-[#ffd2b4] to-[#fff0e5]",
    size: "regular",
  },
  {
    id: "clock",
    name: "Clock",
    shortLabel: "Decor",
    description: "Branded wall clocks that blend function with a premium look.",
    image: "/services/clock.jpeg",
    message:
      "Hi Adobzone, I am looking for branded wall clocks for my office or store. Please send the available options.",
    color: "from-[#f7d6c1] via-[#fff5ef] to-[#dfe4ff]",
    size: "regular",
  },
  {
    id: "photo-frame",
    name: "Photo Frame",
    shortLabel: "Display",
    description: "Framed prints designed for interiors, gifts, and events.",
    image: "/services/photo-frame.jpg",
    message:
      "Hi Adobzone, I need custom photo frame printing. Please share sample designs and pricing for bulk orders.",
    color: "from-[#f4d7d3] via-[#ffffff] to-[#f0c9a8]",
    size: "regular",
  },
  {
    id: "momento",
    name: "Momentos",
    shortLabel: "Event",
    description: "Memorable keepsakes for events, workshops, and milestones.",
    image: "/services/momento.jpeg",
    message:
      "Hi Adobzone, I need custom momento products for an upcoming event. Could you share design and price options?",
    color: "from-[#d7ebf3] via-[#f2f9ff] to-[#f6d6bf]",
    size: "regular",
  },
  {
    id: "id-card",
    name: "ID Card",
    shortLabel: "Identity",
    description: "Professional card printing for staff, schools, and institutions.",
    image: "/services/id-card.png",
    message:
      "Hi Adobzone, I need ID card printing for my organisation. Please share pricing, materials, and turnaround time.",
    color: "from-[#f0d9c8] via-[#f7f0ea] to-[#d5e7f6]",
    size: "regular",
  },
  {
    id: "brochure",
    name: "Brochure",
    shortLabel: "Marketing",
    description: "Elegant brochures that help your business communicate clearly.",
    image: "/services/brochure.png",
    message:
      "Hi Adobzone, I need brochure printing for my business. Can you share sizes, paper options, and pricing?",
    color: "from-[#f7d7c4] via-[#f4e7d9] to-[#f4d0af]",
    size: "regular",
  },
  {
    id: "keychain",
    name: "Keychain",
    shortLabel: "Promo",
    description: "Utility accessories that keep your brand in daily use.",
    image: "/services/keychain.svg",
    message:
      "Hi Adobzone, I want branded keychains for promotional gifts. Please send pricing and material options.",
    color: "from-[#f4d8cf] via-[#fbeee5] to-[#f0d0a8]",
    size: "regular",
  },
  {
    id: "flex-cloth",
    name: "Flex & Cloth",
    shortLabel: "Signage",
    description: "Impactful outdoor and indoor banners for visibility and promotion.",
    image: "/services/flex-cloth.svg",
    message:
      "Hi Adobzone, I need flex and cloth printing for signage and promotion. Please share material options and size pricing.",
    color: "from-[#d9f0ff] via-[#f7efe7] to-[#f4c7a6]",
    size: "regular",
  },
  {
    id: "vinyl",
    name: "Vinyl",
    shortLabel: "Sticker",
    description: "Durable vinyl stickers and wraps for retail and transport.",
    image: "/services/vinyl.svg",
    message:
      "Hi Adobzone, I need vinyl sticker or wrap printing. Could you share design support and rates?",
    color: "from-[#f3d8c2] via-[#fff3ea] to-[#d3ebf7]",
    size: "regular",
  },
  {
    id: "notice",
    name: "Notice",
    shortLabel: "Boards",
    description: "Clear notice boards and announcement materials for institutions.",
    image: "/services/notice.svg",
    message:
      "Hi Adobzone, I need notice board printing for my office or school. Please share available sizes and pricing.",
    color: "from-[#dfeef9] via-[#edf7ff] to-[#f5d0b4]",
    size: "regular",
  },
  {
    id: "sun-pack",
    name: "Sun Pack",
    shortLabel: "Branding",
    description: "Strong, weather-ready printed boards that last outdoors.",
    image: "/services/sun-pack.svg",
    message:
      "Hi Adobzone, I need sunpack board printing for outdoor branding. Please send the available options and pricing.",
    color: "from-[#f7dfd2] via-[#fff3ee] to-[#f1bd92]",
    size: "regular",
  },
  {
    id: "billbook",
    name: "Billbook",
    shortLabel: "Stationery",
    description: "Custom bill books for businesses that want a lasting impression.",
    image: "/services/billbook.svg",
    message:
      "Hi Adobzone, I need a custom billbook design and print order. Please share pricing and quantities.",
    color: "from-[#e7f1ea] via-[#f5f8f5] to-[#f8d7bb]",
    size: "regular",
  },
  {
    id: "visiting-card",
    name: "Visiting Card",
    shortLabel: "Business",
    description: "Premium cards that make first meetings feel polished and memorable.",
    image: "/services/visiting-card.svg",
    message:
      "Hi Adobzone, I need visiting card printing for my business. Please share designs, paper quality, and price options.",
    color: "from-[#e8d9d4] via-[#fff5f3] to-[#f6c594]",
    size: "regular",
  },
  {
    id: "button-badge",
    name: "Button Badge",
    shortLabel: "Merchandise",
    description: "Compact badges for events, teams, and branded merchandise.",
    image: "/services/button-badge.svg",
    message:
      "Hi Adobzone, I need custom button badges for an event or team. Please send pricing and design options.",
    color: "from-[#dff1ef] via-[#f8fbfb] to-[#f7c7ad]",
    size: "regular",
  },
  {
    id: "a3-printing",
    name: "A3 Printing",
    shortLabel: "Prints",
    description: "Sharp, high-resolution prints for presentations and portfolios.",
    image: "/services/a3-printing.jpg",
    message:
      "Hi Adobzone, I need A3 printing for my project. Please share paper choices, finishing options, and pricing.",
    color: "from-[#cfe5ef] via-[#f3fafc] to-[#f6d7b5]",
    size: "regular",
  },
];
