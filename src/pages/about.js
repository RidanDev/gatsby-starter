import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Container>
      <div style={{ color: `teal` }}>
        <Header headerText="About Gatsby" />
        <Header headerText="It's pretty cool" />
        <p>Such wow. Very React.</p>
      </div>
    </Container>
  </div>
)
