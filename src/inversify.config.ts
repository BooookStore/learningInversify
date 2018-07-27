import {Container, ContainerModule, interfaces} from "inversify";
import {TYPES} from "./types";
import {Warrior, Weapon, ThrowableWeapon} from "./interfaces";
import {Ninja, Katana, Shuriken} from "./entities";

// Normal Container
const container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThorwableWeapon).to(Shuriken);

// Container Module
let warriors = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<Ninja>("Ninja").to(Ninja);
})

container.load(warriors);

export {container}