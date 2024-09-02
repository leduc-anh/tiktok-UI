import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faLanguage,
    faHouseSignal,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Accountitem';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faMoon } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);
const MyIcon = ({ icon = faCircleXmark, faSpinner, faMagnifyingGlass, ...props }) => {
    return <FontAwesomeIcon icon={icon} {...props} />;
};
const MENU_ITEMS = [
    {
        icon: <MyIcon icon={faHouseSignal}></MyIcon>,
        title: 'Creator tools',
    },
    {
        icon: <MyIcon icon={faLanguage}></MyIcon>,
        title: 'English',
    },
    {
        icon: <MyIcon icon={faCircleQuestion}></MyIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <MyIcon icon={faMoon}></MyIcon>,
        title: 'Dark mode',
    },
];
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
                        <input placeholder="Search" spellCheck={false}></input>
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
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <MyIcon icon={faEllipsisVertical}></MyIcon>
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
