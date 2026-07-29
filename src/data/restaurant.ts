export const RESTAURANT = {
  name: "Kivu Coffee Cup",
  rating: 4.5,
  reviewCount: 53,
  priceRange: "RF 5,000–10,000",
  phone: "0791 854 314",
  phoneHref: "tel:+250791854314",
  address: "W9H3+M23, Gitesi, Karongi, Western Province, Rwanda",
  hours: "7:00 am – 10:00 pm daily",
};

export const MENU = [
  {
    section: "Coffee & Drinks",
    items: [
      { name: "African Coffee", desc: "Single-origin Lake Kivu beans, roasted in house.", price: "RF 2,000" },
      { name: "Cappuccino", desc: "Double shot, silky steamed milk, cocoa dust.", price: "RF 2,500" },
      { name: "Latte", desc: "Smooth espresso with velvet microfoam art.", price: "RF 2,500" },
      { name: "Fresh Juice", desc: "Passion fruit, tree tomato or pineapple.", price: "RF 2,000" },
    ],
  },
  {
    section: "Burgers & Grills",
    items: [
      { name: "Beef Burger", desc: "Char-grilled patty, cheddar, tomato, house sauce, fries.", price: "RF 7,000" },
      { name: "Chicken Burger", desc: "Marinated grilled chicken breast, slaw, fries.", price: "RF 6,500" },
      { name: "Sizzling Steak", desc: "Guest favourite — served still sizzling with pepper sauce.", price: "RF 10,000" },
    ],
  },
  {
    section: "Pizza & Plates",
    items: [
      { name: "Chicken Pizza", desc: "Wood-fired base, mozzarella, peppers, grilled chicken.", price: "RF 10,000" },
      { name: "Fish and Chips", desc: "Lake Kivu tilapia, golden fries, tartare.", price: "RF 8,000" },
      { name: "Chicken Curry", desc: "Slow-simmered coconut curry with rice.", price: "RF 7,500" },
    ],
  },
  {
    section: "Snacks & Bakery",
    items: [
      { name: "Sambusa Meatball", desc: "Crisp pastry parcels with spiced beef.", price: "RF 3,000" },
      { name: "French Fries", desc: "Hand-cut, double fried, chilli salt.", price: "RF 3,000" },
      { name: "Birthday Cake Slice", desc: "From our bakery next door — baked fresh daily.", price: "RF 3,500" },
    ],
  },
];

export const REVIEWS = [
  {
    author: "Leo Nardo",
    meta: "Local Guide · 105 reviews",
    rating: 5,
    when: "7 months ago",
    text: "Kivu Coffee is easily the best restaurant in Karongi. Everything I ordered was great quality. I especially recommend the steak — it arrived at the table still sizzling and was perfectly cooked with amazing flavour.",
  },
  {
    author: "martin de geus",
    meta: "Local Guide · 234 reviews",
    rating: 4,
    when: "5 months ago",
    text: "Let me start with saying I really liked the coffee here. There is a bakery next door which is seemingly the same place, and the cakes are lovely. Friendly staff and a relaxed place to sit for a while.",
  },
  {
    author: "Guntis",
    meta: "Local Guide · 15 reviews",
    rating: 3,
    when: "3 weeks ago",
    text: "The pizza at RF 10,000 did not match the price on my visit. The team responded quickly when I raised it, and the coffee and service were still good.",
  },
];

export const HIGHLIGHTS = [
  { title: "Dine-in", desc: "Warm indoor seating and shaded terrace tables." },
  { title: "Drive-through", desc: "Grab your coffee without leaving the car." },
  { title: "No-contact delivery", desc: "Hot food delivered across Karongi town." },
  { title: "Bakery next door", desc: "Cakes, pastries and bread baked every morning." },
];