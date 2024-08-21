type ClassType = {
  name: string;
};

const seeker: ClassType = {
  name: "Seeker of the Left Hand Path",
};

const mountaineer: ClassType = {
  name: "Mountaineer",
};

const classTypes: ClassType[] = [seeker, mountaineer];

export const RandomClass = () => {
  const c = classTypes[Math.floor(Math.random() * classTypes.length)];
  return (
    <p>
      <b>Class:</b> {c.name}
    </p>
  );
};
