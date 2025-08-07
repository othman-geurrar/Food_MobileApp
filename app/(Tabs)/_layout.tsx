import { images } from "@/constants";
import { useAuth } from "@/context/AuthContext";
import { TabBarIconProps } from "@/type-d";
import { Text } from "@react-navigation/elements";
import { Slot, Tabs } from "expo-router";
import { Image, View } from "react-native";
import cn from "clsx";

const TabBarIcon = ({focused , icon , title}: TabBarIconProps) => (
    <View className="tab-icon">
        <Image source={icon} className="size-7" resizeMode="contain" tintColor={focused ? '#FE8C00' : '#5D5F6D'}  />
        <Text className={cn('text-sm font-bold', focused ? 'text-primary' : 'text-gray-200')}>
            {title}
        </Text>
    </View>

)
   


export default function TabLayout() {
    const { user } = useAuth();
    
    
    return (
        <Tabs
            screenOptions={{
                headerShown: false , 
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    marginHorizontal: 10,
                    height: 70,
                    position: 'absolute',
                    bottom: 30,
                    backgroundColor: 'white',
                    shadowColor: '#1a1a1a',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 5,
                },
                }}>
            <Tabs.Screen
                name="home"
                options={{ 
                    title: "Home" , 
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Home" focused={focused} icon={images.home} />

                 }}
                
            />
            <Tabs.Screen
                name="search"
                options={{ 
                    title: "Search" , 
                    tabBarIcon: ({ focused }) => <TabBarIcon title="search" focused={focused} icon={images.search} />

                 }}
            />
            <Tabs.Screen
                name="cart"
                options={{ 
                    title: "Cart" , 
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Cart" focused={focused} icon={images.bag} />

                 }}
            />
            <Tabs.Screen
                name="profile"
                options={{ 
                    title: "Profile" , 
                    tabBarIcon: ({ focused }) => <TabBarIcon title="Profile" focused={focused} icon={images.person} />

                 }}
            />
            <Slot />
        </Tabs>
        
    )
}