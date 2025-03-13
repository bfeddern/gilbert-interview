import Head from 'next/head';
import GilbertFooter from '/components/layout/gilbert-footer';
import GilbertHeader from '/components/layout/gilbert-header';

export default function Custom404() {

  return (
    <>
      <Head>
        <title>Page Not Found | Gilbert, Arizona</title>
        <meta name='title' content={ 'Page Not Found' } />
        <meta name='description' content={ '' } />
      </Head>

      <GilbertHeader />

      <main className='container-sm'>
        
        <section className='p-5 text-center container bg-white'>
          <div className='row py-lg-5'>
            <div className='col-lg-6 col-md-8 mx-auto'>
              <h1 className='fw-light'>404</h1>
            </div>
          </div>
        </section>
      </main>

      <GilbertFooter />
    </>
  );
};
