/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix:`/UW-HTTC`,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `UW Husky Table Tennis Website`,
        short_name: `UWHTTC`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#1F419B`,
        display: `minimal-ui`,
        icon: `src/images/httchusky.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem', /* source content from our md files */
      options: {
          name: 'src',
          path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem', /* source content from our img files */
      options: {
          name: 'images',
          path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
           `Roboto`,
           `Lato`,
           `Oswald\:200,300,400,400i,500,600,700`,
           `Montserrat`,
           `Staatliches`,
           `Lato`
        ],
        display: 'swap'
      }
    }    
  ],
  siteMetadata: {
    title: 'HTTC',
    footer1: 'Made by Ian ❤️ for HTTC UW',
    footer2: 'Copyright © 2024, Husky Table Tennis Club at University of Washington - Seattle Campus'
    //social media, emails, etc.
  }
  
}
