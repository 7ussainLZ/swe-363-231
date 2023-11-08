const fs = require('fs');
const path = require('path');

// Retrieve command-line arguments for source and target directories
const [sourceDir, targetDir] = process.argv.slice(2);

// Ensure source and target directories are provided
if (!sourceDir || !targetDir) {
    console.error('Please provide source and target directories.');
    process.exit(1);
}

// Function to copy files with specific extensions
const copyFilesWithExtensions = (srcDir, destDir, extensions) => {
    // Read the source directory
    fs.readdir(srcDir, (err, files) => {
        if (err) {
            console.error('Error reading the source directory:', err);
            return;
        }

        // Filter files with the specified extensions
        files.filter(file => extensions.includes(path.extname(file)))
            .forEach(file => {
                // Construct full file paths
                const srcFilePath = path.join(srcDir, file);
                const destFilePath = path.join(destDir, file);

                // Copy each file to the destination directory
                fs.copyFile(srcFilePath, destFilePath, err => {
                    if (err) {
                        console.error(`Error copying file ${file}:`, err);
                    } else {
                        console.log(`Copied ${file} to ${destDir}`);
                    }
                });
            });
    });
};

// Create the target directory if it doesn't exist
fs.mkdir(targetDir, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating the target directory:', err);
        return;
    }

    // Copy files with the desired extensions
    copyFilesWithExtensions(sourceDir, targetDir, ['.txt', '.jpg']);
});