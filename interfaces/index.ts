interface Car {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = { name: 'civic', year: 2000, broken: true };

const printCar = (car: Car): void => {
  console.log(`Name: ${car.name}`);
  console.log(`Year: ${car.year}`);
  console.log(`Is it broken? ${car.broken}`);
};

printCar(oldCivic);
