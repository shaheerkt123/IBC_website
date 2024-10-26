import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/bootstrap.min.css';
import 'assets/css/plugins/owl.carousel.min.css';
import 'assets/font/flaticon.css';
import 'assets/css/all.min.css';
import 'assets/css/fontawsom-all.min.css';
import 'assets/css/style.css';

const ContactUs: React.FC = () => {
  return (
    <div>
      <header>
        <div className="my-nav sub-01">
          <div className="container">
            <div className="nav-items">
              <div className="menu-toggle">
                <div className="menu-burger"></div>
              </div>
              <div className="logo">
                <img
                  style={{ borderRadius: '10px', width: '153px', height: '45px' }}
                  src="assets/images/logo/logo.png"
                  alt="Logo"
                />
              </div>
              <div className="menu-items">
                <div className="menu">
                <ul>
                  <li>
                    <Link to="HomeScreen">Home</Link>
                  </li>
                  <li>
                    <Link to="AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link to="Services">Services</Link>
                  </li>
                  <li>
                    <Link to="Blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="ContactUs">Contact Us</Link>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="abt-01">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="setting">
                  <h3>Contact Us</h3>
                  <ol>
                    <li>Home <i className="fas fa-chevron-double-right"></i></li>
                    <li>Contact Us</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-001">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="heading">
                  <h2>GET IN TOUCH</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="contact-box">
                  <ul>
                    <li>First Floor, Vincent Plaza, Kuzhithurai, Marthandam, Kanyakumari Dist Tamilnadu, India - 629163</li>
                    <li>sales@smarteyeapps.com</li>
                    <li>+91 9751791203</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="contact-box">
                  <form action="" className="my-form">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group">
                      <div className="link">
                        <a href="#">Send</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="wrapper">
                <div className="content">
                  <h2>About Us</h2>
                  <p>
                    We’re reimagining how you buy, sell and rent. It’s now easier
                    to get into a place you love. So let’s do this, together.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="wrapper">
                <div className="content">
                  <h2>Quick Links</h2>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="wrapper">
                <div className="content">
                  <h2>Contact Us</h2>
                  <ol>
                    <li>info@findhouse.com</li>
                    <li>Collins Street West, Victoria 8007, Australia.</li>
                    <li>+1 246-345-0695</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="wrapper">
                <div className="content">
                  <h2>Follow Us</h2>
                  <div className="social-media">
                    <ol>
                      <li><i className="fab fa-facebook-f"></i></li>
                      <li><i className="fab fa-twitter"></i></li>
                      <li><i className="fab fa-instagram"></i></li>
                      <li><i className="fab fa-pinterest-p"></i></li>
                      <li><i className="fab fa-dribbble"></i></li>
                      <li><i className="fab fa-google"></i></li>
                    </ol>
                  </div>
                  <h2>Subscribe</h2>
                  <div className="submit-card">
                    <div className="form-group">
                      <input className="form-control" name="email" placeholder="Your Email" />
                      <i className="fal fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script src="assets/js/jquery-3.2.1.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/plugins/owl.carousel.min.js"></script>
      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default ContactUs;