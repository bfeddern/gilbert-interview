const GilbertFooter = () => {
  return (
    <footer id='page_footer'>
      <div id='footercolumn' className='site_template_column footer_column'>
        
        <div className='col-sm-4 col-md-4'>
          <div className='footer_info'>
            <span>Find Us</span>
            <p><a href='/about-us/contact-us'>Location Information</a></p>
          </div>
        </div>
        <div className='col-sm-4 col-md-4'>
          <div className='footer_phone'>
            <span>Call Us</span>
            <a href='tel:4805036000'>(480) 503-6000</a>
          </div>
        </div>

        <div className='col-sm-4 col-md-4'>
          <div className='footer_social_icons'>
            <span>Connect</span>
            <a href='https://www.facebook.com/GilbertTownHall/' target='_self' title=''>
              <img alt='footer-facebook@2x' src='https://www.gilbertaz.gov/home/showpublishedimage/19850/637559121187430000' />
            </a>
            <a href='https://twitter.com/GilbertYourTown' target='_self' title=''>
              <img alt='footer-twitter@2x' src='https://www.gilbertaz.gov/home/showpublishedimage/19862/638489789543900000' />
            </a>
            <a href='https://www.youtube.com/gilbertaz' target='_self' title=''>
              <img alt='footer-youtube@2x' src='https://www.gilbertaz.gov/home/showpublishedimage/19866/637559120532100000' />
            </a>
            <a href='https://instagram.com/gilbertyourtown/' target='_self' title=''>
              <img alt='footer-instagram@2x' src='https://www.gilbertaz.gov/home/showpublishedimage/19854/637559121040870000' />
            </a>
            <a href='https://nextdoor.com/agency-detail/az/gilbert/city-of-gilbert/' target='_self' title=''>
              <img alt='footer-nextdoor@2x' src='https://www.gilbertaz.gov/home/showpublishedimage/19858/637559120863530000' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
  
export default GilbertFooter;
