import React from "react"
//components
import Sidebar from "./Sidebar"

const Layout = props => {
  return (
    <>
      <Sidebar />
      {props.children}
    </>
  )
}

export default Layout
