const path = require("path");
const { createStorage, fileFilter } = require("../src/config/upload");

// Runs a multer-style callback function and returns what it passed to cb.
function runCallback(fn, file) {
  return new Promise((resolve) => {
    fn({}, file, (error, value) => resolve({ error, value }));
  });
}

describe("fileFilter", () => {
  test.each(["photo.jpg", "photo.JPEG", "photo.png"])("accepts %s", async (originalname) => {
    const { error, value } = await runCallback(fileFilter, { originalname });
    expect(error).toBeNull();
    expect(value).toBe(true);
  });

  test.each(["script.js", "doc.pdf", "image.gif", "noextension"])("rejects %s", async (originalname) => {
    const { error } = await runCallback(fileFilter, { originalname });
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toMatch(/\.jpg, \.jpeg, \.png/);
  });
});

describe("createStorage", () => {
  beforeEach(() => jest.spyOn(Date, "now").mockReturnValue(1700000000000));
  afterEach(() => jest.restoreAllMocks());

  test("saves into public/uploads/<folder>", async () => {
    const storage = createStorage("tours");
    const { value } = await runCallback(storage.getDestination, { originalname: "a.jpg" });
    expect(value).toBe(path.join(__dirname, "../public/uploads/tours"));
  });

  test("turns the original name into a safe, timestamped file name", async () => {
    const storage = createStorage("tours");
    const { value } = await runCallback(storage.getFilename, {
      originalname: "Hội An Night!! (1).PNG",
    });
    expect(value).toBe("hoi-an-night-1-1700000000000.png");
  });

  test("keeps Vietnamese names readable", async () => {
    const storage = createStorage("threads");
    const { value } = await runCallback(storage.getFilename, {
      originalname: "Đèo Hải Vân.jpg",
    });
    expect(value).toBe("deo-hai-van-1700000000000.jpg");
  });

  test("falls back to 'file' when nothing safe is left of the name", async () => {
    const storage = createStorage("posts");
    const { value } = await runCallback(storage.getFilename, { originalname: "東京.jpg" });
    expect(value).toBe("file-1700000000000.jpg");
  });

  test("strips path traversal from the original name", async () => {
    const storage = createStorage("tours");
    const { value } = await runCallback(storage.getFilename, {
      originalname: "../../etc/passwd.jpg",
    });
    expect(value).toBe("passwd-1700000000000.jpg");
  });
});
