import React from 'react';
import axios from 'axios';
import MainCatalog from '../../../components/MainCatalog'
import Layout from '@/components/Layout';
import Head from 'next/head';

const Catalog = ({ categories, brands, data, country, main }) => {
    return (
      <>
        <Head>
          <title>Buy safety at best prices in {data[country].citys}</title>
          <meta property="og:title" content={`Buy safety at best prices in ${data[country].citys}`} key="title" />
          <meta name="description" content={`Buy safety at the best price in ${data[country].name} ${data[country].citys} | safety Supplier & Reseller`} />
          <meta property="og:description" content={`Buy safety at the best price in ${data[country].name} ${data[country].citys} | safety Supplier & Reseller`}/>
          <link rel="canonical" href={`https://safemedsupply.com/${country}/catalog/safety/`}/>
        </Head>
        <Layout country={country} main={main}>
        <div className='mt-10'>
          <MainCatalog type="safety" brands={brands} categories={categories} country={country} />
        </div>
        </Layout>
      </>
     
    );
}

export async function getServerSideProps() {
    try {

        const responseBrands = await axios.get('https://admin.safemedsupply.com/api/brands/safety');
        const brands = responseBrands.data;

        const responseCategories = await axios.get('https://admin.safemedsupply.com/api/categories/safety');
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
