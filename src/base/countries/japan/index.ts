import type { Country } from "@/base/countries";

export class Japan implements Country {
  public static get name() {
    return "Japan";
  }

  public get now() {
    return new Date().toLocaleString("ja", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
}
