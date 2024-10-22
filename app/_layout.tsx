import { Text, View } from "react-native";
import React from 'react';
import { Tabs } from 'expo-router';
import TabBar from '@/components/TabBar';

export default function Layout() {
  return (
    <Tabs
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="withdraw"
        options={{
          title: "Withdraw"
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Index"
        }}
      /> 
      <Tabs.Screen
        name="alarm"
        options={{
          title: "Alarm"
        }}
      />
    </Tabs>
  );
}

