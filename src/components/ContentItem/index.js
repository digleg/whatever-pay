import React from 'react';
import { withTranslation } from 'react-i18next';
import './styles.css';

function ContentItem({ t, pictureRight, title, description, image }) {
    return (
        <div className={`contentItem ${pictureRight !== true && 'contentItem__reverse'}`}>
            <div className="contentItem__word-wrapper">
                <h1>{t(`${title}`)}</h1>
                <h3>{t(`${description}`)}</h3>
            </div>
            <div
                className={`contentItem__image ${
                    pictureRight === true ? 'contentItem__image-right' : 'contentItem__image-left'
                }`}
            >
                <img src={image} alt="image_content" />
            </div>
        </div>
    );
}

export default withTranslation()(ContentItem);
