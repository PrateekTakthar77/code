import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Delivery from "./components/Delivery";
import Filter from "./components/Filter";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Product} />
        <Tab.Screen name="cart" component={Cart} />
        <Tab.Screen name="Filter" component={Filter} />
        <Tab.Screen name="delivery" component={Delivery} />
        <Tab.Screen name="Single" component={SingleProduct} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;