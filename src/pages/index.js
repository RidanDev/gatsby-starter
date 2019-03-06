import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple`, fontSize: `72px` }}>
    <Link to="/contact/">Contact</Link>
    <br />
    <Link to="/about-css-modules/">CSS Modules</Link>
    <br />
    <Link to="/about/">About</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
