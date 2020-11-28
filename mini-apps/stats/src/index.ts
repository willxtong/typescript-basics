import { MatchReader } from './composition/MatchReader'; // can change parent folder to inheritance
// import { CsvFileReader } from './composition/CsvFileReader'; // can change parent folder to inheritance
import { Summary } from './composition/Summary';
// import { WinsAnalysis } from './composition/analyzers/WinsAnalysis';
// import { ConsoleReport } from './composition/reportTargets/ConsoleReport';
// import { HTMLReport } from './composition/reportTargets/HTMLReport';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
