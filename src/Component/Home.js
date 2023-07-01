import React from 'react'
import img from '../assets/img/img.jpg'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import cont from '../assets/img/cont.jpg'
import communityimg from '../assets/img/communityimg.png'
import videoCall from '../assets/img/videoCall.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const myImageStyle = { width: '100%', height: 'auto'  };
  const myService={ width: '100%', height:'70%', margin:'auto', display:'block'};
  const colorService={ color : '#black' };
  const navigate = useNavigate();

  const navigateToecomm = () => {
    navigate('/addtocard');
  };
  const navigateTorestaurants = () => {
    navigate('/NearbyRestaurants');
  };
  const navigateToliveRoom=()=>{
    navigate('/LiveRoom');
  }
  const navigateToCommunityRoom=()=>{
    navigate('/CommunityRoom');
  }

  return (

    <div className='container'>
      <br />
      <div className='mainpic'>
      <img style={myImageStyle}   src={img}/>
      </div>
      <div className='home'>
          <center><b> WHAT IS FEMALE FITNESS ?</b></center>
          <p>Fitness Buddy is a community based health and fitness website. It aims to offer a social environment for people interested in health and fitness. The main focus of the application is to create a positive community for like-minded people to have a place to get together and help each other in achieving a common goal.</p>
      </div>


      <div className='services'>
          <center><b>SERVICES</b></center>
          
         
          <div className="row">
            <div className='color'>
            <div className="column" style={colorService}>
              <h2>WORKOUT</h2>
              <img  src={img1} style={myService} className="center"/>
            </div>
            <div className="column" style={colorService}>
              <h2 >HEALTHY RECIPIES</h2>
              <img  src={img2} style={myService} className="center"/>
            </div>
            <div className="column" style={colorService}>
              <h2 >RESTURANTS</h2>
              <img  src={img3} style={myService} className="center"/>
            </div>
            </div>
            </div>
        </div>
    <br />
    <br />
    <br />
    <br/>
    <br/>
    <br/>
    <br/>
    
    <div className="sec" >
        <div className=" b1">
      <div className="img" >
        <img  src={cont}width="800" height="500"/> 
    </div>
    </div>
    <div className=" b1">
              <div className="u-layout" >
                <div className="container">
                  <div className="bt1">
                  <h3  className="head1"> Restaurants </h3><br />
                  <p className="p1"> Find all the popular Healthy Food restaurants near your location. </p>
                  </div>
                <div className="bt1">
                  <a href="">
                  <button onClick={navigateTorestaurants}className="btn">Click Here </button></a>
                </div>
                </div>
              </div>
              </div>  
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div class="sec" >
        <div class=" b1">
                <div class="u-layout1" >
                  <div class="container">
                    <div class="bt1">
                    <h3  class="head1">Ecommerce Store </h3> <br/>
                    <p class="p1">An online marketplace for fitness enthusiasts, providing a diverse range of products and services related to fitness, including equipment, supplements.</p>
                    </div>
                  <div class="bt1">
                    <a href="">
                    <button onClick={navigateToecomm} class="btn">Click Here </button></a>
                  </div>
                  </div>
                </div>
                </div>
                <div class=" b1">
                <div class="img1" >
                    <img  src={cont}width="800" height="500"/>
              </div>
        </div> 
      </div> 
     
      {/** Video Call  */}
      <div className='videoCallContainer'>
      <hr/>
        <div className='flexvideocall'>
        <div className='image'>
         <img src={videoCall} alt='videocall'/>
          </div>
        <div className='videodesp'>
        <h2>Virtual Training Sessions</h2>
            <h6>One-on-one training sessions with a personal trainer can offer personalized attention, accountability, safety, and efficiency to help individuals achieve their fitness goals. Trainers can provide customized workout plans, track progress, and offer feedback and modifications to exercises. To find a qualified trainer, individuals can search online, ask for recommendations, or check with local gyms or fitness studios. Virtual personal training sessions are also an option for remote sessions.</h6>
          <button onClick={navigateToliveRoom}>Start Video Call</button>
          </div>
        </div>
        
      </div>

      <div className='videoCallContainer'>
        <div className='flexvideocall'>
        <div className='videodesp'>
        <h2>Community forum</h2>
            <h6>The fitness community project aims to create a space for women to connect, share their fitness journeys, and provide support. Through the community forum, women can share their fitness goals, challenges, and successes, and inspire each other to improve their health. This project will provide a platform for women to access resources and expert advice, while also building a sense of community and connection.</h6>
        <button onClick={navigateToCommunityRoom}>Join Community forum</button>
        </div>
        <div className='image'>
         <img src={communityimg} alt='videocall'/>
        </div>
        </div>
        
      </div>

     <br />
     <br />
     <br />

    </div>
   
  );
};

export default Home
