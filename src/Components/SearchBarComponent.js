import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ fieldValue, onChange, onEndEditing }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput
        style={styles.inputStyle}
        value={fieldValue}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChange}
        placeholder="Search dish"
        onEndEditing={onEndEditing}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    margin: 15,
    flexDirection: "row",
  },

  inputStyle: {
    flex: 1,
    fontSize: 18,
    placeholderTextColor: "black",
  },

  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
