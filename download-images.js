const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop', // Modern House (Replacement)
    filename: 'lux-home-hero.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop', // Interior
    filename: 'lux-listing-villa.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', // Pool
    filename: 'lux-listing-pool.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop', // Living Room
    filename: 'lux-listing-loft.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop', // Off-Plan
    filename: 'lux-listing-offplan.jpg',
  },
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

const main = async () => {
  const outputDir = path.join(__dirname, 'public', 'images');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const img of images) {
    try {
      await downloadImage(img.url, path.join(outputDir, img.filename));
      console.log(`Downloaded: ${img.filename}`);
    } catch (e) {
      console.error(`Failed to download ${img.filename}:`, e.message);
    }
  }
};

main();