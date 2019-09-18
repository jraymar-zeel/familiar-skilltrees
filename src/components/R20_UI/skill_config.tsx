const orderedTierData = [
  {
    tier: 1,
    skills: [
      {
        id: "r20_0101",
        name: "Optimized Fabricators",
        type: "software",
        maxRank: 5,
        template:
          "Reduce cast time of your find familiar spell by ${10*this.currentRank} minutes",
        flavor: "Sick of waiting? Get online faster with this upgrade!"
      },
      {
        id: "r20_0102",
        name: "Long Range Transmitters",
        type: "hardware",
        maxRank: 5,
        template:
          "Increase communication range with your familiar by ${100*this.currentRank} feet",
        flavor: "Never lose signal again!"
      },
      {
        id: "r20_0103",
        name: "Remote Cloud Bank",
        type: "software",
        maxRank: 1,
        template:
          "'Software' or consciousness type talents (including this one!) are not lost upon destruction"
      }
    ]
  },
  {
    tier: 2,
    unlocksAt: 5,
    skills: [
      {
        name: "Improved Sensors",
        type: "hardware",
        maxRank: 1,
        template: "Gain Darkvision 60ft"
      },
      {
        name: "Protocol: Distract",
        type: "software",
        maxRank: 1,
        template: `When taking the Help action in combat for the purpose of aiding in an attack, 
          the target has disadvantage on all attacks made against you until the start of 
          your next turn`
      },
      {
        name: "Residuum Reinforcement",
        type: "hardware",
        maxRank: 5,
        template: "Gain {5*rank} hp"
      }
    ]
  },
  {
    tier: 3,
    unlocksAt: 10,
    skills: [
      {
        name: "Even Better Sensors",
        type: "hardware",
        maxRank: 1,
        template: "Gain Blindsight 60ft"
      },
      {
        name: "Protocol: Revitalize",
        type: "software",
        maxRank: 1,
        template:
          "1/SR Focus the energies of a spell slot in a restorative way, cast 'cure wounds' at the spell level used."
      },
      {
        name: "Absorption Fields",
        type: "hardware",
        maxRank: 5,
        template: "Damage dealt over {40-(5*rank)} is reduced by {rank}"
      }
    ]
  },
  {
    tier: 4,
    unlocksAt: 15,
    skills: [
      {
        name: "Blaster",
        type: "hardware",
        maxRank: 1,
        template:
          "Ranged Weapon Attack: +4 to hit, range 20ft, one target. Hit 1d4 force damage"
      }
    ]
  }
];

export default orderedTierData;
