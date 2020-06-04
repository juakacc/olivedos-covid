module.exports = {
  plugins: [
    "gatsby-theme-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Olivedos_covid-19`,
        short_name: `OliCovid19`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
  pathPrefix: `/covid19`,
}
