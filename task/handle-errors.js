
'use strict';

export default function(error) {
  process.stdout.write('\n');
  console.log(`Error has occur : ${error.filename} at line ${error.loc.line}, column ${error.loc.column}`);
  // Keep gulp from hanging on this task
  this.emit('end');
}