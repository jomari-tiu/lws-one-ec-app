import React, { useState } from "react";
import { Text, ScrollView, RefreshControl, FlatList } from "react-native";


import TransactionCard from "@/src/components/TransactionCard";


const TransactionPage = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulating a delay for demonstration purposes
  };

  const data = [
    {
      id: 1,
      modeOfPayment: "Gcash",
      datetime: "Feb 23 2000 12:59PM",
      amount: 32133,
    },
    {
      id: 2,
      modeOfPayment: "Gcash",
      datetime: "Feb 23 2000 12:59PM",
      amount: 3213,
    },
    {
      id: 3,
      modeOfPayment: "Gcash",
      datetime: "Feb 23 2000 12:59PM",
      amount: 4000,
    },
    {
      id: 4,
      modeOfPayment: "Gcash",
      datetime: "Feb 23 2000 12:59PM",
      amount: 4558,
    },
  ];

  return (
    <ScrollView className="p-4 space-y-2 bg-white">
      <FlatList
        data={data}
        scrollEnabled={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{ gap: 20 }}
        ListEmptyComponent={() => <Text>No Posts</Text>}
        renderItem={({ item }) => {
          return (
            <TransactionCard
              title={`Sent via ${item.modeOfPayment}`}
              datetime={item.datetime}
              amount={item.amount}
            />
          );
        }}
      />
    </ScrollView>
  );
};

export default TransactionPage;
