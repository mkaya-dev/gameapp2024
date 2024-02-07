import React from 'react'
import resim1 from "../Images/oyun9.png"
import resim2 from "../Images/oyun10.png"
import resim3 from "../Images/oyun11.png"
import resim4 from "../Images/oyun12.png"
import resim5 from "../Images/oyun13.png"



const AltNavbar = () => {
  return (
    <>
        <div className='dıs'>
            <div className='ıc'>
                <ul>
                 <ol>Oyunlar</ol>
                 <ol>Paketler</ol>
                 <ol>İndir ve Oyna</ol>
                </ul>
                <ul>
                 <ol>GAME+ Blog</ol>
                 <ol>Sıkça Sorulan Sorular</ol>
                 <ol>Servis Durumu</ol>
                </ul>
                <ul>
                    <ol>Destek</ol>
                </ul>
                <ul>
                    <ol>Bizi Takip Et!</ol><br/>
                    <button className='btn btn-light'><i class="fa-brands fa-facebook-f"></i></button>
                    <button className='btn btn-light'><i class="fa-brands fa-instagram"></i></button>
                    <button className='btn btn-light'><i class="fa-brands fa-twitter"></i></button>
                    <button className='btn btn-light'><i class="fa-brands fa-youtube"></i></button>
                </ul>
                <ul>
                    <img src={resim1} style={{width:100,marginLeft:5}} />
                    <img src={resim2} style={{width:100,marginLeft:15}} />
                    <img src={resim3} style={{width:100,marginLeft:15}} />
                    <img src={resim4} style={{width:100,marginLeft:15}} />
                    <img src={resim5} style={{width:100,marginLeft:15}} />
                </ul>
                <ul>
                    < a href='#'><button style={{marginTop:30}} className='btn btn-light'>Başa Dön ^</button></a>
                </ul>
            </div>
        </div>
    </>
  )
}

export  default AltNavbar;
