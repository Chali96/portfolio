import leaveimg from './images/leaveimg.jpeg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="container">
        <div className="background-image"> 
        
        <div className="overlay-image">
            <img className='leaveimg' src={leaveimg} />
            <h2 className='info'>
            Hello! I’m Chali Mohamedsani, a web developer student based in Stockholm.
            </h2>

            <div className="overlay-content">
          <Link to="/" className="link">Home</Link>
          <Link to="/page2" className="link">About Me</Link>
          <Link to="/page3" className="link">Projects</Link>
          <Link to="/page3" className="link">Contact Me</Link>

          {/* Additional links, text, and icon links */}
        </div>
        </div>

        </div>
      
      </div>
    );
  };

  export default Home;
  