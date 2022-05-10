import { timeStamp } from "console";

class Product {
  productID: String;
  brand: string;
  productName: string;
  description: string;
  price: number;
  discount: number;
  pictures: Array<string>;
  constructor(
    productID: string,
    brand: string,
    productName: string,
    description: string,
    price: number,
    discount: number,
    pictures: Array<string>
  ) {
    this.productID = productID;
    this.brand = brand;
    this.productName = productName;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.pictures = pictures;
  }
}

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
];

export default products;
