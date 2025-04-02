const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Storage configuration
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

app.use(express.static("public"));
app.use("/uploads", express.static(uploadDir));

// Upload route
app.post("/upload", upload.single("file"), (req, res) => {
    res.send("File uploaded successfully.");
});

// List files route
app.get("/files", (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) return res.status(500).send("Error reading files");
        res.json(files);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
