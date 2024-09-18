import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CategoryBlock from "../components/CategoryBlock";
import About from "../components/About";
import Head from "next/head";

export default function Home({ data , main }) {
  return (
    <>
      <Head>
        <title>Supplier of Medical Equipment and Safety Supplies (PPE) in {data['ae'].name }- Safemed</title>
        <meta property="og:title" content={`Supplier of Medical Equipment and Safety Supplies (PPE) in ${data['ae'].name }- Safemed`} key="title" />
        <meta name="description" content={`In instruhub store you will find all the best in Medical Equipment and Safety Supplies (PPE). More than 200 brands of Medical Equipment and Safety Supplies (PPE) with fast delivery to ${data['ae'].citys}`} />
        <meta property="og:description" content={`In instruhub store you will find all the best in Medical Equipment and Safety Supplies (PPE). More than 200 brands of Medical Equipment and Safety Supplies (PPE) with fast delivery to ${data['ae'].citys}`}/>
      </Head>
      <Layout main={main}>
        <Banner data={data['ae']}/>
        <CategoryBlock />
        <About />
      </Layout>
    </>
   
  );
}
