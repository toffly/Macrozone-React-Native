import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "@/styles/style";
import MealItem from "./MealItem";
import { Meal } from "@/storage/meal";

type RecentMealsProps = {
  meals: Meal[];
  onDelete: () => void
};

export default function RecentMeal({ meals, onDelete }: RecentMealsProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      {meals.length === 0 ? (
        <Text style={globalStyles.empty}>No meals logged yet.</Text>
      ) : (
        meals
          .slice(0, 5)
          .map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.calories}
              fat={meal.fat}
              onDelete={onDelete}
            />
          ))
      )}
    </View>
  );
}
