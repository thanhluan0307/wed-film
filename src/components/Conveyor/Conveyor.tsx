import React from "react";
import { FaAngleRight } from "react-icons/fa";

import classNames from "classnames/bind";

import styles from "./Conveyor.module.scss";

const cx = classNames.bind(styles);

// interface ConveyorProps {

// }
function Conveyor(): JSX.Element {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        THỊNH HÀNH
        <div className="text-2xl font-normal">Xem tất cả</div>
        <span>
          <FaAngleRight />
        </span>
      </div>
    </div>
  );
}
export default Conveyor;
