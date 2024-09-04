import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faLanguage,
    faHouseSignal,
    faCheck,
    faGear,
    faSignOut,
    faPlus,
    faChartLine,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Accountitem';
import Menu from '~/components/Popper/Menu';
import {
    faCircleQuestion,
    faLightbulb,
    faMoon,
    faMessage,
    faPaperPlane,
    faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
const MyIcon = ({ icon = faCircleXmark, faSpinner, faMagnifyingGlass, ...props }) => {
    return <FontAwesomeIcon icon={icon} {...props} />;
};

const currentUser = false;
const MENU_ITEMS = [
    {
        icon: <MyIcon icon={faHouseSignal}></MyIcon>,
        title: 'Creator tools',
        children: {
            title: 'Creator tools',
            data: [
                ...(currentUser
                    ? [
                          {
                              icon: <MyIcon icon={faChartLine}></MyIcon>,
                              title: 'View Analytics',
                          },
                          {
                              icon: <MyIcon icon={faVideo}></MyIcon>,
                              title: 'LIVE Studio',
                          },
                      ]
                    : []),

                {
                    icon: <MyIcon icon={faLightbulb}></MyIcon>,
                    title: 'LIVE creator Hub',
                },
            ],
        },
    },
    {
        icon: <MyIcon icon={faLanguage}></MyIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <MyIcon icon={faCircleQuestion}></MyIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <MyIcon icon={faMoon}></MyIcon>,
        title: 'Dark mode',
        children: {
            title: 'Dark mode',
            status: true,
            data: [
                {
                    icon: <MyIcon icon={faCheck}></MyIcon>,
                    title: 'Use device theme',
                },
                {
                    title: 'Dark mode',
                    Noicon: true,
                },
                {
                    title: 'Light mode',
                    Noicon: true,
                },
            ],
        },
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                //language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <MyIcon icon={faUser}></MyIcon>,
            title: 'View profile',
            to: '/ha',
        },
        {
            icon: <MyIcon icon={faBitcoin}></MyIcon>,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <MyIcon icon={faGear}></MyIcon>,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <MyIcon icon={faSignOut}></MyIcon>,
            title: 'Log out',
            to: '/Logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>

                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button upload iconLeft={<MyIcon icon={faPlus}></MyIcon>}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <MyIcon icon={faPaperPlane}></MyIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <MyIcon icon={faMessage}></MyIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7211142773369733126~c5_720x720.jpeg?lk3s=a5d48078&nonce=33074&refresh_token=13f4fd1c1b572e1cc2e25cfc0dc9b215&x-expires=1725541200&x-signature=QAEdrgqP1syM%2BzUrprvUxPh7%2Bjw%3D&shp=a5d48078&shcp=81f88b70"
                                className={cx('user-avatar')}
                                alt="Leducanh2005"
                            ></img>
                        ) : (
                            <button className={cx('more-btn')}>
                                <MyIcon icon={faEllipsisVertical}></MyIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
