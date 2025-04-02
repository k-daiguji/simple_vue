export interface Path {
  get full(): string;
  get folder(): string;
  get filename(): string;
}
