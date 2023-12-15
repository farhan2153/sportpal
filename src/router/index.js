import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Book1, Global, Home2, Paperclip, Profile2User, ShoppingCart } from 'iconsax-react-native';
import React from 'react'
import { Home, News, Schedule, AddBlogForm, EditBlogForm } from '../screens';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, color }) => (
          <Home2
            color={color}
            variant={focused ? 'Bold' : 'Linear'}
            size={24}
          />
        ),
        headerShown: false,
      }} />
      <Tab.Screen name="News" component={News} options={{
        tabBarLabel: 'News',
        tabBarIcon: ({ focused, color }) => (
          <Global
            color={color}
            variant={focused ? 'Bold' : 'Linear'}
            size={24}
          />
        ),
        headerShown: false,
      }} />
      <Tab.Screen name="Schedule" component={Schedule} options={{
        tabBarLabel: 'Schedule',
        tabBarIcon: ({ focused, color }) => (
          <Book1
            color={color}
            variant={focused ? 'Bold' : 'Linear'}
            size={24}
          />
        ),
        headerShown: false,
      }} />
    </Tab.Navigator>

  )
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen
        name="AddBlogForm"
        component={AddBlogForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditBlog"
        component={EditBlogForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
    </Stack.Navigator>

  )
}
export default Router
const styles = StyleSheet.create({})