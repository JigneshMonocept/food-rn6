import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBarComponent";
import useResults from "../hooks/useResults";
import RestaurantList from "../Components/RestaurantList";

const SearchScreen = () => {
  const [searchField, setSearchField] = useState("");
  const [searchApi, errorM, apiResults] = useResults();

  const filterResultByPrice = (price) => {
    return apiResults.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        searchFieldValue={searchField}
        onChange={setSearchField}
        onEndEditing={() => searchApi(searchField)}
      />
      <ScrollView>
        <RestaurantList
          title={"Cost Effective"}
          data={filterResultByPrice("$")}
        />
        <RestaurantList title={"Premium"} data={filterResultByPrice("$$")} />
        <RestaurantList title={"Luxury"} data={filterResultByPrice("$$$")} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
