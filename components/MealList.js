import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = ({ dataList, navigation }) => {
  const renderMealItem = (itemData) => {
    const {
      id,
      title,
      duration,
      complexity,
      affordability,
      imageUrl,
    } = itemData.item;
    return (
      <MealItem
        id={id}
        title={title}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        image={imageUrl}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: { mealId: id },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={dataList}
        renderItem={renderMealItem}
        style={{ width: "100%", padding: 15 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
