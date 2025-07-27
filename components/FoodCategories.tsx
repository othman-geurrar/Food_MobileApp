import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const FoodCategories = () => {
  const categories = [
    { id: 1, name: 'Pizza', icon: require('../assets/icons/pizza.png') },
    { id: 2, name: 'Fast Food', icon: require('../assets/icons/burger.png') },
    { id: 3, name: 'Sushi', icon: require('../assets/icons/sushi.png') },
    { id: 4, name: 'Drinks', icon: require('../assets/icons/Drink.png') },
  ];

  const handleCategoryPress = (categoryName: string) => {
    console.log(`Selected category: ${categoryName}`);
  };

  return (
    <View className="flex-row justify-around  items-center py-3 px-3 rounded-xl  my-3 ">
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          className="items-center flex-1 "
          onPress={() => handleCategoryPress(category.name)}
          activeOpacity={0.7}
        >
          <View className="w-20 h-20 rounded-full bg-white justify-center items-center shadow-sm">
           
              <Image
                source={category.icon}
                className="w-8 h-8 mb-2"
                resizeMode="contain"
              />

              <Text className="text-sm text-gray-800 font-medium text-center">{category.name}</Text>
           
          </View>
          
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FoodCategories;