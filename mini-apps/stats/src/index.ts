import { MatchReader } from './composition/MatchReader'; // can change parent folder to inheritance
import { CsvFileReader } from './composition/CsvFileReader'; // can change parent folder to inheritance
import { Summary } from './composition/Summary';
import { WinsAnalysis } from './composition/analyzers/WinsAnalysis';
// import { ConsoleReport } from './composition/reportTargets/ConsoleReport';
import { HTMLReport } from './composition/reportTargets/HTMLReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const analysis = new WinsAnalysis('Man United');
const report = new HTMLReport();

const summary = new Summary(analysis, report);
summary.buildAndPrintReport(matchReader.matches);
