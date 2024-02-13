import React from 'react';
import { Link } from 'react-router-dom';
import { RiHeartFill, RiSearchLine, RiUserFill, RiShoppingCartFill } from 'react-icons/ri';
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* For Desktop */}
        <div className='tn-container container'>
          <Link to="/" className='logo'>Hair Products</Link>
          <div className='search-box'>
            <input type="search" name='search' id='' placeholder='Search For Products' />
            <div className='search-icon'><RiSearchLine/></div>
          </div>
          <div className='tn-icons'>
            <Link to="/profile"><RiUserFill/></Link>
            <Link to="/favorites"><RiHeartFill/><span className='count'>0</span></Link>
            <Link to="/cart"><RiShoppingCartFill/><span className='count'>0</span></Link>
          </div>
        </div>
        <hr/>
        <div className='bn-container container'>
          <ul className='navlist'>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/categories">Kategoriler</Link></li>
            <li><Link to="/shop">Mağaza</Link></li>
            <li><Link to="/deal">Fırsatlar</Link></li>
            <li><Link to="/testimonial">Referanslar</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/iletisim" >İletişim</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
