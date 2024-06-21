import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Categories({ cur, setCur }) {
  
  const listOfCategories = [
    { id: 0, title: "All" },

    { id: 2, title: "Place" },
    { id: 3, title: "People" },
    { id: 4, title: "Illustrator" },
    { id: 5, title: "Orthodox" },
    { id: 6, title: "Muslim" },
    { id: 7, title: "Most Liked" },
  ];

  function hanldePress(id) {
    setCur(id.toLowerCase());
  }
  return (
    <View style={{ paddingHorizontal: 19 }}>
      <View>
        <Text style={{ color: "white" }}>Categories</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {listOfCategories.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => hanldePress(item.title)}
          >
            <View
              style={
                cur == item.title.toLowerCase()
                  ? { ...styles.category, ...styles.activeCategory }
                  : styles.category
              }
            >
              <Text
                style={{
                  color: cur == item.title.toLowerCase() ? "black" : "white",
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#2a333a",
    width: 100,
    height: 50,

    borderRadius: 7,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  activeCategory: {
    backgroundColor: "#add9e6",
  },
});
