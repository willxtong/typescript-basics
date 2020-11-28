import { MatchData } from '../../common/MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}
