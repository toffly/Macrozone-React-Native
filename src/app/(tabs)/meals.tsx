import MealItem from "@/components/MealItem";
import { getMeals, Meal } from "@/storage/meal";
import { globalStyles } from "@/styles/style";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function MealsScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>All Meals</Text>
        <TouchableOpacity>
          <Text style={styles.clearButton}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        {MealsScreen.length === 0 ? (
          <Text style={globalStyles.empty}>No meals logged yet.</Text>
        ) : (
          meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={loadMeals}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  clearButton: {
    color: "red",
    fontSize: 16,
  },
});
