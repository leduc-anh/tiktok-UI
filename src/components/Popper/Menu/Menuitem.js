import Button from '~/components/Button';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} iconLeft={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
