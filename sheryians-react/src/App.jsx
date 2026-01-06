import React, { useState } from 'react'
// Main App
export default function App() {

  return (
  <Car color="red"/>
  )
}

function Car(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}
