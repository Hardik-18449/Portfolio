import React from 'react';
import './Contact.css';
import Theme from '../../assets/Theme.svg';
import call from '../../assets/call.svg';
import location from '../../assets/location.svg';
import mail from '../../assets/mail.svg';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7462d15c-3a49-4c19-8b8e-b8786d644040");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email Submitted Successfully");
      event.target.reset();
    
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
   
    
  };

  
  return (
    <div id='contact' className="contact">
      <div className="contact-tittle">
        <h1>Get in Touch</h1>
        <img src={Theme} alt="Theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Mail Icon" /><p>hardikgurjar174@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="Call Icon" /><p>+91 91441 73686</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location Icon" /><p>Indore, INDIA</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
               <input type="text" placeholder='Enter your name..' name='name'/>
               <label htmlFor="">Your Email</label>
               <input type="email" placeholder='Enter your Email..' name='email' />
               <label htmlFor="">Write your message here</label>
               <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
               <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
