import { injectable, inject } from "inversify";
import "reflect-metadata";

import { ThrowableWeapon, Warrior, Weapon } from "./interfaces";
import { TYPES } from "./types";

@injectable()
class Katana implements Weapon {
  public hit(): string {
    return "cut!";
  }
}

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw(): string {
    return "hit!";
  }
}

@injectable()
class Ninja implements Warrior {
  private weapon: Weapon;
  private throwableWeapon: ThrowableWeapon;

  public constructor(
    @inject(TYPES.Weapon) weapon: Weapon,
    @inject(TYPES.ThorwableWeapon) throwableWeapon: ThrowableWeapon
  ) {
    this.weapon = weapon;
    this.throwableWeapon = throwableWeapon;
  }

  public fight(): string {
    return this.weapon.hit();
  }

  public snake(): string {
    return this.throwableWeapon.throw();
  }
}

export { Katana, Shuriken, Ninja };
