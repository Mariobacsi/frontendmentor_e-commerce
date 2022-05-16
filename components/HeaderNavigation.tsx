import Image from "next/image";
import Link from "next/link";
import ShoppingCart from "./ShoppingCart";

const HeaderNavigation = () => {
  return (
    <header className=" sticky top-0 z-10 flex flex-row items-center justify-between border-b-2 bg-white py-4">
      {/* Logo and nav links */}
      <nav className="flex w-3/5 max-w-4xl flex-row flex-wrap gap-2 sm:flex-nowrap">
        <h1 className=" mr-0 text-xl font-extrabold leading-none md:mr-4">
          <Link href="/">sneakers</Link>
        </h1>
        <Link href={"/collections"}>Collections</Link>
        <Link href={"/men"}>Men</Link>
        <Link href={"/women"}>Women</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>

      {/* Shopping cart and profile */}
      <div className="flex flex-row items-center">
        {/* Shopping cart */}
        <ShoppingCart />
        {/* Profile */}
        <div className=" relative flex h-12 w-12 rounded-full p-2">
          <Image
            src="/images/image-avatar.png"
            alt="User Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;
