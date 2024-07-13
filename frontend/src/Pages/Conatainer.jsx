import React from 'react'
import Hero from '../Components/Hero'
import Introduction from '../Components/Introduction'
import Slider from '../Components/Slider'
import Facilities from '../Components/Facilities'
import Explore from '../Components/Explore'
import Swimming from '../Components/Swimming'

const Conatainer = () => {
  return (
    <div className='conatainer'>
        <Hero/>
        <Introduction/>
        <Slider/>
        <Facilities/>
        <Explore/>
        <Swimming/>
    </div>
  )
}

export default Conatainer