import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

const basepath = 'C:\\Users\\admin\\OneDrive\\Desktop';

async function organizeFiles() {
    try {
        const files = await fs.readdir(basepath);

        for (const item of files) {
            console.log('Running for', item);
            const ext = path.extname(item).slice(1); // Get file extension without the dot

            if (ext && ext !== 'js' && ext !== 'json') {
                const extDir = path.join(basepath, ext);

                if (!fsn.existsSync(extDir)) {
                    await fs.mkdir(extDir); // Create the directory if it does not exist
                }

                const oldPath = path.join(basepath, item);
                const newPath = path.join(extDir, item);

                await fs.rename(oldPath, newPath); // Move the file
            }
        }

        console.log('Files organized successfully.');
    } catch (error) {
        console.error('Error organizing files:', error);
    }
}

organizeFiles();




/*

Sure, I'll provide a detailed explanation of the code:

### Overview

This Node.js script organizes files in a specified directory by moving them into subfolders based on their file extensions. It uses the modern ES module syntax for import statements and asynchronous operations to handle file system tasks.

### Import Statements

```javascript
import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';
```

- **`fs` from `'fs/promises'`**: This module provides promise-based versions of the standard file system functions, which allows us to use `async/await` for asynchronous operations.
- **`fsn` from `'fs'`**: The standard file system module is used here primarily for synchronous operations like checking if a directory exists.
- **`path`**: This module provides utilities for working with file and directory paths.

### Base Path

```javascript
const basepath = 'c:\\Users\\admin\\OneDrive\\Desktop\\programming\\htmlcssjs\\backend\\Exercises\\Clear da clutter\\public';
```

- **`basepath`**: The path to the directory that contains the files to be organized.

### Main Function

```javascript
async function organizeFiles() {
```

- Declares an asynchronous function called `organizeFiles`.

### Try-Catch Block

```javascript
try {
    const files = await fs.readdir(basepath);
```

- **`try` block**: Starts a block of code to attempt, which will catch any errors that occur within it.
- **`fs.readdir(basepath)`**: Reads the contents of the directory specified by `basepath` and returns an array of file names. The `await` keyword pauses the execution of the `organizeFiles` function until the `readdir` operation is complete.

### Loop Through Files

```javascript
    for (const item of files) {
        console.log('Running for', item);
        const ext = path.extname(item).slice(1); // Get file extension without the dot
```

- **`for (const item of files)`**: Iterates over each file in the `files` array.
- **`console.log('Running for', item)`**: Logs the current file name to the console.
- **`path.extname(item).slice(1)`**: Extracts the file extension from the file name. `path.extname(item)` returns the extension with a leading dot (e.g., `.jpg`), and `slice(1)` removes the dot.

### Check and Create Directory

```javascript
        if (ext && ext !== 'js' && ext !== 'json') {
            const extDir = path.join(basepath, ext);

            if (!fsn.existsSync(extDir)) {
                await fs.mkdir(extDir); // Create the directory if it does not exist
            }
```

- **`if (ext && ext !== 'js' && ext !== 'json')`**: Checks if the file has an extension and that it is not `.js` or `.json`.
- **`const extDir = path.join(basepath, ext)`**: Constructs the path to the directory for the file extension.
- **`fsn.existsSync(extDir)`**: Synchronously checks if the directory for the extension already exists.
- **`await fs.mkdir(extDir)`**: If the directory does not exist, it creates it. The `await` keyword pauses execution until the directory is created.

### Move File

```javascript
            const oldPath = path.join(basepath, item);
            const newPath = path.join(extDir, item);

            await fs.rename(oldPath, newPath); // Move the file
```

- **`const oldPath = path.join(basepath, item)`**: Constructs the full path to the current file.
- **`const newPath = path.join(extDir, item)`**: Constructs the full path to the new location of the file in the appropriate subdirectory.
- **`await fs.rename(oldPath, newPath)`**: Moves the file from `oldPath` to `newPath`. The `await` keyword pauses execution until the file is moved.

### Catch Block

```javascript
    }
    console.log('Files organized successfully.');
} catch (error) {
    console.error('Error organizing files:', error);
}
```

- **`console.log('Files organized successfully.')`**: Logs a success message once all files have been processed.
- **`catch (error)`**: Catches any errors that occur during the execution of the `try` block.
- **`console.error('Error organizing files:', error)`**: Logs the error message to the console.

### Function Call

```javascript
organizeFiles();
```

- **`organizeFiles()`**: Calls the `organizeFiles` function to start the file organization process.

### Summary

This script efficiently organizes files in a given directory into subdirectories based on their file extensions. It uses modern JavaScript features like async/await and ES modules to handle file system operations asynchronously and cleanly. If you want to run this script in a Node.js environment that doesn't support ES modules by default, you either need to set `"type": "module"` in your `package.json` or convert the script to use CommonJS syntax.

*/
