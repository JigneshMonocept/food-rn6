import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import RestaurantData from "./RestaurantComponent";
import { useNavigation } from "@react-navigation/native";

const RestaurantList = ({ title, data }) => {
const navigation = useNavigation();
  if (!data.length){
    return null;
  }
  return (
    <View>
      <Text style={styles.textStyle}>{title} </Text>

      <FlatList
        horizontal // intead of horizontal ={true}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("RDetails", { id: item.id })}
            >
              <RestaurantData itemData={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  itemTextStyle: {
    fontSize: 16,
  },
});

export default RestaurantList;
