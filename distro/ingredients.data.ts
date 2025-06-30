import fs from 'node:fs'
import { parse } from 'csv-parse/sync'

const data = {
  watch: ['./*.csv'],
  load(watchedFiles) {
    console.log(watchedFiles);
    return watchedFiles.map((file) => {
      return parse(fs.readFileSync(file, 'utf-8'), {
        columns: true,
        skip_empty_lines: true
      })
    }).flat()
  }
}

export default data;
