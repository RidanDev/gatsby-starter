import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import { Link } from "gatsby"
import User from "../components/User"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Container>
      <Header headerText="About CSS Modules" />
      <p>CSS Modules are cool</p>
    </Container>
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
)
