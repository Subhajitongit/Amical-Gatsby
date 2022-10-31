import React from "react"

export const Layout = ({ children }) => {
  return (
    <>
      <div as="div">
        <div as="main">{children}</div>
      </div>
    </>
  )
}
