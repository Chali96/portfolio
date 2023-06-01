import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Icons = () => {
  // this is the functions that handles the click events
  const handleFBClick = () => {
    window.open('https://www.facebook.com', '_blank');
  };
  const handleIGClick = () => {
    window.open('http://www.instagram.com', '_blank')
  }
  const handleTWClick = () => {
    window.open('http://www.twitter.com', '_blank')
  }

    return (
      // This is thw footer component
        <div className="icons-container">
            <FaFacebook className='icon' onClick={handleFBClick} style={{ cursor: 'pointer' }} />
             <FaInstagram className='icon' onClick={handleIGClick} style={{ cursor: 'pointer' }} />
            <FaTwitter className='icon' onClick={handleTWClick} style={{ cursor: 'pointer' }} />
        </div>
    );
};

export default Icons;