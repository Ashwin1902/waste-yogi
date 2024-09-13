import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // Import the icon set

const Layout = () => {
  return (
    <>
      <Tabs>
        {/* Home tab with "home" icon */}
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />

        {/* Request tab with "assignment" icon */}
        <Tabs.Screen
          name="request"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="assignment" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;
