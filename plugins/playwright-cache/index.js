// This is not being used anymore.
// Instead, we use https://github.com/nvh95/netlify-plugin-playwright-cache directly

// https://mxb.dev/blog/persistent-build-folders-netlify/
module.exports = {
  // Before the build runs,
  // restore a directory we cached in a previous build.
  // Does not do anything if:
  //  - the directory already exists locally
  //  - the directory has never been cached
  async onPreBuild({ utils }) {
    await utils.cache.restore("/opt/buildhome/.cache/ms-playwright");
  },
  // After the build is done,
  // cache directory for future builds.
  // Does not do anything if:
  //  - the directory does not exist
  async onPostBuild({ utils }) {
    await utils.cache.save("/opt/buildhome/.cache/ms-playwright");
  },
};
