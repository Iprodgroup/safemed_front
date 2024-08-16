import React from 'react';
import axios from 'axios';
import MainCatalog from '../../../components/MainCatalog'
import Layout from '@/components/Layout';
import Head from 'next/head';

const Catalog = ({brands, categories, country, data }) => {
    return (
      <>
        <Head>
          <title>Buy Medical Equipment at best prices in {data[country].name} {data[country].citys}</title>
          <meta property="og:title" content={`Buy Medical Equipment at best prices in ${data[country].name} ${data[country].citys}`} key="title" />
          <meta name="description" content={`Buy medical at the best price in ${data[country].name} ${data[country].citys} | medical Supplier & Reseller`} />
          <meta property="og:description" content={`Buy medical at the best price in ${data[country].name} ${data[country].citys} | medical Supplier & Reseller`}/>
          <link rel="canonical" href={`https://safemedsupply.com/${country}/catalog/medical/`}/>
        </Head>
        <Layout country={country}>
        <div className='mt-10'>
          <MainCatalog type="medical" brands={brands} categories={categories} country={country} />
        </div>
        </Layout>
      </>
     
    );
}

export async function getServerSideProps() {
  try {

      const responseBrands = await axios.get('https://admin.safemedsupply.com/api/brands/medical');
      const brands = responseBrands.data;

      const responseCategories = await axios.get('https://admin.safemedsupply.com/api/categories/medical');
      const categories = responseCategories.data;

      return {
          props: {
              brands,
              categories
          }
      };
  } catch (error) {

      console.error('Error fetching data:', error);
      return {
          props: {
              brands: [],
              categories: []
          }
      };
  }
}

export default Catalog
