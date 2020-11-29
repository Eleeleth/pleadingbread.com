import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <div style={{ maxWidth: `128px`, margin: `1.45rem auto` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
