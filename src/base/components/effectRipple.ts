export class Ripple {
  private readonly _className = "ripple";
  private readonly _button;
  private readonly _diameter;
  private readonly _offset;
  private _ripples: HTMLSpanElement[] = [];

  constructor(element: HTMLElement | null) {
    if (!element) {
      throw new Error("The button is null.");
    }
    this._button = element;
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    this._diameter = `${diameter}px`;
    const radius = diameter / 2;
    this._offset = {
      x: element.offsetLeft + radius,
      y: element.offsetTop + radius,
    };
  }

  public trigger = (e: MouseEvent) => {
    const ripple = document.createElement("span");
    ripple.classList.add(this._className);
    ripple.style.height = ripple.style.width = this._diameter;
    ripple.style.top = `${e.clientY - this._offset.y}px`;
    ripple.style.left = `${e.clientX - this._offset.x}px`;
    this._button.appendChild(ripple);
    this._ripples.push(ripple);
    setTimeout(() => this._ripples.shift()?.remove(), 1000);
  };
}
