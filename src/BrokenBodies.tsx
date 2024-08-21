const breaks = [
  `Staring manic gaze.`,
  `Covered in (for some) blasphemous tattoos.`,
  `Rotting face. Wears a mask.`,
  `Lost three toes, limps.`,
  `Starved: faunt and pale.`,
  `One hand replaced with rusting hook (d6 damage).`,
  `Decaying teeth.`,
  `Hauntingly beautiful, unnervingly clean.`,
  `Hands caked with sores.`,
  `Cataracts slowly but surly spreading in both eyes.`,
  `Long tangled hair, at least one cockroach in residence.`,
  `Broken, crushed ears.`,
  `Juddering and stuttering from nerve damage or stress.`,
  `Corpulent, ravenous, drooling.`,
  `One hand lacks thumb and index finger, grips like a lobster.`,
  `Red, swollen alcoholic’s nose.`,
  `Resting maniac face, making friends is hard.`,
  `Chronic athlete’s foot. Stinks.`,
  `Recently slashed and stinking eye covered with a patch.`,
  `Nails cracked and black, maybe about to drop off.`,
];

export function BrokenBodies() {
  const break_ = breaks[Math.floor(Math.random() * breaks.length)];
  return <>{break_}</>;
}
