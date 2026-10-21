const multer = require("multer");
const path = require("path");

//Create storage
const createStorage = (uploadPath) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, `../../public/uploads/${uploadPath}`));
    },
    filename: (req, file, cb) => {
      // Sanitize filename: keep safe chars only
      const originalExt = path.extname(file.originalname);
      const ext = originalExt.toLowerCase();
      const raw = path.basename(file.originalname, originalExt);
      const safe = raw
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // drop accents: "Hội An" -> "Hoi An"
        .replace(/[đĐ]/g, "d")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "file";
      cb(null, `${safe}-${Date.now()}${ext}`);
    },
  });
};

const fileFilter = (req, file, cb) => {
  const allowed = [".jpg", ".jpeg", ".png"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) {
    cb(null, true); // chấp nhận upload
  } else {
    cb(new Error("File allowed: " + allowed.join(", ")));
  }
};

module.exports = { createStorage, fileFilter };
