import React, { Component } from "react";
import styles from "./style.module.scss";
import SkillButton from "components/base/SkillButton";
import Tier from "models/tier";
import Skill from "models/skill";

type State = {};
type Props = { handleUpdate: Function, tier: Tier };

class TierBlock extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const skillButtons = this.props.tier.skills.map(
      (skill: Skill, index: number) => (
        <SkillButton
          key={index}
          handleUpdate={this.props.handleUpdate}
          isDecrementLocked={this.props.tier.isDecrementLocked}
          isIncrementLocked={this.props.tier.isIncrementLocked}
          skill={skill}
        ></SkillButton>
      )
    );
    return <div className={styles.tier}>{skillButtons}</div>;
  }
}

export default TierBlock;
