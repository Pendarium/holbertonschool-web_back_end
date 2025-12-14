export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!(Array.isArray(students))) {
      throw new TypeError('Students must be an array');
    } else {
      this._name = name;
      this._students = students;
      this._length = length;
    }
  }

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  }

  set students(newStudent) {
    if (!(Array.isArray(newStudent))) {
      throw new TypeError('Students must be an array');
    }
    this._students = newStudent;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof (newLength) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }
}
