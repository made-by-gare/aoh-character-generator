const traits = [
  `Endlessly Aggravated`,
  `Inferiority Complex`,
  `Problems With Authority`,
  `Loud Mouth`,
  `Cruel`,
  `Egocentric`,
  `Nihilistic`,
  `Prone To Substance Abuse`,
  `Conflicted`,
  `Shrewd`,
  `Vindictive`,
  `Cowardly`,
  `Lazy`,
  `Suspicious`,
  `Ruthless`,
  `Worried`,
  `Bitter`,
  `Deceitful`,
  `Wasteful`,
  `Arrogant`,
];

const getTwoRandomTraits = () => {
  const randomTraits: string[] = [];
  while (randomTraits.length < 2) {
    const trait = traits[Math.floor(Math.random() * traits.length)];
    if (!randomTraits.includes(trait)) {
      randomTraits.push(trait);
    }
  }
  return randomTraits;
};

export function TerribleTraits() {
  return <>{getTwoRandomTraits().join(", ")}</>;
}
