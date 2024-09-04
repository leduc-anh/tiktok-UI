import Button from '~/components/Button';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <Button
            className={cx(
                'menu-item',
                {
                    separate: data.separate,
                },
                {
                    Noicon: data.Noicon,
                },
            )}
            iconLeft={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
