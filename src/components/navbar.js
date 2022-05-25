import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export const NavBar = ({ pages}) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
	 {pages.map((page) => (<Link to={"/"+page[1]}>{page[0]}</Link>))}
    </div>
  )
}


