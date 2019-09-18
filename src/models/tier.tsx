import Skill from "models/skill";

class Tier {
  prevTier?: Tier;
  nextTier?: Tier;
  skills: Array<Skill>;
  unlocksAt: number;

  constructor(skills: Array<Skill | Object>, unlocksAt = 0) {
    const castedSkills = skills.map(
      (skillData): Skill => {
        const skill = new Skill();
        Object.assign(skill, skillData);
        return skill;
      }
    );
    this.skills = castedSkills;
    this.unlocksAt = unlocksAt;
    this.getTotalSkillRanks = this.getTotalSkillRanks.bind(this);
    this.isDecrementLocked = this.isDecrementLocked.bind(this);
    this.isIncrementLocked = this.isIncrementLocked.bind(this);
  }

  public getSkillRanks() {
    let total = 0;
    for (let skill of this.skills) {
      total += skill.currentRank;
    }
    return total;
  }
  public getTotalSkillRanks() {
    let total = 0;
    total += this.getSkillRanks();
    if (this.prevTier) {
      total += this.prevTier.getTotalSkillRanks();
    }
    return total;
  }
  public isDecrementLocked() {
    if (!this.nextTier || !this.nextTier.getSkillRanks()) return false;

    return this.nextTier.unlocksAt >= this.getTotalSkillRanks();
  }
  public isIncrementLocked() {
    if (!this.prevTier) return false;

    return this.prevTier.getTotalSkillRanks() < this.unlocksAt;
  }
}

export default Tier;
