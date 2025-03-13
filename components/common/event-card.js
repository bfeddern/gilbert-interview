import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import EventModal from '/components/common/event-modal';

const EventCard = ({ eventInfo }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='card shadow-sm'>
      <svg className='bd-placeholder-img card-img-top' width='100%' height='225' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder: Thumbnail' preserveAspectRatio='xMidYMid slice' focusable='false'><title>Placeholder</title><rect width='100%' height='100%' fill='#55595c'/><text x='50%' y='50%' fill='#eceeef' dy='.3em'>Thumbnail</text></svg>
      <div className='card-body'>
        <p className='card-text'>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>

        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <Link
                href={ '/events/' + (eventInfo.id ?? '9876') }
                title={ 'View' }
                className='btn btn-sm btn-primary'>
                View
            </Link>
            <button
              className={ 'btn btn-sm ' + (eventInfo.registered ? 'btn-danger' : 'btn-gilbert') }
              onClick={() => setShowModal(true)}>
              { eventInfo.registered ? 'Unregister' : 'Enroll' }
            </button>
          </div>
          <small className='text-body-secondary'>3/14/25</small>
        </div>

        <EventModal
          show={ showModal }
          onClose={ () => setShowModal(false) }
          eventInfo={ eventInfo } />
      </div>
    </div>
  );
};

EventCard.propTypes = {
  eventInfo: PropTypes.object
};

export default EventCard;
