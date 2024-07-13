import React from "react";
import Back from "../common/back/Back";
import './contact.css'

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310847.31902568496!2d13.095097421551879!3d52.50638616743007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2snl!4v1719914854597!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <>
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>198 west 21st street , suite 751, New York NY 10016</p>
              </div>
              <div className="box">
                <h4>Email:</h4>
                <p>info@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>123 456 7890</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
