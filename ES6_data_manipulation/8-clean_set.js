export default function cleanSet(set, startString) {
  return [...set]
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}
