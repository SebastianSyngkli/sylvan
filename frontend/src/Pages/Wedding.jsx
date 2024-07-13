import React,{useEffect} from 'react'
import './Wedding.css'
import wedding_bg from '../assets/logo/wedding_bg.png'
import wedding_img1 from '../assets/crop_image/wedding_img1.jpg'
import wedding_img2 from '../assets/crop_image/wedding_img2.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';

const Wedding = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(itemFetch());
    }, [dispatch]);
  
    const { items: allitems, status } = useSelector((state) => state.items);
    const filteritems = allitems.filter((item) => item.category === 'weddingbg');
    const filteritemsone = allitems.filter((item) => item.category === 'weddingone');
    const filteritemstwo = allitems.filter((item) => item.category === 'weddingtwo');
  return (
    <div className='wedding'>
    <div className="wedding-bg-img">
    {filteritems.map((item) => (
               <img src={item.image} alt="Lounge background" />
          ))}  
    <div className="wedding-bg-img-text">
        <h2>Wedding</h2>
        <p>"To love and be loved is to feel the sun from both sides."</p>
    </div>
    </div>
    
    <div className="wedding-details">
        <p>The ambiance, with its soft lighting and plush seating, invites you to unwind and let go of the day's stresses. 
        Whether you're sipping a warm cup of tea, enjoying a good book, or simply gazing out of the window, the wedding offers a sanctuary of peace.</p>
        
        {filteritemsone.map((item) => (
               <img src={item.image} alt="Lounge background" />
          ))}  
   
         
    </div>
    <div className="wedding-details">
          
    <p>The ambiance, with its soft lighting and plush seating, invites you to unwind and let go of the day's stresses. 
        Whether you're sipping a warm cup of tea, enjoying a good book, or simply gazing out of the window, the wedding offers a sanctuary of peace.</p>

        {filteritemstwo.map((item) => (
               <img src={item.image} alt="Lounge background"/>
          ))}  
   
    </div>
</div>

  )
}

export default Wedding