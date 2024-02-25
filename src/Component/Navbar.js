import React from 'react'
import { Link } from 'react-router-dom';
import "../Pages/All.css"

 const Navbar = () => {
  return (
    <>
    <nav>
        <h3>Game.app</h3>
        <ul>
            <li><a href='#2' >Mağaza Listesi</a></li>
            <li><a href="#1">Hakkında</a></li>
            <li><a href='#3' >Galeri</a></li>
            <li><a><Link to='KayitOl'>Kayıt Ol</Link></a></li>

        </ul>
    </nav>
    
    </>
  )
}

export default Navbar;
