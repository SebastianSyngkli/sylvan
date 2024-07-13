import React, { useEffect } from 'react';
import './Gallery.css';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';

const Gallery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allItems } = useSelector((state) => state.items);
  const filteredItems = allItems.filter((item) => item.category === 'gallery');
  const galleryItems = allItems.filter((item) => item.category === 'galleryitems');

  return (
    <div className='gallery'>
      {filteredItems.map((item) => (
        <>
          <div className="gallery-bg-img" key={item._id}>
            <img src={item.image} alt="gallery" />
            <div className="gallery-bg-img-text">
              <h2>Gallery</h2>
              <p>Our collections of images</p>
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

export default Gallery;
