module.exports = {
  displayName: "website",
  transform: {
    "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js"
  },
  setupFiles: ["./src/__tests__/config/Setup"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testRegex: "./src/__tests__\/.*\.test\.js$",
  testURL: "http://localhost/",
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/.cache/"],
  coverageReporters: ["lcov"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(gatsby)/)"
  ],
  globals: {
    "__PATH_PREFIX__": ""
  }
};
