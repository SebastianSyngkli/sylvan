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
    const filteredItems = allItems.filter((item) => item.category === 'imageroomd');
    const galleryItems = allItems.filter((item) => item.category === 'imageroomitemsd');

    return (
        <div className='gallery'>
            {filteredItems.map((item) => (
                <>
                    <div className="gallery-bg-img" key={item._id}>
                        <img src={item.image} alt="gallery" />
                        <div className="gallery-bg-img-text">
                            <h2>CATEGORY-D</h2>
                            <button 
                            onClick={() => navigate('/roomvilla')}
                             style={{
                                display: 'flex',
                                padding: '10px',
                                alignItems: 'center',
                                margin: '20px',
                                paddingRight: '10px',
                                fontSize: '20px',
                                backgroundColor: 'transparent',  
                                color: 'white',                  
                                cursor: 'pointer'          
                            }}>
                              
                              <IoMdArrowBack style={{ marginRight: '8px', }} /> 
                                Back
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
