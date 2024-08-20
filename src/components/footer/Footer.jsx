import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div style={{height:"80px",display: "flex",
      alignItems: "center",justifyContent: "center", backgroundColor:"black" ,color:"white"}}>
        All Right Reserved &copy; 2024
        <br />
        Developed By Ayush Singh
      </div>
    )
  }
}
