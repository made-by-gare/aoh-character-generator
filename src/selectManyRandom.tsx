export const selectManyRandom = (arr: string[], count: number) => {
  const randomItems: string[] = [];
  while (randomItems.length < count) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (!randomItems.includes(item)) {
      randomItems.push(item);
    }
  }
  return randomItems;
};
