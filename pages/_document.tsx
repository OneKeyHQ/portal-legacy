import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === "production" ? (
            <script
              id="ze-snippet"
              src="https://static.zdassets.com/ekr/snippet.js?key=272de4d5-5db1-4d12-bcbd-ce739d36810e"
            />
          ) : null}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
