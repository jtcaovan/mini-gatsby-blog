import React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage 
        alt="Mac computer"
        src='../images/aleksander-vlad-jiVeo0i1EB4-unsplash.jpg'
      />
      <p>Hello</p> 
    </Layout>
  )
}

export default IndexPage
