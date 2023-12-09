import {
  facebook,
  instagram,
  deliver,
  twitter,
  fresh,
  selection,
  woodPerfection,
  openDaily,
  deliveryOption,
  dineinOption,
  pickupOption,
} from "../assets/icons";
import {
  pizzaFlavours,
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  customer3,
  thumbnailPizza1,
  thumbnailPizza2,
  thumbnailPizza3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Menu" },
  { href: "#about-us", label: "About" },
  { href: "#contact-us", label: "Contact" },
];

export const pizzas = [
  {
    thumbnail: thumbnailPizza1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailPizza2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailPizza3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "50+", label: "Flavours" },
  { value: "10+", label: "Outlets" },
  { value: "100k+", label: "Customers" },
];

export const threeOptions = [
  {
    imgURL: deliveryOption,
    label: "DELIVERY",
    subtext:
      "We offer delivery to approved delivery zones on orders valued at a minimum of $40.",
  },
  {
    imgURL: pickupOption,
    label: "PICK UP",
    subtext:
      "Order ahead and pop down to the lounge to pick up your order - we'll have it waiting for you.",
  },
  {
    imgURL: dineinOption,
    label: "DINE IN",
    subtext:
      "Enjoy a relaxed dine-in experience with friends and family at our fully licensed venue.",
  },
];

export const products = [
  {
    imgURL: pizzaFlavours,
    name: "Chicken Hawaiian",
    price: "$19.00",
  },
  {
    imgURL: pizzaFlavours,
    name: "Chicken & Bacon",
    price: "$19.00",
  },
  {
    imgURL: pizzaFlavours,
    name: "Meat Lovers",
    price: "$25.00",
  },
  {
    imgURL: pizzaFlavours,
    name: "Seafood Special",
    price: "$25.00",
  },
  {
    imgURL: pizzaFlavours,
    name: "Hot & Spicy",
    price: "$24.00",
  },
  {
    imgURL: pizzaFlavours,
    name: "Cheese Lovers",
    price: "$20.00",
  },
  {
    imgURL: pizzaFlavours,
    name: "Veggie Lovers",
    price: "$23.00",
  },
  {
    imgURL: pizzaFlavours,
    name: "BBQ Chicken",
    price: "$22.00",
  },
];

export const services = [
  {
    imgURL: deliver,
    label: "We deliver",
    subtext: "Enjoy pizza delivered for $5 within dedicated delivery zones",
  },
  {
    imgURL: selection,
    label: "Tasty Selection",
    subtext: "Choose from our delicious range of pizzas, pastas and sides.",
  },
  {
    imgURL: fresh,
    label: "Fresh Foods",
    subtext:
      "Our Italian chefs source quality, local ingredients to bring you the freshest flavours.",
  },
  {
    imgURL: woodPerfection,
    label: "Wood-Fire Perfection",
    subtext:
      "Our pizzas are all handmade by Italian chefs and wood-fired to perfection.",
  },
  {
    imgURL: selection,
    label: "Wide range of pizzas",
    subtext: "Our restaurant have over 50+ flavours of pizzas",
  },
  {
    imgURL: openDaily,
    label: "24/7 Open",
    subtext: "Our restaurant is open every day for you.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Chris Woods",
    rating: 5.0,
    feedback:
      "Good place. They have wide variety of vegetarian options and they are quite good in taste.",
  },
  {
    imgURL: customer2,
    customerName: "Kate Williams",
    rating: 5.0,
    feedback:
      "Since I found out about the Divine Pizza they have become my favourite pizzeria. Very friendly staff, pizzas are always cooked beautifully and the atmosphere it’s just great.",
  },
  {
    imgURL: customer3,
    customerName: "Andrew Parker",
    rating: 5.0,
    feedback:
      "So delicious and best gluten free base I've eaten. The whole family loved it! Can't wait to go back!!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Pizzas", link: "/" },
      { name: "Pastas", link: "/" },
      { name: "Salads", link: "/" },
      { name: "Desserts", link: "/" },
      { name: "Beverages", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        name: "Sea Lane, Miami.",
        link: "",
      },
      { name: "contact@dpr.com", link: "" },
      { name: "(+90)767676766", link: "" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
