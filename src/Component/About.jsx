import react from "react";
import "./Style.css";
import "./Home.css";
import logo from './logo/abhishek.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './Navbar';
import Footer from "./Footer";


const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    },
};


const map={
  width:'1000px',
  height: '600px'
}

const img1 = {
  // height: '300px',
  // width: '300px',
  display: 'inline-flex'
  
}

function About() {
  return (
    <>
<Navbar/>

      <section id="page-title" className="page-title text-center bg-overlay bg-overlay-3 bg-parallax">
            <div className="bg-img"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                        <h1 className="pagetitle__heading">OverView Modi Group</h1>
                        {/* <!-- <p className="pagetitle__desc">We produce positive results from ever-growing Industrial & manufacturing estates,
              we have established a corporate mandate to maintain strong core values.</p> -->
                        <!-- <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Company</a></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav> --> */}
                    </div>
                </div>
            </div>
        </section>

        <section id="aboutLayout2" className="about about-layout2 pt-120 pb-40">
                <div id="animated-example" className="animated fadeIn">
                    <div className="container" data-autoplay="true" data-nav="true" data-speed="3000" data-transition="fade"
                        data-animate-out="fadeOut" data-animate-in="fadeIn">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
                                <div className="heading heading-3 mb-50">
                                    {/* <!-- <span className="heading__subtitle">Setting A Global Standard In Electonics.</span> --> */}
                                    <h1 className="heading__title">Legacy
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-10 col-lg-6 col-xl-5">
                                <div className="about__img mb-50">
                                    <img src={logo} alt="about" className="img-fluid" />
                                    {/* <!-- <div className="cta__banner">
      <div className="cta__icon">
        <i className="icon-gears"></i>
      </div>
      <h5 className="cta__title">Latest Solutions, And <br/> Decades Of Experience.</h5>
      <a href="#" className="btn btn__white btn__link">
        <i className="icon-arrow-right arrow-rounded arrow-rounded-white"></i>
      </a>
    </div> --> */}

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <div className="about__text mb-30">
                                    <h2 className="heading__title">Provides High Performance Services For Multiple Industries And
                                        Technologies!
                                    </h2>
                                    <p></p>
                                    <p>All great things begin with a step. The legacy of The Umesh Modi Group too began with a
                                        visionary step.
                                        Lt. Sh. Rai Bahadur Gujar Mal Modi’s vision for the future led him to lay the foundation
                                        of the business
                                        when he set up a sugar plant at Begumbad Uttar Pradesh. Rai Bahadur Gujar Mal Modi was a
                                        visionary and
                                        believed in collaborative work, he welcomed enterprises from all quarters, encouraging
                                        key members of
                                        the group to generate new ideas and forge strategic alliances, backed by technology and
                                        growth. His
                                        generous sense of commitment to society at large conjured up visions of sprawling
                                        townships, schools,
                                        hospitals, playgrounds as well as other social amenities. This visionary was felicitated
                                        with ‘Padma
                                        Bhushan’ by the Indian government.
                                    </p>

                                    <span id="dots">...</span><span id="more">
                                        <p></p>

                                        <p>Mr. Umesh K. Modi(a gold medalist chemical engineer from Banaras Hindu
                                            University),the
                                            Chairman,
                                            President, and CEO of Umesh Modi Group, ( who also holds the chairmanship of various
                                            organizations such
                                            as Steel and Furnace Association of India, Western U.P. Sugar Mills Association,
                                            Steel
                                            Wire
                                            Manufacturers Association of India, Sponge Iron Association of India as well as
                                            President of the
                                            Institute of Economic Studies) ,carried forward this spirit and the fire for taking
                                            the
                                            business to new
                                            horizons. And yes he did take it to new heights when it was in the early 80s of the
                                            20th
                                            century when he
                                            went into collaborations and joint ventures with some of the best known companies
                                            and
                                            brands that Europe
                                            and America had to offer.</p>
                                        <p>Being a determined business leader that he is, Mr. Umesh Kumar Modi is also a man of
                                            high
                                            values. It was his strong attachment to his roots & the vision of his father Lt. Sh.
                                            Rai
                                            Bahadur Gujar Mal Modi, that he expanded Modinagar and took the legacy to new
                                            heights
                                            with an accelerated speed. </p>
                                        <p>From being pioneers in welding electrodes and textile industry in India to still
                                            standing
                                            tall with pride till this day with a workforce of 10500 dedicated employees, 16
                                            branch
                                            offices across india and 2 international research and development centres, The Umesh
                                            Modi Group has a name that speaks for itself. This group is multifaceted and is one
                                            of
                                            the biggest conglomerates in the nation. And just like at the time of inception, The
                                            Umesh Modi Group still is driven by the same determination & vigour, all because of
                                            Mr.Umesh Kumar Modi’s impeccable leadership. This group is a living chronicle of
                                            what
                                            true dedication, strategy and a vision for the future can lead to.
                                        </p>
                                        <a href="about-us.html"><h6 className="mr-3" >View About Us</h6></a>
                                    </span>
                                </div>

                                {/* <script>
      function myFunction() {
          var dots = document.getElementById("dots");
          var moreText = document.getElementById("more");
          var btnText = document.getElementById("myBtn");

          if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more About Us";
              moreText.style.display = "none";
          } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less About Us";
              moreText.style.display = "inline";
          }
      }
  </script> */}

                                <div className="about__signature mb-30">
                                    <button className="btn btn__primary btn__bordered mr-40" onclick="myFunction()" id="myBtn">Read
                                        more About Us</button>
                                    {/* <!-- <button  className="btn btn__primary btn__bordered mr-40" onclick="myFunction()">MOre About Us</button> -->
<!-- <button onclick="myFunction()"><a href="#" className="btn btn__primary btn__bordered mr-40">More About Us</a></button> -->
<!-- <a href="#" className="btn btn__primary btn__bordered mr-40">More About Us</a> --> */}
                                    <img src="assets/images/about/singnture.png" alt="singnture" className="signature" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-1">
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-12">
                                        <div className="counter-item">
                                            <h4 className="counter">6,154</h4>
                                            <p className="counter__desc">portfolio Completed In The Last 5 Years</p>
                                        </div>
                                        <div className="divider__line d-none d-xl-block mb-40"></div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-12">
                                        <div className="counter-item">
                                            <h4 className="counter">179</h4>
                                            <p className="counter__desc">Brands Who Trusted Us</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        

        <section id="awards" className="  awards pb-70" >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                  <div className="heading text-center">
                    {/* <!-- <span className="heading__subtitle">Fast Growing Industrial &amp; Manufacturing Estates.</span> --> */}
                    <h2 className="heading__title" >Global Presence
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <section id="clients" className="section-bg">
                  <div className="container ">
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-12 d-flex order-3 order-xxl-2">
                        <div className="card flex-fill jvm-container">
                          {/* <!-- <div className="card-header">
                            <h5 className="card-title mb-0">Maps</h5>
                          </div> --> */}
                          <div className="card-body px-4 ">
                            <div id="world_map" style={map}></div>
                          </div>
                        </div>
                        {/* <!-- background: linear-gradient(to bottom right, #143470, #6AE0F2); --> */}
                      </div>
                    </div>
                    {/* <!-- <div id="world_map" className="row" style="width: 1000px; height: 600px;"></div> --> */}
                  </div>
                </section>
              </div>
            </div>
          </section>

        <section id="portfolioCarousel" className="portfolio-carousel portfolio-classNameic pt-90 pb-70">
            <div className="container">
                <div className="row mb-50">
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <div className="heading">
                            <span className="heading__subtitle">We Work With Global Industries!</span>
                            <h3 className="heading__title mb-0">Featured portfolio</h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <div className="cta__banner">
                            {/* <div className="bg-img"><img src="assets/images/backgrounds/pattern/1.jpg" alt="background"/> */}
                            {/* </div> */}
                            <h5 className="cta__title">Dedicated Customer <br/> Teams & An Agile Services</h5>
                            <p className="cta__desc">Building relationships and portfolio that last. Serving an impressive
                                list of
                                long-term clients with
                                experience and expertise in industries.</p>
                            <a href="#" className="btn btn__white btn__link">
                                <i className="icon-arrow-right arrow-rounded arrow-rounded-white"></i>
                                <span>View Our Works</span>
                            </a>
                        </div>
                    </div>
                </div>
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12" style={img1}>
                                    <div className="carousel owl-carousel carousel-arrows" data-slide="3" data-slide-md="2" data-slide-sm="1"
                                        data-autoplay="false" data-nav="false" data-dots="false" data-space="30" data-loop="false"
                                        data-speed="800">
                                    </div>

                                    {/* <div class="mobiscroll"> */}
                                    <div className="portfolio-item">
                                        <div className="portfolio__img">
                                            <img src={logo} alt="portfolio img" />
                                            <a href="news.html" className="view__icon">View</a>
                                        </div>
                                        <div className="portfolio__content">
                                            <h4 className="portfolio__title"><a href="#">
                                                Mumbai Exhibition</a></h4>
                                            <div className="portfolio__cat">
                                                <a href="#">December 11, 2018</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-item">
                                        <div className="portfolio__img">
                                            <img src={logo} alt="portfolio img" />
                                            <a href="news.html" className="view__icon">View</a>
                                        </div>
                                        <div className="portfolio__content">
                                            <h4 className="portfolio__title"><a href="#">
                                                Russia Exhibition</a></h4>
                                            <div className="portfolio__cat">
                                                <a href="#">September 29, 2018</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="portfolio-item">
                                        <div className="portfolio__img">
                                            <img src={logo} alt="portfolio img" />
                                            <a href="news.html" className="view__icon">View</a>
                                        </div>

                                        <div className="portfolio__content">
                                            <h4 className="portfolio__title"><a href="#">
                                                Turkey Exhibition</a></h4>
                                            <div className="portfolio__cat">
                                                <a href="#">December 24, 2018</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-item">
                                        <div className="portfolio__img">
                                            <img src={logo} alt="portfolio img" />
                                            <a href="news.html" className="view__icon">View</a>
                                        </div>
                                        <div className="portfolio__content">
                                            <h4 className="portfolio__title"><a href="#">
                                                Turkey Exhibition</a></h4>
                                            <div className="portfolio__cat">
                                                <a href="#">December 24, 2018</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-item">
                                        <div className="portfolio__img">
                                            <img src={logo} alt="portfolio img" />
                                            <a href="news.html" className="view__icon">View</a>
                                        </div>
                                        <div className="portfolio__content">
                                            <h4 className="portfolio__title"><a href="#">
                                                Russia Exhibition</a></h4>
                                            <div className="portfolio__cat">
                                                <a href="#">September 29, 2018</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="portfolio-item">
                                        <div className="portfolio__img">
                                            <img src={logo} alt="portfolio img" />
                                            <a href="news.html" className="view__icon">View</a>
                                        </div>

                                        <div className="portfolio__content">
                                            <h4 className="portfolio__title"><a href="#">
                                                Turkey Exhibition</a></h4>
                                            <div className="portfolio__cat">
                                                <a href="#">December 24, 2018</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </OwlCarousel>
            </div>
        </section>

<Footer/>
    </>
  );
}

export default About;