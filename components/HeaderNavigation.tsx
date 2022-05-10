import Image from "next/image";
import Link from "next/link";

const HeaderNavigation = () => {
  return (
    <header className=" flex flex-row items-center justify-between border-b-2 py-6">
      {/* Logo and nav links */}
      <nav className="flex w-3/5 max-w-4xl flex-row flex-wrap justify-between gap-2">
        <h1 className=" text-xl font-extrabold leading-none">
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
        <button className=" mr-4 flex h-9 w-9 rounded-full p-2 hover:bg-orange-400 hover:shadow-md">
          <Image
            src="/images/icon-cart.svg"
            alt="Shopping Cart"
            width={20}
            height={20}
            className="fill-white"
          />
        </button>

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
