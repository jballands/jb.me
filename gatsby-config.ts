import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `jb.me`,
		siteUrl: `https://jonathanballands.me`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-styled-components',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `jonathanballands.me`,
				short_name: `jb.me`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `standalone`,
				icon: `./static/favicon.png`,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
	],
};

export default config;
