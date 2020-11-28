import { MatchData } from '../common/MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Analyzer } from './interfaces/Analyzer';
import { OutputTarget } from './interfaces/OutputTarget';
import { HTMLReport } from './reportTargets/HTMLReport';

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisWithHtmlReport(teamName: string) {
    return new Summary(new WinsAnalysis(teamName), new HTMLReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
