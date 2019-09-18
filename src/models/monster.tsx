const abilityMod = function(score: number): number {
  return Math.floor((score - 10) / 2);
};

class Monster {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  speed: string;
  hd_base: number;
  hd_num: number;
  vision_distance?: number;
  vision_modifiers?: Array<string>;
  abilities?: Array<any>;
  constructor(
    hd_num: number,
    hd_base: number,
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
    speed: string,
    vision_distance?: number,
    vision_modifiers?: Array<string>
  ) {
    this.hd_num = hd_num;
    this.hd_base = hd_base;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.speed = speed;
    this.vision_distance = vision_distance;
    this.vision_modifiers = vision_modifiers;
    // bind methods
    this.ac = this.ac.bind(this);
    this.hp = this.hp.bind(this);
    this.passive_perception = this.passive_perception.bind(this);
    this.dex_skill = this.dex_skill.bind(this);
    this.int_skill = this.int_skill.bind(this);
    this.wis_skill = this.wis_skill.bind(this);
  }
  public ac() {
    const dex = this.dex || 0;
    return 10 + abilityMod(dex);
  }
  public hp() {
    const con = this.con || 0;
    const hd_base = this.hd_base || 0;
    const hd_num = this.hd_num || 0;
    return hd_num * hd_base + abilityMod(con);
  }
  public passive_perception() {
    return 10 + this.wis_skill();
  }
  public dex_skill() {
    const dex = this.dex || 0;
    return 2 + abilityMod(dex);
  }
  public int_skill() {
    const int = this.int || 0;
    return 2 + abilityMod(int);
  }
  public wis_skill() {
    const wis = this.wis || 0;
    return 2 + abilityMod(wis);
  }
}

export {abilityMod};
export default Monster;