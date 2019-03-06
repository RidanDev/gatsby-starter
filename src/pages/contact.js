import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Container>
      <div style={{ color: `teal` }}>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
      </div>
    </Container>
  </div>
)
