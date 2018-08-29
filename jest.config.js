module.exports = {
  displayName: "website",
  setupFiles: ["./src/__tests__/config/Setup"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testRegex: "./src/__tests__\/.*\.test\.js$",
  testURL: "http://localhost/",
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["lcov"]
};
