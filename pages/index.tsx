import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import products from "../public/data/Products";

import HeaderNavigation from "components/HeaderNavigation";
import ProductPreview from "components/ProductPreview";

const Home: NextPage = () => {
  return (
    <div className="mx-8 flex min-h-screen flex-col md:mx-16 lg:mx-16 2xl:mx-64">
      <Head>
        <title>sneakers</title>
        <meta
          name="description"
          content="sneakers webshop. Only the best for your feet."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNavigation />

      <main className="mt-8 flex flex-col gap-8">
        {products.map((prod) => (
          <ProductPreview
            brand={prod.brand}
            productName={prod.productName}
            description={prod.description}
            price={prod.price}
            discount={prod.discount}
            pictures={prod.pictures}
          />
        ))}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
