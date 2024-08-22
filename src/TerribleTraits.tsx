import { selectManyRandom } from "./selectManyRandom";

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

export function TerribleTraits() {
  return <>{selectManyRandom(traits, 2).join(", ")}</>;
}
