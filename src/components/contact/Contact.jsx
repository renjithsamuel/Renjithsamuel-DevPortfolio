import React , {useState} from 'react'
import './Contact.css';
import Links from './links/Links';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const firebaseConfig = {
      apiKey: "AIzaSyA26EFh57tUvnxPg-eccz5ckf9bYcuU8jM",
      authDomain: "blogapp-858f2.firebaseapp.com",
      projectId: "blogapp-858f2",
      storageBucket: "blogapp-858f2.appspot.com",
      messagingSenderId: "54102166964",
      appId: "1:54102166964:web:74534ca3e4374a2341b6e1",
      measurementId: "G-Y203GSZZ5J",
      databaseURL:'https://blogapp-858f2-default-rtdb.firebaseio.com/'
    };
    const app = initializeApp(firebaseConfig);

    async function writeUserData(userId, name, email, imageUrl) {
      const db = getDatabase();
      await set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        message : message
      });
    }


    const handleSubmit = async (event) => {
      event.preventDefault();
      let userId = Math.random();
      try {
      //  https://blogapp-858f2-default-rtdb.firebaseio.com/
        // firebaseConfig.database().ref('User').set{(
        //   name:document.getElementById('namefield').value,
        //   email:document.getElementById('emailfield').value,
        //   message:document.getElementById('messagefield')
        // )}
        writeUserData(name,name,email,message);
  
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        return;
      } catch (error) {
        setStatus("error");
        return;
      }
    };
    
  return (
    <div id='Contact'>
       {(status==="success")?alert('Message sent successfully!'):console.log('something went wrong')}
      <div className="contactbody">
          <div className="contactleft" >
              <div className="contactname">
                  Contact
              </div>
              <div className="contactlinks">
                <Links/>
              </div>
          </div>
          <div className="contactright" >
            <form action="" onSubmit={handleSubmit}  method="post" enctype="text/plain">
              <div className="cusername">
                <input type="text"
                id='namefield'
                 className='cusernamec' 
                 placeholder='username' 
                 value={name}
              onChange={(event) => setName(event.target.value)}
                 required />
              </div>
              <div className="cemail">
              <input
               className='cemailc'
               id='emailfield'
                placeholder='email'
                type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
                 required />
              </div>
              <div className="cmessage">
              <textarea
               name="message" 
               id='messagefield'
               value={message}
               onChange={(event) => setMessage(event.target.value)}
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