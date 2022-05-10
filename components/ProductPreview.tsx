import { NextPage } from "next";

import ImageRoulette from "components/ImageRoulette";
import AmountPicker from "components/AmountPicker";
import AddToCartButton from "components/AddToCartButton";

interface Props {
  brand: string;
  productName: string;
  description: string;
  price: number;
  discount: number;
  pictures: string[];
}

const ProductPreview: NextPage<Props> = (props) => {
  const { brand, productName, description, price, discount, pictures } = props;

  let amount;

  const callback = (value: number) => {
    console.debug(productName + ":", value);
    amount = value;
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
            initValue={1}
            parentCallback={callback}
          />
          <AddToCartButton />
        </div>
      </section>
    </article>
  );
};

const RenderPrice = (price: number, discount: number) => {
  if (discount > 0)
    return (
      <div className="flex flex-row">
        <data>${price * (1 - discount)}</data>{" "}
        <div className="mx-4 place-self-center bg-orange-200 px-1 text-xs text-orange-400">
          <data>{100 * discount}%</data>
        </div>
      </div>
    );
  return null;
};

export default ProductPreview;
