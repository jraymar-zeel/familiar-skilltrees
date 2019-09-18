class Skill {
  currentRank: number;
  decreaseHandler?: Function;
  flavor: string;
  id: string;
  increaseHandler?: Function;
  maxRank: number;
  name: string;
  template: string;
  type: string;
  constructor(
    flavor?: string,
    id?: string,
    maxRank?: number,
    name?: string,
    template?: string,
    type?: string
  ) {
    this.currentRank = 0;
    this.flavor = flavor || "FLAVOR";
    this.id = id || "ID";
    this.maxRank = maxRank || 1;
    this.name = name || "NAME";
    this.template = template || "${this.currentRank} + '/' + this.maxRank}";
    this.type = type || "TYPE";

    this.decreaseRank = this.decreaseRank.bind(this);
    this.increaseRank = this.increaseRank.bind(this);
    this.isMaxRank = this.isMaxRank.bind(this);
  }
  public get currentRankDescription(): string {
    return new Function(`return \`${this.template}\`;`).call({
      currentRank: this.currentRank
    });
  }
  public get nextRankDescription(): string {
    return new Function(`return \`${this.template}\`;`).call({
      currentRank: this.currentRank + 1
    });
  }
  public decreaseRank() {
    if (this.currentRank > 0) {
      this.currentRank--;
      this.decreaseHandler && this.decreaseHandler();
    }
  }
  public increaseRank() {
    if (this.currentRank < this.maxRank) {
      this.currentRank++;
      this.increaseHandler && this.increaseHandler();
    }
  }
  public isMaxRank() {
    return this.currentRank === this.maxRank;
  }
}

export default Skill;
