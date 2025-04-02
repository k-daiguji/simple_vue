import type { Path } from "./path";

export class WindowsPath implements Path {
  private readonly _folder;
  private readonly _filename;

  private constructor(folder: string, filename: string) {
    this._folder = folder;
    this._filename = filename;
  }

  public static create(folder: string, filename: string) {
    if (!folder) {
      throw new Error("Folder path must be at least 1 character.");
    }
    if (!filename) {
      throw new Error("Filename must be at least 1 character.");
    }
    return new WindowsPath(folder, filename);
  }

  public get full() {
    return `${this._folder}\\${this._filename}`;
  }

  public get folder() {
    return this._folder;
  }

  public get filename() {
    return this._filename;
  }
}
