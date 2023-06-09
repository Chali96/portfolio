import leaveimg from './images/leaveimg.jpeg';
import leave2 from './images/leave2.jpeg'
import { Link, useLocation } from 'react-router-dom';
import Icons from './Icons';


const Home = () => {
    const location = useLocation();

    return (
      <div className="container">
        <div className="background-image"> 
        <div className="overlay-image">
          
            <img className='leaveimg' src={leaveimg}   />
            <img className='leave2' src={leave2} />
            <h2 className='info'>
                HELLO! I'M CHALI MOHAMEDSANI, A WEB DEVELOPER STUDENT BASED IN STOCKHOLM.
              <Icons/>
            </h2>

            <div className="overlay-content">
          <Link to="/" className={`link ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
          <Link to="/page2" className={`link ${location.pathname === '/page1' ? 'active-link' : ''}`}>About</Link>
          <Link to="/page3" className={`link ${location.pathname === '/page1' ? 'active-link' : ''}`}>Projects</Link>
          <Link to="/page3" className={`link ${location.pathname === '/page1' ? 'active-link' : ''}`}>Contact</Link>

          {/* Additional links, text, and icon links */}
        </div>
        </div>

        </div>
      
      </div>
    );
  };

  export default Home;
  