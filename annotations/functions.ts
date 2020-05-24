// explicitly define the type of this function by annotating its params and return value
// if we remove the annotations for the params, then it'll be (any, any) => any
// works the same for named and anonymous functions
const add = (a: number, b: number): number => a + b;

// return value of type "void" means we return null or undefined
const logger = (str: string): void => {
  console.log(str);
};

// return value of "never" means the fn never finishes
const throwError = (error): never => {
  throw new Error(error);
};

const todaysForecast = { date: new Date(), weather: 'sunny' };

// ES6 destructuring with an object parameter (kinda gross)
const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(weather);
};

logWeather(todaysForecast);
