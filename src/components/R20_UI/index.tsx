import React, { Component } from "react";
import styles from "./style.module.scss";
import Tier from "models/tier";
import TierList from "models/tier_list";
import TierTree from "components/base/TierTree";
import SpellScroll from "components/base/SpellScroll";
import Modal from "components/base/Modal";
import MonsterScroll from "components/base/MonsterScroll";
import MonsterPortrait from "components/base/MonsterPortrait";

import orderedTierData from "./skill_config";
import R20 from "./R20";

type Props = {};
type State = { modalOpen: boolean; tierList: TierList; r20: R20 };

class R20_UI extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const tList = new TierList();

    for (let tierData of orderedTierData) {
      const { skills, unlocksAt } = tierData;
      tList.push(new Tier(skills, unlocksAt));
    }

    const skillMap = new Map();
    for (let tier of tList) {
      for (let skill of tier.skills) {
        skillMap.set(skill.id, skill);
      }
    }
    const r20 = new R20(skillMap);

    // bind update method
    this.update = this.update.bind(this);

    // initial state
    this.state = {
      tierList: tList,
      r20: r20,
      modalOpen: true
    };
  }

  update() {
    const { tierList } = this.state;
    this.setState({ tierList });
  }

  render() {
    const tiers = Array.from(this.state.tierList);
    const { r20 } = this.state;
    return (
      <div className={styles.r20_ui}>
        <TierTree tierList={tiers} handleUpdate={this.update}></TierTree>
        <SpellScroll
          castHandler={() => {
            this.setState({ modalOpen: true });
          }}
          familiar={r20}
        ></SpellScroll>
        <Modal
          closeHandler={() => {
            this.setState({ modalOpen: false });
          }}
          isOpen={this.state.modalOpen}
        >
          <MonsterScroll familiar={r20}></MonsterScroll>
          <MonsterPortrait></MonsterPortrait>
        </Modal>
      </div>
    );
  }
}

export default R20_UI;
