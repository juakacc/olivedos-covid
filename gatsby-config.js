module.exports = {
  plugins: [
    "gatsby-theme-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Olivedos contra a COVID-19`,
        short_name: `OliContraCovid19`,
        start_url: "/",
        background_color: `#19857b`,
        theme_color: `#19857b`,
        display: `standalone`,
        icon: `${__dirname}/src/icons/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
  pathPrefix: `/covid19`,
}
