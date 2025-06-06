import bookSlider1 from '../../assets/images/Book-1-Slider.png';
import bookSlider2 from '../../assets/images/Book-2-Slider.png';
import bookSlider3 from '../../assets/images/Book-3-Slider.png';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../layouts/Header/Header';
import './HomePage.scss';
import ChatBotAI from '../../components/ChatBotAI/ChatBotAI';
import BookList from '../../components/Book/BookList';

const HomePage = () => {
    return (
        <div className="homePage-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container container">
                <div className="slider">
                    <Carousel style={{ height: '100%' }}>
                        <Carousel.Item>
                            <img className="d-block w-100" src={bookSlider1} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={bookSlider2} alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={bookSlider3} alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="chatbot">
                    <ChatBotAI />
                </div>
                <div className="items">
                    <BookList />
                </div>
            </div>
            <div className="footer-container"></div>
        </div>
    );
};

export default HomePage;
