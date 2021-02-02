import React from 'react';
import { withTranslation } from 'react-i18next';
import logoBig from '../../images/logo_big.png';
import downloadEN from '../../images/download_en.png';
import downloadCN from '../../images/download_cn.png';
import './styles.css';

function title({ t, i18n }) {
    return (
        <div className="title">
            <div className="title__bottomWrapper">
                <img className="title__bottomWrapper-logoBig" src={logoBig} alt="logoBig" />
                <h1>{t('description')}</h1>
                <h3>
                    {t('sub-description1')}
                    <br className="title__bottomWrapper-br" />
                    {t('sub-description2')}
                </h3>
                <a href="#download">
                    <img
                        className="title__bottomWrapper-download"
                        src={i18n.language === 'en' ? downloadEN : downloadCN}
                        alt="downloadEN"
                    />
                </a>
            </div>
        </div>
    );
}

export default withTranslation()(title);
