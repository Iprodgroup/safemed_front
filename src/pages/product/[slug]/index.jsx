import React from "react";
import axios from "axios";
import ProductCard from "../../../components/ProductCard";
import Layout from "../../../components/Layout";
import Head from "next/head";

const Product = ({ data, product }) => {
  data = data["ae"];
  return (
    <>
      <Head>
        <title>
          {product.title} supplier in {data?.name}
        </title>
        <link
          rel="canonical"
          href={`https://safemedsupply.com/${country}/product/${product.title} `}
        />
        <meta
          property="og:title"
          content={`${product.title} supplier in ${data?.name}`}
          key="title"
        />
        <meta
          name="description"
          content={`Buy ${product.title} at best prices in ${data?.citys} ${data?.name} | ${product.brand.title} Reseller, Dealer & Distributor`}
        />
        <meta
          property="og:description"
          content={`Buy ${product.title} at best prices in ${data?.citys} ${data?.name} | ${product.brand.title} Reseller, Dealer & Distributor`}
        />
      </Head>
      <Layout>
        <div className="container mt-10">
          <ProductCard data={data} product={product} />
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const responseProduct = await axios.get(
    "https://admin.safemedsupply.com/api/product/" + params.slug
  );
  return {
    props: {
      product: responseProduct.data,
    },
  };
}

export default Product;
