import React from 'react';
 import '../Whoweare/WhoWeAre.css'
const WhoWeAre = () => {
  const sectionStyle = {
    textAlign: 'center',
    backgroundColor: 'transparent',
    padding: '50px 0',
  };

  const titleStyle = {
    fontSize: '50px',
    lineHeight: '1.5em',
    fontWeight: '400',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    color: 'black',
    fontFamily: 'Rokkitt, serif',
  };

  const descriptionStyle = {
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '1.7em',
    color: '#333',
    marginTop: '20px',
    fontFamily: 'Rokkitt, serif',
    padding: '0 20px',
  };

  const interactiveElementsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '50px',
  };

  const itemStyle = {
    width: '50%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="who-we-are" style={sectionStyle}>
      <div className="container">
        <h2 className="section-title" style={titleStyle}>Who We Are</h2>
        <p className="section-description" style={descriptionStyle}>
        kalla Handicrafts is an organisation committed to the preservation and promotion of Indian handicraft products across the globe. kalla Handicrafts offers hope to thousands of Indian artisans. Against an increasingly commercialised and machine-made world, it offers them the promise of a world where livelihoods are assured, traditional skills are valued and where handicraft products receive the respect they deserve.
        </p>
      </div>

      {/* Interactive Image Section */}
      <div className="interactive-elements" style={interactiveElementsStyle}>
        <div
          className="left-item"
          style={{
            ...itemStyle,
            backgroundImage: 'url(https://ashahandicrafts.in/wp-content/uploads/2024/05/artisan-working.jpg)',
          }}
        ></div>
        <div
          className="right-item"
          style={{
            ...itemStyle,
            backgroundImage: 'url(https://ashahandicrafts.in/wp-content/uploads/2024/05/artisan-working-2-1.jpg)',
          }}
        >
          <div className="wpb_wrapper">
          <div className='Founded'>
          <p style={{ fontWeight: '400' }}>
              Founded in 1975, today we are a Guaranteed Fair Trade-certified organization{' '}
              <b>(World Fair Trade Organization, Netherlands &amp; Fair Trade Forum, India).</b>
              Our vision and mission is to provide marketing support to more than 800 Indian artisans through a sustainable global market and help them to preserve the art and craft of India. As a social enterprise, all the surplus are ploughed back towards the social welfare of our artisans and their families.
            </p>
            <p style={{ fontWeight: '400' }}>
              We partner with Fair Trade importers the world over, with an impressive range of over 4000 products, across categories like Home Decor, Lifestyle Accessories, Office Stationery, Toys and Games, and Corporate Gifts. Our Handicraft products are made of natural locally available Indian materials like wood, ceramic, and textile, reflecting the authentic style, design, and colours of our rich Indian heritage.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
