export interface Client {
  id: string;
  name: string;
  category: "education" | "food-hospitality" | "retail-jewellery";
  location: string;
  country?: string;
  logo?: string;
}

// TODO: replace with real client logo
export const clients: Client[] = [
  {
    id: "gems-arts-science",
    name: "GEMS Arts and Science College",
    category: "education",
    location: "Kerala",
    logo: "https://placehold.co/240x120/003E4C/FFFFFF?text=GEMS+Arts+%26+Science",
  },
  {
    id: "psmo-college",
    name: "PSMO College",
    category: "education",
    location: "Tirurangadi",
    logo: "https://placehold.co/240x120/F9851C/FFFFFF?text=PSMO+College",
  },
  {
    id: "pmst-college",
    name: "PMST College",
    category: "education",
    location: "Kundoor",
    logo: "https://placehold.co/240x120/003E4C/FFFFFF?text=PMST+College",
  },
  {
    id: "nasra-college",
    name: "Nasra College of Arts and Science",
    category: "education",
    location: "Tirurkad",
    logo: "https://placehold.co/240x120/F9851C/FFFFFF?text=Nasra+College",
  },
  {
    id: "khmhss-valakulam",
    name: "KHMHSS Valakulam",
    category: "education",
    location: "Valakulam",
    logo: "https://placehold.co/240x120/003E4C/FFFFFF?text=KHMHSS+Valakulam",
  },
  {
    id: "al-birr-school",
    name: "Al Birr School",
    category: "education",
    location: "Kundoor",
    logo: "https://placehold.co/240x120/F9851C/FFFFFF?text=Al+Birr+School",
  },
  {
    id: "al-fathah-international",
    name: "Al Fathah International School",
    category: "education",
    location: "Thennala",
    logo: "https://placehold.co/240x120/003E4C/FFFFFF?text=Al+Fathah+Intl+School",
  },
  {
    id: "new-caravans-food-court",
    name: "New Caravans Food Court",
    category: "food-hospitality",
    location: "Kerala",
    logo: "https://placehold.co/240x120/F9851C/FFFFFF?text=New+Caravans",
  },
  {
    id: "chickago-cafe",
    name: "Chickago Cafe",
    category: "food-hospitality",
    location: "Kerala",
    logo: "https://placehold.co/240x120/003E4C/FFFFFF?text=Chickago+Cafe",
  },
  {
    id: "cb-bakes",
    name: "C&B Bakes",
    category: "food-hospitality",
    location: "Tamil Nadu",
    logo: "https://placehold.co/240x120/F9851C/FFFFFF?text=C%26B+Bakes",
  },
  {
    id: "shanu-bakes",
    name: "Shanu Bakes",
    category: "food-hospitality",
    location: "Chennai",
    logo: "https://placehold.co/240x120/003E4C/FFFFFF?text=Shanu+Bakes",
  },
  {
    id: "rainbow-bakes",
    name: "Rainbow Bakes",
    category: "food-hospitality",
    location: "Chennai",
    logo: "https://placehold.co/240x120/F9851C/FFFFFF?text=Rainbow+Bakes",
  },
  {
    id: "sulthan-restaurant",
    name: "Sulthan Restaurant",
    category: "food-hospitality",
    location: "Kottakkal",
    logo: "https://placehold.co/240x120/003E4C/FFFFFF?text=Sulthan+Restaurant",
  },
  {
    id: "bismillah-restaurant",
    name: "Bismillah Restaurant",
    category: "food-hospitality",
    location: "Kuwait",
    country: "Kuwait",
    logo: "https://placehold.co/240x120/F9851C/FFFFFF?text=Bismillah+Restaurant",
  },
  {
    id: "al-majal-jewellery",
    name: "Al Majal Jewellery",
    category: "retail-jewellery",
    location: "Venniyoor",
    logo: "https://placehold.co/240x120/003E4C/FFFFFF?text=Al+Majal+Jewellery",
  },
  {
    id: "taj-home-appliances",
    name: "TAJ Home Appliances",
    category: "retail-jewellery",
    location: "Venniyoor",
    logo: "https://placehold.co/240x120/F9851C/FFFFFF?text=TAJ+Home+Appliances",
  },
  {
    id: "vmr-store",
    name: "VMR Store",
    category: "retail-jewellery",
    location: "Velliyappuram",
    logo: "https://placehold.co/240x120/003E4C/FFFFFF?text=VMR+Store",
  },
  {
    id: "noorani-nuts-dates",
    name: "Noorani Nuts & Dates",
    category: "retail-jewellery",
    location: "Venniyoor",
    logo: "https://placehold.co/240x120/F9851C/FFFFFF?text=Noorani+Nuts+%26+Dates",
  },
];
