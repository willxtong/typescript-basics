import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../common/MatchResult';
import { dateStrToDate } from '../common/utils';
import { MatchData } from '../common/MatchData';

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStrToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
