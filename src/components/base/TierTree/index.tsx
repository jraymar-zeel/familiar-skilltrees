import React, { Component } from "react";
import Skill from "models/skill";
import styles from "./style.module.scss";
import Tier from "models/tier";
import TierBlock from "components/base/TierBlock";
import TierList from "models/tier_list";

type Props = { tierList: TierList; handleUpdate: Function };
type State = {};

class TierTree extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    let tiers = Array.from(this.props.tierList);
    const tierBlocks = tiers.map((tier: Tier, index: number) => (
      <TierBlock
        key={index}
        handleUpdate={this.props.handleUpdate}
        tier={tier}
      ></TierBlock>
    ));
    return <div className={styles.tree}>{tierBlocks}</div>;
  }
}

export default TierTree;
