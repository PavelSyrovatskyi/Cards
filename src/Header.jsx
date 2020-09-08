import React from "react";


const Header = (props) => {
    return(
        <div className="header">
            <div className="header-text">
                {props.header}
            </div>
        </div>
    )
};
export default Header;
