import CartButton from "@/components/CartButton";
import FoodCartComponent from "@/components/FoodCart";
import FoodCategories from "@/components/FoodCategories";
import PromoBanner from "@/components/PromoBanner";
import { images } from "@/constants";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-slate-300">
      <ScrollView 
        className="flex-1"
        contentContainerClassName="pb-28 px-5"
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View className="flex-between flex-row w-full my-5">
          <View className="flex-start">
            <Text className="small-bold text-[#D33B0D]">Delivered To</Text>
            <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
              <Text className="paragraph-bold text-dark-100">Casablanca</Text>
              <Image 
                source={images.arrowDown} 
                className="size-3" 
                resizeMode="contain" 
              />
            </TouchableOpacity>
          </View>
          <CartButton />
        </View>
        
        {/* Food Categories Component */}
        <FoodCategories />

        {/* Offers Section */}
        <PromoBanner
          title="Special Offer"
          discount="50% OFF"
          dateRange="1 - 15 Jan"
          buttonText="Claim Now"
          onPress={() => console.log("Promo Pressed")}
          imageSource={images.ModernFood}
        />

        <View className="mt-5 flex flex-row justify-between ">
          <Text className="paragraph-bold text-dark-200">Best Sellers</Text>
          <Text className="text-primary paragraph-bold">See All</Text>
        </View>

        <View className="mt-3">
          <FoodCartComponent />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}