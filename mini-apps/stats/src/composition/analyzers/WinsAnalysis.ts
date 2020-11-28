import { MatchData } from '../../common/MatchData';
import { MatchResult } from '../../common/MatchResult';
import { Analyzer } from '../interfaces/Analyzer';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(matches: MatchData[]) {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin)
        wins++;
      else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin)
        wins++;
    }
    return `Team ${this.teamName} won ${wins} games`;
  }
}
