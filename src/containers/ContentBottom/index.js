import React from 'react';
import { withTranslation } from 'react-i18next';
import './styles.css';
import downloadEN from '../../images/download_en.png';
import downloadCN from '../../images/download_cn.png';

function contentButtom({ t, i18n }) {
    // TODO: replace this url
    const exampleDownloadUrl = 'https://desktop.line-scdn.net/win/new/LineInst.exe';
    return (
        <div className="contentButtom">
            <div className="contentButtom_text">
                <h1>{t('getStartToday')}</h1>
                <h3>{t('description')}</h3>
            </div>
            <a href={exampleDownloadUrl} download>
                <img
                    className="contentButtom__download"
                    src={i18n.language === 'en' ? downloadEN : downloadCN}
                    alt="downloadCN"
                    onClick={() => {
                        console.log('test');
                    }}
                />
            </a>
        </div>
    );
}

export default withTranslation()(contentButtom);
