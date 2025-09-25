import { useEffect, useState } from "react";
import apiClient from "../Apis/ApiServices";

export default () => {
  const [apiResults, setApiResults] = useState([]);
  const [errorM, setError] = useState("");

  const searchApi = async (searchValue) => {
    try {
      const response = await apiClient.get("/search", {
        params: { limit: 50, term: searchValue, location: "san jose" },
      });

      setApiResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setError("something went wrong!");
    }
  };

  //will call api initially, if pass empty [] then it will call it only once
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, errorM, apiResults];
};
