import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
    </Head>
    <Component {...pageProps} />
  </>);
};

export default App;
