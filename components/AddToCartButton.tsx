import Image from "next/image";
import { NextPage } from "next";
import Product from "classes/Product";
import { cartAdd } from "stores/ShoppingCart";
import { useDispatch } from "react-redux";
interface Props {
  product: Product;
  amount: number;
}

const AddToCartButton: NextPage<Props> = (props) => {
  const { product, amount } = props;

  const dispatch = useDispatch();

  /**
   * Adds the product to the cart. Calls the cartAdd function from the store
   */
  const addToCart = () => {
    console.debug(
      `Adding ${amount} items to cart: ${product.productID} ${product.productName} `
    );
    dispatch(cartAdd({ product, amount }));
  };

  return (
    <button
      onClick={() => addToCart()}
      className="w-full grow rounded-md bg-orange-400 px-2 py-2 font-bold text-white shadow-md shadow-orange-200"
    >
      <Image src={"/images/icon-cart.svg"} width={16} height={16} /> Add to Cart
    </button>
  );
};

export default AddToCartButton;
