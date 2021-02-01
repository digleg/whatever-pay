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
                <div id="home">
                    <Nav />
                </div>
                <Title />
                <div id="about">
                    <Content />
                </div>
                <PhoneDisplay />
                <div id="download">
                    <ContentBottom />
                </div>
            </div>
            <div id="google">
                <Footer />
            </div>
        </div>
    );
}

export default App;
