// app/login.js
import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, View } from "react-native";

export default function Login() {
 
   const [isSubmiting, setIsSubmiting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { login , user } = useAuth();

  const handleLogin = () => {
    const { email, password } = form;
    if (!email || !password) {
      return Alert.alert("Error", "Please enter valid email address & password.");
    }
    login(email, password);
  };
  console.log('user', user);
  return (
    <View className={"gap-10 bg-white rounded-lg p-5 mt-5"}>
      <CustomInput
        placeholder={"Enter your email"}
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType={"email-address"}
      />
      <CustomInput
        placeholder={"Enter your password"}
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        secureTextEntry={true}
      />
      <CustomButton
        title={"Sign In"}
        isLoading={isSubmiting}
        onPress={handleLogin}
      />

      <View className="flex justify-center flex-row mt-5 gap-2">
        <Text className="base-regular text-gray-100">
          Don&apos;t have an account ?
        </Text>
        <Link href="/register" className="base-bold text-primary">
          Register
        </Link>
      </View>
    </View>
  );
}

