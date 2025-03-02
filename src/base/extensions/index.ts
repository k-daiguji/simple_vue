export {};

type ArrayTupleToTuple<T extends unknown[][]> = {
  [K in keyof T]: T[K] extends (infer U)[] ? U : never;
};

declare global {
  interface ArrayConstructor {
    zip<T extends unknown[][]>(...arrays: T): ArrayTupleToTuple<T>[];
  }

  interface Array<T> {
    first: <K extends unknown[]>(
      this: K,
    ) => K extends [infer U, ...(infer _)[]] ? U : T | undefined;
    isEmpty: () => boolean;
    last: <K extends unknown[]>(
      this: K,
    ) => K extends [...(infer _)[], infer U] ? U : T | undefined;
  }

  interface ReadonlyArray<T extends unknown[]> {
    first: <K extends readonly unknown[]>(
      this: K,
    ) => K extends readonly [infer U, ...(infer _)[]] ? U : T | undefined;
    isEmpty: () => boolean;
    last: <K extends readonly unknown[]>(
      this: K,
    ) => K extends readonly [...(infer _)[], infer U] ? U : T | undefined;
  }
}

Array.zip = <T extends unknown[][]>(...arrays: T) => {
  const length = Math.min(...arrays.map(a => a.length));
  return Array.from(
    { length },
    (_, i) => arrays.map(a => a[i]) as ArrayTupleToTuple<T>,
  );
};

Array.prototype.first = function <T extends unknown[]>(this: T) {
  return this.at(0) as T extends [infer U, ...(infer _)[]] ? U : T | undefined;
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

Array.prototype.last = function <T extends unknown[]>(this: T) {
  return this.at(-1) as T extends [...(infer _)[], infer U] ? U : T | undefined;
};
