import React, { useState } from "react";
import "./Content.css";

const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0, 1000) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Content = () => {
return (
	<div className="container">
	<h2>
		<ReadMore>
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
		</ReadMore>
	</h2>
	</div>
);
};

export default Content;
