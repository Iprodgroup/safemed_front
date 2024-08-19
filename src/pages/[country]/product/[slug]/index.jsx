import React from "react";
import axios from "axios";
import ProductCard from "../../../../components/ProductCard";
import Layout from "../../../../components/Layout";
import Head from "next/head";

const formatURL = (str) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const Product = ({ data, country, product }) => {
  const formattedTitle = formatURL(product.title);

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://safemedsupply.com/${country}/product/${formattedTitle}/`}
        />
        <title>
          {product.title} supplier in {data[country]?.name}
        </title>
        <meta
          property="og:title"
          content={`${product.title} supplier in ${data[country]?.name}`}
          key="title"
        />
        <meta
          name="description"
          content={`Buy ${product.title} at best prices in ${data[country]?.citys} ${data[country]?.name} | ${product.brand.title} Reseller, Dealer & Distributor`}
        />
        <meta
          property="og:description"
          content={`Buy ${product.title} at best prices in ${data[country]?.citys} ${data[country]?.name} | ${product.brand.title} Reseller, Dealer & Distributor`}
        />
      </Head>
      <Layout country={country}>
        <div className="container mt-10">
          <ProductCard data={data[country]} country={country} product={product} />
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const responseProduct = await axios.get(
    `https://admin.safemedsupply.com/api/product/${params.slug}`
  );
  return {
    props: {
      product: responseProduct.data
    }
  };
}

export default Product;
