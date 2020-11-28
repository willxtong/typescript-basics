import { OutputTarget } from '../interfaces/OutputTarget';
import fs from 'fs';

export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const htmlReport = `
      <div>
        <h1>Analysis Report</h1>
        <div>${report}</div>
      </div>
    `;
    fs.writeFileSync('report.html', htmlReport);
  }
}
