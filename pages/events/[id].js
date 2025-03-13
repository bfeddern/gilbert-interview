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
             
            </div>
            <div className='card-body p-2 p-md-5 text-start'>
              

              <div className='container p-3'>
                <div className='row d-flex flex-column-reverse flex-md-row'>
                  <div className='col-md-8'>
                    <h2 className='event-title mb-5'>Bret Feddern Interview!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum dictum malesuada. Mauris in quam dapibus, iaculis lacus efficitur, sollicitudin ligula. Pellentesque euismod nunc massa, eget aliquam lacus sollicitudin ac. Ut ut sollicitudin nibh. Curabitur semper nisl quis magna lacinia viverra.</p>
                            <p>Event ID: {id}</p>

                            <br /><br /><br /><br />
                  </div>
                  
                  <div className='col-md-3'>
                    
                    <div className='card card-details mb-5'>
                      <div className='card-header fw-bold'>
                        Event Details
                      </div>
                      <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>Date: March 13, 2025</li>
                        <li className='list-group-item'>Time: 9:00 AM</li>
                        <li className='list-group-item'>Location: 50 E. Civic Center Drive, Gilbert, AZ</li>
                      </ul>
                    </div>
                    <button className='btn btn-primary w-100'>Register</button>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
      </main>

      <GilbertFooter />
    </>
  );
};

export default EventDetails;
