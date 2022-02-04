const path = require("path")

// create pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       blogs: allStrapiBlogs {
//         nodes {
//           data {
//             attributes {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   result.data.blogs.nodes.forEach(blog => {
//     createPage({
//       path: `/blogs/${blog.data.attributes.slug}`,
//       component: path.resolve(`src/templates/blog-template.js`),
//       context: {
//         slug: blog.data.attributes.slug,
//       },
//     })
//   })
// }
