import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function NavBarUser() {
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
            <p onClick={() => navigate('/ViewProductUser')}>All</p>
          </div>
          <div className="options">
            <p>Today's Deals</p>
            <p onClick={() => navigate('/UserMyOrder')}>My order</p>
            {/* <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p> */}
          </div>
        </div>
      </header>
    </div>
  );
}
