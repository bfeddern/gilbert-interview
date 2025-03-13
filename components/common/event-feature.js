import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import EventModal from '/components/common/event-modal';

const EventFeature = ({ eventInfo }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='row py-lg-5'>
      <div className='col-lg-6 col-md-8 mx-auto bg-white p-3 rounded-1'>
        <h2 className='fw-light'>{ eventInfo.title }</h2>
        <p>
          <span className='badge text-bg-success p-2'>{ eventInfo.date }</span>
        </p>
        
        <p className='lead text-body-secondary'>
          { eventInfo.desc }
        </p>
        <p>
          <Link
            href={ '/events/' + eventInfo.id }
            title={ 'View Details' }
            className='btn btn-primary my-2 mx-1'>
              View Details
          </Link>
          <button className='btn btn-gilbert my-2 mx-1' onClick={() => setShowModal(true)}>Attend Event</button>
        </p>

        <EventModal
          show={ showModal }
          onClose={ () => setShowModal(false) }
          eventInfo={ eventInfo }
        />
      </div>
    </div>
  );
};

EventFeature.propTypes = {
  eventInfo: PropTypes.object
};

export default EventFeature;
