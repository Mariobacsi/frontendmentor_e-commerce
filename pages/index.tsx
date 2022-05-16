import type { NextPage } from "next";
import Head from "next/head";
import { Provider } from "react-redux";

import styles from "styles/Home.module.css";
import { products } from "public/data/products";
import { store } from "stores/store";

import HeaderNavigation from "components/HeaderNavigation";
import ProductPreview from "components/ProductPreview";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
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

        {/* List all available products */}
        <main className="my-8 flex flex-col gap-8">
          {products.map((prod) => (
            <ProductPreview key={prod.productID} product={prod} />
          ))}
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Vercel
          </a>
        </footer>
      </div>
    </Provider>
  );
};

export default Home;
