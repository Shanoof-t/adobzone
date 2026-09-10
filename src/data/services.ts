export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  size?: "sm" | "md" | "lg";
}

// TODO: replace with real product photography
export const services: Service[] = [
  {
    id: "social-poster",
    name: "Social Media Poster",
    description: "Scroll-stopping posts for every platform",
    image: "https://placehold.co/1000x750/003E4C/FFFFFF?text=Social+Media+Poster",
    size: "lg",
  },
  {
    id: "mug",
    name: "Mug Printing",
    description: "Custom mugs for gifting & branding",
    image: "https://placehold.co/800x600/F9851C/FFFFFF?text=Mug+Printing",
    size: "sm",
  },
  {
    id: "clock",
    name: "Clock",
    description: "Branded wall clocks",
    image: "https://placehold.co/800x600/003E4C/FFFFFF?text=Clock",
    size: "sm",
  },
  {
    id: "photo-frame",
    name: "Photo Frame",
    description: "Framed prints for keepsakes & décor",
    image: "https://placehold.co/900x700/F9851C/FFFFFF?text=Photo+Frame",
    size: "md",
  },
  {
    id: "momento",
    name: "Momentos",
    description: "Custom mementos for events & awards",
    image: "https://placehold.co/800x600/003E4C/FFFFFF?text=Momentos",
    size: "sm",
  },
  {
    id: "id-card",
    name: "ID Card",
    description: "Employee & institutional ID cards",
    image: "https://placehold.co/800x600/F9851C/FFFFFF?text=ID+Card",
    size: "sm",
  },
  {
    id: "brochure",
    name: "Brochure",
    description: "Multi-page brand & product brochures",
    image: "https://placehold.co/900x700/003E4C/FFFFFF?text=Brochure",
    size: "md",
  },
  {
    id: "keychain",
    name: "Keychain",
    description: "Branded keychains for giveaways",
    image: "https://placehold.co/800x600/F9851C/FFFFFF?text=Keychain",
    size: "sm",
  },
  {
    id: "flex-cloth",
    name: "Flex & Cloth",
    description: "Large-format flex and cloth banners",
    image: "https://placehold.co/1000x750/003E4C/FFFFFF?text=Flex+%26+Cloth",
    size: "lg",
  },
  {
    id: "vinyl",
    name: "Vinyl",
    description: "Vinyl stickers, wraps & signage",
    image: "https://placehold.co/800x600/F9851C/FFFFFF?text=Vinyl",
    size: "sm",
  },
  {
    id: "notice",
    name: "Notice",
    description: "Notices & announcement boards",
    image: "https://placehold.co/800x600/003E4C/FFFFFF?text=Notice",
    size: "sm",
  },
  {
    id: "sun-pack",
    name: "Sun Pack",
    description: "Durable sun pack board printing",
    image: "https://placehold.co/800x600/F9851C/FFFFFF?text=Sun+Pack",
    size: "sm",
  },
  {
    id: "billbook",
    name: "Billbook",
    description: "Custom-printed billbooks for business",
    image: "https://placehold.co/800x600/003E4C/FFFFFF?text=Billbook",
    size: "sm",
  },
  {
    id: "visiting-card",
    name: "Visiting Card",
    description: "Premium visiting & business cards",
    image: "https://placehold.co/900x700/F9851C/FFFFFF?text=Visiting+Card",
    size: "md",
  },
  {
    id: "button-badge",
    name: "Button Badge",
    description: "Custom button badges for events",
    image: "https://placehold.co/800x600/003E4C/FFFFFF?text=Button+Badge",
    size: "sm",
  },
  {
    id: "a3-printing",
    name: "A3 Printing",
    description: "High-quality A3 format printing",
    image: "https://placehold.co/800x600/F9851C/FFFFFF?text=A3+Printing",
    size: "sm",
  },
];
