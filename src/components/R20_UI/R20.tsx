import Monster from "models/monster";
import TierList from "models/tier_list";
import Tier from "models/tier";
import Skill from "models/skill";

class R20 extends Monster {
  ac_flat_mod: number;
  cast_range: number;
  cast_time: number;
  component_cost: number;
  hp_flat_mod: number;
  range: number;
  constructor(skillMap: Map<string, Skill>) {
    super(1, 4, 3, 13, 8, 9, 9, 6, "10ft., fly 60ft", 60, ["Darkvision"]);
    const self = this;
    this.ac_flat_mod = 0;
    this.cast_time = 60;
    this.component_cost = 1;
    this.hp_flat_mod = 0;
    this.cast_range = 10;
    this.range = 100;
    this.abilities = [];
    this.abilities.push({
      name: "Attack Restriction",
      description:
        "A familiar can't attack, but it can take other actions as normal."
    });
    // bind methods
    this.ac = this.ac.bind(this);
    this.hp = this.hp.bind(this);

    // create callbacks
    // ----------------

    // Range increase handler
    const range_skill = skillMap.get("r20_0102");
    if (range_skill) {
      range_skill.decreaseHandler = () => {
        self.range = self.range - 100;
      };
      range_skill.increaseHandler = () => {
        self.range = self.range + 100;
      };
    }

    // Cast time reduction handler
    const cast_skill = skillMap.get("r20_0101");
    if (cast_skill) {
      cast_skill.decreaseHandler = () => {
        self.cast_time += 10;
      };
      cast_skill.increaseHandler = () => {
        self.cast_time -= 10;
      };
    }
  }
  public ac() {
    return super.ac() + this.ac_flat_mod;
  }
  public hp() {
    return super.hp() + this.hp_flat_mod;
  }
  public display_component_cost() {
    return `V S M (${this.component_cost} residuum)`;
  }
  public display_cast_range() {
    return `${this.cast_range} ft.`;
  }
  public display_cast_time() {
    return `${this.cast_time} minutes`;
  }
}

export default R20;
