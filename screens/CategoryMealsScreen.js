import React from "react";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const displayMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  return <MealList dataList={displayMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealsScreen;
