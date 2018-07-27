export interface Warrior {
    fight(): string;
    snake(): string;
}

export interface Weapon {
    hit(): string;
}

export interface ThrowableWeapon {
    throw(): string;
}