module.exports = {
  siteMetadata: {
    title: "QHacks Website"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    "gatsby-plugin-glamor",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "QHacks",
        short_name: "QHacks",
        start_url: "/",
        background_color: "#00205b",
        theme_color: "#c81c2e",
        display: "minimal-ui",
        icon: "src/assets/img/logo/qhacksAppIcon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
