import leaveimg from './images/leaveimg.jpeg';
import { Link, useLocation } from 'react-router-dom';


const Home = () => {
    const location = useLocation();

    return (
      <div className="container">
        <div className="background-image"> 
        
        <div className="overlay-image">
            <img className='leaveimg' src={leaveimg} />
            <h2 className='info'>
            Hello! I’m Chali Mohamedsani, a web developer student based in Stockholm.
            </h2>

            <div className="overlay-content">
          <Link to="/" className={`link ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
          <Link to="/page2" className={`link ${location.pathname === '/page1' ? 'active-link' : ''}`}>About Me</Link>
          <Link to="/page3" className={`link ${location.pathname === '/page1' ? 'active-link' : ''}`}>Projects</Link>
          <Link to="/page3" className={`link ${location.pathname === '/page1' ? 'active-link' : ''}`}>Contact Me</Link>

          {/* Additional links, text, and icon links */}
        </div>
        </div>

        </div>
      
      </div>
    );
  };

  export default Home;
  