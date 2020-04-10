import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <p>Know what is available locally and in season</p>
    
    <button>Get location</button>



    <Link to="/page-2/">About</Link>
  </Layout>
)

export default IndexPage
