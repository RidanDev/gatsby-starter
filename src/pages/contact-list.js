import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import User from "../components/User"
import LinkContainer from "../components/link-container"
import ListLink from "../components/list-link"

export default () => (
  <div>
    <LinkContainer>
      <ListLink to="/">Home</ListLink>
    </LinkContainer>
    <Container>
      <Header headerText="Here is my Contact List" />
      <p>Built with CSS Modules!</p>
    </Container>
    <div style={{ marginLeft: `1.45rem` }}>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </div>
  </div>
)
