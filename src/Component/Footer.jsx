import React from 'react';
import "./Style.css";
import "./Home.css";
// import logo from './logo/abhishek.jpg';
import logo from './logo/grad.jpg';

const img={
    hight: '80px',
    width: '80px'
    }
  


function Footer() {
    return (
        <div>
           <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-3 footer__widget footer__widget-about mb-30">
                                <div className="footer__widget-content">
                                    <img src={logo} alt="logo" style={img} />
                                    <p>We produce positive results from ever growing Under graduation Cources Best College & Branch etc..</p>
                                    <a href="mailto:rkgupta@gmmarc.com " className="btn btn__primary btn__link btn__hover2">
                                        <i className="icon-arrow-right arrow-rounded"></i>
                                        <span>Request A Quary</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 footer__widget footer__widget-text">
                                <h6 className="footer__widget-title">Quick Contact</h6>
                                <div className="footer__widget-content">
                                    <p>If you have any questions or need help, feel free to contact with our team.</p>
                                    {/* <a href="tel:01142504577" className="phone-link">
                                        <i className="icon-phone"></i><span>(011) 42504577</span>
                                    </a>
                                    <p>Regd. Office: 813 Modi Tower, 98, Nehru Place, New Delhi-110019 (INDIA)</p> */}
                                    {/* <!-- <ul className="social__icons list-unstyled mt-30 mb-30">
      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
    </ul> --> */}
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2 footer__widget footer__widget-nav">
                                <h6 className="footer__widget-title">Graduation</h6>
                                <div className="footer__widget-content">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li><a href="#">About Us</a></li>
                                            {/* <!-- <li><a href="#">Meet Our Team</a></li>
        <li><a href="#">News & Media</a></li>
        <li><a href="#">Case Studies</a></li> --> */}
                                            <li><a href="#">Contacts</a></li>
                                            <li><a href="#">Quary</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 footer__widget footer__widget-newsletter">
                                <div className="footer__widget-content">
                                    <p>Sign up for Notification alerts, our latest news, thoughts, and insights from Start_graduation. You may
                                        withdraw
                                        your consent at any time!</p>
                                    <form className="widget__newsletter-form">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" placeholder="Your Email Address" />
                                            <button type="submit" className="btn">
                                                <i className="icon-arrow-right arrow-rounded"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <nav>
                                    <ul className="footer__sitemap-links list-unstyled d-flex justify-content-end flex-wrap">
                                        <li><a href="#">Terms & Conditions </a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="footer__contact">
                                    <div className="footer__contact-item">
                                        <div className="footer__contact-item-icon">
                                            <i className="icon-phone"></i>
                                        </div>
                                        <div className="footer__contact-item-text">
                                            <span>Call Us:</span>
                                            <strong><a href="tel:00123968574">9984261451</a></strong>
                                        </div>
                                    </div>
                                    <div className="footer__contact-item">
                                        <div className="footer__contact-item-icon">
                                            <i className="icon-envelope"></i>
                                        </div>
                                        <div className="footer__contact-item-text">
                                            <span>Email Us:</span>
                                            <strong><a href="mailto:info@umeshmodigroup.com">StartGraduation11@gmail.com</a></strong>
                                        </div>
                                    </div>
                                    <div className="footer__contact-item">
                                        <div className="footer__contact-item-icon">
                                            <i className="icon-clock"></i>
                                        </div>
                                        <div className="footer__contact-item-text">
                                            <span>24/7 Abivlibility</span>
                                           
                                        </div>
                                    </div>
                                    <div className="footer__contact-item">
                                        <a href="contacs.html" className="btn btn__block btn__primery">Search Best College </a>
                                    </div>
                                </div>
                                <div className="footer__copyright text-center">
                                    <span> @copyrigt; 2020 Abhishek Singh, with Love by-
                                        <a href="sitdown url">Start-Graduation</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <button id="scrollTopBtn"><i className="fa fa-long-arrow-up"></i></button>
        </div>
    );
}


export default Footer;