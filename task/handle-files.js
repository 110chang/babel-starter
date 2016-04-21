
'use strict';

export default function(file, simple=true) {
  if (simple) {
    process.stdout.write('.');
  } else {
    console.log(`file: ${file}`);
  }
}