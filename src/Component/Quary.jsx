import react from 'react';
import "./Style.css";
import "./Home.css";
// import './libraries.css';
import logo from './logo/abhishek.jpg';
import Navbar from './Navbar';
import Footer from "./Footer";

function Account() {
    return (
        <>
    <Navbar/>
    <div className="container">
            <div className="col-sm-12 col-md-12 col-lg-12">
            <form className="contact__form-panel">
              <div className="row">
                <div className="col-sm-12 contact__form-panel-header">
                  <h4>Ask Quary Or Suggestion</h4>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group"><input type="text" className="form-control" placeholder="Name*" required/></div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group"><input type="email" className="form-control" placeholder="Email*" required/></div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group"><input type="tel" className="form-control" id="phone" name="phone" pattern="[0-9]{10}" placeholder="Contact Number*"  required/></div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group"><input type="text" className="form-control" placeholder="Loction*" required/></div>
                </div>
                {/* <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group form-group-select" >
                    <select className="form-control">
                      <option>0-1 Year Experience</option>
                      <option>1-2 Year Experience</option>
                      <option>2-3 Year Experience</option>
                      <option>3-4Year Experience</option>
                      <option>4-5 Year Experience</option>
                      <option>5+ Year Experience </option>
                     
                    </select>
                  </div>
                </div> */}
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Quary Or Suggestion"></textarea>
                  </div>  
                   <div className="form-group">
                    <label><span className="wpcf7-form-control-wrap resume"><input type="file" name="resume" size="40" className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required" accept=".pdf,.docx,.doc" aria-required="true" aria-invalid="false" required/></span></label>
                  </div>
                
                  {/* <!-- <div className="cptcha">
                    <div className="wpcf7-form-control-wrap"><div data-sitekey="6LcntHoUAAAAAHayzIjnLRi9mhDK9-bD-7foxcfF" className="wpcf7-form-control g-recaptcha wpcf7-recaptcha"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LcntHoUAAAAAHayzIjnLRi9mhDK9-bD-7foxcfF&amp;co=aHR0cHM6Ly93d3cuZ21tYXJjLmNvbTo0NDM.&amp;hl=en-GB&amp;v=dPctOHA2ifhWm5WzFM_B5TjT&amp;size=normal&amp;cb=aj6kzhgl4rop" width="304" height="78" role="presentation" name="a-ssa4xokg9y5k" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
                    <noscript>
                      <div style="width: 302px; height: 422px;">
                        <div style="width: 302px; height: 422px; position: relative;">
                          <div style="width: 302px; height: 422px; position: absolute;">
                            <iframe src="https://www.google.com/recaptcha/api/fallback?k=6LcntHoUAAAAAHayzIjnLRi9mhDK9-bD-7foxcfF" frameborder="0" scrolling="no" style="width: 302px; height:422px; border-style: none;">
                            </iframe>
                          </div>
                          <div style="width: 300px; height: 60px; border-style: none; bottom: 12px; left: 25px; margin: 0px; padding: 0px; right: 25px; background: #f9f9f9; border: 1px solid #c1c1c1; border-radius: 3px;">
                            <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;">
                            </textarea>
                          </div>
                        </div>
                      </div>
                    </noscript>
                    </div>
                    </div> --> */}
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <button type="submit" className="btn btn__primary btn__block">Send</button>
                </div>
              </div>
            </form>
          </div>
          </div>
          <Footer/>
        </>
    );
}

export default Account;