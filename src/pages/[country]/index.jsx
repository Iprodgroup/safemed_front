import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import CategoryBlock from "../../components/CategoryBlock";
import About from "../../components/About";
import Head from "next/head";

const Home = ({data, country}) => {
  return (
    <>
      <Head>
      <title>Supplier of Medical Equipment and Safety Supplies (PPE) in {data[country].name}</title>
        <meta property="og:title" content={`Supplier of Medical Equipment and Safety Supplies (PPE) in {data[country].name}`} key="title" />
        <meta name="description" content={`SafeMed offers best prices for Medical Equipment and Safety Supplies (PPE) with a wide range of over 200+ brands and fast delivery to ${data[country].citys} ${data[country].name}`} />
        <meta property="og:description" content={`SafeMed offers best prices for Medical Equipment and Safety Supplies (PPE) with a wide range of over 200+ brands and fast delivery to ${data[country].citys} ${data[country].name}`}/>
      </Head>
      <Layout country={country}>
        <Banner data={data[country]}/>
        <CategoryBlock country={country}/>
        <About />
      </Layout>
    </>
  );
}



export default Home