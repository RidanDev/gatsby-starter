import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import LinkContainer from "../components/link-container"
import ListLink from "../components/list-link"

export default () => (
  <div>
    <LinkContainer>
      <ListLink to="/">Home</ListLink>
    </LinkContainer>
    <Container>
      <div style={{ color: `teal` }}>
        <Header headerText="About Gatsby" />
        <Header headerText="It's pretty cool" />
        <p>Such wow. Very React.</p>
      </div>
    </Container>
  </div>
)
