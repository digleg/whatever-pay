import Nav from './containers/Nav';
import Title from './containers/Title';
import Content from './containers/Content';
import PhoneDisplay from './containers/PhoneDisplay';
import ContentBottom from './containers/ContentBottom';
import Footer from './containers/Footer';

import './App.css';

function App() {
    return (
        <div className="app">
            <div className="app__wrapper">
                <div id="home" className="app__wrapper-padding">
                    <Nav />
                </div>
                <Title className="app__wrapper-padding" />
                <div id="about" className="app__wrapper-padding">
                    <Content />
                </div>
                <PhoneDisplay className="app__wrapper-padding" />
            </div>
            <div id="download">
                <ContentBottom />
            </div>
            <div id="footer__wrapper">
                <Footer />
            </div>
        </div>
    );
}

export default App;
