class Vehicle {
  constructor(public color: string) {} // shorthand for new object init

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const silverCar = new Car('silver', 4);
silverCar.startDriving();
