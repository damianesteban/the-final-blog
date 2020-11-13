import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string,
    siteMetadata: {
        author: {
          name: string;
        }
      }
  }
}

const UsingBalls: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => {
  console.log('DATA', data)
  return (
    <Layout title="Using Balls" location={location}>
      <SEO title="Using Balls" />
      <h1>Damian Esteban</h1>
      <p>
        Hello. My name is Damian Esteban. I am a software engineer, solution architect, leader, and lover.
      </p>
      <p>
        You're currently on the page "{path}" which was built on{" "}
        {data.site.buildTime}.
      </p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/typescript/">
          documentation about TypeScript
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingBalls;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`
