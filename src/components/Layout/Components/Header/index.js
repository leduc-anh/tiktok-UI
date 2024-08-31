import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Accountitem';
const cx = classNames.bind(styles);
const MyIcon = ({ icon = faCircleXmark, faSpinner, faMagnifyingGlass, ...props }) => {
    return <FontAwesomeIcon icon={icon} {...props} />;
};
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
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
                >
                    <div className={cx('search')}>
                        <input placeholder="Seach account and videos" spellCheck={false}></input>
                        <button>
                            <MyIcon className={cx('clear')} icon={faCircleXmark}></MyIcon>
                        </button>

                        <MyIcon className={cx('loading')} icon={faSpinner}></MyIcon>

                        <button className={cx('search-btn')}>
                            {/* search */}
                            <MyIcon icon={faMagnifyingGlass}></MyIcon>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
