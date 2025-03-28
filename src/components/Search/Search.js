import { CiSearch } from 'react-icons/ci';
import './Search.scss';

const Search = () => {
    return (
        <div className="search-input">
            <form style={{ flex: '1' }}>
                <input placeholder="Search" spellCheck={false} />
            </form>
            {/* <button className="clear">
                            <IoClose />
                        </button> */}
            <div className="search-btn">
                <CiSearch />
            </div>
        </div>
    );
};

export default Search;
