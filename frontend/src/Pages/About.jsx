import React from 'react';
import './About.css';
import about_img1 from '../assets/crop_image/about_img1.jpg'
import about_img2 from '../assets/crop_image/about_img2.jpg'
import about_img3 from '../assets/crop_image/about_img3.jpg'
const About = () => {
  return (
    <div className='about'>
      {/* <div className="about-image">
        <img src={about_img2} alt="" />
      </div> */}
      <div className='about-details'>
        <h1>About Sylvan Horizon Resort</h1>
        <p>Sylvan Horizon" is a poetic expression that evokes a sense of natural beauty and tranquility. Let's break it down: </p>
        <span>"Sylvan" refers to the woods, forest, or a rustic, natural environment.
          It's derived from the Latin word "sylva," meaning forest or wood.
          <br />
          "Horizon" represents the distant line where the earth's surface meets the sky, symbolizing
          the farthest reach of our vision and imagination.</span>


        <p>Together, Sylvan Horizon paints a picture of a serene and idyllic landscape,
          where the natural world stretches out to meet the sky at a distant horizon.
          It suggests a sense of peace, harmony, and connection with nature.</p>
        <p>In essence, the phrase "Sylvan Horizon" embodies the beauty
          and majesty of the natural world, inviting us to gaze out at the breathtaking
          vista and connect with the splendor of the earth and sky.</p>
      </div>
      <div className="about-image">
        <img src={about_img1} alt="" />
      </div>
      {/*<div className='about-details'>
        <h2>Our History</h2>
        <p>
          Founded in 1998, Sylvan Horizon Resort has grown from a quaint retreat into a premier vacation destination. Our commitment to preserving the natural beauty of the area while providing exceptional accommodations has earned us a reputation as one of the top resorts in the region.
        </p>
        </div>*/}
    </div>
  );
};

export default About;