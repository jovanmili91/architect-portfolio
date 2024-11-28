// generate-sitemap.js

const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./config/serviceAccountKey.json"); // Replace with your service account path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Define your website's base URL
const BASE_URL = "https://projektikuce.rs/"; // Replace with your actual domain

// Define the static routes you want to include in the sitemap
const staticLinks = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/o-nama", changefreq: "weekly", priority: 0.8 },
  { url: "/projekti-kuce", changefreq: "weekly", priority: 0.8 },
  { url: "/kontakt", changefreq: "monthly", priority: 0.7 },
  { url: "/blog", changefreq: "weekly", priority: 0.8 },
  // Add more static routes as needed
];

// Function to fetch dynamic blog post routes from Firestore
const fetchBlogRoutes = async () => {
  try {
    const blogPostsSnapshot = await db.collection("blogPosts").get();
    const blogRoutes = blogPostsSnapshot.docs.map((doc) => ({
      url: `/blog/${doc.id}`, // Or use `/blog/${doc.data().slug}` if you use slugs
      changefreq: "monthly",
      priority: 0.6,
    }));
    return blogRoutes;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

// Function to fetch dynamic project routes from Firestore
const fetchProjectRoutes = async () => {
  try {
    const projectsSnapshot = await db.collection("projects").get(); // Adjust collection name if different
    const projectRoutes = projectsSnapshot.docs.map((doc) => ({
      url: `/projekti-kuce/${doc.id}`, // Or use `/projekti-kuce/${doc.data().slug}` if you use slugs
      changefreq: "monthly",
      priority: 0.6,
    }));
    return projectRoutes;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// Main function to generate sitemap
const generateSitemap = async () => {
  try {
    // Fetch dynamic routes
    const [blogRoutes, projectRoutes] = await Promise.all([
      fetchBlogRoutes(),
      fetchProjectRoutes(),
    ]);

    // Combine static and dynamic routes
    const allLinks = [...staticLinks, ...blogRoutes, ...projectRoutes];

    // Create a stream to write to
    const sitemapStream = new SitemapStream({ hostname: BASE_URL });

    // Convert links to a Readable stream and pipe to sitemap
    const xml = await streamToPromise(
      Readable.from(allLinks).pipe(sitemapStream)
    ).then((data) => data.toString());

    // Ensure the public directory exists
    const publicDir = path.resolve(__dirname, "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    // Write the sitemap.xml to the public directory
    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml);

    console.log("Sitemap generated successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
};

// Execute the sitemap generation
generateSitemap();
