function isIgnored(testUrl) {
  if (testUrl === "/") {
    return true;
  }
  let avoidedUrls = [
    "/login",
    "/docs",
    "/auth/google",
    "google / callback",
    "auth / failure",
  ];
  for (let i = 0; i < avoidedUrls.length; i++) {
    let pattern = new RegExp(avoidedUrls[i], "g");
    if (pattern.test(testUrl)) {
      return true;
    }
  }
  return false;
}
module.exports = isIgnored;
