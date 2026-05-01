export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
/*  export default class Currency {
    constructor (code , name)
    {
      
      if (typeof code != "string")
        {throw new TypeError("code must be a string");}
      if (typeof name != "string")
        {throw new TypeError("name must be a string");}
      this._code = code;
      this._name = name;
    }
    get code() { return this._code;}
    get name() { return this._name;}
    set code (value)
    {
      if (typeof value != "string")
      {throw new TypeError("code must be a string");}
      this._code = value
    }
    set name (value)
    {
      if (typeof value != "string")
      {throw new TypeError("name must be a string");}
      this._name = value
    }
  displayFullCurrency()
  {
    return `${this._name} (${this._code})`;
  }
  }
  */
