import logoAI from '../../assets/images/logoAI.png';
import { Button } from 'react-bootstrap';
import { GiStarSwirl } from 'react-icons/gi';
import './ChatBotAI.scss';

const ChatBotAI = () => {
    return (
        <a style={{ cursor: 'pointer', textDecoration: 'none', color: '#000' }} href="#">
            <div className="chatbot-wrapper">
                <div className="chatbot-logo">
                    <img src={logoAI} width="80" height="80" alt="LogoAI" style={{ borderRadius: '15px' }} />
                </div>
                <div className="chatbot-description">
                    <p>Trợ lý ảo</p>
                    Tôi ở đây để giúp bạn tìm những cuốn sách hoàn hảo!
                </div>
                <div className="chatbot-button">
                    <Button style={{ padding: '15px 35px', borderRadius: '14px', fontSize: '16px' }}>
                        <GiStarSwirl style={{ marginRight: '10px', fontSize: '20px' }} />
                        Chat với AI
                    </Button>
                </div>
            </div>
        </a>
    );
};

export default ChatBotAI;
