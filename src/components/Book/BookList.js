import BookCard from './BookCard';
import './Book.scss';

const BookList = () => {
    return (
        <div className="book-wrapper">
            <span>Test list one</span>
            <div className="book-list">
                <BookCard />
            </div>
        </div>
    );
};

export default BookList;
