import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FiltersScreen";
import COLORS from "../constans/colors";

const isAndroid = Platform.OS === "android";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: isAndroid ? COLORS.primaryColor : "white",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerTintColor: !isAndroid ? COLORS.primaryColor : "white",
};

const MealsNavigator = createSharedElementStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createSharedElementStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={23} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: COLORS.primaryColor, //It only works when shifting = true
      tabBarLabel: isAndroid ? (
        <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
      ) : (
        "Meals"
      ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={23} color={tabInfo.tintColor} />;
      },
      tabBarColor: COLORS.accentColor,
      tabBarLabel: isAndroid ? (
        <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
      ) : (
        "Favorites"
      ),
    },
  },
};

const MealsFavTabNavigator = isAndroid
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor: "white",
      shifting: true,
      barStyle: {
        backgroundColor: COLORS.primaryColor,
      },
    }) // It works for Android
  : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        labelStyle: "open-sans",
        activeTintColor: COLORS.accentColor,
      },
    });

const FiltersNavigator = createSharedElementStackNavigator(
  {
    Filters: FilterScreen,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsNav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: COLORS.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
