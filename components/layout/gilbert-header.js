const GilbertHeader = () => {
  return (
    <header id='siteheaderdemo'>
      <div className='headernav'>
        <div className='wcag_only'>Gilbert, Arizona</div>
        <a id='home_link' href='https://www.gilbertaz.gov/home' data-testid='home-link'>Home</a>
        <a className='menu_trigger mobile_only' style={{visibility: 'hidden'}}>Menu</a>

        <div id='headercolumn' className='site_template_column  header_column'>
          <a className='search-trigger hidden-xs' role='img' aria-label='Search Icon'>Search</a>
          <div className='top_search'>
            <div className='search_block'>
              <div id='searchbox' className='clearfix'>
                <input title='Search...' aria-label='Search' id='search_text' placeholder='Search...' type='text' />
                <a>Go</a>
              </div>
            </div>
          </div>

          <a className='service-trigger'>Find a Service</a>
          <div id='top_nav'>
            <a href='https://www.gilbertaz.gov/how-do-i-/pay-for' target='_blank'>Pay Online</a>		
            <a href='https://www.gilbertaz.gov/about-us/contact-us' target='_blank'>Contact Us</a>		
            <a href='https://www.gilbertaz.gov/departments/human-resources/employees' target='_blank'>Employees</a>		
            <a href='https://www.gilbertaz.gov/government/gilbert-311' target='_blank'>Gilbert 311</a>		
          </div>
        </div>
      </div>
    </header>
  );
};
  
export default GilbertHeader;
