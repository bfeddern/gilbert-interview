import { useRouter } from 'next/router';
import Head from 'next/head';
import GilbertFooter from '/components/layout/gilbert-footer';
import GilbertHeader from '/components/layout/gilbert-header';

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Events Details | Gilbert, Arizona</title>
        <meta name='title' content='Event Details' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <link rel='canonical' href={ 'https://gilbertevents.info/events/123' + id } />
      </Head>

      <GilbertHeader />

      <main>
        <section className='p-5 text-center container'>
          <h1>Things to do in Gilbert</h1>
        </section>

        <section className='text-center container'>
          <div className='card'>
            <div className='card-header p-4 p-md-5 border-bottom-0 bg-interview-full '>
              <h2>Bret Feddern Interview!</h2>
            </div>
            <div className='card-body p-4 p-md-5'>

              <h3>Event Details</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum dictum malesuada. Mauris in quam dapibus, iaculis lacus efficitur, sollicitudin ligula. Pellentesque euismod nunc massa, eget aliquam lacus sollicitudin ac. Ut ut sollicitudin nibh. Curabitur semper nisl quis magna lacinia viverra.</p>
              <p>Event ID: {id}</p>

              <br /><br /><br /><br />
            </div>
          </div>
        </section>
      </main>

      <GilbertFooter />
    </>
  );
};

export default EventDetails;
