import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article className={"post content"}>
        <h1 className={"title has-text-centered"}>{post.frontmatter.title}</h1>
        <p className={"subtitle has-text-centered"}>
          <Link to={pageContext.parent.fields.slug}>
            {pageContext.parent.frontmatter.title}{" "}
          </Link>
          | {post.frontmatter.author}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        aid
        zid
        title
        author
      }
    }
  }
`