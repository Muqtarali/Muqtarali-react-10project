import React from 'react'
import img1 from  '../assets/4331d1d3fe15236a1a9843e35f7b3b8467e998ff.png'
import img2 from  '../assets/9669ba8f4f98c0bc6952e9281673372fcb16cfc0.png'
import img3 from  '../assets/ccd9e7f69d4cbfcf331c69b8e21db35d2e158410.png'
export default function Freame() {
  return (
    <>
   
    <div className='freame-container'>
        <div className='freame-left'>
        <div className='freame-text'>
             <p>YOUR FEET 
           DESERVE
           THE BEST</p>
        </div>

         <div className='freame-body'> <p>YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES..</p>
         </div>
        
        <div className='freame-button'>
        <button className='freame-button1'>SHOP NOW</button>
        <button className='freame-category'>CATOGORY</button>
        </div>
        
         <div className='freame-available'>
            <p>Also Available On</p>
            <img className='img1' src={img1} alt="Flibadcard Logo" />
            <img className='img2' src={img2} alt="Amazon logo" />
         </div>

        </div>


         <div className='freame-1'>
            <img src={img3} alt="SHouse image" />
         </div>
    </div>
     </>
  )
}
