import React, { useState, useEffect } from 'react';
import './edit.css';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch, itemEdit, itemDelete } from '../features/itemSlice';

const ItemListWithEdit = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.items);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [editItemId, setEditItemId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    costs: '',
    child: '',
    adult: '',
    Wedding: '',
    party: '',
    roomname: '',
    category: '',
    time: '',
    image: '',
    roomspecification: '',
    maxbed: '',
    maxguest: '',
  });

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const handleEditClick = (item) => {
    setEditItemId(item._id);
    setFormData({
      costs: item.costs,
      child: item.child,
      adult: item.adult,
      Wedding: item.Wedding,
      party: item.party,
      roomname: item.roomname,
      category: item.category,
      time: item.time,
      image: '',
      roomspecification: item.roomspecification,
      maxbed: item.maxbed,
      maxguest: item.maxguest,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedData = { ...formData };

    if (formData.image) {
      const reader = new FileReader();
      reader.readAsDataURL(formData.image);
      reader.onloadend = () => {
        updatedData.image = reader.result;
        dispatch(itemEdit({ id: editItemId, values: updatedData })).finally(() => {
          setLoading(false);
          setEditItemId(null);
        });
      };
    } else {
      dispatch(itemEdit({ id: editItemId, values: updatedData })).finally(() => {
        setLoading(false);
        setEditItemId(null);
      });
    }
  };

  const handleDeleteClick = (id) => {
    dispatch(itemDelete(id));
  };

  if (status === 'pending') {
    return <div style={{textAlign: 'center'}}>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className='edit-main-container'>
      <div className='edit-heading'>
        <h1>Item List</h1>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {editItemId === item._id ? (
              <form onSubmit={handleSubmit} className='formedit'>
                <label>
                  Maxbed:
                  <input
                    type="text"
                    name="maxbed"
                    value={formData.maxbed}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Maxguest:
                  <input
                    type="text"
                    name="maxguest"
                    value={formData.maxguest}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Costs:
                  <input
                    type="text"
                    name="costs"
                    value={formData.costs}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Child walk (brochore):
                  <input
                    type="number"
                    name="child"
                    value={formData.child}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Adult walk (brochore):
                  <input
                    type="number"
                    name="adult"
                    value={formData.adult}
                    onChange={handleChange}
                  />
                </label>
                <label>
                   wedding (brochore):
                  <input
                    type="number"
                    name="wedding"
                    value={formData.Wedding}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Party (brochore):
                  <input
                    type="number"
                    name="party"
                    value={formData.party}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Room name:
                  <input
                    type="text"
                    name="roomname"
                    value={formData.roomname}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Category:
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Room-Specification:
                  <input
                    type="text"
                    name="roomspecification"
                    value={formData.roomspecification}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Image:
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                  />
                </label>
                <button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : 'Save'}
                </button>
                <button type="button" onClick={() => setEditItemId(null)} disabled={loading}>
                  Cancel
                </button>
              </form>
            ) : (
              <div className='edit-sub-container'>
                <h3>{item.maxbed}</h3>
                <p>{item.maxguest}</p>
                <p>{item.costs}</p>
                <p>{item.child}</p>
                <p>{item.adult}</p>
                <p>{item.wedding}</p>
                <p>{item.party}</p>
                <p>{item.roomname}</p>
                <p className="item-category">{item.category}</p>
                <p>{item.time}</p>
                <p>{item.roomspecification}</p>
                <div className='edit-image'>
                  {item.image && <img src={item.image} alt={item.roomname} />}
                </div>
                <button onClick={() => handleEditClick(item)}>Edit</button>
                <button onClick={() => handleDeleteClick(item._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListWithEdit;
