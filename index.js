const fs = require("node:fs");
const path = require("node:path");

const publicDir = path.join(__dirname, "public");

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon"
};

function getFilePath(url = "/") {
  const requestPath = decodeURIComponent(url.split("?")[0]);
  const cleanPath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = path.normalize(path.join(publicDir, cleanPath));

  if (!filePath.startsWith(publicDir)) {
    return null;
  }

  return filePath;
}

module.exports = function handler(request, response) {
  const filePath = getFilePath(request.url);

  if (!filePath) {
    response.statusCode = 403;
    response.end("دسترسی غیرمجاز است.");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      fs.readFile(path.join(publicDir, "index.html"), (fallbackError, fallbackContent) => {
        if (fallbackError) {
          response.statusCode = 404;
          response.end("صفحه پیدا نشد.");
          return;
        }

        response.setHeader("Content-Type", contentTypes[".html"]);
        response.end(fallbackContent);
      });
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    response.setHeader("Content-Type", contentTypes[extension] || "application/octet-stream");
    response.end(content);
  });
};
