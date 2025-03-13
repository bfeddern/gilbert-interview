import PropTypes from 'prop-types';

const EventModal = ({ eventInfo, show, onClose }) => {
  if (!show) return null;

  return (
    <>
      <div className='modal fade show d-block' tabIndex='-1' role='dialog'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Register to Attend this Event</h5>
              <button type='button' className='btn-close' onClick={onClose}></button>
            </div>
            <div className='modal-body'>
              <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum dictum malesuada. Mauris in quam dapibus, iaculis lacus efficitur, sollicitudin ligula. Pellentesque euismod nunc massa, eget aliquam lacus sollicitudin ac. Ut ut sollicitudin nibh. Curabitur semper nisl quis magna lacinia viverra. </p>
              <ul className='text-start'>
                <li><strong>Event:</strong> Lorem ipsum dolor sit amet</li>
                <li><strong>Date:</strong> 3/13/2025</li>
                <li><strong>Time:</strong> 9:00 AM</li>
                <li><strong>Location:</strong> 1234 Event Lane</li>
              </ul>
            </div>
            <div className='modal-footer'>
              <button className='btn btn-secondary' onClick={onClose}>
                Close
              </button>
              <button className={ 'btn ' + (eventInfo.registered ? 'btn-danger' : 'btn-gilbert') }>
                { eventInfo.registered ? 'Unregister' : 'Register' }
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className='modal-backdrop fade show' onClick={onClose}></div>
    </>
  );
};

EventModal.propTypes = {
  eventInfo: PropTypes.object,
  show: PropTypes.bool,
  onClose: PropTypes.func
};

export default EventModal;
