import React from 'react'
import "./All.css"
import AltNavbar from '../Component/AltNavbar';

 const KayitOl = () => {

    const basarıılı=()=>{
        alert("Başarılı Kayıt Game.app e Hoşgeldin Giriş Yaparak Katılın...")
    }

    const home=()=>{
        window.location="/"
        
    }

    

  return (
    <><br/><br/><br/><br/><br/>
    <div className='profilDıs'>
        <div className='profilIc'>
            <div className='sol'>
            <h3 style={{marginLeft:170,color:"white"}}>Kayıt ol</h3>
                <div style={{marginLeft:5}} className='profilkutu1'>
                    <div className='profilKutuIc1'><br/><br/>
                        <input type='text' placeholder='Kullanıcı Adı' style={{width:250,height:50,marginLeft:90,outline:"none"}} /><br/><br/>
                        <input type="email" placeholder='E-Posta' style={{width:250,height:50,marginLeft:90,outline:"none"}} /><br/><br/>
                        <input type="password" placeholder='Şifre' style={{width:250,height:50,marginLeft:90,outline:"none"}} /><br/><br/>
                        <input type="password" placeholder='Şifre Tekrarla' style={{width:250,height:50,marginLeft:90,outline:"none"}} /><br/><br/>
                        <button onClick={basarıılı} style={{width:250,height:50,marginLeft:90,border:"1px solid white",background:"#40A2D8",color:"white"}} className='btn-primary'>Kayıt Ol</button>
                    </div>
                </div>
            </div>
            <div className='sag'>
                <h3 style={{marginLeft:140,color:"white"}}>Giriş Yap</h3>
                <div style={{marginRight:5}} className='profilkutu2'><br/><br/><br/><br/>
                    <div className='profilkutuIc2'>
                    <input type='text' placeholder='Kullanıcı Adı' style={{width:250,height:50,marginLeft:90,outline:"none"}} /><br/><br/>
                    <input type="password" placeholder='Şifre' style={{width:250,height:50,marginLeft:90,outline:"none"}} /><br/><br/>
                    <button onClick={home} style={{width:250,height:50,marginLeft:90,border:"1px solid white",background:"#A1EEBD",color:"black"}} className='btn-primary'>Giriş Yap</button>
                    </div>
                </div>

            </div>
        </div>
    </div><br/><br/><br/>
    <AltNavbar/>
    
    </>
  )
}

export default KayitOl;
