import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import BG from '../../assets/bg6.jpg'
import { Parallax } from 'react-parallax'

const Contact = () => {

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dddm119', 'template_569ptbh', form.current, 'ZsMkMsZ5bSm_MlLpN')
    
    e.target.reset();
    alert('Message sent successfully');
  };

  return (
    <section id='contact'>
      <div className='top_contact'>
        <h4>Get in touch</h4>
        <h1>Contact me</h1>
      </div>

      <Parallax bgImage={BG} strength={700}>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/> 
            <h4>Email</h4>
            <h5>munnigel@yahoo.com.sg</h5>
            <a href='mailto:munnigel@yahoo.com.sg' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/> 
            <h4>WhatsApp</h4>
            <h5>+65 81837238</h5>
            <a href='https://wa.me/6581837238' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaTelegramPlane className='contact__option-icon'/> 
            <h4>Telegram</h4>
            <h5>@username: Spidermunn</h5>
            <a href='https://t.me/Spidermunn' target="_blank">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your email address' required />
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </Parallax>
    </section>
  )
}

export default Contact