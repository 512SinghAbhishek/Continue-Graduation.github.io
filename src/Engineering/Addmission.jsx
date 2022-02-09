import react from "react";
// import logo from './Engineering';
import { Link } from "react-router-dom"; 
import Footer from "./Footer";

function Engineering(){
    return(
       <>
       <Footer/>
        <div className="container">
            <div className="row">

            <table>
                <ul>
                <li className="nav-item">
                <Link className="nav-link active"  to="/about" spy={true} smooth={true}>Computer Science</Link>
                
              </li>
                    <li>IT</li>
                    <li>Civel</li>
                    <li> Mechinacel</li>
                    <li> Electronics</li>
                    <li>Bio Tech </li>
                    <li>Electrical</li>
                    <li>Chemical</li>
                    <li> meterial</li>
                    {/* <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> */}

                </ul>
                </table>
            </div>
        </div>

 </>
    );


}

export default Engineering ;

