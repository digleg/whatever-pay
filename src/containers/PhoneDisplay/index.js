import React from 'react';
import useWindowSize from '../../hook/useWindowSize';
import './styles.css';
import demoBg from '../../images/demo_bg.png';
import demoBgTablet from '../../images/demo_bg_tablet.png';
import demoBgMobile from '../../images/demo_bg_mobile.png';
import demo1 from '../../images/demo_1.png';
import demo2 from '../../images/demo_2.png';
import demo3 from '../../images/demo_3.png';
import demo4 from '../../images/demo_4.png';
import demo5 from '../../images/demo_5.png';

function phoneDisplay() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const size = useWindowSize();
    let demoCurrentBg;
    if (size.width > 1000) demoCurrentBg = demoBg;
    else if (size.width > 425) demoCurrentBg = demoBgTablet;
    else demoCurrentBg = demoBgMobile;

    return (
        <div className="phoneDisplay">
            <img className="phoneDisplay__demobg" src={demoCurrentBg} alt="demoBg" />
            <div className="phoneDisplay__demoWrapper">
                <img src={demo1} alt="demo1" />
                <img src={demo2} alt="demo2" />
                <img src={demo3} alt="demo3" />
                <img src={demo4} alt="demo4" />
                <img src={demo5} alt="demo5" />
            </div>
        </div>
    );
}

export default phoneDisplay;
