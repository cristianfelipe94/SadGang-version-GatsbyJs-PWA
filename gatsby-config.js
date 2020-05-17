module.exports = {
  siteMetadata: {
    title: `Sadgang Clothes`,
    description: `Sadgang is a streetwear store based in Costa Rica.`,
    author: `@Sadgang`,
    fontfamily: `https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sadgang Clothes`,
        short_name: `Sadgang Store`,
        start_url: `/`,
        background_color: `#131217`,
        theme_color: `#131217`,
        display: `minimal-ui`,
        icon: `src/images/sadgang-logo-emoji.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
