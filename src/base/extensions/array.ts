export {};

type ArrayTupleToTuple<T extends unknown[][]> = {
  [K in keyof T]: T[K] extends (infer U)[] ? U : never;
};

declare global {
  interface ArrayConstructor {
    zip<T extends unknown[][]>(...arrays: T): ArrayTupleToTuple<T>[];
  }

  interface Array<T> {
    first: () => T | undefined;
    isEmpty: () => boolean;
    last: (this: T[]) => T | undefined;
  }
}

Array.zip = <T extends unknown[][]>(...arrays: T) => {
  const length = Math.min(...arrays.map(a => a.length));
  return Array.from(
    { length },
    (_, i) => arrays.map(a => a[i]) as ArrayTupleToTuple<T>,
  );
};

Array.prototype.first = function <T>(this: T[]) {
  return this.at(0);
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

Array.prototype.last = function <T>(this: T[]) {
  return this.at(-1);
};
