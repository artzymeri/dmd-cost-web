const axios = require('axios');
const cheerio = require('cheerio');

// Replace with your website's URL
const URL = 'https://www.dmdcosts.co.uk/';

async function checkSEO() {
  try {
    // Fetch HTML from the URL
    const { data } = await axios.get(URL);

    // Load the HTML into cheerio (like jQuery)
    const $ = cheerio.load(data);

    // Check for meta tags
    const metaDescription = $('meta[name="description"]').attr('content');
    const metaTitle = $('title').text();
    const robotsMetaTag = $('meta[name="robots"]').attr('content');
    const googleSiteVerification = $('meta[name="google-site-verification"]').attr('content');
    
    // Open Graph meta tags
    const ogTitle = $('meta[property="og:title"]').attr('content');
    const ogDescription = $('meta[property="og:description"]').attr('content');
    const ogImage = $('meta[property="og:image"]').attr('content');

    // Log the results to console
    console.log(`Meta Title: ${metaTitle}`);
    console.log(`Meta Description: ${metaDescription}`);
    console.log(`Robots Meta Tag: ${robotsMetaTag}`);
    console.log(`Google Site Verification: ${googleSiteVerification}`);
    console.log(`OG Title: ${ogTitle}`);
    console.log(`OG Description: ${ogDescription}`);
    console.log(`OG Image URL: ${ogImage}`);

  } catch (error) {
    console.error('Error fetching SEO data:', error);
  }
}

checkSEO();