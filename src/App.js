import React, { Component } from 'react';
import styled from 'styled-components';

import UserInfo from './Components/UserInfo/UserInfo';



const PlaceHolderHeader = styled.header`
  background-color: #123456;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
  grid-column: 1/4;
  grid-row: 1;
  border-style: solid;
  border-color: yellow;
`

const PlaceHolderFooter = {
  backgroundColor: "#123",
  color: "#ffffff",
  border: "none",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: "1.2rem",
  gridColumn: "1/4",
  gridRow: "6",
  borderStyle: "solid"
}
const UserInfoComponent = {
  borderStyle: "solid",
  borderColor: "purple" 
}


class App extends Component {

  state = {}


  render(){
    const gridContainer = {
      display: "grid", 
      columnGap: "25px",
      rowGap: "40px",
      gridTemplateColumns: "1fr 2fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr 2fr 1fr 1fr",
      transition: "all 1s",
      backgroundColor: "wheat",
      width: "100vw",
      height: "100vh",
      borderStyle: "solid",
      borderColor: "red"
    } 

      return (
        <div style={gridContainer}>
          <PlaceHolderHeader>Header</PlaceHolderHeader>
          <UserInfo user="1" style={{
            gridColumn: "2/3",
            gridRow: "4",
            placeSelf: "center"
          }}/>

          <footer style={PlaceHolderFooter}>FOOTER</footer>
        </div>
      );
  }
}

export default App;
