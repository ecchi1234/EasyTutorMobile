import React from "react";

import { StyleSheet, Text, View } from "react-native";

const Logo = (props) => {
  return (
    <>
      <View style={style.container}>
        <View style={style.textStyle}>
          <Text style={[style.firstText, style.textStyle]}>Easy</Text>
          <Text style={[style.secondText, style.textStyle]}>Tutor</Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 25,
    flexDirection: "row",
    fontWeight: "bold",
  },

  firstText: {
    color: "#6EB943",
  },

  secondText: {
    color: "#333333",
  },
});

export default Logo;
