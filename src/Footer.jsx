import React from "react";

const Footer = (props) => {
    return(
        <div>
            <div>
                <img src={props.logo} alt="menu" className="footer-logo" />
            </div>
            <div>{props.menu}</div>
        </div>
    )
};
export default Footer;
