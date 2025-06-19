import './Footer.scss';
import logo from '../../assets/images/Logo.png';
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-content">
                <div className="footer-logo">
                    <img
                        src={logo}
                        width="208"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="footer-links">
                    <div>
                        <h4 style={{ fontSize: '20px', fontWeight: '600', paddingBottom: '20px' }}>Cửa hàng</h4>
                        <ul>
                            <li>Về chúng tôi</li>
                            <li>Blog</li>
                            <li>Niềm tin và an toàn</li>
                            <li>Danh mục</li>
                            <li>Tác giả</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '20px', fontWeight: '600', paddingBottom: '20px' }}>
                            Hỗ trợ khách hàng
                        </h4>
                        <ul>
                            <li>Trung tâm hỗ trợ</li>
                            <li>Liên hệ với chúng tôi</li>
                            <li>Hướng dẫn đặt hàng</li>
                            <li>Hỏi đáp với BookShop</li>
                            <li>Cảm ơn khách hàng</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '20px', fontWeight: '600', paddingBottom: '20px' }}>Chứng nhận</h4>
                        <ul>
                            <li>Bộ công thương</li>
                            <li>Cục Thương mại điện tử</li>
                            <li>Giấy phép đăng ký sàn TMĐT</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-final">
                <div className="footer-terms">
                    <p>© BookShop 2025. Copy at PangoBooks</p>
                    <p>Điều khoản sử dụng</p>
                    <p>Chính sách</p>
                </div>
                <div className="footer-social-media">
                    <FaFacebook className='icon'/>
                    <FaYoutube className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaTiktok className='icon'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
