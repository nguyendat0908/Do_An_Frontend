import BookCard from './BookCard';
import './Book.scss';

const BookList = ({title, showViewAll = false}) => {
    return (
        <div className="book-wrapper">
            <div className="title-container">
                <span>{title}</span>
                {showViewAll && <a href="#" className="view-all-link">Xem tất cả</a>}
            </div>
            <div className="book-list">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    );
};

export default BookList;
