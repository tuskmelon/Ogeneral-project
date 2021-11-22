import React from 'react'
import { GoLocation} from "react-icons/go";
const Map = () => {
    return (
        <>
        <div class="card mt-2 p-2">
            <p style={{fontSize:'12px'}}> <GoLocation style={{fontSize:'20px'}}/> No 5/318, Rajiv Gandhi Salai Omr, Thoraipakkam, Chennai - 600097, Opposite To Reebok showroom (Map) 
           <br/>Phone Number: 07947084149</p>
        </div>
        <iframe className="p-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.956845472838!2d80.2485057141352!3d12.974612018324384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c5f1424e251%3A0xbd286b8275f9160c!2sOmr%20Air%20Conditioners!5e0!3m2!1sen!2sin!4v1637485844709!5m2!1sen!2sin" style={{width: "100%", height: "100"}}></iframe>
         {/* <div class="card  p-2">
                <iframe src="https://www.google.com/maps/place/Omr+Air+Conditioners/@12.974612,80.2485057,17z/data=!3m1!4b1!4m5!3m4!1s0x3a525c5f1424e251:0xbd286b8275f9160c!8m2!3d12.9746068!4d80.2506944" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
     </div> */}
     </>
    )
}

export default Map
