import React, { Component } from "react";

import styles from "./style.module.scss";

type Props = {};
type State = {};

class MonsterPortrait extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <div className={styles.monster_portrait}></div>;
  }
}

export default MonsterPortrait