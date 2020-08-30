import React from 'react';

const gridContainer = {
  display: "grid", 
  columnGap: "50px",
  rowGap: "50px",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  transition: "all 1s",
  backgroundColor: "wheat"
}

const PlaceHolderHeader ={
  backgroundColor: "#123456",
  color: "#ffffff",
  padding: "1.4rem",
  border: "none",
  borderRadius: "5px",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: "1.2rem",
  gridColumn: "1/4",
  gridRow: "1"
}

const PlaceHolderFooter ={
  backgroundColor: "#123456",
  color: "#ffffff",
  padding: "1.4rem",
  border: "none",
  borderRadius: "5px",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: "1.2rem",
  gridColumn: "1/4",
  gridRow: "1"
}


function App() {
  return (
    <div>
      <header style={PlaceHolderHeader}>Header</header>
      <h1 style={{
        gridColumn: "2/3",
        gridRow: "2/3",
        placeSelf: "center"
      }}>Sup</h1>
    </div>
  );
}

export default App;
