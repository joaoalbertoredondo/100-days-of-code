import React from "react";
import Recipe from "../components/Recipe/Recipe";
import BackPage from "../components/BackPage";
import IcedCoffee from "../../assets/recipe/iced-coffee.png";

function page() {
  const coffee = {
    name: "Sweet iced coffee with cocconut milk",
    rating: 4,
    score: 178,
    time: "10 minutes",
    level: "Moderate",
    budget: "Under $5",
    description:
      "Sweet Iced Coffee with coconut milk is easy to make and stores well in the fridge. Make a large batch and save yourself a few trips to the coffee shop",
    ingredients: [
      "3 tablespoon of Espresso coffee powder",
      "1 cup of boiled water",
      "1 cup of Coconut milk",
    ],
    instructions: [
      "Boil some water and let sit for 1-2 minutes.",
      "Put the coffee grounds into a cafetière and pour water.",
      "Let the coffee steep for 5 minutes the slowly press down the plunger on your Cafetière.",
      "Pour the coffee into a jug, allow to cool then chill for several hours.",
      " Whisk in the coconut milk and condensed milk and serve over plenty of ice.",
      "This coffee can be stored in the fridge for up to 5 days. Shake or stir again before serving.",
    ],
    image: IcedCoffee,
  };

  return (
    <div>
      <BackPage />
      <Recipe
        name={coffee.name}
        rating={coffee.rating}
        score={coffee.score}
        time={coffee.time}
        budget={coffee.budget}
        level={coffee.level}
        description={coffee.description}
        ingredients={coffee.ingredients}
        instructions={coffee.instructions}
        image={coffee.image}
      />
    </div>
  );
}

export default page;
