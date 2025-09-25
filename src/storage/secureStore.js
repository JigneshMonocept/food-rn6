import * as SecureStore from "expo-secure-store";

const keyName = "API_KEY";

export const saveApiKey = async (keyValue) => {
  try {
    await SecureStore.setItemAsync(keyName, JSON.stringify(keyValue));
  } catch (error) {
    console.error("Error saving API key:", error);
  }
};

export const getApiKey = async () => {
  try {
    const stored = await SecureStore.getItemAsync(keyName);
    const parsedKey = JSON.parse(stored);
    return parsedKey;
  } catch (error) {
    console.error("Error reading API key:", error);
    return null;
  }
};
