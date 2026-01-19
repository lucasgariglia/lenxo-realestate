/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const https = require('https');
const path = require('path');

// Configuration: Map old (current) filenames to new (branded) filenames
// The script will download to the NEW filename and replace occurrences of the OLD filename in code.
const imageConfig = [
  {
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop',
    oldFilename: 'lux-home-hero.jpg',
    newFilename: 'lenxo-home-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    oldFilename: 'lux-listing-villa.jpg',
    newFilename: 'lenxo-listing-villa.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    oldFilename: 'lux-listing-pool.jpg',
    newFilename: 'lenxo-listing-pool.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop',
    oldFilename: 'lux-listing-loft.jpg',
    newFilename: 'lenxo-listing-loft.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    oldFilename: 'lux-listing-offplan.jpg',
    newFilename: 'lenxo-listing-offplan.jpg',
  },
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        res.pipe(fileStream);
        fileStream.on('error', reject);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(filepath);
        });
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });

  return arrayOfFiles;
};

const updateReferences = () => {
  console.log('--- Updating Source Code References ---');
  const srcDirs = [path.join(__dirname, 'app'), path.join(__dirname, 'lib')];
  
  let allFiles = [];
  srcDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      allFiles = allFiles.concat(getAllFiles(dir));
    }
  });

  // Filter for text files
  const targetFiles = allFiles.filter(file => /\.(tsx|ts|js|jsx|css)$/.test(file));
  let updatedCount = 0;

  targetFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;

    imageConfig.forEach(img => {
      if (content.includes(img.oldFilename)) {
        // Replace all occurrences
        const regex = new RegExp(img.oldFilename, 'g');
        content = content.replace(regex, img.newFilename);
        hasChanges = true;
        console.log(`Updated reference in ${path.relative(__dirname, file)}: ${img.oldFilename} -> ${img.newFilename}`);
      }
    });

    if (hasChanges) {
      fs.writeFileSync(file, content, 'utf8');
      updatedCount++;
    }
  });

  console.log(`References updated in ${updatedCount} files.`);
};

const main = async () => {
  console.log('--- Starting Lenxo Media Protocol ---');
  const outputDir = path.join(__dirname, 'public', 'images');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 1. Download Images
  console.log('--- Downloading Assets ---');
  for (const img of imageConfig) {
    try {
      await downloadImage(img.url, path.join(outputDir, img.newFilename));
      console.log(`Downloaded: ${img.newFilename}`);
    } catch (e) {
      console.error(`Failed to download ${img.newFilename}:`, e.message);
    }
  }

  // 2. Update Code References
  updateReferences();
  
  console.log('--- Media Protocol Complete ---');
};

main();
