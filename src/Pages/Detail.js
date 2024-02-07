import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"
import Navbar from '../Component/Navbar';
import "./All.css"
import resim1 from "../Images/oyun8.png"
import resim2 from "../Images/oyun9.png"
import AltNavbar from '../Component/AltNavbar';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



const Detail = () => {
  let { storeName } = useParams()
  const [detail, setDetail] = useState()
  const [goster, setGoster] = useState()
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const api_Link = `https://www.cheapshark.com/api/1.0/games?title=${storeName}`
    setLoading(true)
    axios.get(api_Link)
      .then(response => {
        setDetail(response.data)
        setLoading(false)
      })

  }, [storeName])

  useEffect(() => {
    const api_Link = "https://www.cheapshark.com/api/1.0/stores"
    axios.get(api_Link)
      .then(response => {
        setGoster(response.data)
      })

  }, [])

  console.log(goster, "ss");



  return (
    <>
      <div className='ustnavbar'>
        <div class="text-center">
          <div class="row align-items-start">
            <div class="col">
              <img src={resim1} style={{ width: 190 }} />
            </div>
            <div class="col">
              <a href='/'> <button style={{ height: 150, width: 200, marginTop: 20 }} className='btn btn-outline-light'><i style={{ fontSize: 30 }} class="fa-solid fa-angle-left"></i></button></a>
            </div>
            <div class="col">
              <img src={resim2} style={{ width: 190 }} />

            </div>
          </div>
        </div>
      </div>
      <br />
    

      <div class="text-center"> 
        <div class="row align-items-start">
        {  
          loading ?
          <ClimbingBoxLoader className="orta"
                        color={"#FC6736"}
                        loading={loading}
                        size={13}
                    />
                :
      
          <div class="col">
            Oyunları<br /><br />
            <ol>
              {
                detail?.map((liste, i) =>
                  <ol key={i} style={{ textAlign: "left", fontSize: 20,marginTop:55 }}>
                    {liste.internalName}

                  </ol>
                )
              }
            </ol>
          </div>
        }
          <div class="col">
            Oyunun Resmi<br /><br />
            <ol>
              {
                detail?.map((resim, i) =>
                  <ol>
                    <img key={i} src={resim.thumb} style={{ width: 100 }} />
                  </ol>
                )
              }
                </ol>
        </div>
          <div class="col">
            Fiyatı<br /><br />
            {
              detail?.map((fiyat, i) =>
                <ol style={{marginTop:61}} key={i}>
                  {fiyat.cheapest}
                </ol>
              )
            }
      
          </div>
        </div>
                  </div><br/><br/>

      <AltNavbar/>
    </>
  )
}

export default Detail;
