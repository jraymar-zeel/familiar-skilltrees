import React, { Component } from "react";
import styles from "./style.module.scss";
import Skill from "models/skill";

type State = { tooltipVisible: boolean };
type Props = {
  handleUpdate: Function;
  isDecrementLocked: Function;
  isIncrementLocked: Function;
  skill: Skill;
};

class SkillButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tooltipVisible: false
    };
  }

  handleClick = (e: React.MouseEvent) => {
    if (!this.props.isIncrementLocked()) {
      this.props.skill.increaseRank();
      this.props.handleUpdate();
    }
  };

  handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!this.props.isDecrementLocked()) {
      this.props.skill.decreaseRank();
      this.props.handleUpdate();
    }
  };

  handleMouseEnter = (e: React.MouseEvent) => {
    e.preventDefault();
    this.setState({ tooltipVisible: true });
  };

  handleMouseLeave = (e: React.MouseEvent) => {
    e.preventDefault();
    this.setState({ tooltipVisible: false });
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        onContextMenu={this.handleContextMenu}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={`
          ${styles.skill} 
          ${styles.no_selection}
          ${this.props.skill.isMaxRank() ? `${styles.max_rank}` : ""} 
          ${this.props.isIncrementLocked() ? `${styles.locked}` : ""}
        `}
      >
        <div
          className={`
          ${styles.tooltip}
          ${this.state.tooltipVisible ? `${styles.visible}` : ""}
        `}
        >
          <h3>{this.props.skill.name}</h3>
          <h4>{this.props.skill.flavor}</h4>
          <p
            className={`
            ${this.props.skill.currentRank == 0 ? `${styles.hidden}` : ""}
          `}
          >
            <span>Current Rank: </span>
            {this.props.skill.currentRankDescription}
          </p>
          <p
            className={`
            ${this.props.skill.isMaxRank() ? `${styles.hidden}` : ""}
          `}
          >
            <span>Next Rank: </span>
            {this.props.skill.nextRankDescription}
          </p>
        </div>
        <span
          className={`
          ${styles.ranks}
          ${styles.no_selection}
        `}
        >
          {this.props.skill.currentRank + "/" + this.props.skill.maxRank}
        </span>
      </div>
    );
  }
}

export default SkillButton;
