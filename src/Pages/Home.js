import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Slider from '../Component/Slider'
import oyun from "../Images/oyun1.png"
import oyun1 from "../Images/oyun6.png"
import oyun2 from "../Images/oyun7.png"
import oyun3 from "../Images/nintando.png"
import AltNavbar from '../Component/AltNavbar'



const Home = () => {
    const [liste, setListe] = useState()
    const [galeri, setGaleri] = useState()
    const [riky,setRiky]=useState()
    const film_img = "https://www.cheapshark.com"
    const Detail = useNavigate()


    useEffect(() => {
        const api_link = "https://www.cheapshark.com/api/1.0/stores"
        axios.get(api_link)
            .then(response => {
                setListe(response.data)
            })
    }, [])

    useEffect(() => {
        const api_Link = "https://api.disneyapi.dev/character"
        axios.get(api_Link)
            .then(response => {
                setGaleri(response.data)
            })

    }, [])

    useEffect(()=>{
        const api_Link="https://rickandmortyapi.com/api/character"
        axios.get(api_Link)
        .then(response=>{
            setRiky(response.data)
        })
    },[])


    return (
        <>
            <Navbar /><br /><br /><br />
            <Slider />
            <div id='1' className='kutu1'>
                <div className='sol'>
                    <h1>Oyun Hakkında Bilgi</h1>
                    <h6>Oyun, genellikle iyi vakit geçirmeye yarayan,<br /> eğlendirici ve bu sebeple bazen bir eğitim aracı olarak<br /> da kullanılabilen etkinlik. Oyun, ücret karşılığında<br /> yapılan işlerden ve estetik ya da ideolojik unsurların bir<br /> ifadesi olan sanattan farklıdır.</h6>
                </div>
                <div className='sag'>
                    <img src={oyun} style={{ width: 250, marginTop: -50 }} />
                </div>
            </div>
            <div className='kutu2'>
                <div className='sol'>
                    <img src={oyun1} style={{ width: 250 }} />
                </div>
                <div className='sag'>
                    <h1>Video oyunu</h1>
                    <h6>İngilizceden çevrilmiştir-Bir video oyunu veya<br /> bilgisayar oyunu, genellikle bir televizyon setinde,<br /> bilgisayar monitöründe, düz panel ekranda veya <br /> dokunmatik ekranda video formatında gösterilen, bir<br /> görüntüleme cihazından görsel geri bildirim ...n</h6>
                </div>
            </div>
            <div className='kutu3'>
                <div className='sol'>
                    <h3>Dualshock 4 Özelikleri</h3>
                    <ul style={{ marginLeft: -65 }}>
                        <ol>Titreşim Var.</ol>
                        <ol>Değiştirilebilir Düğme Yok.</ol>
                        <ol>Ek Fonksiyon Düğmesi (Yuvası) Yok.</ol>
                        <ol>Analog Joystik Var.</ol>
                        <ol>Pil Tipi Dahili Li-Po.</ol>
                        <ol>Pil Kapasitesi 1000 mAh.</ol>
                    </ul>
                </div>
                <div className='sag'>
                    <img src={oyun2} style={{ width: 250 }} />
                </div>
            </div>
            <div className='kutu4'>
                <div className='sol'>
                    <img src={oyun3} style={{ width: 250 }} />
                </div>
                <div className='sag'>
                    <h1>Nintendo Switch</h1>
                    <h6>Nintendo Switch sistem yazılımı, HAL Laboratory ve Nintendo<br /> tarafından hazırlanan Nintendo Switch video oyun konsolu tarafından kullanılan,<br /> güncellenebilir bir ürün yazılımı ve işletim sistemidir.[2] Nintendo 3DS sistem yazılımına<br /> fazlasıyla benzemektedir.</h6>
                </div>
            </div>
            <div id='2' className='containerr kutu5'>
                {
                    liste?.map((liste, i) =>
                        <img className='focus' onClick={() => Detail(`/Detail/${liste.storeName}`)} key={i} src={film_img + liste.images.logo} style={{ width: 220, cursor: "pointer" }} />
                    )
                }
            </div>
            <div id='3' className='kutu6'>
                <div className='container'>
                    {
                        galeri?.data.map((galeri, i) =>
                            <img key={i} src={galeri.imageUrl}  />
                        )
                    }
                    {
                        riky?.results.map((artı,i)=>
                        <img src={artı.image} />
                        )
                    }
                </div>

            </div>
            <AltNavbar />


        </>
    )
}

export default Home;
