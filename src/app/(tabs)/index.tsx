import { Text, ScrollView } from "react-native";
import { globalStyles } from "@/styles/style";
import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeal from "@/components/RecentMeals";
import { useCallback, useState } from "react";
import { getMeals, Meal } from "@/storage/meal";
import { useFocusEffect } from "expo-router";

export default function Index() {
  const [meals, setMeals] = useState<Meal[]>([])

  const loadMeals = async() => {
    const data = await getMeals()
      setMeals(data)
      console.log('loaded meals:', data)
  }

  useFocusEffect(
    useCallback(() => {
      loadMeals()
    }, [])
  )
  
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid meals={meals}/>
      <RecentMeal meals={meals} onDelete={loadMeals}/>
    </ScrollView>
  );
}
