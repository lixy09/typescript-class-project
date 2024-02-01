import Cattribute from "./Cattribute.js";
export default class Catagotchi {
  private catAlive: boolean;
  private catStatus: string;
  private catMood: Cattribute;
  private catEnergy: Cattribute;
  private catHunger: Cattribute;

  public constructor() {
    this.catAlive = true;
    this.catStatus = 'Happy';
    this.catMood = new Cattribute(10);
    this.catEnergy = new Cattribute(10);
    this.catHunger = new Cattribute(0);
  }

  public feed(): void {
    this.catHunger.decrease(1);
  }

  public play(): void {
    this.catMood.increase(1);
    this.catEnergy.decrease(1);
  }

  public pet(): void {
    this.catEnergy.increase(1);
    this.catHunger.increase(1);
  }

  private catDied(): void {
    this.catAlive = false;
  }

  /**
   * Update the state of Catagotchi according to rules
   */
  public updateCat(): void {
    this.catMood.decrease(1);
    this.catEnergy.decrease(1);
    if (this.catEnergy.getValue() === 0) this.catDied();
    this.catHunger.increase(1);
    if (this.catHunger.getValue() === 10) this.catDied();
    if (this.catEnergy.getValue() < 4 || this.catMood.getValue() < 4 || this.catHunger.getValue() > 6) this.catStatus = 'Okay';
    if (this.catEnergy.getValue() < 2 || this.catMood.getValue() < 2 || this.catHunger.getValue() > 8) this.catStatus = 'Unhappy';

  }

  /**
   * Update the screen of the Catagotchi
   * TODO: Comp  privatee this function.
   *
   * @returns String with the output for the screen
   */
  public getScreen(): string {
    if (this.catAlive) {
      return `Catagotchi!<br>
    Status: ${this.catStatus}<br>
    Mood:   ${this.catMood.getValue()}<br>
    Energy: ${this.catEnergy.getValue()}<br>
    Hunger: ${this.catHunger.getValue()}`;
    }
    return 'Catagotchi Dead!';
  }
}
