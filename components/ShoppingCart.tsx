import { Popover } from "@headlessui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useSelector } from "react-redux";
import { CartItem } from "stores/ShoppingCart";
import { useDispatch } from "react-redux";
import { cartAdd, cartRemove } from "stores/ShoppingCart";

export const ShoppingCart = () => {
  const { items } = useSelector((state: any) => state.shoppingCart);

  return (
    <Popover className="relative mr-4">
      <Popover.Button
        className={`h-9 w-9 cursor-pointer rounded-full p-2 shadow-md ${
          items.length > 0 && "bg-orange-400 hover:shadow-orange-300"
        }`}
        disabled={items.length <= 0}
      >
        <Image
          src="/images/icon-cart.svg"
          alt="Shopping Cart"
          width={20}
          height={20}
        />
        <span className="absolute -bottom-2 -right-2 aspect-square w-6 min-w-fit rounded-full bg-white px-1 shadow-md">
          {items.length}
        </span>
      </Popover.Button>
      <Popover.Panel className="absolute top-12 -right-14 z-10 my-2 w-64 rounded-md bg-white p-2 shadow-md outline outline-gray-50 sm:right-0 sm:w-96">
        {items.map((item: CartItem) => (
          <div className="flex flex-row flex-wrap justify-between">
            <data>{item.product.productName}</data>
            <CartAmountPicker item={item} />
          </div>
        ))}
      </Popover.Panel>
    </Popover>
  );
};

interface CartAmountPickerProps {
  item: CartItem;
}

const CartAmountPicker: NextPage<CartAmountPickerProps> = (props) => {
  const { item } = props;
  const { product, amount } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(cartAdd({ product, amount: 1 }));
  };

  const decrementItem = () => {
    dispatch(cartRemove({ product, amount: 1 }));
  };

  const removeItem = () => {
    dispatch(cartRemove({ product, amount }));
  };

  return (
    <div className="flex flex-row gap-1">
      <button onClick={() => decrementItem()}>-</button>
      <data className="w-10 text-center outline-none">{amount}</data>
      <button onClick={() => incrementItem()}>+</button>
      <button onClick={() => removeItem()}>x</button>
    </div>
  );
};

export default ShoppingCart;
