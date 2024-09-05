import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Accountitem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const MyIcon = ({ icon = faCircleXmark, faSpinner, faMagnifyingGlass, ...props }) => {
    return <FontAwesomeIcon icon={icon} {...props} />;
};
function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 1, 1]);
        }, 500);
    }, []);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchInput('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleShowResult = () => {
        setShowResult(true);
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>You may like</h4>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search"
                    spellCheck={false}
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                    onFocus={handleShowResult}
                ></input>
                {!!searchInput && (
                    <button>
                        <MyIcon className={cx('clear')} icon={faCircleXmark} onClick={handleClear}></MyIcon>
                    </button>
                )}

                {/* <MyIcon className={cx('loading')} icon={faSpinner}></MyIcon>*/}

                <button className={cx('search-btn')}>
                    <SearchIcon></SearchIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
