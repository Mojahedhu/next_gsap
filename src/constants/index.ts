const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Tropical Paradise",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Berry Medley",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Apple-Ginger Crisp",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Sweet Tart",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Juice Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Fresh Orange Juice",
    image: "/images/drink1.png",
    title: "100% Pure Citrus Sunshine",
    description:
      "Naturally sweet and packed with Vitamin C. Made from freshly squeezed, ripe oranges with plenty of refreshing pulp.",
  },
  {
    id: 2,
    name: "Watermelon Mint Juice",
    image: "/images/drink2.png",
    title: "The Ultimate Summer Hydration",
    description:
      "Crisp, sweet watermelon juice blended with a touch of fresh mint leaves. Incredibly refreshing and completely alcohol-free.",
  },
  {
    id: 3,
    name: "Mango Passionfruit Blend",
    image: "/images/drink3.png",
    title: "A Sweet Tropical Escape",
    description:
      "A thick, velvety blend of ripe tropical mangoes mixed with a tangy splash of fresh passionfruit juice.",
  },
  {
    id: 4,
    name: "Apple Ginger Zest",
    image: "/images/drink4.png",
    title: "Crisp Fruit with a Spicy Kick",
    description:
      "Freshly pressed sweet red apples paired with a sharp, warming hint of organic ginger juice for a clean energy boost.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
