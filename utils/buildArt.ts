import fs from 'fs/promises';
import { join } from 'path';
import glob from 'tiny-glob';

const RootDir = '.';

function doubleDigit(n: number) {
  return n > 9 ? '' + n : '0' + n;
}

async function buildArt() {
  const files = await glob(`*`, { cwd: `${RootDir}/public/art/` });
  const images: string[] = [];
  const videos: string[] = [];

  for (const file of files) {
    const [name, extension] = file.split('.');

    if (extension === 'jpg' && !files.includes(`${name}.mp4`)) {
      images.push(file);
    } else if (extension === 'mp4') {
      videos.push(file);
    }
  }

  images.reverse();
  videos.reverse();

  const exports = ['// This is a generated file\n\n'];
  let count = 1;
  const imgNames: string[] = [];
  for (const image of images) {
    const name = `file${doubleDigit(count)}`;
    imgNames.push(name);
    exports.push(`import ${name} from '../public/art/${image}';\n`);
    count += 1;
  }

  const videoPaths = videos.map((video) => `'/art/${video}'`);

  exports.push(`\nexport const images = [${imgNames.toString()}];\n`);
  exports.push(`\nexport const videos = [${videoPaths.toString()}];\n`);

  await fs.writeFile(join('.', 'utils', 'arts.ts'), exports, 'utf-8');
}

buildArt();
