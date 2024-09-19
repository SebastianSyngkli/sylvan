// import React, { useEffect } from 'react';
// import sylvian1 from '../assets/sylvian1.png'
// import sylvian2 from '../assets/sylvian2.png'
// import './brocure.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { itemFetch } from '../features/itemSlice';


// const Brocure = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(itemFetch());
//   }, [dispatch]);

//   const { items: allitems, status } = useSelector((state) => state.items);
//   const filteritems = allitems.filter((item) => item.category === 'brocurehome');
//   const filteritemsa = allitems.filter((item) => item.category === 'brocurea');
//   const filteritemsb = allitems.filter((item) => item.category === 'brocureb');
//   const filteritemsc = allitems.filter((item) => item.category === 'brocurec');
//   const filteritemsd = allitems.filter((item) => item.category === 'brocured');
//   const filteritemse = allitems.filter((item) => item.category === 'brocuree');

//   return (
//     <div className='container'>
//       <div className="hero-bro">
//         {filteritems.map((item) => (
//           <img key={item.id} src={item.image} alt={item.description || 'Brochure Image'} />
//         ))}
//         <div className="hero-text">
//           <h2>Brochure</h2>
//           <p>Relaxing in pure comfort and tranquility</p>
//         </div>
//       </div>

//       <div className="image-con">
//         <img src={sylvian1} alt="Image 1" />
//         <img src={sylvian2} alt="Image 2" />
//       </div>



//       <div className="text">
//         <h3>A. Infinity Swimming Pool</h3>
//       </div>
//       <div className="brochure1">
//         <div className="poolimg">
//           {filteritemsa.map((item) => (
//             <img key={item.id} src={item.image} alt={item.description || 'Infinity Swimming Pool'} />
//           ))}
//         </div>
//         <div className="pooldes">
//           {filteritemsa.map((item) => (
//             <div key={item.id}>
//               <h2>Pricing: <br /> 1. For Party-Rs {item.party}/- <br />2. For Wedding-Rs {item.wedding}/-</h2>
//               {/*<h3>Description</h3>
//               <p>1. No smoking inside the pool.</p>
//               <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="text">
//         <h3>B. Swimming Pool Hall</h3>
//       </div>
//       <div className="brochure1">
//         <div className="poolimg">
//           {filteritemsb.map((item) => (
//             <img key={item.id} src={item.image} alt={item.description || 'Swimming Pool Hall'} />
//           ))}
//         </div>
//         <div className="pooldes">
//           {filteritemsb.map((item) => (
//             <div key={item.id}>
//               <h2>Pricing: <br /> 1. For Party-Rs {item.party}/- <br />2. For Wedding-Rs {item.wedding}/-</h2>
//               {/*<h3>Description</h3>
//               <p>1. No smoking inside the pool.</p>
//               <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="text">
//         <h3>C. Sound Proofing Hall with Sound System</h3>
//       </div>
//       <div className="brochure1">
//         <div className="poolimg">
//           {filteritemsc.map((item) => (
//             <img key={item.id} src={item.image} alt={item.description || 'Sound Proofing Hall'} />
//           ))}
//         </div>
//         <div className="pooldes">
//           {filteritemsc.map((item) => (
//             <div key={item.id}>
//               <h2>Pricing: <br /> 1. For Party-Rs {item.party}/- <br />2. For Wedding-Rs {item.wedding}/-</h2>
//               {/*<h3>Description</h3>
//               <p>1. No smoking inside the pool.</p>
//               <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="text">
//         <h3>D. Banquet Hall</h3>
//       </div>
//       <div className="brochure1">
//         <div className="poolimg">
//           {filteritemsd.map((item) => (
//             <img key={item.id} src={item.image} alt={item.description || 'Banquet Hall'} />
//           ))}
//         </div>
//         <div className="pooldes">
//           {filteritemsd.map((item) => (
//             <div key={item.id}>
//               <h2>Pricing: <br /> Rs {item.costs}/-</h2>
//               {/* <h3>Description</h3>
//               <p>1. No smoking inside the pool.</p>
//               <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="text">
//         <h3>E. For Walk-In Swimmer</h3>
//       </div>
//       <div className="brochure1">
//         <div className="poolimg">
//           {filteritemse.map((item) => (
//             <img key={item.id} src={item.image} alt={item.description || 'Walk-In Swimmer'} />
//           ))}
//         </div>
//         <div className="pooldes">
//           {filteritemse.map((item) => (
//             <div key={item.id}>
//               <h2>Pricing: <br /> a. Children-Rs {item.child} per head/hr. <br />b. Adult-Rs {item.adult} per head/hr</h2>
//               {/*<h3>Description</h3>
//               <p>1. No smoking inside the pool.</p>
//               <p>2. Drinking of alcohol in the pool is not allowed</p>*/}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Brocure;


import React, { useEffect } from 'react';
import sylvian1 from '../assets/sylvian1.png';
import sylvian2 from '../assets/sylvian2.png';
import { useDispatch, useSelector } from 'react-redux';
import { itemFetch } from '../features/itemSlice';

const Brocure = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetch());
  }, [dispatch]);

  const { items: allitems } = useSelector((state) => state.items);
  const filteritems = allitems.filter((item) => item.category === 'brocurehome');
  const filteritemsa = allitems.filter((item) => item.category === 'brocurea');
  const filteritemsb = allitems.filter((item) => item.category === 'brocureb');
  const filteritemsc = allitems.filter((item) => item.category === 'brocurec');
  const filteritemsd = allitems.filter((item) => item.category === 'brocured');
  const filteritemse = allitems.filter((item) => item.category === 'brocuree');

  return (
    <div className='max-w-9xl mx-auto p-4'>
  <div className="relative">
  {/* Hero Section */}
  <div className="relative w-full h-[50vh] md:h-[100vh] bg-gray-200 overflow-hidden">
    {filteritems.map((item) => (
      <img
        key={item.id}
        src={item.image}
        alt={item.description || 'Brochure Image'}
        className="object-cover w-full h-full"
      />
    ))}
  </div>

  {/* Text Overlay */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
    <h2 style={{fontFamily:'aclonica'}} className="text-4xl md:text-5xl  font-bold leading-tight text-">
      Brochure
    </h2>
    {/* <p className="text-base md:text-lg">
      Relaxing in pure comfort and tranquility
    </p> */}
  </div>
</div>


      {/* Images Section */}
      <div className="flex my-10 w-[80%] gap-4 justify-center mx-auto">
        <img src={sylvian1} alt="Image 1" className="w-[50%] h-auto" />
        <img src={sylvian2} alt="Image 2" className="w-[50%] h-auto" />
      </div>


      {/* Brochure Sections */}
      {[
        { title: 'A. Infinity Swimming Pool', items: filteritemsa },
        { title: 'B. Swimming Pool Hall', items: filteritemsb },
        { title: 'C. Sound Proofing Hall with Sound System', items: filteritemsc },
        { title: 'D. Banquet Hall', items: filteritemsd },
        { title: 'E. For Walk-In Swimmer', items: filteritemse }
      ].map((section, index) => (
        <div key={index} className="my-10 bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">{section.title}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Image Column - Centered */}
            <div className="flex flex-col items-end justify-end ">
              {section.items.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.description || 'Brochure Image'}
                  className="w-full md:w-[600px] h-[350px] object-cover rounded-xl shadow-md"
                />
              ))}
            </div>

            {/* Description Column - Centered */}
            <div className="flex flex-col justify-center items-center md:items-start space-y-6 text-gray-700">
              {section.items.map((item) => (
                <div key={item.id} className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-semibold">
                    Pricing:
                  </h2>
                  <p className="text-lg">
                    1. For Party - Rs {item.party}/- <br />
                    2. For Wedding - Rs {item.wedding || item.costs}/-
                  </p>
                  {/* Additional pricing for walk-in swimmers */}
                  {item.child && item.adult && (
                    <p className="text-lg">
                      Children: Rs {item.child} per head/hr <br />
                      Adult: Rs {item.adult} per head/hr
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}


    </div>
  );
};

export default Brocure;
