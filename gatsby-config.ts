import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `vidilog`,
    siteUrl: `https://pksung1.github.io/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-transformer-remark", 
    "gatsby-plugin-mdx",
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "src/components",
          "src": "src",
        },
        extensions: [
          "ts", "tsx"
        ]
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/content`
      },
      __key: "content"
    }
  ]
};

export default config;
