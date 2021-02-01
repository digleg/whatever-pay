import React from 'react';
import { withTranslation } from 'react-i18next';
import './styles.css';
import logoSmall from '../../images/logo_small.png';

function nav({ t, i18n }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className="nav">
            <div className="nav__topWrapper">
                <img src={logoSmall} alt="logoSmall" />
                <div className="nav__topWrapper-right">
                    <div className="nav__topWrapper-rightWrapper">
                        <a href="#home">{t('home')}</a>
                        <a href="#about">{t('about')}</a>
                        <a href="#download">{t('download')}</a>
                    </div>
                    <div className="nav__topWrapper-rightTranslation">
                        <span onClick={() => changeLanguage('zh-CN')}>中文</span>
                        &nbsp;/&nbsp;
                        <span onClick={() => changeLanguage('en')}>EN</span>
                    </div>
                </div>
            </div>
            <div className="nav__divider" />
        </div>
    );
}

export default withTranslation()(nav);
