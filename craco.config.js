const path = require("path");
const tsconfig = require("./tsconfig.json");

const aliases = tsconfig.compilerOptions.paths;
const webpackAliases = Object.entries(aliases).reduce((acc, [key, value]) => {
  const alias = key.replace("/*", "");
  const aliasPath = path.resolve(__dirname, value[0].replace("/*", ""));
  acc[alias] = aliasPath;
  return acc;
}, {});

module.exports = {
  webpack: {
    alias: webpackAliases,
  },
};
