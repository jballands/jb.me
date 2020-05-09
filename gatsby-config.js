module.exports = {
	siteMetadata: {
		title: `jonathanballands.me`,
		description: `The personal website of Jon Ballands.`,
		author: `Jon Ballands`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `jonathanballands.me`,
				short_name: `jb.me`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `standalone`,
				icon: `./static/favicon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-typescript`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
