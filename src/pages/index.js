import React from "react"
import "../styles/global.css"
import Header from "../components/header"
import LinkContainer from "../components/link-container"
import ListLink from "../components/list-link"

export default () => (
  <div>
    <LinkContainer>
      <ListLink to="/contact-list/">Contact List</ListLink>
      <ListLink to="/about/">About</ListLink>
    </LinkContainer>
    <div style={{ textAlign: `center`, color: `purple`, fontSize: `72px` }}>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </div>
)
