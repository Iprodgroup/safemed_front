import "@/styles/globals.css";
import App from "next/app";
import { fetchCountries } from "./api/countries";
import Head from "next/head";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const data = await fetchCountries();
    const { query, req, res } = ctx;
    const { country } = query;
    const currentPath = req ? req.url : window.location.pathname;

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps: {
        ...pageProps,
        data,
        country,
        currentPath,
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    const { currentPath, data, country } = pageProps;

    const newPath = currentPath.replace("/" + country, "");
    return (
      <>
        <Head>
          {/* <link
            rel="canonical"
            href={`https://safemedsupply.com/${country}/`}
          /> */}

          <link
            rel="alternate"
            href={`http://safemedsupply.com${newPath}`}
            hrefLang="x-default"
          ></link>
          {Object.keys(data).map((key) => {
            const dataLink = `/${key}`;
            return (
              <link
                key={key}
                rel="alternate"
                href={`http://safemedsupply.com${dataLink}${newPath}`}
                hrefLang={`en-${key}`}
              />
            );
          })}

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-100222YW6W"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', 'G-100222YW6W');
              `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
