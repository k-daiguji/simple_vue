import type { Name } from "@/app/models/countries";

const REGEX = /([ぁ-ん]|[ァ-ン]|[一-龠])+/;

export class JapaneseName implements Name {
  private readonly _space = "\u3000";
  private readonly _validation = new RegExp(REGEX);
  private readonly _familyName;
  private readonly _firstName;

  public constructor(familyName: string, firstName: string) {
    this._validate(familyName);
    this._validate(firstName);
    this._familyName = familyName;
    this._firstName = firstName;
  }

  public get fullName() {
    return `${this._familyName}${this._space}${this._firstName}`;
  }

  private _validate(name: string) {
    if (!this._validation.test(name)) {
      throw new Error(`Invalid name: ${name}`);
    }
  }
}
