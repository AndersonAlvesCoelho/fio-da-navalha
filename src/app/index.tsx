import { Loading } from "@/components/ui/Loading";
import { router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/(home)");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 h-screen w-screen justify-center items-center">
      <Loading />
    </View>
  );
}
