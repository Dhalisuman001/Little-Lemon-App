import React from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  SectionList,
} from "react-native";
import Item from "./Item";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const MenuItems = () => {
  const renderItem = ({ item, index }) => <Item key={index} item={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.headerStyle}>
      <Text style={styles.sectionHeader}>{title}</Text>
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.scrollView}>
        <SectionList
          renderSectionHeader={renderSectionHeader}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
        />
        {/* <Text style={styles.item}>{menuItemsToDisplay[0]}</Text> */}
      </View>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#333333",
  },
  header: {
    color: "black",
    fontSize: 40,
    flexWrap: "wrap",
  },
  item: {
    color: "#F4CE14",
    fontSize: 36,
  },
  sectionHeader: {
    backgroundColor: "yellow",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  headerStyle: {
    backgroundColor: "black",
  },
});
