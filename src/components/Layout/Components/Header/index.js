import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import 'tippy.js/dist/tippy.css';
import { NumberIcon, InboxIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
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
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { faCircleQuestion, faLightbulb, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import Search from '../Search';
const cx = classNames.bind(styles);
const MyIcon = ({ icon = faCircleXmark, faSpinner, faMagnifyingGlass, ...props }) => {
    return <FontAwesomeIcon icon={icon} {...props} />;
};

const currentUser = true;
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
                <Search></Search>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button upload iconLeft={<MyIcon icon={faPlus}></MyIcon>}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <InboxIcon></InboxIcon>
                                    <NumberIcon>6</NumberIcon>
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
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7211142773369733126~c5_720x720.jpeg?lk3s=a5d48078&nonce=33074&refresh_token=13f4fd1c1b572e1cc2e25cfc0dc9b215&x-expires=1725541200&x-signature=QAEdrgqP1syM%2BzUrprvUxPh7%2Bjw%3D&shp=a5d48078&shcp=81f88b70"
                                className={cx('user-avatar')}
                                alt="Leducanh2005"
                            ></Image>
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
