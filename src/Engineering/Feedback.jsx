import react from "react";

function Feedback(){
    return (
        <>
           {/* <div className="container>" */}
          <div className="Feedback"/>
                <h2>FEEDBACK FORM</h2>

                <div className="container" required>
                    <form style="margin-top: -143px;" name="feedBackForm"/>
                    <div className="row">
                    <div className="col-25">
                    <label for="fname" style="margin-left: -25px;">First Name</label>
                    </div>
                    <div className="col-75">
                    <input type ="text" id="fname" name="firstname" placeholder="Your first name.." value=""
                    required />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-25">
                    <label for="lname" style="margin-left: -25px;">Last Name</label>
                    </div>
                    <div className="col-75">
                    <input type ="text" id="lname" name="lastname" placeholder="Your last name.." value="" required />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-25">
                    <label for="email" style="margin-left: -25px;"> Email Id</label>
                    </div>
                    <div className="col-75">
                    <input type ="email" id="email" name="Emailid" placeholder="Your Email id.." value="" required />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-25">
                    <label for="Phone" style="margin-left: -25px;">Phone number</label>
                    </div>
                    <div className="col-75">
                    <input type ="tel" id="phone" name="phone" pattern="[0-9]{10}" style="margin-top: 9px;"
                    placeholder="Your Phone Number.." value="" required />
                    </div>
                    </div>

                    <div className="row">
                    <h4>Please rate the quality of the service you received from your fooby</h4>
                    <div className="col-75">
                    <input type ="radio" className="radio" id="Service" name="fooby1" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Excellent </label>
                    <input type ="radio" className="radio" id="Service" name="fooby1" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Good </label>
                    <input type ="radio" className="radio" id="Service" name="fooby1" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Fair </label>
                    <input type ="radio" className="radio" id="Service" name="fooby1" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Bad </label><br />
                    </div>
                    </div>
                    <div>

                    <div className="row">
                    <h4>Please rate the quality of your beverage </h4>
                    <div className="col-75">
                    <input type ="radio" className="radio" id="Service" name="fooby2" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Excellent </label>
                    <input type ="radio" className="radio" id="Service" name="fooby2" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Good </label>
                    <input type ="radio" className="radio" id="Service" name="fooby2" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Fair </label>
                    <input type ="radio" className="radio" id="Service" name="fooby2" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Bad </label>
                    </div>
                    </div>
                    <div>
                    <div className="row">
                    <h4>Was our restaurant clean?</h4>
                    <div className="col-75">
                    <input type ="radio" className="radio" id="Service" name="fooby3" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Excellent </label>
                    <input type ="radio" className="radio" id="Service" name="fooby3" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Good </label>
                    <input type ="radio" className="radio" id="Service" name="fooby3" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Fair </label>
                    <input type ="radio" className="radio" id="Service" name="fooby3" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Bad </label>
                    </div>
                    </div>
                    <div>
                    <div className="row" name="experience">
                    <h4>Please rate your overall dining experience.</h4>
                    <div className="col-75">
                    <input type ="radio" className="radio" id="Service" name="fooby4" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Excellent </label>
                    <input type ="radio" className="radio" id="Service" name="fooby4" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Good </label>
                    <input type ="radio" className="radio" id="Service" name="fooby4" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Fair </label>
                    <input type ="radio" className="radio" id="Service" name="fooby4" value="1" required />
                    <label for="Service" style="font-size: smaller;"> Bad </label>
                    </div>
                    </div>
                    <div className="row" required>
                    <div className="col-25">
                    <label for="country" style="margin-left: -25px;">Country</label>
                    </div>
                    <div className="col-75">
                    <select id="country" name="country">
                    <option value="none">Select Country</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="russia">Russia</option>
                    <option value="japan">Japan</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    </select>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-25">
                    <label for="feed_back" style="margin-left: -25px;">Feedback</label>
                    </div>
                    <div className="col-75">
                    <textarea id="subject" name="   subject" placeholder="Write something.."
                    style="height:200px"></textarea>
                    </div>
                    </div>
                    <div className="row">
                    <input type ="submit" value="Submit" onclick="myFunction()" />
                    </div>

                    </div>
                    {/* </form> */}
                    </div>
                </div>  
                </div>


            </>
            );  
}
 export default Feedback;