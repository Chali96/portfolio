import leaveimg from './images/leaveimg.jpeg'
const Home = () => {
    return (
      <div className="container">
        <div className="background-image"> 
        
        <div className="overlay-image">
            <img className='leaveimg' src={leaveimg} />

        </div>
        </div>

      
      </div>
    );
  };

  export default Home;
  