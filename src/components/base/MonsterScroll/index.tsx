import React, { Component } from "react";
import styles from "./style.module.scss";
import R20 from "components/R20_UI/R20";
import { abilityMod } from "models/monster";

type Props = { familiar: R20 };
type State = {};

class MonsterScroll extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const abilities = this.props.familiar.abilities;
    const abilities_block =
      abilities &&
      abilities.map(ability => {
        return (
          <span>
            <b><i>{ability.name}.</i></b> {ability.description}
          </span>
        );
      });

    return (
      <div className={styles.scroll}>
        <div className={styles.scroll_border}></div>
        <div className={styles.scroll_page}>
          <div className={styles.scroll_wrapper}>
            <div className={styles.header}>
              <div className={styles.title}>
                <span>R20</span>
              </div>
              <i>Small construct, unaligned</i>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.derived_stats}>
              <span>
                <b>Armor Class </b>
                {this.props.familiar.ac()}
              </span>
              <br />
              <span>
                <b>Hit Points </b>
                {this.props.familiar.hp()}
              </span>
              <br />
              <span>
                <b>Speed </b>
                {this.props.familiar.speed}
              </span>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.raw_stats}>
              <div className={styles.stat}>
                <div>
                  <b>STR</b>
                </div>
                <div>{`${this.props.familiar.str} (${abilityMod(
                  this.props.familiar.str
                )})`}</div>
              </div>
              <div className={styles.stat}>
                <div>
                  <b>DEX</b>
                </div>
                <div>{`${this.props.familiar.dex} (${abilityMod(
                  this.props.familiar.dex
                )})`}</div>
              </div>
              <div className={styles.stat}>
                <div>
                  <b>CON</b>
                </div>
                <div>{`${this.props.familiar.con} (${abilityMod(
                  this.props.familiar.con
                )})`}</div>
              </div>
              <div className={styles.stat}>
                <div>
                  <b>INT</b>
                </div>
                <div>{`${this.props.familiar.int} (${abilityMod(
                  this.props.familiar.int
                )})`}</div>
              </div>
              <div className={styles.stat}>
                <div>
                  <b>WIS</b>
                </div>
                <div>{`${this.props.familiar.wis} (${abilityMod(
                  this.props.familiar.wis
                )})`}</div>
              </div>
              <div className={styles.stat}>
                <div>
                  <b>CHA</b>
                </div>
                <div>{`${this.props.familiar.cha} (${abilityMod(
                  this.props.familiar.cha
                )})`}</div>
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.proficiencies}>
              <span>
                <b>Skills </b>
                Perception +{this.props.familiar.wis_skill()}, Stealth +
                {this.props.familiar.dex_skill()}
              </span>
              <br />
              <span>
                <b>Senses </b>
                <span>
                  {this.props.familiar.vision_modifiers}{" "}
                  {this.props.familiar.vision_distance}ft.,{" "}
                </span>
                Passive Perception {this.props.familiar.passive_perception()}
              </span>
              <br />
              <span>
                <b>Languages </b>
                --
              </span>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.abilities}>{abilities_block}</div>
          </div>
        </div>
        <div className={styles.scroll_border}></div>
      </div>
    );
  }
}

export default MonsterScroll;
