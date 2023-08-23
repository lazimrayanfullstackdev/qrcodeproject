import inquirer from 'inquirer';
import qr from 'qr-image'; // Import the qr-image package
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Enter URL: ",
      name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL; // Access the URL property of the answers object
    const qr_png = qr.image(url); // Generate QR code using user input
    qr_png.pipe(fs.createWriteStream('qr_code.png')); // Save the QR code as a PNG file
    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
