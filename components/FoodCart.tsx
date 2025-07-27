import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface FoodItem {
  id: string;
  name: string;
  price: string;
  calories: number;
  time: string;
  image: any; // For local images, use ImageSourcePropType for better typing
}

const FoodCartComponent: React.FC = () => {
  const foodItems: FoodItem[] = [
    {
      id: '1',
      name: 'Cheese Pizza',
      price: '$10.99',
      calories: 44,
      time: '20 min',
      image: require('../assets/images/burger-one.png'), // Replace with your local image path
    },
    {
      id: '2',
      name: 'Cheese burger',
      price: '$4.99',
      calories: 44,
      time: '20 min',
      image: require('../assets/images/burger-two.png'), // Replace with your local image path
    },
    {
      id: '3',
      name: 'Cheese burger',
      price: '$4.99',
      calories: 44,
      time: '20 min',
      image: require('../assets/images/burger-two.png'), // Replace with your local image path
    },
    {
      id: '4',
      name: 'Cheese burger',
      price: '$4.99',
      calories: 44,
      time: '20 min',
      image: require('../assets/images/burger-two.png'), // Replace with your local image path
    },
  ];

  const handleAddToCart = (item: FoodItem) => {
    console.log(`Added ${item.name} to cart`);
    // Implement your add to cart logic here
  };

  const renderFoodItem = (item: FoodItem) => (
    <View key={item.id} className="rounded-2xl p-3 bg-white-100 shadow-lg shadow-black/10 flex-1 mx-2">
      <Image 
        source={item.image} 
        className="w-full h-28 rounded-xl mb-4"
        style={{ resizeMode: 'cover' }}
      />
      
      <View className="gap-1">
        <Text className="text-md font-semibold text-gray-800 mb-1" numberOfLines={2}>
          {item.name}
        </Text>
        <Text className="text-md font-medium text-gray-600 mb-2">
          {item.price}
        </Text>
        
        <View className="flex-col gap-1">
          <View className="flex-row items-center gap-1">
            <Text className="text-sm">🔥</Text>
            <Text className="text-sm text-gray-500 font-medium">
              {item.calories} Cal
            </Text>
          </View>
          
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-1">
              <Text className="text-sm text-gray-500">⏱</Text>
              <Text className="text-sm text-gray-500 font-medium">
                {item.time}
              </Text>
            </View>
            
            <TouchableOpacity
              className="bg-primary w-6 h-6 rounded-full justify-center items-center"
              onPress={() => handleAddToCart(item)}
            >
              <Text className="text-white text-sm font-semibold">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const renderRow = (items: FoodItem[], startIndex: number) => (
    <View key={startIndex} className="flex-row mb-4">
      {items.slice(startIndex, startIndex + 2).map(renderFoodItem)}
      {/* Add empty spacer if odd number of items */}
      {items.length % 2 !== 0 && startIndex === items.length - 1 && (
        <View className="flex-1 mx-1" />
      )}
    </View>
  );

  return (
    <ScrollView className="flex-1">
      <View className="">
        {Array.from({ length: Math.ceil(foodItems.length / 2) }, (_, i) => 
          renderRow(foodItems, i * 2)
        )}
      </View>
    </ScrollView>
  );
};

export default FoodCartComponent;