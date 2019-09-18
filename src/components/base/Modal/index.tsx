import React, { Component } from "react";

import styles from "./style.module.scss";
import R20 from "components/R20_UI/R20";

type Props = { closeHandler: (event: any) => void; isOpen: boolean };
type State = {};

class Modal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  closeClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.props.closeHandler(e);
  };
  render() {
    return (
      <div
        className={`
        ${styles.modal}
        ${this.props.isOpen ? styles.open : ""}
        `}
      >
        <div onClick={this.closeClickHandler} className={styles.close_button}>
          X
        </div>
        <div className={styles.back}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
