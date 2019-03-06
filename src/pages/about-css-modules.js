import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Container>
      <Header headerText="About CSS Modules" />
      <p>CSS Modules are cool</p>
    </Container>
  </div>
)
