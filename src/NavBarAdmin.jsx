// // import React from 'react';
// // import './style.css'; // Ensure this file exists in your project
// // import { useNavigate } from 'react-router-dom';

// // export default function NavBarUser() {
// //     const navigate = useNavigate();
// //   return (
// //     <div>
// //       <header>
// //         <nav>
// //           <div className="nav-left">
// //             <div className="nav-logo">
// //        <img src="img\images copy.jpeg" alt="New Grocery Store Logo" />



// //             </div>
// //             <div className="location">
// //               <p className="top-text">Deliver to</p>
// //               <div className="location-icon">
// //                 <i className="fa-solid fa-location-dot"></i>
// //                 <p className="bottom-text">India</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="nav-center">
// //             <select className="search-dropdown">
// //               <option>All</option>
// //               <option>All Departments</option>
// //               <option>Arts & Crafts</option>
// //             </select>
// //             <input
// //               type="text"
// //               placeholder="Search grocery"
// //               className="search-box"
// //             />
// //             <div className="search-icon">
// //               <i className="fa-solid fa-magnifying-glass" style={{ color: '#28416c' }}></i>
// //             </div>
// //           </div>

// //           <div className="nav-right">
// //             <div className="language-option">
// //               <div className="flag">
// //                 <i className="fa-regular fa-flag"></i>
// //               </div>
// //               <select className="select-language">
// //                 <option value="lan">EN</option>
// //                 <option value="lan">ES</option>
// //                 <option value="lan">AR</option>
// //               </select>
// //             </div>

// //             <div className="account-option">
// //               <p className="top-text">Hello, sign in</p>
// //               <select className="select-account">
// //                 <option value="Account">Account & Lists</option>
// //                 <option value="Account">Account & Lists</option>
// //                 <option value="Account">Account & Lists</option>
// //               </select>
// //             </div>

// //             <div className="order-option">
// //               <p className="top-text">Returns</p>
// //               <p className="bottom-text">& Orders</p>
// //             </div>

// //             <div className="cart-option">
// //               <div className="cart-logo">
// //                 <i className="fa-solid fa-cart-shopping"></i>
// //               </div>
// //               Cart
// //             </div>
// //           </div>
// //         </nav>

// //         <div className="nav-options">
// //           <div className="all-logo">
// //             <i className="fa-solid fa-bars"></i>
// //             {/* <p className="list">All</p> */}
// //             <p onClick={() => navigate('/View-Product')}>All</p>
// //           </div>
// //           <div className="options">
// //              <p onClick={() => navigate('/add-product')}>Add Products</p>
// //             <p>Today's Deals</p>
// //             <p>Customer Service</p>
// //             <p>Registry</p>
// //             <p>Gift Cards</p>
// //             <p>Sell</p>
// //           </div>
// //         </div>
// //       </header>
// //       <div className="carousel slides-container">
// //   <div className="slide">
// //     <img src="img\online2.png" alt="Slide 1" />
// //   </div>
// //   <div className="slide">
// //     <img src="img\online.webp" alt="Slide 2" />
// //   </div>
// //   <div className="slide">
// //     <img src="img\images.jpeg" alt="Slide 3" />
// //   </div>
// // </div>

// //     </div>
// //   );
// // }












// // import React, { useEffect, useRef } from 'react';
// // import './style.css';
// // import { useNavigate } from 'react-router-dom';

// // export default function NavBarUser() {
// //   const navigate = useNavigate();
// //   const carouselRef = useRef(null);

// //   // Auto-scroll logic
// //   useEffect(() => {
// //     const carousel = carouselRef.current;
// //     let index = 0;
// //     const totalSlides = carousel.children.length;

// //     const interval = setInterval(() => {
// //       index = (index + 1) % totalSlides;
// //       carousel.scrollTo({
// //         left: index * carousel.clientWidth,
// //         behavior: 'smooth',
// //       });
// //     }, 3000); // every 3 seconds

// //     return () => clearInterval(interval); // cleanup
// //   }, []);

// //   return (
// //     <div>
// //       <header>
// //         <nav>
// //           <div className="nav-left">
// //             <div className="nav-logo">
// //               <img src="/img/images copy.jpeg" alt="Logo" />
// //             </div>
// //             <div className="location">
// //               <p className="top-text">Deliver to</p>
// //               <div className="location-icon">
// //                 <i className="fa-solid fa-location-dot"></i>
// //                 <p className="bottom-text">India</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="nav-center">
// //             <select className="search-dropdown">
// //               <option>All</option>
// //               <option>All Departments</option>
// //               <option>Arts & Crafts</option>
// //             </select>
// //             <input type="text" placeholder="Search grocery" className="search-box" />
// //             <div className="search-icon">
// //               <i className="fa-solid fa-magnifying-glass" style={{ color: '#28416c' }}></i>
// //             </div>
// //           </div>

// //           <div className="nav-right">
// //             <div className="language-option">
// //               <div className="flag">
// //                 <i className="fa-regular fa-flag"></i>
// //               </div>
// //               <select className="select-language">
// //                 <option value="lan">EN</option>
// //                 <option value="lan">ES</option>
// //                 <option value="lan">AR</option>
// //               </select>
// //             </div>

// //             <div className="account-option">
// //               <p className="top-text">Hello, sign in</p>
// //               <select className="select-account">
// //                 <option value="Account">Account & Lists</option>
// //               </select>
// //             </div>

// //             <div className="order-option">
// //               <p className="top-text">Returns</p>
// //               <p className="bottom-text">& Orders</p>
// //             </div>

// //             <div className="cart-option">
// //               <div className="cart-logo">
// //                 <i className="fa-solid fa-cart-shopping"></i>
// //               </div>
// //               Cart
// //             </div>
// //           </div>
// //         </nav>

// //         <div className="nav-options">
// //           <div className="all-logo">
// //             <i className="fa-solid fa-bars"></i>
// //             <p onClick={() => navigate('/View-Product')}>All</p>
// //           </div>
// //           <div className="options">
// //             <p onClick={() => navigate('/add-product')}>Add Products</p>
// //             <p>Today's Deals</p>
// //             <p>Customer Service</p>
// //             <p>Registry</p>
// //             <p>Gift Cards</p>
// //             <p>Sell</p>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Carousel */}
// //       <div className="carousel" ref={carouselRef}>
// //         <div className="slide"><img src="/img/online2.png" alt="Slide 1" /></div>
// //         <div className="slide"><img src="/img/online.webp" alt="Slide 2" /></div>
// //         <div className="slide"><img src="/img/WhatCustomersSupermarkets.jpg" alt="Slide 3" /></div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useEffect, useRef } from 'react';
// import './style.css';
// import { useNavigate } from 'react-router-dom';

// export default function NavBarAdmin() {
//  const navigate = useNavigate();
//   const carouselRef = useRef(null);

//   // Auto-scroll logic
//   useEffect(() => {
//     const carousel = carouselRef.current;
//     let index = 0;
//     const totalSlides = carousel.children.length;

//     const interval = setInterval(() => {
//       index = (index + 1) % totalSlides;
//       carousel.scrollTo({
//         left: index * carousel.clientWidth,
//         behavior: 'smooth',
//       });
//     }, 3000); // every 3 seconds

//     return () => clearInterval(interval); // cleanup
//   }, []);

//   return (
//     <div>
//       <header>
//         <nav>
//           <div className="nav-left">
//             <div className="nav-logo">
//               <img src="/img/images copy.jpeg" alt="Logo" />
//             </div>
//             <div className="location">
//               <p className="top-text">Deliver to</p>
//               <div className="location-icon">
//                 <i className="fa-solid fa-location-dot"></i>
//                 <p className="bottom-text">India</p>
//               </div>
//             </div>
//           </div>

//           <div className="nav-center">
//             <select className="search-dropdown">
//               <option>All</option>
//               <option>All Departments</option>
//               <option>Arts & Crafts</option>
//             </select>
//             <input type="text" placeholder="Search grocery" className="search-box" />
//             <div className="search-icon">
//               <i className="fa-solid fa-magnifying-glass" style={{ color: '#28416c' }}></i>
//             </div>
//           </div>

//           <div className="nav-right">
//             <div className="language-option">
//               <div className="flag">
//                 <i className="fa-regular fa-flag"></i>
//               </div>
//               <select className="select-language">
//                 <option value="lan">EN</option>
//                 <option value="lan">ES</option>
//                 <option value="lan">AR</option>
//               </select>
//             </div>

//             <div className="account-option">
//               <p className="top-text">Hello, sign in</p>
//               <select className="select-account">
//                 <option value="Account">Account & Lists</option>
//               </select>
//             </div>

//             <div className="order-option">
//               <p className="top-text">Returns</p>
//               <p className="bottom-text">& Orders</p>
//             </div>

//             <div className="cart-option">
//               <div className="cart-logo">
//                 <i className="fa-solid fa-cart-shopping"></i>
//               </div>
//               Cart
//             </div>
//           </div>
//         </nav>

//         <div className="nav-options">
//           <div className="all-logo">
//             <i className="fa-solid fa-bars"></i>
//             <p onClick={() => navigate('/View-Product')}>All</p>
//           </div>
//           <div className="options">
//             <p onClick={() => navigate('/add-product')}>Add Products</p>
//             <p onClick={() => navigate('/Stock')}>Stock</p>
//             <p>Customer Service</p>
//             <p>Registry</p>
//             <p>Gift Cards</p>
//             <p>Sell</p>
//           </div>
//         </div>
//       </header>

//       {/* Carousel */}
//       {/* <div className="carousel" ref={carouselRef}>
//         <div className="slide"><img src="/img/online2.png" alt="Slide 1" /></div>
//         <div className="slide"><img src="/img/online.webp" alt="Slide 2" /></div>
//         <div className="slide"><img src="/img/WhatCustomersSupermarkets.jpg" alt="Slide 3" /></div>
//       </div> */}
//     </div>
//   );
// }



import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function NavBarAdmin() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav>
          <div className="nav-left">
            <div className="nav-logo">
              <img src="/img/images copy.jpeg" alt="Logo" />
            </div>
            <div className="location">
              <p className="top-text">Deliver to</p>
              <div className="location-icon">
                <i className="fa-solid fa-location-dot"></i>
                <p className="bottom-text">India</p>
              </div>
            </div>
          </div>

          <div className="nav-center">
            <select className="search-dropdown">
              <option>All</option>
              <option>All Departments</option>
              <option>Arts & Crafts</option>
            </select>
            <input type="text" placeholder="Search grocery" className="search-box" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass" style={{ color: '#28416c' }}></i>
            </div>
          </div>

          <div className="nav-right">
            <div className="language-option">
              <div className="flag">
                <i className="fa-regular fa-flag"></i>
              </div>
              <select className="select-language">
                <option value="lan">EN</option>
                <option value="lan">ES</option>
                <option value="lan">AR</option>
              </select>
            </div>

            <div className="account-option">
              <p className="top-text">Hello, sign in</p>
              <select className="select-account">
                <option value="Account">Account & Lists</option>
              </select>
            </div>

            <div className="order-option">
              <p className="top-text">Returns</p>
              <p className="bottom-text">& Orders</p>
            </div>

            <div className="cart-option">
              <div className="cart-logo">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              Cart
            </div>
          </div>
        </nav>

        <div className="nav-options">
          <div className="all-logo">
            <i className="fa-solid fa-bars"></i>
            <p onClick={() => navigate('/View-Product')}>All</p>
          </div>
          <div className="options">
            <p onClick={() => navigate('/add-product')}>Add Products</p>
            <p onClick={() => navigate('/Stock')}>Stock</p>
             <p onClick={() => navigate('/TodaySellAdmin')}>Sell today</p>
            {/* <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p> */}
          </div>
        </div>
      </header>
    </div>
  );
}

