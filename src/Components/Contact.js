// Contact.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaVimeo,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      <section className="section parallax-container context-dark">
        <div className="parallax-content parallax-header">
          <div className="parallax-header__inner context-dark">
            <div className="parallax-header__content">
              <div className="container">
                <div className="row justify-content-sm-center">
                  <div className="col-md-10 col-xl-8">
                    <h2 className="heading-decorated">Contacts</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-md bg-default decor-text"
        data-content="Contact"
      >
        <div className="container">
          <div className="row row-50">
            <div className="col-md-5 col-lg-4">
              <h4 className="heading-decorated">Contact Details</h4>
              <ul className="list-sm contact-info">
                <li>
                  <dl className="list-terms-inline">
                    <dt>Address</dt>
                    <dd>123 Tech Street, Innovation City</dd>
                  </dl>
                </li>
                <li>
                  <dl className="list-terms-inline">
                    <dt>Phones</dt>
                    <dd>
                      <ul className="list-semicolon">
                        <li>
                          <a href="tel:#">(123) 456-7890</a>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl className="list-terms-inline">
                    <dt>Opening Hours</dt>
                    <dd>Mon-Sat: 10 am-6:30 pm</dd>
                  </dl>
                </li>
                <li>
                  <ul className="list-inline-sm">
                    <li>
                      <a className="icon-sm" href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a className="icon-sm" href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a className="icon-sm" href="#">
                        <FaGooglePlus />
                      </a>
                    </li>
                    <li>
                      <a className="icon-sm" href="#">
                        <FaVimeo />
                      </a>
                    </li>
                    <li>
                      <a className="icon-sm" href="#">
                        <FaYoutube />
                      </a>
                    </li>
                    <li>
                      <a className="icon-sm" href="#">
                        <FaPinterest />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="heading-decorated">Get in Touch</h4>
              <form
                className="rd-mailform rd-mailform_style-1 form-shadow"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-wrap form-wrap_icon">
                  <input
                    className="form-input"
                    id="contact-name"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                    required
                  />
                  <label className="form-label" htmlFor="contact-name">
                    Your name
                  </label>
                </div>
                <div className="form-wrap form-wrap_icon">
                  <input
                    className="form-input"
                    id="contact-email"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                    required
                  />
                  <label className="form-label" htmlFor="contact-email">
                    Your e-mail
                  </label>
                </div>
                <div className="form-wrap form-wrap_icon">
                  <textarea
                    className="form-input"
                    id="contact-message"
                    name="message"
                    data-constraints="@Required"
                    required
                  ></textarea>
                  <label className="form-label" htmlFor="contact-message">
                    Your message
                  </label>
                </div>
                <button
                  className="button button-primary button-shadow"
                  type="submit"
                >
                  Send
                </button>
              </form>
              <button className="button" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="google-map-container"
          data-zoom="5"
          data-center="123 Tech Street, Innovation City"
          data-styles='[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":60}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":30}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ef8c25"},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b6c54c"},{"lightness":40},{"saturation":-40}]},{}]'
        >
          <div className="google-map"></div>
          <ul className="google-map-markers">
            <li
              data-location="123 Tech Street, Innovation City"
              data-description="123 Tech Street, Innovation City"
            ></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
