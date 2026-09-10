export interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const workShowcase: WorkItem[] = [
  { id: "work-01", title: "Poster Campaign", category: "Event branding", image: "https://placehold.co/1200x800/003E4C/FFFFFF?text=Work+01" },
  { id: "work-02", title: "Custom Mug", category: "Gift branding", image: "https://placehold.co/1200x800/F9851C/FFFFFF?text=Work+02" },
  { id: "work-03", title: "ID Cards", category: "Institutional", image: "https://placehold.co/1200x800/003E4C/FFFFFF?text=Work+03" },
  { id: "work-04", title: "Festival Banner", category: "Large format", image: "https://placehold.co/1200x800/F9851C/FFFFFF?text=Work+04" },
  { id: "work-05", title: "Corporate Print", category: "Business collateral", image: "https://placehold.co/1200x800/003E4C/FFFFFF?text=Work+05" },
  { id: "work-06", title: "Retail Branding", category: "Store signage", image: "https://placehold.co/1200x800/F9851C/FFFFFF?text=Work+06" },
];
