const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.dmdcosts.co.uk"; 

//  Read blogs.jsx as a raw text file
const blogsFilePath = path.join(__dirname, "src", "blogs", "blogs.jsx");
const blogsContent = fs.readFileSync(blogsFilePath, "utf8");

const blogRegex = /id:\s*(\d+)/g;
const blogs = [];

let match;
while ((match = blogRegex.exec(blogsContent)) !== null) {
  blogs.push(match[1]); // Extract ID
}

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add static pages
const staticPages = ["/", "/blog", "/contact", "/about", "/services", "/portfolio", "/team", "/faq"];

staticPages.forEach((page) => {
  sitemapContent += `<url>\n`;
  sitemapContent += `<loc>${BASE_URL}${page}</loc>\n`;
  sitemapContent += `<changefreq>weekly</changefreq>\n`;
  sitemapContent += `<priority>0.8</priority>\n`;
  sitemapContent += `</url>\n`;
});

blogs.forEach((id) => {
  sitemapContent += `<url>\n`;
  sitemapContent += `<loc>${BASE_URL}/blog/${id}</loc>\n`; 
  sitemapContent += `<changefreq>weekly</changefreq>\n`;
  sitemapContent += `<priority>0.7</priority>\n`;
  sitemapContent += `</url>\n`;
});

sitemapContent += `</urlset>`;

const outputPath = path.join(__dirname, "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemapContent);

console.log("✅ Sitemap successfully generated at: /public/sitemap.xml");
