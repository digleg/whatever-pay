import React from 'react';
import ContentItem from '../../components/ContentItem';
import feature1 from '../../images/feature_1.png';
import feature2 from '../../images/feature_2.png';
import feature3 from '../../images/feature_3.png';
import feature4 from '../../images/feature_4.png';

function content() {
    return (
        <div>
            <ContentItem
                pictureRight
                image={feature1}
                title="feature1-title"
                description="feature1-description"
            />
            <ContentItem
                image={feature2}
                title="feature2-title"
                description="feature2-description"
            />
            <ContentItem
                pictureRight
                image={feature3}
                title="feature3-title"
                description="feature3-description"
            />
            <ContentItem
                image={feature4}
                title="feature4-title"
                description="feature4-description"
            />
        </div>
    );
}

export default content;
