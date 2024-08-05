const webAddr = 'https://dorukakademi.com';
const blogs = require('./src/constants/blogs/blogs.json');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: webAddr,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  experimental: {
    appDir: true,
  },
  additionalPaths: async () => {
    const posts = blogs;

    const blogRoutes = posts.map(post => {
      return {
        loc: `${webAddr}/blog/${post.slug}`,
        lastmod: new Date().toISOString(),
        priority: 0.7,
      };
    });

    return [
      { loc: '/', lastmod: new Date().toISOString() },
      { loc: '/contact', lastmod: new Date().toISOString() },
      { loc: '/blog', lastmod: new Date().toISOString() },
      ...blogRoutes,
    ];
  },
};
