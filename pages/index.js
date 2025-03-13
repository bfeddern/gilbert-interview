import Head from 'next/head';
import GilbertFooter from '/components/layout/gilbert-footer';
import GilbertHeader from '/components/layout/gilbert-header';
import EventFeature from '/components/common/event-feature';
import EventCard from '/components/common/event-card';
import { events } from '/components/data/events';

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
        <section className='p-5 text-center container'>
          <h1>Things to do in Gilbert</h1>
        </section>

        <section className='p-5 text-center container bg-interview'>
          <EventFeature eventInfo={ events.featured } />
        </section>

        {/* <!-- begin events --> */}
        <div className='album py-5'>
          <div className='container'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
              <div className='col'>
                <EventCard eventInfo={{}} />
              </div>
              <div className='col'>
                <EventCard eventInfo={ events.registered } />
              </div>
              <div className='col'>
                <EventCard eventInfo={{}} />
              </div>

              <div className='col'>
                <EventCard eventInfo={{}} />
              </div>
              <div className='col'>
                <EventCard eventInfo={{}} />
              </div>
              <div className='col'>
                <EventCard eventInfo={{}} />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /end events --> */}
      </main>

      <GilbertFooter />
    </>
  );
};
