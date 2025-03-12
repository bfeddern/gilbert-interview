const GilbertHeader = () => {
  return (
    <header id='siteheaderdemo'>
      <div className='headernav'>
        <div className='wcag_only'>Gilbert, Arizona</div>
        <a id='home_link' href='/home'>Home</a>
        <a className='menu_trigger mobile_only' href='javascript:void(0);' style={{visibility: 'hidden'}}>Menu</a>

        <div id='headercolumn' className='site_template_column  header_column'>
          <a href='javascript:void(0);' className='search-trigger hidden-xs' role='img' aria-label='Search Icon'>Search</a>
          <div className='top_search'>
            <div className='search_block'>
              <div id='searchbox' className='clearfix'>
                <input title='Search...' aria-label='Search' id='search_text' placeholder='Search...' type='text' />
                <a href='javascript:void(0);'>Go</a>
              </div>
            </div>
          </div>

          <a href='javascript:void(0);' className='service-trigger'>Find a Service</a>
          <div id='top_nav'>
            <a href='/how-do-i-/pay-for' target='_self'>Pay Online</a>		
            <a href='/about-us/contact-us' target='_self'>Contact Us</a>		
            <a href='/departments/human-resources/employees' target='_self'>Employees</a>		
            <a href='/government/gilbert-311' target='_self'>Gilbert 311</a>		
          </div>
        </div>
      </div>
    </header>
  );
};
  
export default GilbertHeader;
