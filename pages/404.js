import Head from 'next/head';

export default function Custom404() {

  return (
    <>
      <Head>
        <title></title>
        <meta name='title' content={ '' } />
        <meta name='description' content={ '' } />
      </Head>
      <main className='container-sm'>
        <div className='row'>

          <div className='col-lg-8 col-md-12 d-flex flex-column'>

            <h1>404</h1>

          </div>
        </div>
      </main>
    </>
  );
};
