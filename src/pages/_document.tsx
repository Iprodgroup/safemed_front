import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

interface MyDocumentProps {
  canonicalUrl: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const canonicalUrl = `https://safemedsupply.com${ctx.asPath}`;
    return { ...initialProps, canonicalUrl };
  }

  render() {
    const { canonicalUrl } = this.props;

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favikon.png" />
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;