import React from 'react'
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact">
            <div className="heading">
                <h1 className="title">
                    Contact Us
                </h1>
            </div>
            <div className="content">
                <div className="row1">
                    <div className="inputBx">
                        <input type="text" placeholder='Your Name'/>
                    </div>
                    <div className="inputBx">
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div className="inputBx">
                        <input type="text" placeholder='Cell'/>
                    </div>
                </div>

                <div className="row2">
                    <div className="textArea">
                        <textarea placeholder="Write Your Message"></textarea>
                    </div>
                </div>
            </div>

            <div className="submitBtn">
               <button className='btn' disabled={true}>Submit</button>
            </div>

        </div>
    )
}

export default Contact
