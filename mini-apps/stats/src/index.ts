import { MatchReader } from './composition/MatchReader'; // can change parent folder to inheritance
import { CsvFileReader } from './composition/CsvFileReader'; // can change parent folder to inheritance
import { MatchResult } from './common/MatchResult';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    manUnitedWins++;
  else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    manUnitedWins++;
}

console.log(`Man united won ${manUnitedWins} matches`);
