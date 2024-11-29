/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  pathPrefix: "/gwp",
  siteMetadata: {
    title: `Актуальный английский`,
    description: `Блог про актуальный английский`,
    author: `@etrifonova`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `http://gatsbywp2.local/graphql`,
        // schema: {
        //   requestConcurrency: 5, // Adjust as needed
        //   previewRequestConcurrency: 2,
        // },
        // type: {
        //   MediaItem: {
        //     localFile: {
        //       requestConcurrency: 5, // Controls the number of simultaneous image downloads
        //     },
        //   },
        // },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
  resolve: 'gatsby-plugin-react-svg',
  options: {
    rule: {
      include: /svg/
    }
  }
}
  ],
}
