import React, { useEffect } from 'react';
import { IoMdArrowBack } from "react-icons/io";
// import './gallery.css';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';
import { useNavigate } from 'react-router-dom';

const Imageroom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(itemFetch());
    }, [dispatch]);

    const { items: allItems } = useSelector((state) => state.items);
    const filteredItems = allItems.filter((item) => item.category === 'imageroomb');
    const galleryItems = allItems.filter((item) => item.category === 'imageroomitemsb');

    return (
        <div className='gallery'>
            {filteredItems.map((item) => (
                <>
                    <div className="gallery-bg-img" key={item._id}>
                        <img src={item.image} alt="gallery" />
                        <div className="gallery-bg-img-text">
                            <h2>CATEGORY-B</h2>
                            <button 
                             onClick={() => navigate('/roomvilla')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                paddingRight: '10px',
                                padding: '10px',
                                fontSize: '20px',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background 
                                color: 'white',                  
                                cursor: 'pointer', 
                                borderRadius: '10px'         
                            }}>
                              <IoMdArrowBack style={{fontSize: '30px'}} /> 
                                {/* Back */}
                            </button>

                        </div>
                    </div>
                    <div className="images">
                        {galleryItems.map((galleryItem) => (
                            <div className="image-item" key={galleryItem._id}>
                                <img src={galleryItem.image} alt="gallery item" />
                            </div>
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
};

export default Imageroom;
