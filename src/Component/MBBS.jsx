import React from 'react';
import "./Style.css";
import "./Home.css";
// import './libraries.css';
import logo from './logo/abhishek.jpg';
import Navbar from './Navbar';
import Footer from "./Footer";

const bg={
  backgroundColor: 'blue',
}

const img={
width:'200px',
hight:'200px'
}

const img1 = {
  // height: '300px',
  // width: '300px',
  display: 'inline-flex'
  
}


function MBBS() {
  return(
       <div>
  <Navbar/>
   <section id="page-title" className="page-title page-title-layout8 bg-overlay bg-parallax text-center">
      <div className="bg-img"><img src="assets/images/page-titles/9.jpg" alt="background"/></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
            <h1 className="pagetitle__heading">MBBS</h1>
            {/* <!-- <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Products</a></li>
                <li className="breadcrumb-item active" aria-current="page">Mild Steel Welding Electrodes  </li>
              </ol>
            </nav> --> */}
          </div>
        </div>
      </div>
    </section>
    <section id="textContentSection" className="text-content-section pt-110">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 bg-light position-top-sticky">
            <aside className="sidebar mb-30 ">
              <div className="widget widget-categories">
                <div className="widget-content">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="active"><span>MBBS</span><i
                          className="icon-arrow-right"></i></a>
                    </li>
                    <li>
                      <a href="#"><span>BDS</span><i className="icon-arrow-right"></i></a>
                    </li>
                    <li>
                      <a href="#"><span>BAMS</span><i className="icon-arrow-right"></i></a>
                    </li>
                    <li>
                      <a href="#"><span>BHMS</span><i className="icon-arrow-right"></i></a>
                    </li>
                    {/* <li>
                      <a href="#"><span>Stainless Steel MIG Wire</span><i className="icon-arrow-right"></i></a>
                    </li>
                    <li>
                      <a href="#"><span>Stainless Steel TIG Wire</span><i className="icon-arrow-right"></i></a>
                    </li>
                    <li>
                      <a href="#"><span>Stainless Steel SAW Wire</span><i className="icon-arrow-right"></i></a>
                    </li>
                    <li>
                      <a href="#"><span>MIG/CO2/CCMS Wire</span><i className="icon-arrow-right"></i></a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="widget widget-help" style={bg}>
                
                <div className="widget__content">
                  <i className="icon-worker-2"></i>
                  <h5>Dedicated Customer Teams & Agile Services</h5>
                  <p>Our worldwide presence ensures the timeliness, cost efficiency compliance adherence required to
                    ensure your production timelines are met.</p>
                  <a href="#" className="btn btn__white btn__bordered btn__block">Schedule An Appointment</a>
                </div>
              </div>
              <div className="widget widget-download">
                <div className="widget__content">
                  <a href="#" className="btn btn__secondary btn__block mb-20">
                    <span>Download Our <br/> Company Report 2020</span>
                    <img src="assets/images/icons/pdf.png" alt="pdf"/>
                  </a>
                  <a href="#" className="btn btn__primary btn__block">
                    <span>Download Our <br/> Company Brochure</span>
                    <img src="assets/images/icons/pdf.png" alt="pdf"/>
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="abttop">
                  <h3 className="smallheading">Top 31 MBBS College in India</h3>
                  <table border="1" width="100%">
                    <tbody className="table-hover">
                      <tr className="topheadrow firstrow">
                        <td colspan="2" rowspan="2">Product Name</td>
                        <td>classNameification</td>
                        <td colspan="5">Mechanical Properties Of Weld Metal (Typical)</td>
                        <td rowspan="2">Unique Feature</td>
                        <td rowspan="2">TDS</td>
                      </tr>
                      <tr className="topheadrow secondrow">
                        <td>AWS/SFA</td>
                        <td>Yield Strength N/mm2</td>
                        <td>Tensile Strength N/mm2(MIN)</td>
                        <td>Elongation 4D(%)</td>
                        <td>Impact (J)</td>
                        <td>Welding Conditions</td>
                      </tr>
                      <tr className="prdnamebg">
                        <td colspan="10">CELLULOSIC ELECTRODES</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>GM 60 P</td>
                        <td>E 6010</td>
                        <td>380</td>
                        <td>510</td>
                        <td>24</td>
                        <td>47 at -30°C</td>
                        <td>DC(+)</td>
                        <td>A high cellulose sodium electrode with excellent penetration at all position. Best suitable
                          for pipes and pipelines welding. Excellent mechanical properties in className.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>2</td>
                        <td>GM 60 PR</td>
                        <td>E 6011</td>
                        <td>380</td>
                        <td>515</td>
                        <td>24</td>
                        <td>47 at -30°C</td>
                        <td>AC;DC+</td>
                        <td>A high cellulose potassium electrode with excellent penetration at all position. Best
                          suitable for pipes and pipelines welding. Excellent mechanical properties in className.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>GM 70 P</td>
                        <td>E 7010 P1</td>
                        <td>415</td>
                        <td>490</td>
                        <td>22</td>
                        <td>27 at -30°C</td>
                        <td>AC;DC+</td>
                        <td>Heavy Coated all postion electrode with cellulosic coating providing good welder appeal and
                          smooth arc characterstic .This electrode has been specially deisgn for high yeild pipeline
                          steels.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="prdnamebg">
                        <td colspan="10">RUTILE ELECTRODES</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>GM 10</td>
                        <td>E 6013</td>
                        <td>330</td>
                        <td>430</td>
                        <td>17</td>
                        <td>NA</td>
                        <td>AC;DC+</td>
                        <td>All position general purpose electrode with striking &amp; restriking charecters</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>5</td>
                        <td>GM 20</td>
                        <td>E 6013</td>
                        <td>410</td>
                        <td>505</td>
                        <td>24</td>
                        <td>70 at 0°C</td>
                        <td>AC;DC+</td>
                        <td>very soft arc, minimum spatter, smooth fine rippled radiographic weld bead. Superior slag
                          detachablity. Excellent impact notch toughness at 0&amp;deg;C</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>MODI XL 13S</td>
                        <td>E 6013</td>
                        <td>410</td>
                        <td>480</td>
                        <td>24</td>
                        <td>60 at 0°C</td>
                        <td>AC;DC+</td>
                        <td>Ultra smooth weldability. Especially suited for thick section fillet joints. Excellent arc
                          stability even at low current.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>7</td>
                        <td>GM 30</td>
                        <td>E 6013</td>
                        <td>430</td>
                        <td>520</td>
                        <td>25</td>
                        <td>70 at 0°C</td>
                        <td>AC;DC+</td>
                        <td>Ultra smooth weldability. Very smooth fusion with excellent slag detachability. Especially
                          suited for thick section fillet joints. Excellent arc stability even at low current.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>GM 40</td>
                        <td>E 6013</td>
                        <td>430</td>
                        <td>525</td>
                        <td>25</td>
                        <td>70 at 0°C</td>
                        <td>AC;DC+</td>
                        <td>Rutile heavy coated, finely rippled smooth weld bead. Superior slag detachability. Excellent
                          arc striking and restrinking.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="prdnamebg">
                        <td colspan="10">LOW HYDROGEN HIGH STRENGTH ELECTRODES</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>GM 14</td>
                        <td>E 7014</td>
                        <td>438</td>
                        <td>519.7</td>
                        <td>26</td>
                        <td>70 at -27°C</td>
                        <td>AC;DC+</td>
                        <td>Heavy coated rutile type electrode with minimum 110% recovery</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>10</td>
                        <td>GM 24</td>
                        <td>E 7024</td>
                        <td>400</td>
                        <td>490</td>
                        <td>17</td>
                        <td>NA</td>
                        <td>AC;DC+</td>
                        <td>Rutile Base Super Heavy Coated Electrode with 130 min recovery ,suitable for Horizental
                          &amp; Fillet welding of heavier section with radiography qulaity.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>GM 16</td>
                        <td>E 7016-H4</td>
                        <td>495</td>
                        <td>590</td>
                        <td>27</td>
                        <td>70 at -30°C</td>
                        <td>DC+;AC</td>
                        <td>Excellent weldability. Self peeling slag. Excellent mechanical Properties.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>12</td>
                        <td>GM 16 SPL</td>
                        <td>E 7016-1-H4</td>
                        <td>495</td>
                        <td>600</td>
                        <td>30</td>
                        <td>60 at -45°C</td>
                        <td>DC+;AC</td>
                        <td>Ultra Smoot finely ripled weld bead. Less than 4.0 ml diffusible hydrogen. Excellent impact
                          notch toughness in className.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>GM 16-A1</td>
                        <td>E 7016-A1-H4</td>
                        <td>480</td>
                        <td>595</td>
                        <td>26</td>
                        <td>N/S</td>
                        <td>DC+;AC</td>
                        <td>Ultra Smoot finely ripled weld bead. Less than 4.0 ml diffusible hydrogen. Excellent for C-
                          0.50% Mo Steels.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>14</td>
                        <td>GM 18</td>
                        <td>E 7018-H4</td>
                        <td>505</td>
                        <td>605</td>
                        <td>28</td>
                        <td>80 at -30°C</td>
                        <td>AC:DC+</td>
                        <td>Excellent weldabillity. Best in className mechanical properties. Lesss than 4.0 ml diffusible
                          hydrogen level.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>GM 18 G</td>
                        <td>E 7018-G-H4</td>
                        <td>495</td>
                        <td>590</td>
                        <td>23</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Excellent Weldability. Tough and crack free joints.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>16</td>
                        <td>GM 18 SPL</td>
                        <td>E 7018-1-H4</td>
                        <td>510</td>
                        <td>600</td>
                        <td>30</td>
                        <td>70 at -45°C</td>
                        <td>AC:DC+</td>
                        <td>Ultra Smooth finely rippled weld bead. Less than 4.0 ml diffusible hydrogen level.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>GM 18 A1</td>
                        <td>E 7018-A1-H4</td>
                        <td>490</td>
                        <td>600</td>
                        <td>26</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Excellent weldabbility. Best suited positional welding. Excellent creep resistant.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="prdnamebg">
                        <td colspan="10">HEAT RESISTING ELECTRODES / HIGH STRENGTH ELECTRODES (LOW HYDROGEN)</td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>GM 80 G</td>
                        <td>E 8018-G</td>
                        <td>510</td>
                        <td>620</td>
                        <td>28</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Excellent toughness and formability. Highly crack resistant joint welding.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>19</td>
                        <td>GM 80 B2</td>
                        <td>E 8018-B2</td>
                        <td>505</td>
                        <td>600</td>
                        <td>20</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Ultra smooth finely rippled bead. Best in className mechanical properties.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>GM 80 B6</td>
                        <td>E 8018-B6</td>
                        <td>460</td>
                        <td>550</td>
                        <td>19</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Low Hydrogen Basic Iron Powder type electrode ,Design for creap resistant steel with 5 %cr
                          and 0.5 % mo</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>21</td>
                        <td>GM 80 B8</td>
                        <td>E 8018-B8</td>
                        <td>460</td>
                        <td>550</td>
                        <td>19</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Basic Coated Low Hydrogen type electrdoe yelding 9 % cr and 1 % mo</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>22</td>
                        <td>GM 80 C1</td>
                        <td>E 8018-C1</td>
                        <td>460</td>
                        <td>550</td>
                        <td>19</td>
                        <td>27 at -60°C</td>
                        <td>AC:DC+</td>
                        <td>Hydrogen Controled iron poweder type heavy coated electrdoe ,suitable for medium tensil and
                          low alloy stractural steel</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>23</td>
                        <td>GM 80 W2</td>
                        <td>E 8018-W2</td>
                        <td>460</td>
                        <td>550</td>
                        <td>19</td>
                        <td>27 J at -20°C</td>
                        <td>AC:DC+</td>
                        <td>Basic Coated Electrode which gives radiographic quality weld ,Design for low alloy
                          steel,Cupper bearing corresion resistant steel.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>GM 90 B3</td>
                        <td>E 9018-B3</td>
                        <td>610</td>
                        <td>715</td>
                        <td>20</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Excellent weldability and mechanical properties.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>25</td>
                        <td>GM 90 G</td>
                        <td>E 9018-G</td>
                        <td>605</td>
                        <td>710</td>
                        <td>20</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Excellent weldability extra low hydrogen, self peeling slag, best in className mechanical
                          properties.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>GM 90 M</td>
                        <td>E 9018 M-H4</td>
                        <td>540</td>
                        <td>620</td>
                        <td>24</td>
                        <td>27 J at -50°C</td>
                        <td>AC:DC+</td>
                        <td>Extra Low Hydrogen. Tough and crack free welded joints. Excellent mechanical properties.
                        </td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>27</td>
                        <td>GM 90 D1</td>
                        <td>E 9018-D1</td>
                        <td>530</td>
                        <td>620</td>
                        <td>17</td>
                        <td>27 J at -50°C</td>
                        <td>AC:DC+</td>
                        <td>Heavy coated low hydrogen electrdoe suitable for welding of high strength steel</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>GM 100 D2</td>
                        <td>E 10018-D2-H4</td>
                        <td>620</td>
                        <td>725</td>
                        <td>22</td>
                        <td>50 at -50°C</td>
                        <td>AC:DC+</td>
                        <td>Smooth finely rippled weld bead. Excellent impact notch toughness at -50’C. Recommended for
                          critical secuirty welding applications.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>29</td>
                        <td>GM 100-G</td>
                        <td>E 10018-G-H4</td>
                        <td>680</td>
                        <td>810</td>
                        <td>18</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Superior weldability, concentrated arc, smooth weld bead, self releasing slag.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>GM 110-G</td>
                        <td>E 11018-G-H4</td>
                        <td>720</td>
                        <td>780</td>
                        <td>16</td>
                        <td>N/S</td>
                        <td>AC:DC+</td>
                        <td>Superior weldability, concentrated smooth arc, all positisons, crack free joints.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                      <tr className="diffbg">
                        <td>31</td>
                        <td>GM 110-M</td>
                        <td>E 11018-M-H4</td>
                        <td>710</td>
                        <td>810</td>
                        <td>20</td>
                        <td>45 at -50°C</td>
                        <td>AC:DC+</td>
                        <td>Excellent weldability. Best in className mechanical properties.</td>
                        <td><a className="pdf-link" href="#" rel="nofollow">Download</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text__block mt-100">
                  <h5 className="text__block-title">How It Works?!</h5>
                  <p className="text__block-desc">We have more than twenty years of experience. During that time, we’ve
                    become expert in freight transportation by air and all its related services. We work closely with
                    all major airlines around the world. Ongoing negotiations ensure that we always have the cargo
                    space we need and offer you competitive rates.
                  </p>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h5>Key Benifits</h5>
                <div id="accordion" className="mb-60">
                  <div className="accordion-item">
                    <div className="accordion__item-header" data-toggle="collapse" data-target="#collapse1">
                      <a className="accordion__item-title" href="#">Which Plan Is Right For Me?</a>
                    </div>
                    <div id="collapse1" className="collapse" data-parent="#accordion">
                      <div className="accordion__item-body">
                        <p>Fully responsive, retina ready & created for all types of devices. York makes sure your
                          website looks equally breathtaking when viewed on all screen resolutions.Fully responsive,
                          retina
                          ready & created for all types of devices. York makes sure your website looks equally
                          breathtaking
                          when viewed on all screen resolutions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion__item-header" data-toggle="collapse" data-target="#collapse2">
                      <a className="accordion__item-title" href="#">Do I have to commit to a contract?</a>
                    </div>
                    <div id="collapse2" className="collapse" data-parent="#accordion">
                      <div className="accordion__item-body">
                        <p>Fully responsive, retina ready & created for all types of devices. York makes sure your
                          website
                          looks equally breathtaking when viewed on all screen resolutions.Fully responsive, retina
                          ready
                          & created for all types of devices. York makes sure your website looks equally breathtaking
                          when
                          viewed on all screen resolutions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item opened">
                    <div className="accordion__item-header" data-toggle="collapse" data-target="#collapse3">
                      <a className="accordion__item-title" href="#">What Payment Methods Are Available?</a>
                    </div>
                    <div id="collapse3" className="collapse show" data-parent="#accordion">
                      <div className="accordion__item-body">
                        <p>Fully responsive, retina ready & created for all types of devices. York makes sure your
                          website looks equally breathtaking when viewed on all screen resolutions.Fully responsive,
                          retina
                          ready & created for all types of devices. York makes sure your website looks equally
                          breathtaking
                          when viewed on all screen resolutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <h5>Case Studies</h5>
                <div className="portfolio-carousel portfolio-classNameic">
                  <div className="carousel owl-carousel carousel-arrows" data-slide="2" data-slide-md="2" data-slide-sm="1"
                    data-autoplay="true" data-nav="true" data-dots="false" data-space="30" data-loop="true"
                    data-speed="800" style={img1}>
                    <div className="portfolio-item">
                      <div className="portfolio__img">
                        <img src={logo} alt="portfolio img" style={img}/>
                        <a href="#" className="view__icon">View</a>
                      </div>
                      <div className="portfolio__content">
                        <h4 className="portfolio__title"><a href="#">Floride Chemicals Factory</a></h4>
                        <div className="portfolio__cat">
                          <a href="#">Chemicals</a><a href="#">oil & Gas</a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-item">
                      <div className="portfolio__img">
                        <img src={logo} alt="portfolio img"  style={img}/>
                        <a href="#" className="view__icon">View</a>
                      </div>
                      <div className="portfolio__content">
                        <h4 className="portfolio__title"><a href="#">Highway Energy Station</a></h4>
                        <div className="portfolio__cat">
                          <a href="#">Construction </a><a href="#">Energy</a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-item">
                      <div className="portfolio__img">
                        <img src={logo} alt="portfolio img" style={img}/>
                        <a href="#" className="view__icon">View</a>
                      </div>
                      <div className="portfolio__content">
                        <h4 className="portfolio__title"><a href="#">Villy Manufacturing Inc</a></h4>
                        <div className="portfolio__cat">
                          <a href="#">Engineering</a><a href="#">Auto</a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-item">
                      <div className="portfolio__img">
                        <img src={logo} alt="portfolio img" style={img}/>
                        <a href="#" className="view__icon">View</a>
                      </div>
                      <div className="portfolio__content">
                        <h4 className="portfolio__title"><a href="#">Regulatory Compliance Seminar</a></h4>
                        <div className="portfolio__cat">
                          <a href="#">Construction</a><a href="#">Engineering</a>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-item">
                      <div className="portfolio__img">
                        <img src={logo} alt="portfolio img" style={img}/>
                        <a href="#" className="view__icon">View</a>
                      </div>
                      <div className="portfolio__content">
                        <h4 className="portfolio__title"><a href="#">Documents & Electronic Data</a></h4>
                        <div className="portfolio__cat">
                          <a href="#">Engineering</a><a href="#">oil & Gas</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>

    <script src="assets/js/jquery-3.3.1.min.js"></script>
  <script src="assets/js/plugins.js"></script>
  <script src="assets/js/main.js"></script>
       </div>


  );
}

export default MBBS;
