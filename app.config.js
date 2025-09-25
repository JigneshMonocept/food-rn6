import 'dotenv/config'; // this loads your .env values

export default {
  expo: {
    name: "FoodFinderApp",
    slug: "Food-app",
    version: "1.0.0",
    extra: {
      apiKey: process.env.API_KEY
    },
  },
};