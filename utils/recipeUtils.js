const recipes = [
  {
    img: '/images/spaghetti.jpg',
    id: 0,
    title: "Classic Spaghetti Bolognese 🍝",
    description:
      "A classic Italian dish featuring spaghetti in a rich tomato sauce with ground beef and vegetables.",
    ingredients: [
      "1 lb spaghetti",
      "1 lb ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 can (28 oz) crushed tomatoes",
      "1 carrot, chopped",
      "1 stalk celery, chopped",
      "1 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1/2 tsp dried oregano",
      "1/2 tsp dried basil",
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a large skillet, heat olive oil over medium-high heat.",
      "Add ground beef and cook until browned, about 5 minutes.",
      "Add onion and garlic and cook until onion is translucent, about 3 minutes.",
      "Add carrot and celery and cook until vegetables are slightly softened, about 5 minutes.",
      "Add crushed tomatoes, salt, pepper, oregano, and basil and bring to a simmer.",
      "Reduce heat to low and let simmer for 15-20 minutes, until sauce has thickened.",
      "Serve sauce over spaghetti.",
    ],
  },
  {
    img: '/images/chicken.jpg',
    id: 1,
    title: "Roasted Chicken Thighs with Vegetables 🍗",
    description:
      "Juicy and flavorful roasted chicken thighs with vegetables, perfect for a weeknight dinner.",
    ingredients: [
      "8 bone-in, skin-on chicken thighs",
      "1 lb baby potatoes, halved",
      "1 lb baby carrots",
      "1 onion, chopped",
      "4 cloves garlic, minced",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1 tsp dried thyme",
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "In a large bowl, combine potatoes, carrots, onion, garlic, olive oil, salt, pepper, and thyme.",
      "Arrange chicken thighs on a baking sheet, skin side up.",
      "Pour vegetable mixture around chicken.",
      "Bake for 40-45 minutes, until chicken is cooked through and vegetables are tender.",
      "Serve chicken and vegetables immediately.",
    ],
  },
  {
    img: '/images/chili.jpg',
    id: 2,
    title: "Vegetarian Chili 🍛",
    description:
      "A hearty and flavorful vegetarian chili with beans, vegetables, and spices.",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "2 bell peppers, chopped",
      "2 carrots, chopped",
      "1 zucchini, chopped",
      "1 can (28 oz) diced tomatoes",
      "2 cans (15 oz each) kidney beans, drained and rinsed",
      "1 can (15 oz) corn, drained",
      "2 tbsp chili powder",
      "1 tsp cumin",
      "1 tsp smoked paprika",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
    ],
    instructions: [
      "In a large pot or Dutch oven, heat olive oil over medium-high heat.",
      "Add onion and garlic and cook until onion is translucent, about 3 minutes.",
      "Add bell peppers, carrots, and zucchini and cook until vegetables are slightly softened, about 5 minutes.",
      "Add diced tomatoes, kidney beans, corn, chili powder, cumin, smoked paprika, salt, and black",
    ],
  },
];

export const getOneRecipe = (id) => {
  return recipes[id];
};
export const getAllRecipes = () => {
  return recipes.map((r) => ({ id: r.id, title: r.title }));
};
