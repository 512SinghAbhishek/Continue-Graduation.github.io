import react from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Style.css";
import "./Home.css";
import logo from './logo/abhishek.jpg';
import "./SignUp.css";
import Login from './Login';
import Navbar from './Navbar';
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
// import Content from './ReadMore';


const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
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


const bg = {
    textAlign: 'center',
    fontWeight: '900',
    margin: '31px 0',
    backgroundColor: 'aquamarine',
    borderRadius: '7px',
    margin: '15px 36px',
    padding: '3px',
}

const container = {
    backgroundColor: "white",
}


const tl = {
    textAline: 'right'
}

const banner1 = {
    backgroundColor: 'white'
}


const heading = {
    marginTop: '50px'
}


const img = {
    height: '280px',
    width: '350px'
}

const img1 = {
    // height: '300px',
    // width: '300px',
    display: 'inline-flex'

}

const sec = {
    padding: '0'
}


function Home() {
    return (
        <>
            <Navbar />
          


            <section style={sec} id="slider1" className="slider slider-1">
                <section style={sec} id="timeline">

                    <div className="tl-item1">

                        <div className="tl-bg" >

                        </div>

                        <div className="tl-year">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                                    <div className="slide__content">
                                        {/* <!-- <span className="slide__subtitle">A Grade Commercial & Industrial portfolio!</span> --> */}
                                        <h2 className="slide__title">
                                            Best Undergraduation University,College& Courses</h2>
                                        <p className="slide__desc">To develope Your Skill for Graduate best College in India </p>
                                        <a href="about-us.html" className="btn btn__primary btn__hover2 mr-30 mb-4 abhi-edit">More About Us</a>
                                        {/* <!-- <a href="#" className="btn btn__white">Our Services</a> --> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- <div className="tl-content">
  <h1>Lorem ipsum dolor sit</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
</div> --> */}
                    </div>

                    <div className="tl-item">

                        <div className="tl-bg" ></div>

                        <div className="tl-year">
                            <a href="WeldingConsumables.html">
                                <p className=" heading--sanSerif text-white "> Best Engineering </p>
                            </a>
                        </div>

                        {/* <!-- <div className="tl-content">
  <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
  <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
</div> --> */}

                    </div>

                    <div className="tl-item">

                        <div className="tl-bg" ></div>

                        <div className="tl-year">
                            <a href="nonwelding.html">
                                <p className="f2 heading--sanSerif text-white">Medical</p>
                            </a>

                        </div>

                        {/* <!-- <div className="tl-content">
  <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
  <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
</div> --> */}

                    </div>

                    <div className="tl-item">

                        <div className="tl-bg"></div>

                        <div className="tl-year">
                            <a href="rollinguide.html">
                                <p className="f2 heading--sanSerif text-white">Law</p>
                            </a>
                        </div>

                        {/* <!-- <div className="tl-content">
  <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
  <p>Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.</p>
</div> --> */}

                    </div>

                </section>
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
                                    <h2 className="heading__title">Provides High Performance Services For
                                        Techanical and Non Techanical Degree.
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
                                        {/* <p>Being a determined business leader that he is, Mr. Umesh Kumar Modi is also a man of
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
                                        </p> */}
                                        {/* <Content /> */}
                                        {/* <Link href={}><h6 className="mr-3">View About Us</h6></Link> */}
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
                                    {/* <SignUp /> */}
                                    {/* <button className="btn btn__primary btn__bordered mr-40" onclick={Registr} id="myBtn">Read
                                        more About Us</button> */}
                                    <NavLink to="/Login" className="nav__item-link">Read More</NavLink>

                                    {/* <!-- <button onclick="myFunction()"><a href="#" className="btn btn__primary btn__bordered mr-40">More About Us</a></button>
<!-- <a href="#" className="btn btn__primary btn__bordered mr-40">More About Us</a> */}
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
            {/* 
            <section id="clients" className="clients border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <a href="sponser.html">    <h6 className="mr-3" style={tl}>See All</h6></a>
                            <div className="carousel owl-carousel" data-slide="6" data-slide-md="4" data-slide-sm="2" data-autoplay="true"
                                data-nav="false" data-dots="false" data-space="30" data-loop="true" data-speed="1000">
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/abs-300x129.png" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/adani-300x236.png" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/BHEL-300x226.png" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/ce-300x225.jpeg" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/gwss.png" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/io-300x284.jpeg" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/ntpc-300x176.png" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/ongc-300x300.png" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/rdso-300x229.jpeg" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/reliance-300x107.png" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/suzlon-300x91.png" alt="client" /></a>
                                </div>
                                <div className="client">
                                    <a href="#"><img src="assets/images/clients/thermax.png" alt="client" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section id="banner1" className="banner banner-1 fancybox-white p-0" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 background-banner bg-overlay bg-overlay-2">
                            <div className="bg-img"><img src={logo} alt="background" /></div>
                            {/* <!-- <div className="cta__banner"> -->
  <!-- <div className="bg-img"><img src="assets/images/backgrounds/pattern/1.jpg" alt="background"></div> -->
  <!-- <h5 className="cta__title">We Are Open For Opportunities!</h5>
    <p className="cta__desc">Building relationships and portfolio that last. Serving an impressive list of
      long-term clients with
      experience and expertise in industries.</p>
    <a href="#" className="btn btn__white btn__link">
      <i className="icon-arrow-right arrow-rounded arrow-rounded-white"></i>
      <span>View Our Works</span>
    </a> 
  </div>/.cta__banner--> */}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 inner-padding bg-overlay bg-overlay-theme bg-parallax">
                            {/* <div className="bg-img"><img src="assets/images/banners/1.jpg" alt="background" /></div> */}
                            <div className="heading heading-white mb-40">
                                <h3 className="heading__title">Providing full range of Welding and Non-welding Solutions </h3>
                                <p className="heading__desc">We are dedicated to creating an enduring premier global enterprise built on a
                                    unique business culture that achieves success for our customers. This involves doing with integrity,
                                    respect, and candor, with a deep commitment to excellence to associates and customers as our foundation,
                                    to provide consistent delivery of “Best in className performance” in welding & cutting solutions.</p>
                            </div>
                            <div className="row">

                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <a href="WeldingConsumables.html">
                                        <div className="fancybox-item">
                                            <div className="fancybox__icon">
                                                <i className="icon-waste"></i>
                                            </div>
                                            <div className="fancybox__content">
                                                <a href="WeldingConsumables.html">  <h4 className="fancybox__title">Welding Consumables</h4></a>
                                                <p className="fancybox__desc">Our company is engaged in manufacturing of welding electrodes and
                                                    stainless steel welding.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <a href="WeldingConsumables.html">
                                        <div className="fancybox-item">
                                            <div className="fancybox__icon">
                                                <i className="icon-management"></i>
                                            </div>
                                            <div className="fancybox__content">
                                                <a href="WeldingConsumables.html">  <h4 className="fancybox__title">Non Welding Application Wires</h4></a>
                                                <p className="fancybox__desc">We are also engaged in non-welding grade wires that are being catered to
                                                    national and international markets to various industrial sectors.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="contacs.html" className="btn btn__white btn__bordered btn__lg abhi-edit">Inquire</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="servicesCarousel" className="services services-layout2 services-carousel pt-0 mt-120" style={banner1}>
                {/* <div className="bg-img"><img src="assets/images/backgr  unds/pattern/2.png" alt="background" /></div> */}
                <div className="container">
                    <div className="row heading mb-40">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <span className="heading__subtitle" style={heading}>Fast Growing Industrial & Manufacturing Estates.</span>
                            <h2 className="heading__title">Provides High Performance Services For Multiple Industries And Technologies!</h2>
                        </div>
                        {/* <div className="col-sm-12 col-md-12 col-lg-6"> */}
                        {/* <!-- <p className="heading__desc">Yet those that embrace change are thriving, building bigger, better, faster, and
    stronger products than ever before. You are helping to lead the charge; we can help you build on your past
    successes and prepare for future.</p>
  <div className="d-flex">
    <a href="#" className="btn btn__primary mt-30 mr-30">Our Services</a>
    <div className="contact-chip mt-30">
      <div className="contact__chip-img">
        <img src="assets/images/testimonials/thumbs/3.png" alt="avatar"/>
      </div>
      <div className="contact__chip-info">
        <h6>(002) 01061245741</h6>
        <span>Sales Representative</span>
      </div>
    </div>
  </div>
</div> --> */}
                        {/* </div> */}
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            {/* <!-- <div className="carousel owl-carousel carousel-dots" data-slide="3" data-slide-md="2" data-slide-sm="1"
  data-autoplay="true" data-nav="false" data-dots="true" data-space="30" data-loop="true" data-speed="800">
  <div className="service-item">
    <div className="service__content">
      <div className="service__icon">
        <i className="icon-tank-2"></i>
      </div>
      <h4 className="service__title">Petroleum & Gas <br/> Energy</h4>
      <p className="service__desc">Petroleum and natural gas are nonrenewable sources of energy, a liquid found
        underground that can be used.</p>
      <a href="#" className="btn btn__secondary btn__link">
        <i className="icon-arrow-right arrow-rounded"></i>
        <span>Read More</span>
      </a>
    </div>
  </div>
  <div className="service-item">
    <div className="service__content">
      <div className="service__icon">
        <i className="icon-factory-2"></i>
      </div>
      <h4 className="service__title">Construction & <br/>Engineering</h4>
      <p className="service__desc">Professional discipline deals with designing, planning, construction and
        infrastructures management such as roads, tunnels.</p>
      <a href="#" className="btn btn__secondary btn__link">
        <i className="icon-arrow-right arrow-rounded"></i>
        <span>Read More</span>
      </a>
    </div>
  </div>
  <div className="service-item">
    <div className="service__content">
      <div className="service__icon">
        <i className="icon-gears-2"></i>
      </div>
      <h4 className="service__title">Mechanical <br/> Engineering</h4>
      <p className="service__desc">Materials science principles to design, analyze, manufacture, and maintain
        mechanical systems. It is one of the oldest .</p>
      <a href="#" className="btn btn__secondary btn__link">
        <i className="icon-arrow-right arrow-rounded"></i>
        <span>Read More</span>
      </a>
    </div>
  </div>
  <div className="service-item">
    <div className="service__content">
      <div className="service__icon">
        <i className="icon-factory-2"></i>
      </div>
      <h4 className="service__title">Basic & Industrial <br/> Chemicals</h4>
      <p className="service__desc">Produced in huge quantities and critical ingredients for products used by both
        industry and the general consumer. </p>
      <a href="#" className="btn btn__secondary btn__link">
        <i className="icon-arrow-right arrow-rounded"></i>
        <span>Read More</span>
      </a>
    </div>
  </div>
  <div className="service-item">
    <div className="service__content">
      <div className="service__icon">
        <i className="icon-robot"></i>
      </div>
      <h4 className="service__title">Automotive <br/> Manufacturing</h4>
      <p className="service__desc">The automotive industry comprises a wide range of companies involved in the
        design, development, manufacturing, and selling.</p>
      <a href="#" className="btn btn__secondary btn__link">
        <i className="icon-arrow-right arrow-rounded"></i>
        <span>Read More</span>
      </a>
    </div>
  </div>
  <div className="service-item">
    <div className="service__content">
      <div className="service__icon">
        <i className="icon-cart"></i>
      </div>
      <h4 className="service__title">Bridge <br/> Construction</h4>
      <p className="service__desc">Building a bridge is a complex undertaking requiring knowledge and expertise.
        Several variables, including engineering.</p>
      <a href="#" className="btn btn__secondary btn__link">
        <i className="icon-arrow-right arrow-rounded"></i>
        <span>Read More</span>
      </a>
    </div>
  </div>
</div> --> */}
                        </div>
                    </div>



                    <OwlCarousel className="slider-items owl-carousel" {...options}>

                <div class="product-item">
                    <div class="box">
                        <figure class="img-holder">
                        <div class="item"><img src={logo} style={img} alt="Owl Image" /></div>
                        </figure>

                        {/* <div class="caption ">
                            <a href="product-details.php" class="h6 font-weight-normal">cidacos chikpeas extra
                                <span class="small d-block">570 gr</span>
                            </a>

                            <p class="text-light-blue h5  text-capitalize">$ 2.0 / kg</p>

                        </div>
                        <div class="btn-box ">
                            <button class="btn btn-info round-xl round btn-lg item-btn-cart btn-block"> <i class="ti-plus"></i> add to cart</button>

                            <div class="cart-inc-dec btn btn-info round-xl round btn-lg btn-block" >
                                <button type="button" onclick="decrementValue()" ><i class="ti-minus"></i></button>
                                <input type="text" name="quantity" value="1" maxlength="2" max="10" size="1" id="number" />
                                <button type="button" onclick="incrementValue()" ><i class="ti-plus"></i></button>
                            </div>

                        </div> */}
                    </div>
                </div>

                <div class="product-item">
                    <div class="box">
                        <figure class="img-holder">
                        <div class="item"><img src={logo} style={img} alt="Owl Image" /></div>
                        </figure>

                        
                    </div>
                </div>

                <div class="product-item">
                    <div class="box">
                        <figure class="img-holder">
                        <div class="item"><img src={logo} style={img} alt="Owl Image" /></div>
                        </figure>

                        
                    </div>
                </div>

                <div class="product-item">
                    <div class="box">
                        <figure class="img-holder">
                        <div class="item"><img src={logo} style={img} alt="Owl Image" /></div>
                        </figure>

                        
                    </div>
                </div>

                <div class="product-item">
                    <div class="box">
                        <figure class="img-holder">
                        <div class="item"><img src={logo} style={img} alt="Owl Image" /></div>
                        </figure>

                        
                    </div>
                </div>

                <div class="product-item">
                    <div class="box">
                        <figure class="img-holder">
                        <div class="item"><img src={logo} style={img} alt="Owl Image" /></div>
                        </figure>

                        
                    </div>
                </div>

                <div class="product-item">
                    <div class="box">
                        <figure class="img-holder">
                        <div class="item"><img src={logo} style={img} alt="Owl Image" /></div>
                        </figure>

                        
                    </div>
                </div>
            </OwlCarousel>

                    {/* 
                    <div className="row mt-50">

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog__img">
                                    <a href="#">
                                        <img src={logo} style={img} alt="blog image" />
                                    </a>
                                </div>
                                <div className="blog__content">
                                    <div className="blog__meta">
                                        <h4 className="blog__title"><a href="#">Metro Applications (DMRC) </a></h4>
                                        <a href="#" className="btn btn__secondary btn__link">
                                            <i className="icon-arrow-right arrow-rounded"></i>
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog__img">
                                    <a href="#">
                                        <img src={logo} style={img} alt="blog image" />
                                    </a>
                                </div>
                                <div className="blog__content">
                                    <div className="blog__meta">
                                    </div>
                                    <h4 className="blog__title"><a href="#">Infrastructures And Construction</a></h4>
                                    <a href="#" className="btn btn__secondary btn__link">
                                        <i className="icon-arrow-right arrow-rounded"></i>
                                        <span>Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog__img">
                                    <a href="#">
                                        <img src={logo} style={img} alt="blog image" />
                                    </a>
                                </div>
                                <div className="blog__content">
                                    <div className="blog__meta">
                                        <h4 className="blog__title"><a href="#">Railways And Transport</a></h4>
                                        <a href="#" className="btn btn__secondary btn__link">
                                            <i className="icon-arrow-right arrow-rounded"></i>
                                            <span>Read More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </section>




            <section id="videoBanner" className="" style={sec}>

                <div className="container-fluid-pg-0">
                    <div className="row">
                        {/* <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="videomid">
                                <video autoplay muted loop>
                                    <source className="embed-responsive" src="assets/Videos/industry-video.mp4"
                                        type="video/mp4" />
                                </video>
                            </div>
                        </div> */}
                        {/* </section> */}


                        {/* <section id="portfolioCarousel" className="portfolio-carousel portfolio-classNameic pt-90 pb-70"> */}
                        <div className="container container-lg">
                            <div className="row ">
                                <div className="col-sm-12 col-md-12 col-lg-7">
                                    <div className="heading">
                                        <span className="heading__subtitle">We Work With Global Industries!</span>
                                        <h3 className="heading__title mb-0">Featured portfolio</h3>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-5">

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
                                </div>

                            </div>
                        </OwlCarousel>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>

            {/* <!-- <section id="aboutLayout1" className="about about-layout1 pt-0 pb-120">
<div className="container">
<div className="row">
<div className="col-sm-12 col-md-12 col-lg-5">
<div className="heading mt-40 mb-30">
  <span className="heading__subtitle">Innovation From The Ground To The Skies.</span>
  <h2 className="heading__title">Customized Solutions Fits Every Industry Needs!</h2>
  <p className="heading__desc">Yet those that embrace change are thriving, building bigger, better, faster, and
    stronger products than ever before, We can help build on your past successes and prepare for future.
    Modi Group Group is one of the leading Industry.</p>
</div>
<a href="#" className="btn btn__primary btn__bordered mb-40">More About Us</a>
</div>
<div className="col-sm-12 col-md-10 col-lg-7">
<div className="about__img">
  <img src="assets/images/about/1.jpg" alt="about" className="img-fluid w-100">
  <div className="cta__banner d-flex">
    <div className="cta__icon">
      <i className="icon-worker"></i>
    </div>
    <h5 className="cta__title">Join Us And Be Part Of Our Team!</h5>
  </div>
</div>
</div>
</div>
</div>
</section> --> */}


            <section id="banner2" className="banner banner-2 bg-overlay bg-overlay-theme-2 bg-parallax pt-120 pb-0">
                {/* <div className="bg-img"><img src="assets/images/banners/3.jpg" alt="background" /></div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-11 mx-auto">
                            <form className="contact__form-panel" >
                                <div className="row">
                                    <div className="col-sm-12 contact__form-panel-header">
                                        <h4>Get In Touch</h4>
                                        <p>Complete control over products allows us to ensure our customers receive the best quality prices
                                            and service.</p>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group"><input type="text" className="form-control" placeholder="Name" /></div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group"><input type="email" className="form-control" placeholder="Email" /></div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group"><input type="text" className="form-control" placeholder="Phone" /></div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group form-group-select">
                                            <select className="form-control">
                                                <option>Select Your Industry</option>
                                                <option>Industry 1</option>
                                                <option>Industry 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Additional Details!"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4 col-lg-3 mx-auto  ">
                                        <button type="submit" className="btn btn__primary btn__block">Submit Request</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-3">

                        </div>

                    </div>
                </div>
                {/* </div> */}
                {/* </div>
</div> */}
            </section>


            <section id="contactInfo" className="contact-info pt-40 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-lg-6">
                            <strong className="text-center d-block mt-50 mb-20">We will get back to you within 24 hours.</strong>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}




function Registr() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    async function Registration() {
        let item = { name, password, email }
        let result = await fetch("http://localhost:3000/api/register%20", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        console.log("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/About")

    }

    return (
        <>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div class="modal-dialog form-dark" role="document">
                    {/* <!--Content--> */}
                    <div class="modal-content card card-image">
                        <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                            {/* <!--Header--> */}
                            <div class="modal-header text-center pb-4">
                                <h3 class="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>SIGN</strong> <a
                                    class="green-text font-weight-bold"><strong> UP</strong></a></h3>
                                <button type="button" class="close white-text" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {/* <!--Body--> */}
                            <div class="modal-body">
                                {/* <!--Body--> */}
                                <form>
                                    {/* <a href={logo} className="img">
  <img src={logo} alt="" width="200" height="55" /></a> */}

                                    {/* <h2 className="h2" style={bg}>Login</h2> */}
                                    {/* <h4 className="help"> Help</h4> */}
                                    {/* <h6 className="h6">create your profile an Qouse as a volenteer & connect with chalengmakers around the world!</h6>
<h1 className="h1">login/SignUp Details</h1>
<h6 className="hh6">Please Enter valid Email address</h6> */}
                                    <div class="mb-3">
                                        <label for="exampleInputName" class="form-label" >Name</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInput" required />
                                        <br />
                                        <label for="exampleInputEmail1" class="form-label" >Email address</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" required />
                                    </div>
                                    {/* <div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div> */}
                                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                                    <button className="btn btn-warning p-3  mb-2 "> <NavLink onClick={Login} className="nav__item-link"></NavLink>SignUp</button>
                                    <br />
                                    {/* <button className="btn btn-warning p-3 " onclick="document.getElementById('id01').style.display='block'">Use Phone number for login</button> */}

                                </form>
                                {/* <!--Grid column--> */}

                            </div>
                            {/* <!--Grid row--> */}

                        </div>
                    </div>
                </div>
                {/* <!--/.Content--> */}
            </div>

            {/* <!-- Modal --> */}

            <div class="text-center">
                <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#darkModalForm"> Read More About Us</a>
            </div>
        </>
    );

}

export default Home;