import { ReactElement } from "react";
import { selectManyRandom } from "./selectManyRandom";

type ClassType = {
  name: string;
  weaponRoll?: (hasScroll: boolean) => number;
  armorRoll?: (hasScroll: boolean) => number;
  possibleOrigins?: string[];
  getPresense: () => number;
  getStrength: () => number;
  getAgility: () => number;
  getToughness: () => number;
  getSilver: () => number;
  getOmens: () => number;
  getHP: () => number;

  getClassEquipment?: () => ReactElement[];
  getClassAttributes?: () => ReactElement[];
};

const abilityPoints: { [key: number]: number } = {
  1: -3,
  2: -3,
  3: -3,
  4: -3,
  5: -2,
  6: -2,
  7: -1,
  8: -1,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 1,
  14: 1,
  15: 2,
  16: 2,
  17: 3,
  18: 3,
  19: 3,
  20: 3,
};

const dieties = [
  { name: "God of Midnight", power: "The Blasted Tower" },
  { name: "Baphomet", power: "Solve et Coagula" },
  { name: "Pan", power: "Annihilation Song" },
  { name: "Mother of Abominations", power: "Ten Million Spheres" },
  { name: "The False God", power: "Executioner’s Faith" },
  { name: "The Seven of Six", power: "Seven of 6" },
];

const seeker: ClassType = {
  name: "Seeker of the Left Hand Path",
  getStrength: () => abilityPoints[rollDice(6) + rollDice(6) + rollDice(6) - 2],
  getPresense: () => abilityPoints[rollDice(6) + rollDice(6) + rollDice(6) + 2],
  getAgility: () => abilityPoints[rollDice(6) + rollDice(6) + rollDice(6)],
  getToughness: () => abilityPoints[rollDice(6) + rollDice(6) + rollDice(6)],
  getSilver: () => rollDice(20),
  getOmens: () => rollDice(4) + 1,
  getHP: () => rollDice(4),
  getClassAttributes: () => {
    const deity = dieties[Math.floor(Math.random() * dieties.length)];

    return [
      <>
        Diety: <code>{deity.name}</code> Power: <code>{deity.power}</code>
      </>,
    ];
  },
  possibleOrigins: [
    `Obsessed with reading, you alienated yourself from society in the pursuit of esoteric knowledge. Now society alienates you for your inability to communicate rationally.`,
    `Your parents kept you indoors during inclement weather but after your ferocious tantrums, the sky always seemed to clear. Villagers avoided you and whispered as you walked by.`,
    `While staring into a telescope you saw the face of the Megatherion and came to understand the falsehood of the cosmos.`,
    `Having labored as a low level scribe your entire life, you managed to avoid ever getting any better at your craft. If anything, you are worse now than when your mind was young and supple. It is not hope that drives you in your quest for knowledge, but a banal fear of inadequacy and tedium.`,
    `Your pursuits have caused changes in your personality. You have become quick to anger and prone to long-winded psychobabble rationalizing your lack of compassion as a warranted response to naive uneducated people mindlessly subjugating will to so-called “reality.” Your family has cast you out and will not miss you.`,
    `You have somehow wiped your memory clean of the past. Consciousness is a disease and memory is a symptom. You never remember anything that happened yesterday.`,
  ],
};

const mountaineerSpecial = [
  {
    name: "Elasticity",
    text: "You have broken and rebroken so many of your bones that you no longer concern yourself with pain. You are grotesquely flexible and can stretch your torso and appendages far beyond that of normal bodies. You can stretch your body [d4] feet.",
  },
  {
    name: "Scansorial",
    text: "Strangely thickened calluses allow you to grip and climb any surface DR6 or lower to all climbing checks.",
  },
  {
    name: "Pranayama",
    text: "In your high altitude meditations, you discovered that the body does not need to breathe.",
  },
  {
    name: "Hardened",
    text: "Your skin, muscles, and bones have hardened. Unarmed strikes deal d8 damage and you have natural light armor (-d2 to damage).",
  },
  { name: "Immunity", text: "You are immune to infections and poisons." },
  {
    name: "No Rest for the Wicked",
    text: "You do not need to rest. You may heal as if you are resting any time you are not in combat.",
  },
];

const mountaineer: ClassType = {
  name: "Mountaineer",

  getStrength: () =>
    abilityPoints[
      rollDice(4) + rollDice(4) + rollDice(4) + rollDice(4) + rollDice(4)
    ],
  getPresense: () =>
    abilityPoints[
      rollDice(4) + rollDice(4) + rollDice(4) + rollDice(4) + rollDice(4)
    ],
  getAgility: () =>
    abilityPoints[
      rollDice(4) + rollDice(4) + rollDice(4) + rollDice(4) + rollDice(4)
    ],
  getToughness: () =>
    abilityPoints[
      rollDice(4) + rollDice(4) + rollDice(4) + rollDice(4) + rollDice(4)
    ],
  getSilver: () => rollDice(10),
  getOmens: () => rollDice(4),
  getHP: () => rollDice(6),
  getClassAttributes: () => {
    const special =
      mountaineerSpecial[Math.floor(Math.random() * mountaineerSpecial.length)];

    return [
      <>
        Special: <code>{special.name}</code>
        <div className="ms-5">
          <small>{special.text}</small>
        </div>
      </>,
    ];
  },

  getClassEquipment() {
    return [
      <>
        <b>Choose 2:</b> <code>crampons</code>, <code>hatchet (d6)</code>,{" "}
        <code>grappling hook</code>, <code>alpenstock (d8)</code>
      </>,
    ];
  },
  possibleOrigins: [
    `You were abandoned in the wilderness as a child and raised yourself. It was not until your adolescence that you first met people.`,
    `Coming from wealth, you rejected the path set before you and instead chose to follow your luxurious hobby of mountain expeditions. While you maintained connection with your family and status enough to maintain a financial safety net, a disaster brought them and all their property to ruin.`,
    `You never felt at home in a house. Sleeping under the stars abates the claustrophobia of walls and the threatening anxious sounds of society. You have been content until now to live as a hermit in one of the nearby caves.`,
    `On the last expedition, your party lost their way. The harsh winter convinced you that not all would survive. Not all of you did. But their bodies weren’t wasted and you did not go hungry.`,
  ],
};

const panParts = ["Tail", "Horns", "Legs", "Head"];

const panAnimals = ["Taurus", "Ass", "Sheep", "Muskox", "Antelope", "Goat"];
const panScroll = "Annihilation Song";

const panItems = [
  <>
    <code>Aulos</code>{" "}
    <small>
      playing these double reed pipes mesmerizes the target for the duration of
      the song
    </small>
  </>,
  <code>
    {"Scroll:"} {panScroll}
  </code>,
];

const offspring: ClassType = {
  name: "Offspring of Pan",
  getStrength: () => abilityPoints[rollDice(6) + rollDice(6) + rollDice(6)],
  getPresense: () => abilityPoints[rollDice(6) + rollDice(6) + rollDice(6) + 2],
  getAgility: () => abilityPoints[rollDice(6) + rollDice(6) + rollDice(6)],
  getToughness: () =>
    abilityPoints[rollDice(6) + rollDice(6) + rollDice(6) - 2],
  getSilver: () => rollDice(10),
  getOmens: () => rollDice(4),
  getHP: () => rollDice(8),
  getClassAttributes: () => {
    const animal = panAnimals[Math.floor(Math.random() * panAnimals.length)];
    const part = panParts[Math.floor(Math.random() * panParts.length)];

    return [
      <>
        <code>{part}</code> of <code>{animal}</code>
      </>,
    ];
  },
  getClassEquipment() {
    return [panItems[Math.floor(Math.random() * panItems.length)]];
  },
  possibleOrigins: [
    `Mocked by the human children, you left home early with hate in your heart for the lesser species.`,
    `Having made every attempt to hide the resemblance to your father, you will cower in shame no longer.`,
    `After a joyous life in a small village, you heard the call of the Annihilation Song, set your home aflame, and left the village burning to begin your pilgrimage.`,
    `The beast within you must be given its time. Fearful of the animalistic rage that whelms inside you, you have abandoned your many lovers and even more offspring.`,
    `Having never known your father, your animal features only appeared as you entered adulthood. Your mother, sharing your birth story, has stirred in you a quest for patricide.`,
    `A lonely child, you felt most at home with the livestock. Great was the JOY you felt when setting them free. You are compelled to free all livestock whether by destroying their worldly cages or releasing them from their corporeal prison`,
  ],
};

const alchemistPractices = [
  "Fluently read and speak the Abyssal language of demons",
  "Unparalleled astrological knowledge, +1 Omen if you observed the skies the night before",
  "Your love for death left you well practiced in returning from the Abyss; if you perish, test Presence DR20 to rejoin soul and body, rising with 1 HP.",
  "Slow and repeated exposure to poison boosted your immunity; suffer no damage from poisons.",
  "Mercurial gift, begin with one occult treasure (p.xx).",
  "Corpsecraft, you may bind together corpses sharing opposing traits to create a corpse golem with d4 HP.",
  "Once per day, spend d4 hours on your work and transmute any one material into any other material. Does not work on the immaterial such as ghosts or fire.",
  "Master of the elixir; once per day, test Presence DR16 to cause any liquid to become an undetectable, deadly single-dose poison or delectable healing cordial dealing d20 damage or restoring d20 HP upon consumption.",
];

const alchemist: ClassType = {
  name: "Alchemist",
  getStrength: () => abilityPoints[rollDice(4) + rollDice(4) + rollDice(4)],
  getPresense: () =>
    abilityPoints[rollDice(4) + rollDice(4) + rollDice(4) + rollDice(4) + 4],
  getAgility: () => abilityPoints[rollDice(6) + rollDice(6) + rollDice(6)],
  getToughness: () => abilityPoints[rollDice(6) + rollDice(6) + rollDice(6)],
  getSilver: () => rollDice(666),
  getOmens: () => rollDice(4) + rollDice(4),
  getHP: () => rollDice(4),
  getClassAttributes() {
    const practices = selectManyRandom(alchemistPractices, 2);

    return [
      <>
        <b>Practices:</b>
        <ul className="list-disc">
          {practices.map((p, i) => (
            <li className="ms-10" key={i}>
              <small>{p}</small>
            </li>
          ))}
        </ul>
      </>,
    ];
  },
  getClassEquipment() {
    return [<code>Alembic</code>, <code>Lute Putty</code>];
  },
  possibleOrigins: [
    `Having spent your best years apprenticing with a master moron, you learned little to nothing except from stolen books and your own blasphemous experiments.`,
    `Those of culture and those below it found your eccentricities equally as repulsive and blasphemous; arrested on charges of consorting with devils, you escaped by poisoning the water supply of the whole simple-minded city, leaving you unattended for the weeks you needed to tunnel your way out of your cell.`,
    `With only vague recollections of the Lunarians who descended through the cosmos to leave you at your adopted parents’ doorstep, you know that the Rebis is the key to returning to your rightful, pale silver home.`,
    `After a long bout of plague, you awoke in a dark, sealed coffin, clawed your way out, and returned home with a newly sparked interest in the occult sciences. After six more deaths, you can’t help but wonder: will your next be your last?  `,
  ],
};

const classTypes: ClassType[] = [seeker, mountaineer, alchemist, offspring];

const rollDice = (sides: number) => Math.floor(Math.random() * sides) + 1;

const weapons: { [key: number]: string } = {
  1: `Femur`,
  2: `Staff`,
  3: `Shortsword`,
  4: `Knife`,
  5: `Warhammer`,
  6: `Sword`,
  7: `Bow`,
  8: `Flail`,
  9: `Crossbow`,
  10: `Zweihänder`,
};

const uncleanScrolls = [
  "Palms Open the Southern Gate",
  "Tongue of Eris",
  "Te-le-kin-esis",
  "Lucy-fires Levitation",
  "Daemon of Capillaries",
  "Nine Violet Signs Unknot the Storm",
  "Metzhuotl Blind Your Eye",
  "Foul Psychompomp",
  "Eyelid Blinds the Mind",
  "Death",
];

const sacredScrolls = [
  "Grace Of A Dead Saint",
  "Grace For A Sinner",
  "Whispers Pass The Gate",
  "Aegis Of Sorrow",
  "Unmet Fate",
  "Bestial Speech",
  "False Dawn/Night’S Chariot",
  "Hermetic Step",
  "Roskoe’S Consuming Glare",
  "Enochian Syntax",
];

const allScrolls = new Set([...uncleanScrolls, ...sacredScrolls, panScroll]);

const itemPoolOne = [
  null,
  null,
  <code>backpack for 7 normal-sized items</code>,
  <code>sack for 10 normal-sized items</code>,
  () => (
    <>
      <code>small wagon</code>
      <small>
        {" "}
        (or <code>sack for 10 normal-size items</code> or{" "}
        <code>backpack for 7 normal-sized items</code>){" "}
      </small>
    </>
  ),
  () => (
    <>
      <code>donkey, not bad.</code>
      <small>
        {" "}
        (or <code>small wagon</code> or{" "}
        <code>sack for 10 normal-size items</code> or{" "}
        <code>backpack for 7 normal-sized items</code>)
      </small>
    </>
  ),
];

const itemPoolTwo = [
  <code>rope 30 feet</code>,
  (presence: number) => <code>{presence + 4} torches</code>,
  (presence: number) => <code>lantern with oil for {presence + 6} hours</code>,
  <code>magnesium strip</code>,
  () => (
    <code>
      Unclean Scroll:{" "}
      {uncleanScrolls[Math.floor(Math.random() * uncleanScrolls.length)]}
    </code>
  ),
  <code>sharp needle</code>,
  (presence: number) => (
    <code>
      medicine chest {presence + 4} uses (stops bleeding/infection and heals d6
      HP)
    </code>
  ),
  <code>metal file and lockpicks</code>,
  <code>bear trap (Presence DR14 to spot, d8 damage)</code>,
  <code>bomb (sealed bottle, d10 damage)</code>,
  () => (
    <code>
      a bottle of red poison {rollDice(4)} doses (Toughness DR12 or d10 damage)
    </code>
  ),
  <code>silver crucifix</code>,
];

const itemPoolThree = [
  () => (
    <code>
      life elixir {rollDice(4)} doses (heals d6 hp and removes infection)
    </code>
  ),
  () => (
    <code>
      Sacred Scroll:{" "}
      {sacredScrolls[Math.floor(Math.random() * sacredScrolls.length)]}
    </code>
  ),
  () => (
    <code>
      small but vicious dog ({rollDice(6) + 2} hp, bite d4, only obeys you)
    </code>
  ),
  () => (
    <code>
      {rollDice(4)} monkeys that ignore but love you ({rollDice(4) + 2} hp,
      punch/bite d4)
    </code>
  ),
  <code>exquisite perfume worth 25s</code>,
  <code>toolbox 10 nails, tongs, hammer, small saw and drill</code>,
  <code>heavy chain 15 feet</code>,
  <code>grappling hook</code>,
  <code>
    shield (-1 hp damage or have the shield break to ignore one attack)
  </code>,
  <code>crowbar (d4 damage)</code>,
  <code>lard (may function as 5 meals in a pinch)</code>,
  <code>tent</code>,
];

const lightArmors = ["fur", "padded cloth", "leather"];
const mediumArmors = ["scale", "mail"];

const armors: { [key: number]: string | (() => string) } = {
  1: `No Armor (tier 0)`,
  2: () =>
    `Light Armor (${
      lightArmors[Math.floor(Math.random() * lightArmors.length)]
    }, −d2 damage, tier 1)`,
  3: () =>
    `Medium Armor (${
      mediumArmors[Math.floor(Math.random() * mediumArmors.length)]
    }, −d4 damage, tier 2) dR +2 on Agility tests including defence.`,
  4: `Heavy Armor`,
};

const defaultWeaponRoll = (hasScroll: boolean) => {
  if (hasScroll) {
    return rollDice(6);
  }
  return rollDice(10);
};

const defaultArmorRoll = (hasScroll: boolean) => {
  if (hasScroll) {
    return rollDice(2);
  }
  return rollDice(4);
};

export const RandomClass = () => {
  const c = classTypes[Math.floor(Math.random() * classTypes.length)];

  let hasScroll = false;
  const equipment = [];

  const strength = c.getStrength();
  const presense = c.getPresense();
  const agility = c.getAgility();
  const toughness = c.getToughness();
  const silver = c.getSilver();
  const omens = c.getOmens();
  const hp = toughness + c.getHP();

  const classAttributes = c.getClassAttributes ? c.getClassAttributes() : [];

  equipment.push(itemPoolOne[Math.floor(Math.random() * itemPoolOne.length)]);
  equipment.push(itemPoolTwo[Math.floor(Math.random() * itemPoolTwo.length)]);
  equipment.push(
    itemPoolThree[Math.floor(Math.random() * itemPoolThree.length)]
  );

  if (c.getClassEquipment) {
    equipment.push(...c.getClassEquipment());
  }

  const evaledEquipment = equipment.filter(Boolean).map((e) => {
    const val: any = typeof e === "function" ? e(presense) : e;

    console.log(val.props.children);
    // This is jank...
    if (allScrolls.has(val.props.children[2])) {
      hasScroll = true;
    }
    return val;
  });

  const weaponRoll = c.weaponRoll
    ? c.weaponRoll(hasScroll)
    : defaultWeaponRoll(hasScroll);

  const armorRoll = c.armorRoll
    ? c.armorRoll(hasScroll)
    : defaultArmorRoll(hasScroll);

  const armor: string = (() => {
    const armor = armors[armorRoll];
    if (typeof armor === "function") {
      return armor();
    }
    return armor;
  })();

  return (
    <>
      <div>
        <b>Class:</b> {c.name}
        {classAttributes.map((a, i) => (
          <div key={i} className="ms-5">
            {a}
          </div>
        ))}
      </div>

      <b>Attributes</b>

      <div className="mx-4 flex flex-row stretch justify-around">
        <div>
          Strength: <code>{strength}</code>
        </div>
        <div>
          Presense: <code>{presense}</code>
        </div>
        <div>
          Agility: <code>{agility}</code>
        </div>
      </div>
      <div className="mx-4 flex flex-row stretch justify-around">
        <div>
          Toughness: <code>{toughness}</code>
        </div>
        <div>
          HP: <code>{hp}</code>
        </div>
        <div>
          Omens: <code>{omens}</code>
        </div>
      </div>
      <div>
        <b>Inventory:</b>
        <small className="ms-5">Has Scroll: {hasScroll ? "Yes" : "No"}</small>
        <ul className="list-disc">
          <li className="ms-5">
            <b>Weapon:</b> <code>{weapons[weaponRoll]}</code>
          </li>
          <li className="ms-5">
            <b>Armor:</b> <code>{armor}</code>
          </li>
          <li className="ms-5">
            <b>Silver:</b> <code>{silver}</code>
          </li>
          {evaledEquipment.map((e, i) => (
            <li className="ms-5" key={i}>
              {e}
            </li>
          ))}
        </ul>
      </div>
      {c.possibleOrigins && (
        <p className="mt-10">
          <b>Origin:</b>{" "}
          {
            c.possibleOrigins[
              Math.floor(Math.random() * c.possibleOrigins.length)
            ]
          }
        </p>
      )}
    </>
  );
};
