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

export default Product;
