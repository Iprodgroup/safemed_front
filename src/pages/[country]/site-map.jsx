// eslint-disable-next-line no-unused-vars
import React from 'react';
import Link from 'next/link';
//import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Layout from "../../components/Layout";
import axios from 'axios';
import Heading from '../../components/Heading'

const SiteMap = ({ safetyBrands, country, medicalBrands, data }) => {
    
    const handleButtonClick = () => {
        window.scrollTo({ top: 0 });
    };

    let countries = []

    for (let countryCode in data) {
        if (data.hasOwnProperty(countryCode)) {
          let country = data[countryCode];
          countries.push(
            <li><Link className='site__link' href={country.code ?? `/${country.code}/`}>{country.name}</Link></li>
          )
            
        }
      }

    return (
        <>
            <Layout>
                <main className='container px-4'>
                    <h1 className='2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-5 text-primary mt-10'>Site Map</h1>
                    <div className='flex gap-8 justify-between flex-wrap mb-5'>
                        <ul className='flex flex-col gap-2 text-primary'>
                            <h2 className='2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-semibold'>
                                Navigation
                            </h2>
                            <li>
                                <Link className='border-b-2 border-primary' onClick={handleButtonClick} href={`${country ? "/" + country : ""}`}>Home</Link>
                            </li>
                            <li>
                                <Link className='border-b-2 border-primary' onClick={handleButtonClick} href={`${country ? "/" + country : ""}/catalog/medical`}>Medical</Link>
                            </li>
                            <li>
                                <Link className='border-b-2 border-primary' onClick={handleButtonClick} href={`${country ? "/" + country : ""}/search-page`}>SearchPage</Link>
                            </li>
                            <li>
                                <Link className='border-b-2 border-primary' onClick={handleButtonClick} href={`${country ? "/" + country : ""}/site-map`}>Sitemap</Link>
                            </li>
                        </ul>
                        <ul>
                            <h2 className='2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-semibold'>
                                Shipping Countries
                            </h2>
                            {countries}
                        </ul>
                        <ul>
                            <h2 className='2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-semibold'>
                                Medical
                            </h2>
                            {medicalBrands.map(brand => (
                                <li><Link className='site__link' href={country ?? `/${country}/catalog/medical?brand=${brand.id}`}>{brand.title}</Link></li>
                            ))}
                        </ul>
                        <ul>
                            <h2 className='2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-lg 
                text-primary font-semibold'>
                                Safety
                            </h2>
                            {safetyBrands.map(brand => (
                                <li><Link className='site__link' href={country ?? `/${country}/catalog/safety?categories=${brand.id}`}>{brand.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                </main>
            </Layout>
        </>
    );
};

export async function getServerSideProps() {
    try {
        const responseBrands = await axios.get('https://admin.safemedsupply.com/api/brands/medical');
        const medicalBrands = responseBrands.data;

        const responseSafetyCategories = await axios.get('https://admin.safemedsupply.com/api/brands/safety');
        const safetyBrands = responseSafetyCategories.data;

        return {
            props: {
                medicalBrands,
                safetyBrands
            }
        };
    } catch (error) {
  
        console.error('Error fetching data:', error);
        return {
            props: {
                medicalBrands: [],
                safetyBrands: []
            }
        };
    }
  }

export default SiteMap;