
# File Transfer Project

A simple Node.js application for uploading and listing files. This project uses **Express** and **Multer** to handle file uploads and serves static files.

## Features

- Upload files via a POST request.
- List all uploaded files via a GET request.
- Serve uploaded files and static assets.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/FileTransfer.git
   cd FileTransfer/file-transfer
   ```

2. Install dependencies:
   ```bashcd 
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Use the following endpoints:
   - **Upload a file**: Send a `POST` request to `/upload` with a file in the `file` field.
   - **List uploaded files**: Send a `GET` request to `/files`.
   - **Access uploaded files**: Navigate to `/uploads/<filename>`.

## Project Structure

```
FileTransfer/
├── file-transfer/
│   ├── server.js         # Main server file
│   ├── uploads/          # Directory for uploaded files (created automatically)
│   ├── public/           # Directory for static files
│   └── package.json      # Project dependencies
```

## Example Requests

### Upload a File
Use a tool like [Postman](https://www.postman.com/) or `curl`:
```bash
curl -X POST -F "file=@path/to/your/file.txt" http://localhost:3000/upload
```

### List Files
```bash
curl http://localhost:3000/files
```

## License

This project is licensed under the MIT License.
```

Replace `https://github.com/your-username/FileTransfer.git` with the actual URL of your repository if applicable.