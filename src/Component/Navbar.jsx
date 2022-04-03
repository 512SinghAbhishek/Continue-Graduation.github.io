import react from "react";
import "./Style.css";
import "./Home.css";
import { NavLink } from "react-router-dom";
import logo from './logo/grad.jpg';
import Ind from './logo/india.png';
import { CaretDownOutlined } from '@ant-design/icons';



const NavbarBrand = {
  backgroundColor: '#1275ba',
}
const dropdown = {
  left: '0px'
}
const img = {
  hight: '80px',
  width: '80px'
}
const nav1 = {
  left: '-480px'
}
const img1 = {
  hight: '40px',
  width: '50px'
}
function Navbar() {
  return (
    <>
      <header id="header" className="header header-layout1">
        {/* <div className="header__promo-text text-center">
            <strong>Need Help:</strong><span>Providing Innovative and Sustainable Solutions, Call (002) 01061245741</span>
        </div>  */}
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container-fluid px-0">
            <a className="navbar-brand" href="index.html" style={NavbarBrand}>
              <img src={logo} className="logo-light" alt="logo" style={img} />

              <img src={logo} className="logo-dark" alt="logo" style={img} />
            </a>
            <button className="navbar-toggler" type="button">
              <span className="menu-lines"><span></span></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="navbar-nav mx-auto">
                <li className="nav__item">
                  <NavLink to="/" activeClassName="nav__item-link active">Home</NavLink>
                </li>

                <li className="nav__item"><NavLink to="/About" className="nav__item-link">About Us</NavLink>
                </li>
                {/* <li className="nav__item with-dropdown">
              <a  className="dropdown-toggle nav__item-link">Company Profile</a>
                <i className="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul className="dropdown-menu" style={nav}>
                  <li className="nav__item"><NavLink to="/About" className="nav__item-link">About Us</NavLink></li>
                  <li className="nav__item"><NavLink to="/About" className="nav__item-link">About Us</NavLink></li>
                </ul>
              </li> */}
                <li className="nav__item with-dropdown">
                  <a className="dropdown-toggl nav__item-link">Degree <CaretDownOutlined /></a>
                  
                  <ul className="dropdown-menu wide-dropdown-menu" style={nav1}>
                    <li className="nav__item">
                      <div className="row mx-0">
                        <div className="col-sm-6 dropdown-menu-col">
                          <a href="WeldingConsumables.html">
                            <h6>Technical Degree</h6>
                          </a>
                          <ul className="nav flex-column">
                            <li className="nav__item"><NavLink to="/Btech" className="nav__item-link">B tech</NavLink>
                            </li>
                            <li className="nav__item"><NavLink to="/Politechnic" className="nav__item-link">Politecnic</NavLink>
                            </li>
                            <li className="nav__item"><NavLink to="/BCA" className="nav__item-link">BCA</NavLink>
                            </li>
                            <li className="nav__item"><NavLink to="/ITI" className="nav__item-link">ITI</NavLink>
                            </li>
                          </ul>
                        </div>

                        <div className="col-sm-6 dropdown-menu-col">
                          <a href="nonwelding.html">
                            <h6>Medical Degree</h6>
                          </a>
                          <ul className="nav flex-column">
                            <li className="nav__item"><NavLink to="/MBBS" className="nav__item-link">MBBS( Bachelor of Medicine, Bachelor of Surgery)</NavLink>
                            </li>
                            <li className="nav__item"><NavLink to="/BDS" className="nav__item-link">BDS(Bachelor of Dental Surgery)</NavLink>
                            </li>
                            <li className="nav__item"><NavLink to="/BAMS" className="nav__item-link">BAMS(Bachelor of Ayurvedic Medicine and Surgery)</NavLink>
                            </li>
                            <li className="nav__item"><NavLink to="/BHMS" className="nav__item-link">BHMS(Bachelor of Homeopathy Medicine and Surgery)</NavLink>
                            </li>
                          </ul>
                        </div>
                        {/* <div className="col-sm-4 dropdown-menu-col">
                        <a href="rollinguide.html">
                          <h6>Rolling Guide</h6>
                        </a>
                        <ul className="nav flex-column">
                          <li className="nav__item"><a className="nav__item-link" href="#">Mild
                              Steel Welding Electrodes </a>
                          </li> 
                          <li className="nav__item"><a className="nav__item-link"
                              href="#">Stainless Steel Electrodes</a>
                          </li> 

                          
                        </ul>
                      </div> */}
                      </div>
                    </li>
                  </ul>
                </li>
                {/* <!-- <li className="nav__item with-dropdown">
                <a href="case-studies-grid.html" className="dropdown-toggle nav__item-link">Case Studies</a>
                <i className="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul className="dropdown-menu">
                  <li className="nav__item"><a href="case-studies-grid.html" className="nav__item-link">Case Studies Grid</a>
                  </li>
                  <li className="nav__item"><a href="case-studies-classNameic.html" className="nav__item-link">Case Studies
                      classNameic</a></li>
                  <li className="nav__item"><a href="case-studies-single.html" className="nav__item-link">Single Case Study</a>
                  </li>
                </ul>
              </li> --> */}
                <li className="nav__item"><a href="client.html" className="nav__item-link">Q&A</a></li>
                {/* <li className="nav__item with-dropdown">
                <a href="#" className="dropdown-toggle nav__item-link">Quality Process</a>
                <i className="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul className="dropdown-menu" style={dropdown}>
                  <li className="nav__item"><a href="client.html" className="nav__item-link">Approval</a></li>
               
                  <li className="nav__item"><a href="catalouge.html" className="nav__item-link">Catalouge</a></li>
                 
                </ul>
              </li> */}
                {/* <li className="nav__item">
                <a href="news.html" className="nav__item-link ">News</a>
              </li>
              <li className="nav__item">
                <a href="careers.html" className="nav__item-link ">Careers</a>
              </li> */}
                {/* <!-- <li className="nav__item with-dropdown">
                <a href="blog.html" className="dropdown-toggle nav__item-link">News</a>
                <i className="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul className="dropdown-menu">
                  <li className="nav__item"><a href="news.html" className="nav__item-link">Our Blog</a></li>
                  
                  <li className="nav__item"><a href="news-single-post.html" className="nav__item-link">Single Blog Post</a></li>
              
                </ul>
              </li> --> */}
                <li className="nav__item">
                  <NavLink to="/Login" className="nav__item-link">Login</NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-modules">
              <ul className="list-unstyled d-flex align-items-center modules__btns-list">

                <li className="nav__item">
                  <img src={Ind} style={img1} />
                </li>
                {/* <img src="assets/images/flags/ind.png" /><span>English</span> */}
                {/* <div className="dropdown dropdown__lang">
                  <button className="dropdown-toggle" id="langDrobdown" data-toggle="dropdown">
                    <img src="assets/images/flags/ind.png" /><span>English</span>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="langDrobdown">
                    <a className="dropdown-item" href="#">
                      <img src="assets/images/flags/ind.png" alt="fr"/><span>Hindi</span>
                    </a>
                    {/* <!-- <a className="dropdown-item" href="#">
                      <img src="assets/images/flags/gr.png" alt="gr"><span>germany</span>
                    </a> --> 
                  </div>
                </div> */}

                <li className="d-none d-lg-block">
                  <NavLink to="/Quary" className="btn btn__secondary module__btn-request">
                    <span>Quary</span><i className="icon-arrow-right"></i>
                  </NavLink>
                </li>
                {/* <!-- <li className="d-none d-lg-block">
                <form className="header__search-form">
                  <input type="text" className="search__input" placeholder="Search...">
                  <button><i className="fa fa-search"></i></button>
                </form>
              </li> --> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}


export default Navbar;