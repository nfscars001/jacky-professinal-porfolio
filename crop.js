const fs = require('fs');
const { execSync } = require('child_process');

// Ensure sharp is available
try {
  require.resolve('sharp');
} catch (e) {
  execSync('npm install sharp --no-save', { stdio: 'inherit' });
}

const sharp = require('sharp');

async function run() {
  const inputDir = 'private-source/bio-union/deck-pages/';
  const outputDir = 'public/images/projects/bio-union/';
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Slide 19: Garment (Size: 2560x1440)
  // The garments are on the left side, roughly half of the screen. 
  // Let's crop X: 50, Y: 250, W: 1100, H: 900
  await sharp(`${inputDir}slide-19-garment-prototype.png`)
    .extract({ left: 50, top: 250, width: 1100, height: 950 })
    .webp({ quality: 80 })
    .toFile(`${outputDir}bio-union-garment-prototype.webp`);
    
  // Slide 20: Leap M hardware (Size: 2560x1440)
  // Gen.2 is top-left, Gen.3 is bottom-left
  // Gen 2 crop: X: 100, Y: 200, W: 800, H: 250
  await sharp(`${inputDir}slide-20-leap-m-hardware.png`)
    .extract({ left: 100, top: 200, width: 850, height: 280 })
    .webp({ quality: 80 })
    .toFile(`${outputDir}leap-m-gen2.webp`);

  // Gen 3 crop: X: 80, Y: 520, W: 850, H: 300
  await sharp(`${inputDir}slide-20-leap-m-hardware.png`)
    .extract({ left: 80, top: 520, width: 850, height: 350 })
    .webp({ quality: 80 })
    .toFile(`${outputDir}leap-m-gen3.webp`);

  // Slide 36: Medica 2017 (Size: 2560x1440)
  // Let's try to extract just the main photo block if possible, or the whole slide without text.
  // We'll crop X: 100, Y: 200, W: 2360, H: 1100
  await sharp(`${inputDir}slide-36-medica-2017.png`)
    .extract({ left: 100, top: 200, width: 2360, height: 1100 })
    .webp({ quality: 80 })
    .toFile(`${outputDir}bio-union-medica-2017.webp`);
    
  console.log("Cropping completed.");
}

run().catch(console.error);
