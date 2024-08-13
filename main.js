'use strict';
import fs from 'fs';
import jsonfile from 'jsonfile';
const outputFile = './valley-silicon.json';
const highFalutin = (title) => title.toLowerCase().includes('valley silicon');
const data = fs.readFile('./list.json', 'utf8', (err, data) => {
  if (err) throw err;
  const list = JSON.parse(data);
  const episodesMenitioningValleySilicon = list
    .map(({ picks }) => picks)
    .flat()
    .filter(({ title }) => highFalutin(title));

  jsonfile.writeFile(outputFile, episodesMenitioningValleySilicon, { spaces: 2 }, function (err) {
    if(err) {
      console.log(err);
    }else {
      console.log(`Updated ${outputFile}`);
    }
  });
});