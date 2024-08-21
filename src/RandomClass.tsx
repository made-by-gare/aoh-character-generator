type ClassType = {
  name: string;
  weaponRoll?: (hasScroll: boolean) => number;
  armorRoll?: (hasScroll: boolean) => number;
  possibleOrigins?: string[];
};

const seeker: ClassType = {
  name: "Seeker of the Left Hand Path",
  possibleOrigins: [
    `Obsessed with reading, you alienated yourself from society in the pursuit of esoteric knowledge. Now society alienates you for your inability to communicate rationally.`,
    `Your parents kept you indoors during inclement weather but after your ferocious tantrums, the sky always seemed to clear. Villagers avoided you and whispered as you walked by.`,
    `While staring into a telescope you saw the face of the Megatherion and came to understand the falsehood of the cosmos.`,
    `Having labored as a low level scribe your entire life, you managed to avoid ever getting any better at your craft. If anything, you are worse now than when your mind was young and supple. It is not hope that drives you in your quest for knowledge, but a banal fear of inadequacy and tedium.`,
    `Your pursuits have caused changes in your personality. You have become quick to anger and prone to long-winded psychobabble rationalizing your lack of compassion as a warranted response to naive uneducated people mindlessly subjugating will to so-called “reality.” Your family has cast you out and will not miss you.`,
    `You have somehow wiped your memory clean of the past. Consciousness is a disease and memory is a symptom. You never remember anything that happened yesterday.`,
  ],
};

const mountaineer: ClassType = {
  name: "Mountaineer",
  possibleOrigins: [
    `You were abandoned in the wilderness as a child and raised yourself. It was not until your adolescence that you first met people.`,
    `Coming from wealth, you rejected the path set before you and instead chose to follow your luxurious hobby of mountain expeditions. While you maintained connection with your family and status enough to maintain a financial safety net, a disaster brought them and all their property to ruin.`,
    `You never felt at home in a house. Sleeping under the stars abates the claustrophobia of walls and the threatening anxious sounds of society. You have been content until now to live as a hermit in one of the nearby caves.`,
    `On the last expedition, your party lost their way. The harsh winter convinced you that not all would survive. Not all of you did. But their bodies weren’t wasted and you did not go hungry.`,
  ],
};

const offspring: ClassType = {
  name: "Offspring of Pan",
  possibleOrigins: [
    `Mocked by the human children, you left home early with hate in your heart for the lesser species.`,
    `Having made every attempt to hide the resemblance to your father, you will cower in shame no longer.`,
    `After a joyous life in a small village, you heard the call of the Annihilation Song, set your home aflame, and left the village burning to begin your pilgrimage.`,
    `The beast within you must be given its time. Fearful of the animalistic rage that whelms inside you, you have abandoned your many lovers and even more offspring.`,
    `Having never known your father, your animal features only appeared as you entered adulthood. Your mother, sharing your birth story, has stirred in you a quest for patricide.`,
    `A lonely child, you felt most at home with the livestock. Great was the JOY you felt when setting them free. You are compelled to free all livestock whether by destroying their worldly cages or releasing them from their corporeal prison`,
  ],
};

const alchemist: ClassType = {
  name: "Alchemist",
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
      <p>
        <b>Class:</b> {c.name}
      </p>
      <p>
        <b>Weapon:</b> {weapons[weaponRoll]}
      </p>
      <p>
        <b>Armor:</b> {armor}
      </p>
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
