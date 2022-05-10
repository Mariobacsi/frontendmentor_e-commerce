import Image from "next/image";

const AddToCartButton = () => {
  return (
    <button
      type="submit"
      className="px-2 w-full bg-orange-400 shadow-orange-200 shadow-md rounded-md py-2 text-white font-bold grow"
    >
      <Image src={"/images/icon-cart.svg"} width={16} height={16} /> Add to Cart
    </button>
  );
};

export default AddToCartButton;
