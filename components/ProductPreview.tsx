import { NextPage } from "next";
import { useState } from "react";
import Product from "classes/Product";

import ImageRoulette from "components/ImageRoulette";
import AmountPicker from "components/AmountPicker";
import AddToCartButton from "components/AddToCartButton";
import { debug } from "console";

interface Props {
  product: Product;
}

const ProductPreview: NextPage<Props> = (props) => {
  const { product } = props;
  const { brand, productName, description, price, discount, pictures } =
    product;

  const [amount, setAmount] = useState(1);

  /**
   * Callback for the amount picker
   * @param value - the new value
   */
  const callback = (value: number) => {
    console.debug("New amount:", value);
    setAmount(value);
  };

  return (
    <article className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">
      <ImageRoulette pictures={pictures} datatype="jpg" />
      <section className=" sm:w-78 max-w-xs md:max-w-sm">
        {/* Product name and description */}
        <h3 className=" text-sm font-bold uppercase text-orange-500">
          {brand}
        </h3>
        <h2 className=" mb-4 text-2xl font-extrabold">{productName}</h2>
        <p className="mb-2">{description}</p>

        {/* Price */}
        <div className="mb-4 font-bold">
          {RenderPrice(price, discount)}
          <data className={discount > 0 ? "text-xs text-gray-400" : ""}>
            ${price}
          </data>
        </div>

        {/* Amount and Add to Cart Buttons */}
        <div className="flex flex-col items-center gap-4 font-bold md:flex-row">
          <AmountPicker
            min={0}
            max={50}
            initValue={amount}
            parentCallback={callback}
          />
          <AddToCartButton product={product} amount={amount} />
        </div>
      </section>
    </article>
  );
};

// Renders the price with the discount if it is defined/available
const RenderPrice = (price: number, discount: number) => {
  if (discount > 0 && discount < 1) {
    return (
      <div>
        <data>${price * (1 - discount)}</data>
        <span className="mx-4 place-self-center bg-orange-200 px-1 text-xs text-orange-400">
          <data>-{100 * discount}%</data>
        </span>
      </div>
    );
  }
};

export default ProductPreview;
