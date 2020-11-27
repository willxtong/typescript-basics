import { dateStrToDate } from '../common/utils';
import { MatchResult } from '../common/MatchResult';
import { DataReader } from './DataReader';
import { MatchData } from '../common/MatchData';

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStrToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }
}
