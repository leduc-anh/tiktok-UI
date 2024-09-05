import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './img.module.scss';
import classNames from 'classnames';
function Image({ className, src, fallBack: customFallBack = images.noImage, alt, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };
    //eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        ></img>
    );
}

export default forwardRef(Image);
