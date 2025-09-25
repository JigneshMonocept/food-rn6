import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantData = ({ itemData }) => {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: itemData.image_url }} />
      <Text style={styles.itemTextStyle}>{itemData.name} </Text>
      <Text style={styles.reviewStyle}>
        {itemData.rating} Stars, ({itemData.review_count} Reviews){" "}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    flex: 1,
  },

  itemTextStyle: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
  reviewStyle: {
    fontSize: 14,
    marginTop: 6,
    color: "gray",
  },
  imageStyle: { width: 220, height: 150, orderRadius: 4 },
});

export default RestaurantData;
