import backgroundImage from '../assets/new-york-buildings-skyscrapers.jpg';
import partner2 from '../assets/partner2.jpeg'
const Partnerspage = () => {
  return (
    <div>
      {/* Background section */}
      <div
        className="background-section"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh', // Adjust height as needed
          width: '100%',
        }}
      >
      </div>

      {/* White square section below the background */}
      <div
        className="white-square-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px 0' // Add space between the background and white square
        }}
      >
        {/* White square */}
        <div
          className="white-square"
          style={{
            backgroundColor: 'white',
            width: '300px',
            padding: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional shadow
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Logo inside the white square */}
          <img
            src={partner2}
            alt="Logo"
            style={{ width: '100px', marginBottom: '20px' }} // Adjust logo size
          />
          {/* Information about the logo */}
          <p style={{ fontSize: '16px', color: '#333' }}>
            Our trusted partner that provides exceptional services to our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partnerspage;
