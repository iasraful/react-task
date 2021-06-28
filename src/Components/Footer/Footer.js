import React from 'react';
import FooterCss from "./Footer.module.css"

const Footer = () => {

    return (
        <div className={FooterCss.footer_section}>
            <h5 className={FooterCss.footer_text}>“Eduwo Tasks @{new Date().getUTCFullYear()}”</h5>
        </div>
    );
};

export default Footer;
