const fs = import('fs');
import { readFileSync } from 'fs';
const result = JSON.parse(readFileSync('../../package/package.json'));

console.log(result);
