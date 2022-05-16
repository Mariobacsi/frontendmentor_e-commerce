import Image from "next/image";
import { NextPage } from "next";
import { useState } from "react";

interface Props {
  pictures: string[];
  datatype: string;
}

const ImageRoulette: NextPage<Props> = (props) => {
  const { pictures, datatype } = props;

  let [ci, setCi] = useState(pictures[0]);

  const sizeThumbnail = 100;
  const sizeImage = sizeThumbnail * 4;

  return (
    <div className="md:w-md grid grid-cols-4 gap-2 md:w-64 md:gap-4">
      {/* Selected Image */}
      <div className="col-span-4">
        <Image
          src={"/images" + ci + "." + datatype}
          alt={ci}
          width={sizeImage}
          height={sizeImage}
          layout="responsive"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      {/* Image Selector */}
      {pictures.map((p) => (
        <button
          className={
            "aspect-square rounded-xl outline-orange-400 filter" +
            (ci === p ? " outline" : "")
          }
          onClick={() => setCi(p)}
        >
          <Image
            src={"/images" + p + "-thumbnail." + datatype}
            alt={p}
            width={sizeThumbnail}
            height={sizeThumbnail}
            layout="responsive"
            objectFit="cover"
            className={`m-0 rounded-xl p-0 ${ci === p ? " grayscale" : ""}`}
          />
        </button>
      ))}
    </div>
  );
};

export default ImageRoulette;
