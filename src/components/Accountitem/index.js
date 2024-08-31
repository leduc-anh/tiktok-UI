import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Accountitem.module.scss';
import classNames from 'classnames/bind';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const MyIcon = ({ icon = faArrowTrendUp, ...props }) => {
    return <FontAwesomeIcon icon={icon} {...props} />;
};
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon-recomment')}>
                <MyIcon icon={faArrowTrendUp}></MyIcon>
            </div>
            <div className={cx('Name')}>
                <p>Thỏ Bảy Màu</p>
            </div>
        </div>
    );
}

export default AccountItem;
