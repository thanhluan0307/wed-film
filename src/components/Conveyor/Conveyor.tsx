import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind'

import styles from './Conveyor.module.scss'


const cx = classNames.bind(styles)
console.log(cx);

// interface ConveyorProps {
    
// }
function Conveyor():JSX.Element{
    return <div className={cx('wrapper')}>
        <div className={cx('title')}>Thịnh Hành</div>
    </div>
}
export default Conveyor