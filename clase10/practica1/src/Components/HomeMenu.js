import React from "react";
import { View, Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
const Tab = createBottomTabNavigator();


function HomeMenu() {
    return(
 
        <Tab.Navigator screenOptions={{headerShown: false}} >
            <Tab.Screen name="Home" component={Home} 
                options={ { tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" /> }} />

            <Tab.Screen name="Profile" component={Profile}
                options={{ tabBarIcon: () => <AntDesign name="profile" size={24} color="black" /> }}  />   
        </Tab.Navigator>

    )}
  



  export default HomeMenu;