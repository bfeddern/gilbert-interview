import Head from 'next/head';
import GilbertFooter from '/components/layout/gilbert-footer';
import GilbertHeader from '/components/layout/gilbert-header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meetings and Events | Gilbert, Arizona</title>
        <meta name='title' content='Meetings and Events' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <link rel='canonical' href='https://gilbertevents.info/' />
      </Head>

      <GilbertHeader />

      <main>
        <div className='position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary'>
          <div className='col-md-6 p-lg-5 mx-auto my-5'>
            <h1 className='display-3 fw-bold'>Meetings &amp; Events</h1>
            <h3 className='fw-normal text-muted mb-3'>Find things to do in the<br />Town of Gilbert, Arizona!</h3>
            <h5>Coming Soon!</h5>
            <div className='d-flex gap-3 justify-content-center lead fw-normal'></div>
          </div>
          <div className='product-device shadow-sm d-none d-md-block'></div>
          <div className='product-device product-device-2 shadow-sm d-none d-md-block'></div>
        </div>
      </main>

      <GilbertFooter />
    </>
  );
};
