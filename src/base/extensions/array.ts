export {};

type ArrayTupleToTuple<T extends unknown[][]> = {
  [K in keyof T]: T[K] extends (infer U)[] ? U : never;
};

declare global {
  interface ArrayConstructor {
    zip<T extends unknown[][]>(...arrays: T): ArrayTupleToTuple<T>[];
  }

  interface Array<T> {
    isEmpty: () => boolean;
    first: <K extends unknown[]>(
      this: K,
    ) => K extends [infer U, ...(infer _)[]] ? U : T | undefined;
    last: <K extends unknown[]>(
      this: K,
    ) => K extends [...(infer _)[], infer U] ? U : T | undefined;
    transpose: <K extends unknown[][]>(this: K) => K;
  }

  interface ReadonlyArray<T> {
    isEmpty: () => boolean;
    first: <K extends readonly unknown[]>(
      this: K,
    ) => K extends readonly [infer U, ...(infer _)[]] ? U : T | undefined;
    last: <K extends readonly unknown[]>(
      this: K,
    ) => K extends readonly [...(infer _)[], infer U] ? U : T | undefined;
    transpose: <K extends unknown[][]>(this: K) => K;
  }
}

Array.zip = <T extends unknown[][]>(...arrays: T) => {
  const length = Math.min(...arrays.map(a => a.length));
  return Array.from(
    { length },
    (_, i) => arrays.map(a => a[i]) as ArrayTupleToTuple<T>,
  );
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

Array.prototype.first = function <T extends unknown[]>(this: T) {
  return this.at(0) as T extends [infer U, ...(infer _)[]] ? U : T | undefined;
};

Array.prototype.last = function <T extends unknown[]>(this: T) {
  return this.at(-1) as T extends [...(infer _)[], infer U] ? U : T | undefined;
};

Array.prototype.transpose = function <T extends unknown[][]>(this: T) {
  return this[0].map((_, i) => this.map(column => column[i])) as T;
};
