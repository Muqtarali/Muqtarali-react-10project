import React from 'react'
import { useState } from 'react'
import img from '..//assets/Service 24_7-pana 1.svg'
import img1 from '..//assets/frame 5.png'

 export default function Contect() {
            const [name, setName] = useState('');
            const [email, setEmail] = useState('');
            const [text, setText] = useState('');

        const HealdlingName= (e) => {
                setName(e.target.value);
                
            }
          const HealdlingEmail= (e) => {
                setEmail(e.target.value);
            }
        const HeadlingText=(e)=>{
                setText(e.target.value);
            }
        const handleSubmit = (e) => {
            e.preventDefault();

                console.log("Name:", name);
                console.log("Email:", email);
                console.log("Text:", text);
                setEmail(' ');
                setName(' ');    
                setText(' ');
            }


 return (
            <>

            <div className="contect">
                <h1 className='contect-heading'>Contect Us</h1>
            </div>
            <div className="contect-para">
                <p>
                    LETS CONNECT: WERE HERE TO HELP, AND WED LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
                </p>
            </div>
            <div className='Contect_main'>

                <div className='Contect_form'>
                    <div className='Contect_form_heading'>
                        <img src={img1} alt="" />


                    </div>
                    <div className='Contect_form_input'>
                    <form action=""  onSubmit={handleSubmit} >
                        <label>Name <input type="text" name="Name"  id="Name"  onChange={HealdlingName}/></label>
                        <label htmlFor="">  Email<input type="Email" name='Email' id='Email' onChange={HealdlingEmail}/></label>
                        <label htmlFor="">Text<input type="text" name='Text' id='text' onChange={HeadlingText}/></label>
                        <button className='contect-button'>SUBMIT</button>

                    </form>
                    </div>
                    
                </div>
                <div className='Contect-image'>
                    <img src={img} alt="24/7 image" />
                </div>
            </div>
            </>
        )}
