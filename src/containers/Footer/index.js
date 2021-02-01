/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.css';
import bottomLogo from '../../images/bottom_logo.png';

function footer() {
    return (
        <div className="footer">
            <a className="footer-left" href="#home">
                <img src={bottomLogo} alt="bottomLogo" />
            </a>
            <div className="footer-middle">
                <a href="#home">Bank perdagangan mata wang maya</a>
            </div>
            <div className="footer-right">
                <a href="mailto:whateverpay@gmail.com" target="_blank">
                    whateverpay@gmail.com
                </a>
            </div>
        </div>
    );
}

export default footer;
