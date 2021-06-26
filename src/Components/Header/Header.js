import React from 'react';
import Logo from '../../logo/Pear-2015072853.svg';
import HeaderCss from './Header.module.css'

const Header = () => {
    return (
        <>
        <div className={HeaderCss.mainHeader}>
            <div>
                <img className={HeaderCss.img_section} src={Logo} alt="logo" />
            </div>
        </div>
        </>
    );
};

export default Header;