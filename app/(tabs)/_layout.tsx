import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#006400', // Dark Green for active tabs (symbolizing peace and nature)
        tabBarInactiveTintColor: '#8B8B8B', // Light Gray for inactive tabs
        tabBarStyle: {
          backgroundColor: '#F5F5DC', // Beige background color (calm and neutral)
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront" size={size} color={color} />
          ),
          title: 'Store',
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shirt" size={size} color={color} />
          ),
          title: 'Hijabs',
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
          title: 'Orders',
        }}
      />
    </Tabs>
  );
};
