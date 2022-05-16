import Product from "classes/Product";

const products = [
  new Product(
    "00000001",
    "Sneaker Company",
    "Fall Limited Edition Sneakers",
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    250,
    0.5,
    [
      "/image-product-1",
      "/image-product-2",
      "/image-product-3",
      "/image-product-4",
    ]
  ),
  new Product(
    "00000002",
    "Generic Company Name",
    "Schuhe",
    "Produktbeschreibung generischer Schuhe wie man sie Überall findet.",
    150,
    0.4,
    [
      "/image-product-1",
      "/image-product-2",
      "/image-product-3",
      "/image-product-4",
    ]
  ),
  new Product(
    "00000003",
    "Generic Company Name",
    "Schuhe",
    "Produktbeschreibung generischer Schuhe wie man sie Überall findet.",
    150,
    0.4,
    [
      "/image-product-1",
      "/image-product-2",
      "/image-product-3",
      "/image-product-4",
    ]
  ),
];

export { products };
