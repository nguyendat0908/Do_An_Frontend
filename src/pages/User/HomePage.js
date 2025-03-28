import Header from '../../layouts/Header/Header';

const HomePage = () => {
    return (
        <div className="homePage-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container container"></div>
            <div className="footer-container"></div>
        </div>
    );
};

export default HomePage;
