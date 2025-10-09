import type { BlogSection } from "./components/blog-content";
import type { TableOfContentsItem } from "./components/table-of-contents";

// Table of contents items
export const tableOfContents: TableOfContentsItem[] = [
  { id: "beyond-main-beach", label: "Beyond the Main Beach" },
  { id: "inani-beach", label: "Inani Beach: The Hidden Paradise" },
  { id: "himchari", label: "Himchari National Park" },
  { id: "local-culture", label: "Local Culture and Cuisine" },
  { id: "must-try", label: "Must-Try Local Dishes" },
  { id: "best-time", label: "Best Time to Visit" },
  { id: "practical-tips", label: "Practical Tips for Travelers" },
  { id: "getting-there", label: "Getting There" },
];

// Blog content sections
export const blogSections: BlogSection[] = [
  {
    id: "beyond-main-beach",
    title: "Beyond the Main Beach",
    type: "h2",
    badge: "Travel Guides",
    content:
      "The main beach of Cox's Bazar is undoubtedly beautiful, but venture a little further and you'll find hidden coves, secluded spots, and local fishing villages that offer a more authentic experience of coastal Bangladesh.",
  },
  {
    id: "inani-beach",
    title: "Inani Beach: The Hidden Paradise",
    type: "h3",
    content:
      "Located about 32 kilometers south of Cox's Bazar town, Inani Beach is a pristine stretch of golden sand with crystal-clear waters. Unlike the crowded main beach, Inani offers tranquility and natural beauty. The coral stones scattered along the beach create a unique landscape, especially during low tide.",
  },
  {
    id: "himchari",
    title: "Himchari National Park",
    type: "h3",
    content:
      "Just 12 kilometers from Cox's Bazar, Himchari National Park is a biodiversity hotspot featuring lush green hills, waterfalls, and diverse wildlife. The park offers excellent trekking opportunities and panoramic views of the Bay of Bengal from its hilltops.",
  },
  {
    id: "local-culture",
    title: "Local Culture And Cuisine",
    type: "h2",
    content:
      "No visit to Cox's Bazar is complete without experiencing the local culture and trying the delicious seafood. The fishing villages along the coast offer an authentic glimpse into the lives of local fishermen.",
  },
  {
    id: "must-try",
    title: "Must-Try Local Dishes",
    type: "h3",
    content: "",
    listItems: [
      {
        title: "Shutki (Dried Fish)",
        description: "A local delicacy with a strong flavor",
      },
      {
        title: "Lobster Curry",
        description: "Fresh lobster cooked in traditional Bengali spices",
      },
      {
        title: "Prawn Malai Curry",
        description: "Prawns in coconut milk curry",
      },
      {
        title: "Fried Pomfret",
        description: "Crispy fried fish, a local favorite",
      },
    ],
  },
  {
    id: "best-time",
    title: "Best Time to Visit",
    type: "h2",
    content:
      "The ideal time to visit Cox's Bazar is between November and March when the weather is pleasant and dry. Avoid the monsoon season (June to September) as heavy rains can disrupt travel plans.",
  },
  {
    id: "practical-tips",
    title: "Practical Tips for Travelers",
    type: "h2",
    content: "",
    listItems: [
      {
        description:
          "Book accommodations in advance during peak season (December-January)",
      },
      { description: "Hire a local guide to discover hidden spots" },
      { description: "Respect local customs and dress modestly" },
      { description: "Try to visit during weekdays to avoid crowds" },
      { description: "Bring sunscreen and insect repellent" },
    ],
  },
  {
    id: "getting-there",
    title: "Getting There",
    type: "h2",
    content:
      "Cox's Bazar is well-connected by air, road, and rail. The easiest way is to fly from Dhaka, which takes about 1 hour. By road (approximately 400km), you can take a bus or train, which offers scenic views of the countryside but takes longer (8-10 hours).",
  },
];

// Introduction text
export const introduction =
  "Cox's Bazar is renowned for having the world's longest natural sea beach, stretching over 120 kilometers along the Bay of Bengal. While most tourists flock to the main beach areas, there's so much more to discover in this coastal paradise.";
