import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import apiClient from "../Apis/ApiServices";

const RestaurantDetails = ({ route }) => {
  const id = route.params.id;

  const [restaurantData, setRestaurantData] = useState(null);
  const getRestaurantDetais = async (id) => {
    try {
      const response = await apiClient.get(`/${id}`);
      setRestaurantData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurantDetais(id);
  }, []);

  if (!restaurantData) {
    return null;
  }

  return (
    <>
      <FlatList
        style={{ marginLeft: 20, marginTop: 20 }}
        data={restaurantData.photos}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image
              style={{ height: 200, width: 300, marginBottom: 20 }}
              source={{ uri: item }}
            />
          );
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({});

export default RestaurantDetails;
