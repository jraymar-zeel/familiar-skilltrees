import Tier from "models/tier";

class TierList implements Iterable<Tier> {
  head?: Tier;
  tail?: Tier;
  constructor() {
    this.push = this.push.bind(this);
  }

  public [Symbol.iterator]() {
    let currentTier = this.head;
    return {
      next(): IteratorResult<Tier> {
        if (currentTier) {
          let result = { value: currentTier, done: false };
          currentTier = currentTier.nextTier;
          return result;
        }
        return { value: null, done: true };
      }
    };
  }
  public push(tier: Tier) {
    if (this.tail) {
      this.tail.nextTier = tier;
      tier.prevTier = this.tail;
      this.tail = tier;
    } else {
      this.head = tier;
      this.tail = tier;
    }
  }
}

export default TierList;
