const habits = [
  `Obsessively collect small sharp stones.`,
  `Won’t use a blade without testing it on your own flesh. Arms knitted with scars.`,
  `Can’t stop drinking once you start.`,
  `Gambling addict. Must bet every day. If you lose, raise and bet again.`,
  `Cannot tolerate criticism of any kind. Results in rage and weeping.`,
  `Unable to get to the point. Have never actually finished a story.`,
  `Best friend is a skull. Carry it with you, tell it everything, you trust no one more.`,
  `You pick your nose so deep it bleeds.`,
  `Laugh hysterically at your own jokes which you then explain in detail.`,
  `A nihilist. You insist on telling everyone you are a nihilist and explaining why.`,
  `Inveterate bug eater.`,
  `Stress response is aesthetic display. The worse things get the fancier you need to be.`,
  `Permanent phlegm deposit in throat. Continuously cough, snort, spit and swallow.`,
  `Pyromaniac`,
  `Consistently lose important items and forget vital facts.`,
  `Insecure shit-stirrer. Will talk about whoever just left the room.`,
  `You stutter when lying.`,
  `You giggle insanely at the worst possible times.`,
  `You whistle while trying to hide. You will deny this. Whistle when 5, 7, 9, 11 or 13 is rolled on a d20.`,
  <>
    You make jewelry from the teeth of the dead.{" "}
    <small>If this can be considered a bad habit</small>
  </>,
];

export function BadHabits() {
  const habit = habits[Math.floor(Math.random() * habits.length)];
  return <>{habit}</>;
}
