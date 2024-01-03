const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // console.log(node.internal.type)
    if (node.internal.type === 'MarkdownRemark') {
        slug = path.basename(node.fileAbsolutePath, '.md')
        
        console.log('@@@', slug);

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const connect_events_template = path.resolve('./src/templates/skeleton.js')

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            category
                        }
                    }
                }
            }
        }
    `)

    // console.log(res)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        // console.log(edge.node)
        if (edge.node.frontmatter.category === 'Events' || edge.node.frontmatter.category === 'Connect') {
            // console.log(edge.frontmatter.category)
            createPage({
                component: connect_events_template,
                path: `/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
    })
}