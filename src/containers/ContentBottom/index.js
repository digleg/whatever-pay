import React from 'react';
import { withTranslation } from 'react-i18next';
import './styles.css';
import downloadEN from '../../images/download_en.png';
import downloadCN from '../../images/download_cn.png';

function contentButtom({ t, i18n }) {
    return (
        <div className="contentButtom">
            <div className="contentButtom_text">
                <h1>{t('getStartToday')}</h1>
                <h3>{t('description')}</h3>
            </div>
            <img
                className="contentButtom__download"
                src={i18n.language === 'en' ? downloadEN : downloadCN}
                alt="downloadCN"
            />
        </div>
    );
}

export default withTranslation()(contentButtom);
