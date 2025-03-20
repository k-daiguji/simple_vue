import type { Birthday } from "..";

export class JapaneseBirthday implements Birthday {
  private readonly _date;
  private readonly _year;
  private readonly _month;
  private readonly _day;

  public constructor(year: number, month: number, day: number) {
    [this._year, this._month, this._day] = this._validateDate(year, month, day);
    const formattedYear = this._toZeroPadding(this._year, 4);
    const formattedMonth = this._toZeroPadding(this._month, 2);
    const formattedDay = this._toZeroPadding(this._day, 2);
    this._date = `${formattedYear}/${formattedMonth}/${formattedDay}`;
  }

  public get age() {
    const date = new Date();
    const age = date.getFullYear() - this._year;
    const currentMonth = date.getMonth() + 1;
    return this._month < currentMonth ||
      (this._month === currentMonth && this._day <= date.getDate())
      ? age
      : age - 1;
  }

  public get date() {
    return this._date;
  }

  private _validateDate(year: number, month: number, day: number) {
    const date = new Date();

    const currentYear = date.getFullYear();
    if (year > currentYear) {
      throw new Error("Year must be less than or equal to the current year.");
    }

    const currentMonth = date.getMonth() + 1;
    if (year === currentYear && month > currentMonth) {
      throw new Error("Month must be less than or equal to the current month.");
    }

    if (
      year === currentYear &&
      month === currentMonth &&
      day > date.getDate()
    ) {
      throw new Error("Day must be less than or equal to the current day.");
    }
    return [year, month, day];
  }

  private _toZeroPadding(value: number, digits: number) {
    return String(value).padStart(digits, "0");
  }
}
