import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

type PromoBannerProps = {
  title?: string;
  discount?: string;
  dateRange?: string;
  buttonText?: string;
  onPress?: () => void;
  imageSource?: ImageSourcePropType;
};

const PromoBanner: React.FC<PromoBannerProps> = ({
  title = "New Year Offer",
  discount = "30% OFF",
  dateRange = "16 - 31 Dec",
  buttonText = "Get Now",
  onPress,
  imageSource
}) => {
  return (
    <View className="rounded-2xl mx-2  overflow-hidden">
      <LinearGradient
        colors={['#FFA533', '#CC5500']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ padding: 20 }}
      >
        <View className="flex-row justify-between items-center">
          {/* Left Content */}
          <View className="flex-1 pr-4">
            <Text className="text-white text-base font-medium mb-1">
              {title}
            </Text>
            <Text className="text-white text-3xl font-bold mb-2">
              {discount}
            </Text>
            <Text className="text-white/90 text-sm mb-4">
              {dateRange}
            </Text>
            <TouchableOpacity
              className="bg-white rounded-full px-6 py-3 self-start"
              onPress={onPress}
              activeOpacity={0.8}
            >
              <Text className="font-semibold text-sm">
                {buttonText}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Right Image Container */}
          <View className="w-44 h-40 justify-center items-center">
            {imageSource ? (
              <Image
                source={imageSource}
                className="w-full h-full"
                resizeMode="contain"
              />
            ) : (
              /* Placeholder when no image provided */
              <View className="w-full h-full bg-orange-700/30 rounded-xl justify-center items-center">
                <Text className="text-white/70 text-xs text-center">
                  Add Your{'\n'}Image Here
                </Text>
              </View>
            )}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PromoBanner;