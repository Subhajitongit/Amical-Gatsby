/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = {
  title: "Amical.io",
  description: "This is a coding blog",
}

module.exports = {
  /* Your site config here */
  siteMetadata,
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-mdx`,
    {
      options: {
        name: "posts",
        path: `${__dirname}/src/content/posts`,
      },
      resolve: "gatsby-source-filesystem",
    },
    // {
    //   options: {
    //     path: `${__dirname}/src/pages/blog`,
    //   },
    //   resolve: "gatsby-plugin-page-creator",
    // },
  ],
}
