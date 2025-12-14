import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const parameters = [19, 20, 34];
  const array = [];
  for (const i of parameters) {
    const obj = new ClassRoom(i);
    array.push(obj);
  }
  return array;
}
