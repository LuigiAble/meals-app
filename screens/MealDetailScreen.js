import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import { SharedElement } from "react-navigation-shared-element";

const ListItem = ({ children }) => {
  return (
    <View>
      <Text style={styles.listItem}>{children}</Text>
    </View>
  );
};

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = selectedMeal;

  return (
    <ScrollView>
      <SharedElement id={`item.${mealId}.photo`}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </SharedElement>
      <SharedElement
        id={`item.${mealId}.title`}
        style={{ backgroundColor: "lightgray", margin: 15, borderRadius: 40 }}
      >
        <Text
          style={{
            textAlign: "center",
            marginVertical: 20,
            color: "green",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {title}m
        </Text>
      </SharedElement>
      <View style={styles.details}>
        <SharedElement id={`item.${mealId}.duration`}>
          <Text>{duration}m</Text>
        </SharedElement>
        <SharedElement id={`item.${mealId}.complexity`}>
          <Text>{complexity.toUpperCase()}</Text>
        </SharedElement>
        <SharedElement id={`item.${mealId}.affordability`}>
          <Text>{affordability.toUpperCase()}</Text>
        </SharedElement>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ingredient, index) => (
        <ListItem key={`${ingredient}_${index}`}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {steps.map((step, index) => (
        <ListItem key={`${step}_${index}`}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedCategory = MEALS.find((meal) => meal.id == mealId);

  return {
    headerTitle: selectedCategory.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          item="Favorite"
          iconName="ios-star"
          onPress={() => console.log("Mark as favorite")}
        />
      </HeaderButtons>
    ),
  };
};

MealDetailScreen.sharedElements = (navigation, otherNavigation, showing) => {
  const mealId = navigation.getParam("mealId");
  return [
    `item.${mealId}.photo`,
    `item.${mealId}.duration`,
    `item.${mealId}.complexity`,
    `item.${mealId}.affordability`,
  ];
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
