import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";

const MealItem = ({
  id,
  title,
  onSelectMeal,
  duration,
  complexity,
  affordability,
  image,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <SharedElement
              style={{ height: "100%", width: "100%" }}
              id={`item.${id}.photo`}
            >
              <ImageBackground
                source={{ uri: image }}
                style={styles.bgImage}
                resizeMode="cover"
              />
            </SharedElement>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {title}
              </Text>
            </View>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <SharedElement id={`item.${id}.duration`}>
              <Text>{duration}m</Text>
            </SharedElement>
            <SharedElement id={`item.${id}.complexity`}>
              <Text>{complexity.toUpperCase()}</Text>
            </SharedElement>
            <SharedElement id={`item.${id}.affordability`}>
              <Text>{affordability.toUpperCase()}</Text>
            </SharedElement>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default MealItem;
