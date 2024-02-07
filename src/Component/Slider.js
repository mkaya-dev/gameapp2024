import React from 'react'
import oyun from "../Images/oyun1.png"
import oyun2 from "../Images/oyun2.png"
import oyun3 from "../Images/oyun3.png"
import oyun4 from "../Images/oyun4.png"
import oyun5 from "../Images/oyun5.png"


const Slider = () => {
    return (
        <>

            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={oyun2} style={{width:"100%",marginTop:-90}}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={oyun5}  style={{width:"100%"}}   alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={oyun4}  style={{width:"100%"}}   alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={oyun3} style={{width:"100%"}}  alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Slider;
