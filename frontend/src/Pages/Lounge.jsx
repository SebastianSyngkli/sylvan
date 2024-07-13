import React, {useEffect} from 'react'
import './Lounge.css'
import lounge_bg from '../assets/logo/lounge_bg.png'
import lounge_img1 from '../assets/crop_image/lounge_img1.png'
import lounge_img2 from '../assets/crop_image/lounge_img2.png'
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';

const Lounge = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(itemFetch());
    }, [dispatch]);
  
    const { items: allitems, status } = useSelector((state) => state.items);
    const filteritems = allitems.filter((item) => item.category === 'lounge');
    const filteritemsfirst = allitems.filter((item) => item.category === 'loungefirst');
    const filteritemssecond = allitems.filter((item) => item.category === 'loungesecond');
  return (
    <div className='lounge'>
        <div className="lounge-bg-img">
            {filteritems.map((item) => (
               <img src={item.image} alt="Lounge background" />
               ))}  
        
   
    
               <div className="lounge-bg-img-text">
                   <h2>Lounge</h2>
                      <p>Relaxing in pure comfort and tranquility</p>
                 </div>
          </div>
    
    <div className="lounge-details">
        <p>The ambiance, with its soft lighting and plush seating, invites you to unwind and let go of the day's stresses. 
        Whether you're sipping a warm cup of tea, enjoying a good book, or simply gazing out of the window, the lounge offers a sanctuary of peace.</p>
        {filteritemsfirst.map((item) => (
            <img src={item.image} alt="Relaxing" />
        ))}
    
         
    </div>
    <div className="lounge-details">
          
    <p>The ambiance, with its soft lighting and plush seating, invites you to unwind and let go of the day's stresses. 
        Whether you're sipping a warm cup of tea, enjoying a good book, or simply gazing out of the window, the lounge offers a sanctuary of peace.</p>
         {filteritemssecond.map((item) => (
           <img src={item.image} alt="" />
         ))}
    
    </div>
</div>

  )
}

export default Lounge