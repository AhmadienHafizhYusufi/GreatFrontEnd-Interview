export default function makeCounter(initialValue = 0) {
  let count = initialValue;
  return () => {
    return count++;
  };
}
