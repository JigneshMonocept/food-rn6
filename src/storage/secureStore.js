import * as SecureStore from "expo-secure-store";

const keyName = "API_KEY";

export const saveApiKey = async (keyValue) => {
  try {
    await SecureStore.setItemAsync(keyName, keyValue);
  } catch (error) {
    console.error("Error saving API key:", error);
  }
};

export const getApiKey = async () => {
  try {
    return await SecureStore.getItemAsync(keyName);
  } catch (error) {
    console.error("Error reading API key:", error);
    return null;
  }
};
