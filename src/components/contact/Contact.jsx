import React , {useState} from 'react'
import './Contact.css';
import Links from './links/Links';
export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch("/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
  
        if (response.ok) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }

    };
  
    
  return (
    <div id='Contact'>
       {/* {(status==="success")?alert('Email sent successfully!'):console.log('something went wrong')} */}
      <div className="contactbody">
          <div className="contactleft">
              <div className="contactname">
                  Contact
              </div>
              <div className="contactlinks">
                <Links/>
              </div>
          </div>
          <div className="contactright">
            <form action="" onSubmit={handleSubmit}  method="post" enctype="text/plain">
              <div className="cusername">
                <input type="text"
                 className='cusernamec' 
                 placeholder='username' 
                 value={name}
              // onChange={(event) => setName(event.target.value)}
                 required />
              </div>
              <div className="cemail">
              <input
               className='cemailc'
                placeholder='email'
                type="email"
              value={email}
              // onChange={(event) => setEmail(event.target.value)}
                 required />
              </div>
              <div className="cmessage">
              {/* <input type="text" className='cmessagec' placeholder='message'/> */}
              <textarea
               name="message" 
               value={message}
              //  onChange={(event) => setMessage(event.target.value)}
                className='cmessagec'
               required placeholder='message' ></textarea>
              </div>
              <button type='submit' className='cbtn' >Send</button>
            </form>
          </div>
      </div>
     
    </div>
  )
}
