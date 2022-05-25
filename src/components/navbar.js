import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export const NavBar = ({ pages}) => {
  return (
    <h1
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
		backgroundColor: 'mediumpurple',
      }}
    >
	 {pages.map((page) => (<Link style={{margin:'0 75px 0 75px', backgroundColor: 'lightblue'}} to={"/"+page[1]}>{page[0]}</Link>))}
    </h1>
  )
}


