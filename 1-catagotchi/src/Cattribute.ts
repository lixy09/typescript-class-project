export default class Cattribute {
  private value: number;

  public constructor(initialValue: number) {
    this.value = initialValue;
  }

  /**
   * increase by a number
   * @param by a number
   */
  public increase(by: number): void {
    this.value += by;
  }

  /**
   *  decrease by a number
   * @param by a number
   */
  public decrease(by: number): void {
    this.value -= by;
  }

  public getValue(): number {
    return this.value;
  }
}
