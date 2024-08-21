const tales = [
  `Pursued for manslaughter. There is a bounty.`,
  `In massive debt. The debt is being traded to successively more ruthless groups`,
  `Have a rare, sought after item.`,
  `Have a cursed never healing wound.`,
  `Had an illegal, immoral and secret affair with a member of the royal family. Has proof.`,
  `Escaped cult member. Terrified and paranoid. Other cultists are everywhere.`,
  `An identity thief who recently killed and replaced this person.`,
  `Banished and disowned for unspecified deeds. Can never go home`,
  `Deserted military after witnessing a massacre, bounty on head. Hunted by former friends.`,
  `Very recently murdered a close relative. Very recently.`,
  `A puzzle cube has been calibrated incorrectly (or has it?), awakening a slumbering abomination.`,
  `Evil creatures love the scent of your spoor and are drawn to it, bringing disaster in your wake.`,
  `A battle wound left a shard of metal slowly inching closer to your heart. Every day there is a 2 % chance it reaches it.`,
  `Violence forced you into the wilderness. You think waving trees are whispering. You talk to, scream at, attack trees.`,
  `Cursed to share the nightmares of others, you sleep far, far away.`,
  `At permanent war with all corvids. No contact without some violence. You carry a sling.`,
  `After dreaming of an underground temple to a forgotten god you understand the songs of insects and worms.`,
  `Being tracked and observed by a golem after an agreement which you know has been wiped from your mind.`,
  `“Burn or be burned” is the fate you accept.`,
  `Your flesh heals twice as fast, but your companions twice as slow. You see a many-eyed “guardian angel.”`,
];

export function TroublingTales() {
  const tale = tales[Math.floor(Math.random() * tales.length)];
  return <>{tale}</>;
}
