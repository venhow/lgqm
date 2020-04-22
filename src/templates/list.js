import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const id = (aid, zid) =>
  `${aid.toString().padStart(4, `0`)}.${zid.toString().padStart(4, `0`)}`

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article className={"post content"}>
        <h1 className={"title has-text-centered"}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>编号</th>
            <th>标题</th>
            <th>作者</th>
            <th>上次修改</th>
          </tr>
        </thead>
        <tbody>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <tr>
              <td>{id(node.frontmatter.aid, node.frontmatter.zid)}</td>
              <td>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </td>
              <td>{node.frontmatter.author}</td>
              <td>todo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query($aid: Int!, $slug: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { aid: { eq: $aid } }
        fields: { type: { eq: "single" } }
      }
      sort: { fields: frontmatter___zid }
    ) {
      edges {
        node {
          frontmatter {
            zid
            title
            aid
            author
          }
          fields {
            slug
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`