import { StyleSheet, Text } from "react-native";
import React from 'react'
import { NativeRouter, Routes,Route, Link } from "react-router-native";

const Home = () => <Text style={styles.header}>Home</Text>;

const About = () => <Text style={styles.header}>About</Text>;
const RoutesPath = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/About" element={<About />} />
  </Routes>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});


export default RoutesPath