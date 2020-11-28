import { MatchData } from '../common/MatchData';
import { Analyzer } from './interfaces/Analyzer';
import { OutputTarget } from './interfaces/OutputTarget';

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
