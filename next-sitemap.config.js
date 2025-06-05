/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ytchealthcare.com/',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
      ],
    },
  }
  