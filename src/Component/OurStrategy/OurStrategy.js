import React from 'react';

const OurStrategy = () => {
  const sectionStyle = {
    padding: '50px 0',
    fontFamily: 'Rokkitt, serif',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const descriptionStyle = {
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '1.7',
    marginBottom: '40px',
    color: '#333',
    fontFamily: 'Rokkitt, serif',
  };

  const strategyRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '40px',
  };

  const strategyCardStyle = {
    width: '30%',
    minWidth: '250px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const strategyTitleStyle = {
    fontSize: '20px',
    fontWeight: '300',
    marginBottom: '20px',
  };

  const strategyTextStyle = {
    color: '#0a0a0a',
    fontSize: '16px',
  };

  const iconStyle = {
    width: '90px',
    height: '90px',
    marginBottom: '20px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>OUR STRATEGY</h2>
      <p style={descriptionStyle}>
        The 3 pillars of Trade, Train, and Transform form the mainstay of everything we do at KalaakreetiHandicrafts.
      </p>

      <div style={strategyRowStyle}>
        {/* Trade */}
        <div style={strategyCardStyle}>
          <img
            src="https://i0.wp.com/ashahandicrafts.in/wp-content/uploads/2024/05/1-1.png?fit=90%2C90&ssl=1"
            alt="Trade"
            style={iconStyle}
          />
          <h3 style={strategyTitleStyle}>Trade</h3>
          <p style={strategyTextStyle}>
            We provide marketing support to Indian artisans and enable them to produce Indian handicrafts using their
            traditional artisan skills and market those unique products across a global network of discerning customers who
            understand the value of traditional arts and handmade products.
          </p>
        </div>

        {/* Train */}
        <div style={strategyCardStyle}>
          <img
            src="https://i0.wp.com/ashahandicrafts.in/wp-content/uploads/2024/05/2-1.png?fit=90%2C90&ssl=1"
            alt="Train"
            style={iconStyle}
          />
          <h3 style={strategyTitleStyle}>Train</h3>
          <p style={strategyTextStyle}>
            Through regular capacity building and training workshops, we constantly strive to upgrade the skills of our
            artisan communities. Special attention is given to quality control, packaging, and marketing so that our products
            can occupy pride of place in your homes and offices.
          </p>
        </div>

        {/* Transform */}
        <div style={strategyCardStyle}>
          <img
            src="https://i0.wp.com/ashahandicrafts.in/wp-content/uploads/2024/05/3-1.png?fit=90%2C90&ssl=1"
            alt="Transform"
            style={iconStyle}
          />
          <h3 style={strategyTitleStyle}>Transform</h3>
          <p style={strategyTextStyle}>
            It takes the strength of conviction and sheer efforts to create an infrastructure that allows our artisans to
            overcome their debilitating backgrounds. Their skills, our marketing, and your support can transform lives,
            creating an alternative future for our artists, artisans filled with hope and fulfillment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStrategy;
