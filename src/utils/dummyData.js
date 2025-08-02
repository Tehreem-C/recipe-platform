// src/utils/dummyData.js

// --- Image Imports ---
// IMPORTANT: These imports MUST match the exact filenames and extensions
// in your src/assets folder (case-sensitive on some systems).
import beefBroccoliImage from '../assets/Beef and Broccoli.jpg';
import biryaniImage from '../assets/Biryani.jpg'; // <-- CORRECTED THIS LINE
import blackBeanBurgersImage from '../assets/Black Bean Burgers.jpg';
import butterChickenImage from '../assets/Butter Chicken.jpg';
import chapliKebabImage from '../assets/Chapli Kebab.webp'; // Confirmed from your assets
import chickenKarahiImage from '../assets/Chicken Karahi.jpg';
import chickenSandwichImage from '../assets/chicken-sandwich.jpg';
import cookiesImage from '../assets/cookies.jpg';
import granolaImage from '../assets/granola.jpg';
import haleemImage from '../assets/Haleem.jpg';
import lentilSoupImage from '../assets/lentil_soup.jpg';
import mediterraneanChickenImage from '../assets/Mediterranean Chicken.jpg';
import nihariImage from '../assets/Nihari.jpg';
import paneerTikkaImage from '../assets/Paneer Tikka.jpg';
import pastaImage from '../assets/pasta.jpg';
import pizzaImage from '../assets/pizza.jpg';
import quinoaSaladImage from '../assets/quinoa_salad.jpg';
import salmonImage from '../assets/salmon.jpg';
import samosaImage from '../assets/Samosa.jpg';
import spinachFetaChickenImage from '../assets/Spinach and Feta Stuffed Chicken.jpg';
import stirfryImage from '../assets/stirfry.jpg';
import vegetableCurryImage from '../assets/Vegetable Curry.jpg';

// --- Dummy Recipe Data ---
export const recipes = [
    {
        id: 'rec1',
        title: 'Creamy Tomato Pasta',
        description: 'A light and comforting pasta dish with a rich tomato cream sauce. A family favorite!',
        image: pastaImage,
        prepTime: '15m',
        cookTime: '20m',
        servings: 4,
        tags: ['Italian', 'Main Course', 'Pasta', 'Comfort Food', 'Vegetarian', 'Quick & Easy'],
        ingredients: [
            '300g pasta (e.g., fettuccine or penne)',
            '2 tbsp olive oil',
            '1 onion, finely chopped',
            '2 cloves garlic, minced',
            '1 can (400g) crushed tomatoes',
            '1/2 cup heavy cream',
            '1/4 cup grated Parmesan cheese',
            'Salt and black pepper to taste',
            'Fresh basil or parsley for garnish'
        ],
        instructions: [
            '1. Cook pasta according to package directions until al dente. Drain and set aside.',
            '2. While pasta cooks, heat olive oil in a large skillet or pan over medium heat.',
            '3. Add chopped onion and sauté until softened, about 5 minutes.',
            '4. Stir in minced garlic and cook for another minute until fragrant.',
            '5. Pour in the crushed tomatoes, bring to a simmer, and cook for 10-15 minutes, allowing sauce to thicken slightly.',
            '6. Reduce heat to low, stir in the heavy cream and Parmesan cheese until well combined and heated through.',
            '7. Season with salt and pepper to taste.',
            '8. Add the cooked pasta to the sauce and toss to coat evenly.',
            '9. Serve immediately, garnished with fresh basil or parsley.'
        ]
    },
    {
        id: 'rec2',
        title: 'Classic Margherita Pizza',
        description: 'A simple yet delicious Italian pizza, topped with fresh tomatoes, mozzarella, and basil. Perfect for any occasion!',
        image: pizzaImage,
        prepTime: '20m',
        cookTime: '15m',
        servings: 4,
        tags: ['Italian', 'Main Course', 'Vegetarian', 'Comfort Food', 'Cheese'],
        ingredients: [
            '1 pre-made pizza dough (or homemade)',
            '1/2 cup pizza sauce',
            '200g fresh mozzarella cheese, sliced or shredded',
            '1 large ripe tomato, thinly sliced (or 1/2 cup cherry tomatoes, halved)',
            'Fresh basil leaves',
            '2 tbsp olive oil',
            'Salt and black pepper to taste'
        ],
        instructions: [
            '1. Preheat your oven to 220°C (425°F) with a pizza stone or baking sheet inside.',
            '2. Roll out the pizza dough on a lightly floured surface to your desired thickness and shape.',
            '3. Carefully transfer the dough to a piece of parchment paper or directly onto your hot pizza stone/baking sheet.',
            '4. Spread the pizza sauce evenly over the dough, leaving a small border for the crust.',
            '5. Arrange the mozzarella slices and tomato slices over the sauce.',
            '6. Drizzle with olive oil and season lightly with salt and pepper.',
            '7. Bake for 12-15 minutes, or until the crust is golden brown and the cheese is bubbly and slightly browned.',
            '8. Remove from oven, scatter fresh basil leaves over the top.',
            '9. Slice and serve hot.'
        ]
    },
    {
        id: 'rec3',
        title: 'Simple Chicken Stir-Fry',
        description: 'A quick and healthy stir-fry with tender chicken pieces and colorful vegetables. Great for a weeknight meal!',
        image: stirfryImage,
        prepTime: '15m',
        cookTime: '10m',
        servings: 2,
        tags: ['Asian', 'Main Course', 'Quick & Easy', 'High-Protein', 'Low-Carb-Option', 'Gluten-Free-Option'],
        ingredients: [
            '300g boneless, skinless chicken breast, cut into thin strips',
            '2 tbsp soy sauce (use tamari for gluten-free)',
            '1 tbsp cornstarch',
            '1 tbsp sesame oil',
            '1 tbsp vegetable oil',
            '1 bell pepper (any color), sliced',
            '1 cup broccoli florets',
            '1 carrot, julienned or thinly sliced',
            '2 cloves garlic, minced',
            '1 tbsp ginger, grated',
            '1/4 cup chicken broth',
            '1 tsp sugar (optional)',
            'Cooked rice or noodles, for serving'
        ],
        instructions: [
            '1. In a bowl, toss chicken strips with 1 tbsp soy sauce and cornstarch. Let sit for 10 minutes.',
            '2. Heat vegetable oil in a large skillet or wok over high heat. Add chicken and stir-fry until browned and cooked through, about 3-5 minutes. Remove chicken from wok and set aside.',
            '3. Add sesame oil to the wok. Add bell pepper, broccoli, and carrot. Stir-fry for 3-4 minutes until crisp-tender.',
            '4. Add minced garlic and grated ginger, stir-fry for 1 minute until fragrant.',
            '5. Return chicken to the wok. In a small bowl, whisk together remaining 1 tbsp soy sauce, chicken broth, and sugar (if using). Pour over chicken and vegetables.',
            '6. Stir constantly until sauce thickens, about 1-2 minutes.',
            '7. Serve immediately over cooked rice or noodles.'
        ]
    },
    {
        id: 'rec4',
        title: 'Healthy Quinoa Salad',
        description: 'A light and refreshing quinoa salad packed with fresh vegetables and a zesty lemon dressing.',
        image: quinoaSaladImage,
        prepTime: '15m',
        cookTime: '15m',
        servings: 4,
        tags: ['Salad', 'Side Dish', 'Lunch', 'Healthy', 'Vegetarian', 'Gluten-Free', 'Vegan-Option'],
        ingredients: [
            '1 cup quinoa, rinsed',
            '2 cups vegetable broth or water',
            '1 cucumber, diced',
            '1 cup cherry tomatoes, halved',
            '1/2 red onion, finely diced',
            '1/2 cup chopped fresh parsley',
            '1/4 cup chopped fresh mint',
            '1/4 cup extra virgin olive oil',
            'Juice of 1 lemon',
            'Salt and black pepper to taste',
            'Optional: feta cheese, chickpeas, bell peppers'
        ],
        instructions: [
            '1. Combine rinsed quinoa and vegetable broth (or water) in a medium saucepan. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes, or until all liquid is absorbed and quinoa is fluffy.',
            '2. Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork and let cool.',
            '3. In a large bowl, combine the cooled quinoa with diced cucumber, cherry tomatoes, red onion, parsley, and mint.',
            '4. In a small bowl, whisk together olive oil, lemon juice, salt, and pepper to make the dressing.',
            '5. Pour the dressing over the quinoa mixture and toss gently to combine.',
            '6. Taste and adjust seasoning if necessary.',
            '7. Serve immediately or chill for later. Can be stored in the refrigerator for up to 3 days.'
        ]
    },
    {
        id: 'rec5',
        title: 'Homemade Granola',
        description: 'Crunchy and customizable homemade granola, perfect for breakfast or a healthy snack.',
        image: granolaImage,
        prepTime: '10m',
        cookTime: '25m',
        servings: 8,
        tags: ['Breakfast', 'Snack', 'Baking', 'Healthy', 'Vegan-Option'],
        ingredients: [
            '3 cups rolled oats (old-fashioned)',
            '1 cup mixed nuts and seeds (e.g., almonds, walnuts, pumpkin seeds, sunflower seeds)',
            '1/2 cup shredded unsweetened coconut (optional)',
            '1/2 tsp ground cinnamon',
            '1/4 tsp salt',
            '1/2 cup maple syrup or honey',
            '1/4 cup melted coconut oil or vegetable oil',
            '1 tsp vanilla extract',
            '1 cup dried fruit (e.g., raisins, cranberries, chopped apricots), added after baking'
        ],
        instructions: [
            '1. Preheat oven to 150°C (300°F). Line a large baking sheet with parchment paper.',
            '2. In a large bowl, combine oats, nuts, seeds, shredded coconut (if using), cinnamon, and salt. Mix well.',
            '3. In a separate small bowl, whisk together maple syrup (or honey), melted oil, and vanilla extract.',
            '4. Pour the wet ingredients over the dry ingredients and stir until everything is evenly coated.',
            '5. Spread the granola mixture evenly in a single layer on the prepared baking sheet.',
            '6. Bake for 25-35 minutes, stirring every 10 minutes, until golden brown and crispy. Keep an eye on it to prevent burning.',
            '7. Remove from oven and let cool completely on the baking sheet. It will crisp up further as it cools.',
            '8. Once completely cool, stir in the dried fruit.',
            '9. Store in an airtight container at room temperature for up to 2 weeks.'
        ]
    },
    {
        id: 'rec6',
        title: 'Spicy Lentil Soup',
        description: 'A hearty and warming lentil soup with a kick, perfect for a chilly day.',
        image: lentilSoupImage,
        prepTime: '15m',
        cookTime: '30m',
        servings: 6,
        tags: ['Soup', 'Lunch', 'Vegan', 'Comfort Food', 'Spicy'],
        ingredients: [
            '1 tbsp olive oil',
            '1 onion, chopped',
            '2 carrots, diced',
            '2 celery stalks, diced',
            '2 cloves garlic, minced',
            '1 tsp ground cumin',
            '1/2 tsp ground coriander',
            '1/4 tsp cayenne pepper (or more for extra heat)',
            '1 can (400g) diced tomatoes, undrained',
            '1 cup brown or green lentils, rinsed',
            '6 cups vegetable broth',
            '1 bay leaf',
            'Salt and black pepper to taste',
            'Fresh cilantro for garnish (optional)'
        ],
        instructions: [
            '1. Heat olive oil in a large pot or Dutch oven over medium heat.',
            '2. Add chopped onion, carrots, and celery. Sauté for 5-7 minutes until vegetables are softened.',
            '3. Stir in minced garlic, cumin, coriander, and cayenne pepper. Cook for 1 minute until fragrant.',
            '4. Add diced tomatoes, rinsed lentils, vegetable broth, and bay leaf. Bring to a boil.',
            '5. Reduce heat to low, cover, and simmer for 25-30 minutes, or until lentils are tender.',
            '6. Remove bay leaf. Season with salt and black pepper to taste.',
            '7. For a creamier soup, you can blend a portion of the soup with an immersion blender or in a regular blender (be careful with hot liquids).',
            '8. Serve hot, garnished with fresh cilantro if desired.'
        ]
    },
    {
        id: 'rec7',
        title: 'Lemon Herb Roasted Salmon',
        description: 'Flaky salmon fillets roasted with fresh lemon and herbs, a healthy and delicious main course.',
        image: salmonImage,
        prepTime: '10m',
        cookTime: '15m',
        servings: 2,
        tags: ['Main Course', 'Healthy', 'Quick & Easy', 'High-Protein', 'Gluten-Free'],
        ingredients: [
            '2 salmon fillets (about 150-180g each)',
            '1 lemon, thinly sliced, plus extra for serving',
            '2 tbsp olive oil',
            '1 tsp dried dill (or 1 tbsp fresh dill, chopped)',
            '1/2 tsp garlic powder',
            'Salt and black pepper to taste'
        ],
        instructions: [
            '1. Preheat oven to 200°C (400°F). Line a baking sheet with parchment paper.',
            '2. Pat salmon fillets dry with paper towels.',
            '3. In a small bowl, whisk together olive oil, dried dill, garlic powder, salt, and pepper.',
            '4. Place salmon fillets on the prepared baking sheet. Brush the olive oil mixture evenly over the salmon.',
            '5. Arrange lemon slices on top of each salmon fillet.',
            '6. Bake for 12-15 minutes, or until salmon is cooked through and flakes easily with a fork. Cooking time may vary depending on thickness.',
            '7. Serve immediately with extra lemon wedges.'
        ]
    },
    {
        id: 'rec8',
        title: 'Classic Chocolate Chip Cookies',
        description: 'Chewy on the inside, crispy on the edges, these classic chocolate chip cookies are always a hit!',
        image: cookiesImage,
        prepTime: '15m',
        cookTime: '10m',
        servings: 12,
        tags: ['Baking', 'Dessert', 'Comfort Food', 'Sweet'],
        ingredients: [
            '1/2 cup (113g) unsalted butter, softened',
            '1/2 cup granulated sugar',
            '1/4 cup packed light brown sugar',
            '1 large egg',
            '1 tsp vanilla extract',
            '1 1/4 cups all-purpose flour',
            '1/2 tsp baking soda',
            '1/4 tsp salt',
            '1 cup semi-sweet chocolate chips'
        ],
        instructions: [
            '1. Preheat oven to 190°C (375°F). Line a baking sheet with parchment paper.',
            '2. In a large bowl, cream together softened butter, granulated sugar, and brown sugar until light and fluffy.',
            '3. Beat in the egg and vanilla extract until well combined.',
            '4. In a separate medium bowl, whisk together flour, baking soda, and salt.',
            '5. Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Do not overmix.',
            '6. Stir in the chocolate chips.',
            '7. Drop rounded tablespoons of dough onto the prepared baking sheet, spacing them about 2 inches apart.',
            '8. Bake for 9-12 minutes, or until the edges are golden brown and the centers are still slightly soft.',
            '9. Remove from oven and let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.'
        ]
    },
    {
        id: 'rec9',
        title: 'Chicken Biryani',
        description: 'A fragrant and flavorful rice dish layered with marinated chicken, aromatic spices, and herbs, a staple in Pakistani and Indian cuisine.',
        image: biryaniImage,
        prepTime: '30m',
        cookTime: '1h 15m',
        servings: 6,
        tags: ['Pakistani', 'Main Course', 'Spicy', 'Comfort Food', 'High-Protein'],
        ingredients: [
            '500g chicken, cut into pieces',
            '2 cups basmati rice, soaked for 30 minutes',
            '1/2 cup plain yogurt',
            '2 onions, thinly sliced and fried until golden brown',
            '2 tomatoes, chopped',
            '2 green chilies, slit',
            '1/4 cup fresh cilantro, chopped',
            '1/4 cup fresh mint leaves, chopped',
            '2 tbsp ginger-garlic paste',
            '1 tbsp biryani masala (store-bought or homemade blend)',
            '1 tsp red chili powder',
            '1/2 tsp turmeric powder',
            'Salt to taste',
            '1/4 cup oil or ghee',
            'Whole spices: 2 bay leaves, 4-5 green cardamoms, 4-5 cloves, 1 cinnamon stick',
            'Pinch of saffron threads, soaked in 2 tbsp warm milk (optional)'
        ],
        instructions: [
            '1. Marinate chicken with yogurt, ginger-garlic paste, biryani masala, red chili powder, turmeric powder, garam masala, and salt. Let it marinate for at least 1 hour, or overnight in the refrigerator.',
            '2. In a large pot, heat oil/ghee. Add whole spices and sauté for 30 seconds until fragrant.',
            '3. Add chopped tomatoes and cook until softened and oil separates.',
            '4. Add the marinated chicken and cook on high heat for 5-7 minutes, then reduce heat, cover, and cook until chicken is tender (approx. 20-25 minutes).',
            '5. Meanwhile, boil the soaked basmati rice with enough water and a pinch of salt until 70% cooked. Drain the rice.',
            '6. Layer the biryani: In a heavy-bottomed pot, spread half of the cooked rice, then layer with the chicken curry, half of the fried onions, cilantro, and mint leaves.',
            '7. Add the remaining rice, followed by the rest of the fried onions, cilantro, and mint. Drizzle saffron milk (if using).',
            '8. Cover the pot tightly with a lid (you can seal the edges with dough for "dum" cooking).',
            '9. Cook on low heat (dum) for 15-20 minutes until the rice is fully cooked and flavors are well combined.',
            '10. Gently mix the biryani before serving. Serve hot with raita or salad.'
        ]
    },
    {
        id: 'rec10',
        title: 'Chicken Karahi',
        description: 'A fiery and flavorful Pakistani chicken curry cooked in a wok-like pan (karahi), known for its rich tomato and ginger base.',
        image: chickenKarahiImage,
        prepTime: '20m',
        cookTime: '30-40m',
        servings: 4,
        tags: ['Pakistani', 'Main Course', 'Curry', 'Spicy', 'Comfort Food', 'High-Protein'],
        ingredients: [
            '500g chicken, cut into small pieces',
            '3-4 large tomatoes, blanched, peeled, and chopped',
            '1/2 cup yogurt, whisked',
            '2 tbsp ginger-garlic paste',
            '2-3 green chilies, slit lengthwise',
            '1 tsp red chili powder',
            '1/2 tsp turmeric powder',
            '1 tsp coriander powder',
            '1 tsp cumin powder',
            '1/2 tsp garam masala',
            'Salt to taste',
            '1/2 cup cooking oil',
            'Fresh ginger, julienned for garnish',
            'Fresh cilantro, chopped for garnish'
        ],
        instructions: [
            '1. Heat oil in a karahi (wok) or a large heavy-bottomed pan over high heat.',
            '2. Add chicken pieces and fry until they change color and are lightly browned. Remove excess oil if desired.',
            '3. Add ginger-garlic paste and cook for 2-3 minutes until fragrant.',
            '4. Add chopped tomatoes and cook until they soften and mash easily, and the oil starts to separate (about 10-15 minutes).',
            '5. Add red chili powder, turmeric powder, coriander powder, cumin powder, black pepper, turmeric powder, and salt. Mix well and cook for 5 minutes, stirring occasionally.',
            '6. Reduce heat to medium-low. Add whisked yogurt and stir continuously to prevent curdling. Cook until the yogurt blends with the masala and oil separates again.',
            '7. Add green chilies and a splash of water if the mixture is too dry. Cover and simmer for 10-15 minutes until chicken is tender and sauce thickens to your desired consistency.',
            '8. Stir in garam masala. Garnish with fresh julienned ginger and chopped cilantro.',
            '9. Serve hot with naan or roti.'
        ]
    },
    {
        id: 'rec11',
        title: 'Butter Chicken',
        description: 'A rich and creamy Indian curry with tender chicken pieces cooked in a spiced tomato and butter sauce.',
        image: butterChickenImage,
        prepTime: '20m',
        cookTime: '40m',
        servings: 4,
        tags: ['Indian', 'Main Course', 'Creamy', 'Comfort Food', 'Mild'],
        ingredients: [
            '500g boneless chicken, cut into cubes',
            '1/2 cup plain yogurt',
            '1 tbsp ginger-garlic paste',
            '1 tsp red chili powder',
            '1/2 tsp turmeric powder',
            '1 tsp garam masala',
            'Salt to taste',
            '2 tbsp butter',
            '1 large onion, finely chopped',
            '1 can (400g) crushed tomatoes',
            '1/2 cup cashews, soaked in warm water for 15 minutes',
            '1/2 cup heavy cream',
            '1 tbsp honey or sugar',
            'Fenugreek leaves (kasoori methi) for garnish (optional)'
        ],
        instructions: [
            '1. Marinate chicken with yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, and salt for at least 30 minutes (or overnight).',
            '2. Heat 1 tbsp butter in a pan. Add marinated chicken and cook until lightly browned. Set aside.',
            '3. In the same pan, add remaining 1 tbsp butter. Sauté chopped onion until soft and translucent.',
            '4. Add crushed tomatoes and cook for 10-15 minutes, stirring occasionally, until the sauce thickens and oil separates.',
            '5. Blend the tomato-onion mixture with soaked cashews until smooth. Strain if desired for an extra smooth sauce.',
            '6. Return the blended sauce to the pan. Add the cooked chicken. Stir in heavy cream, honey (or sugar), and adjust salt.',
            '7. Simmer for 15-20 minutes, allowing flavors to meld and chicken to cook through.',
            '8. Garnish with fenugreek leaves if using. Serve hot with naan or rice.'
        ]
    },
    {
        id: 'rec12',
        title: 'Beef and Broccoli',
        description: 'A classic Chinese takeout dish, tender beef strips and crisp broccoli florets tossed in a savory ginger-garlic sauce.',
        image: beefBroccoliImage,
        prepTime: '20m',
        cookTime: '15m',
        servings: 3,
        tags: ['Asian', 'Main Course', 'Quick & Easy', 'High-Protein'],
        ingredients: [
            '300g beef sirloin or flank steak, thinly sliced against the grain',
            '1 tbsp soy sauce',
            '1 tsp cornstarch',
            '1 tbsp vegetable oil',
            '3 cups broccoli florets',
            '2 cloves garlic, minced',
            '1 tbsp fresh ginger, grated',
            'Sauce:',
            '1/2 cup beef broth',
            '2 tbsp soy sauce',
            '1 tbsp oyster sauce (optional)',
            '1 tbsp brown sugar',
            '1 tsp sesame oil',
            '1 tsp cornstarch',
            '1/4 tsp black pepper'
        ],
        instructions: [
            '1. In a bowl, toss sliced beef with 1 tbsp soy sauce and 1 tsp cornstarch. Set aside for 15 minutes.',
            '2. In a separate bowl, whisk together all sauce ingredients until smooth.',
            '3. Heat vegetable oil in a large skillet or wok over high heat. Add beef and stir-fry quickly until browned, about 2-3 minutes. Remove beef and set aside.',
            '4. Add broccoli florets to the wok (add a splash of water if needed to steam slightly) and stir-fry for 3-5 minutes until bright green and crisp-tender. Remove and set aside.',
            '5. Add minced garlic and grated ginger to the wok, stir-fry for 30 seconds until fragrant.',
            '6. Pour in the whisked sauce. Bring to a simmer, stirring constantly, until the sauce thickens.',
            '7. Return beef and broccoli to the wok. Toss everything to coat evenly in the sauce.',
            '8. Serve immediately over steamed rice.'
        ]
    },
    {
        id: 'rec13',
        title: 'Homemade Samosa',
        description: 'Crispy and savory pastry filled with spiced potatoes and peas, a popular South Asian snack.',
        image: samosaImage,
        prepTime: '45m',
        cookTime: '20m',
        servings: 10,
        tags: ['Pakistani', 'Indian', 'Snack', 'Appetizer', 'Vegetarian', 'Spicy'],
        ingredients: [
            'For the Dough:',
            '2 cups all-purpose flour',
            '1/2 tsp salt',
            '1/4 cup ghee or oil, melted',
            '1/2 cup cold water (approx, as needed)',
            'For the Filling:',
            '2 large potatoes, boiled, peeled, and mashed',
            '1/2 cup green peas (fresh or frozen)',
            '1 tbsp oil',
            '1 tsp cumin seeds',
            '1/2 tsp ginger, grated',
            '1 green chili, finely chopped (optional)',
            '1/2 tsp red chili powder',
            '1/2 tsp coriander powder',
            '1/2 tsp garam masala',
            '1/4 tsp amchur (dry mango powder, optional)',
            'Salt to taste',
            'Fresh cilantro, chopped',
            'Oil for deep frying'
        ],
        instructions: [
            '1. **For the Dough:** In a bowl, combine flour and salt. Add melted ghee/oil and rub into the flour until crumbly. Gradually add cold water and knead into a firm, smooth dough. Cover and let rest for 20-30 minutes.',
            '2. **For the Filling:** Heat 1 tbsp oil in a pan. Add cumin seeds and let them splutter. Add grated ginger and green chili (if using), sauté for 30 seconds.',
            '3. Add mashed potatoes, green peas, red chili powder, coriander powder, garam masala, amchur (if using), and salt. Mix well and cook for 5-7 minutes, breaking any lumps. Stir in fresh cilantro. Let the filling cool completely.',
            '4. **Assembling Samosas:** Divide the dough into equal portions (about 8-10). Roll each portion into an oval shape.',
            '5. Cut the oval in half to form two semi-circles. Bring the straight edges together, moisten with water, and pinch to form a cone.',
            '6. Fill the cone with the cooled potato mixture. Moistened the open edge and pinch to seal, creating pleats on one side for the classic samosa shape.',
            '7. Repeat with remaining dough and filling.',
            '8. **Frying:** Heat oil in a deep pan or wok over medium-low heat. The oil should not be too hot, or the samosas will brown quickly on the outside and remain raw inside.',
            '9. Carefully slide a few samosas into the hot oil. Fry, turning occasionally, for 15-20 minutes, or until golden brown and crispy.',
            '10. Remove samosas with a slotted spoon and drain on paper towels.',
            '11. Serve hot with chutney or ketchup.'
        ]
    },
    {
        id: 'rec14',
        title: 'Chicken Sandwich',
        description: 'A simple yet satisfying chicken sandwich with a creamy filling, perfect for lunch or a light meal.',
        image: chickenSandwichImage,
        prepTime: '15m',
        cookTime: '0m',
        servings: 2,
        tags: ['Lunch', 'Quick & Easy', 'Snack', 'Comfort Food'],
        ingredients: [
            '2 cups cooked chicken, shredded or diced',
            '1/2 cup mayonnaise',
            '2 tbsp finely chopped celery (optional)',
            '1 tbsp finely chopped red onion (optional)',
            '1 tsp Dijon mustard (optional)',
            'Salt and black pepper to taste',
            '4 slices bread (your choice)',
            'Lettuce leaves, for serving',
            'Tomato slices, for serving (optional)'
        ],
        instructions: [
            '1. In a medium bowl, combine shredded or diced cooked chicken, mayonnaise, chopped celery (if using), chopped red onion (if using), and Dijon mustard (if using).',
            '2. Mix well until all ingredients are evenly coated.',
            '3. Season with salt and black pepper to taste. Adjust ingredients as per your preference.',
            '4. Toast bread slices if desired.',
            '5. Spread a generous amount of chicken mixture onto two slices of bread.',
            '6. Top with lettuce leaves and tomato slices (if using).',
            '7. Cover with the remaining two slices of bread to form sandwiches.',
            '8. Cut in half and serve immediately.'
        ]
    },
    {
        id: 'rec15',
        title: 'Haleem',
        description: 'A rich and hearty Pakistani and Indian stew made with wheat, barley, lentils, and slow-cooked meat (typically beef or chicken), a true comfort food.',
        image: haleemImage,
        prepTime: '1h (plus soaking)',
        cookTime: '4h+',
        servings: 8,
        tags: ['Pakistani', 'Indian', 'Main Course', 'Comfort Food', 'High-Protein'],
        ingredients: [
            '1 cup wheat grains (cracked wheat)',
            '1/2 cup barley',
            '1/4 cup chana dal (split chickpea lentils)',
            '1/4 cup masoor dal (red lentils)',
            '1/4 cup urad dal (black gram lentils)',
            '1/4 cup moong dal (split yellow lentils)',
            '500g beef or chicken, boneless, cut into cubes',
            '1 large onion, thinly sliced and fried until golden brown (for garnish and base)',
            '2 tbsp ginger-garlic paste',
            '2-3 green chilies, slit',
            '1/2 cup oil or ghee',
            '2 tbsp Haleem masala (store-bought or homemade blend)',
            '1 tsp red chili powder',
            '1/2 tsp turmeric powder',
            'Salt to taste',
            '8-10 cups water or beef broth',
            '1/4 cup plain flour (atta) or gram flour (besan), mixed with 1/2 cup water to form a slurry',
            'For Garnish:',
            'Fresh ginger, julienned',
            'Fresh cilantro, chopped',
            'Fried onions',
            'Green chilies, chopped',
            'Lemon wedges',
            'Chaat masala (optional)'
        ],
        instructions: [
            '1. **Soaking:** Wash and soak wheat, barley, and all lentils together in water overnight or for at least 4-6 hours.',
            '2. **Boiling Grains & Lentils:** Drain the soaked mixture. In a large pot, add the soaked mixture with 8-10 cups of water, salt, and turmeric. Bring to a boil, then reduce heat and simmer until very tender and soft, stirring occasionally (2-3 hours). You can also use a pressure cooker (approx. 45-60 minutes after first whistle). Once cooked, mash or blend lightly to a thick consistency. Set aside.',
            '3. **Cooking Meat Curry:** In a separate large pot, heat oil/ghee. Sauté half of the fried onions until soft. Add ginger-garlic paste and cook for 1 minute.',
            '4. Add beef/chicken, red chili powder, and Haleem masala. Cook on high heat for 5-7 minutes until meat changes color.',
            '5. Add 2-3 cups of water, bring to a boil, then reduce heat, cover, and simmer until meat is very tender and shreddable (1.5-3 hours for beef, 30-40 mins for chicken). Shred the meat using two forks directly in the pot or remove, shred, and return to the pot.',
            '6. **Combining Haleem:** Add the mashed grain and lentil mixture to the shredded meat curry. Mix thoroughly. If the consistency is too thick, add more hot water gradually until desired consistency is reached. Simmer on low heat for at least 30-60 minutes, stirring frequently from the bottom to prevent sticking, allowing flavors to meld and the Haleem to "ghotna" (become smooth and sticky).',
            '7. **Serving:** Serve hot in bowls. Garnish generously with julienned ginger, chopped cilantro, remaining fried onions, chopped green chilies, and a squeeze of fresh lemon juice. Sprinkle with chaat masala if desired.'
        ]
    },
    {
        id: 'rec16',
        title: 'Mediterranean Chicken',
        description: 'Flavorful chicken breasts baked with Mediterranean vegetables and herbs, a healthy and vibrant meal.',
        image: mediterraneanChickenImage,
        prepTime: '20m',
        cookTime: '30m',
        servings: 4,
        tags: ['Mediterranean', 'Main Course', 'Healthy', 'Quick & Easy', 'Gluten-Free'],
        ingredients: [
            '4 boneless, skinless chicken breasts',
            '1 red bell pepper, sliced',
            '1 zucchini, sliced',
            '1 red onion, sliced',
            '1 cup cherry tomatoes',
            '1/2 cup pitted Kalamata olives',
            '2 tbsp olive oil',
            '1 tbsp dried oregano',
            '1 tsp dried thyme',
            '1/2 tsp garlic powder',
            'Salt and black pepper to taste',
            'Fresh parsley for garnish (optional)',
            'Lemon wedges for serving'
        ],
        instructions: [
            '1. Preheat oven to 200°C (400°F).',
            '2. In a large bowl, combine sliced red bell pepper, zucchini, red onion, cherry tomatoes, and Kalamata olives.',
            '3. Drizzle with 1 tbsp olive oil, oregano, thyme, garlic powder, salt, and pepper. Toss to coat well.',
            '4. Place chicken breasts on a baking sheet. Drizzle with remaining 1 tbsp olive oil and season with salt and pepper.',
            '5. Arrange the seasoned vegetables around the chicken breasts on the baking sheet.',
            '6. Bake for 25-30 minutes, or until chicken is cooked through (internal temperature of 165°F/74°C) and vegetables are tender-crisp.',
            '7. Remove from oven. Garnish with fresh parsley if desired and serve with lemon wedges.'
        ]
    },
    {
        id: 'rec17',
        title: 'Nihari',
        description: 'A slow-cooked, rich, and spicy Pakistani and Indian stew, typically made with beef or lamb shank, known for its thick gravy and tender meat.',
        image: nihariImage,
        prepTime: '30m',
        cookTime: '4h+',
        servings: 6,
        tags: ['Pakistani', 'Indian', 'Main Course', 'Spicy', 'Comfort Food'],
        ingredients: [
            '500g beef shank or lamb, bone-in or boneless, cut into large pieces',
            '1 large onion, thinly sliced',
            '1/2 cup oil or ghee',
            '2 tbsp ginger-garlic paste',
            '2-3 tbsp Nihari masala (store-bought or homemade blend)',
            '1 tsp red chili powder (adjust to taste)',
            '1/2 tsp turmeric powder',
            'Salt to taste',
            '8-10 cups water or beef broth',
            '1/4 cup plain flour (atta) or gram flour (besan), mixed with 1/2 cup water to form a slurry',
            'For Garnish:',
            'Fresh ginger, julienned',
            'Green chilies, chopped',
            'Fresh cilantro, chopped',
            'Fried onions',
            'Lemon wedges'
        ],
        instructions: [
            '1. Heat oil/ghee in a large heavy-bottomed pot or Dutch oven over medium-high heat.',
            '2. Add sliced onion and fry until golden brown. Remove half of the fried onions for garnish and set aside.',
            '3. Add beef/lamb pieces to the remaining oil and onions. Fry until browned on all sides.',
            '4. Stir in ginger-garlic paste and cook for 2-3 minutes until fragrant.',
            '5. Add Nihari masala, red chili powder, turmeric powder, and salt. Cook for 5 minutes, stirring constantly, adding a splash of water if spices stick.',
            '6. Pour in 8-10 cups of water or beef broth. Bring to a boil, then reduce heat to very low, cover tightly, and simmer for 3-4 hours (or until meat is extremely tender and falling off the bone). For a pressure cooker, cook for 45-60 minutes after first whistle.',
            '7. Once meat is tender, prepare the flour slurry: mix flour with 1/4 cup water until smooth, ensuring no lumps.',
            '8. Gradually add the flour slurry to the simmering Nihari, stirring constantly to avoid lumps. Continue to cook, stirring, until the gravy thickens to a desired consistency (about 10-15 minutes).',
            '9. Taste and adjust seasoning if needed.',
            '10. Serve hot in bowls, garnished generously with julienned ginger, green chilies, fresh cilantro, fried onions, and a squeeze of lemon juice.'
        ]
    },
    {
        id: 'rec18',
        title: 'Paneer Tikka',
        description: 'Grilled or pan-fried skewers of marinated paneer (Indian cheese) and vegetables, a flavorful vegetarian appetizer or main.',
        image: paneerTikkaImage,
        prepTime: '20m (plus 30m marination)',
        cookTime: '15-20m',
        servings: 4,
        tags: ['Indian', 'Vegetarian', 'Appetizer', 'Main Course', 'Spicy'],
        ingredients: [
            '250g paneer, cut into 1-inch cubes',
            '1/2 cup plain yogurt',
            '1 tbsp ginger-garlic paste',
            '1 tsp red chili powder',
            '1 tsp coriander powder',
            '1/2 tsp turmeric powder',
            '1/2 tsp garam masala',
            '1/2 tsp roasted cumin powder',
            '1 tbsp lemon juice',
            '1 tbsp oil',
            'Salt to taste',
            '1 large onion, cut into chunks',
            '1 bell pepper (any color), cut into chunks',
            'Wooden or metal skewers'
        ],
        instructions: [
            '1. In a large bowl, whisk together yogurt, ginger-garlic paste, red chili powder, coriander powder, turmeric powder, garam masala, roasted cumin powder, lemon juice, oil, and salt to make the marinade.',
            '2. Add paneer cubes, onion chunks, and bell pepper chunks to the marinade. Gently toss to coat everything evenly. Cover and marinate in the refrigerator for at least 30 minutes, or up to 2 hours.',
            '3. **Grilling/Baking Method:** Preheat grill to medium-high heat or preheat oven to 200°C (400°F). Thread the marinated paneer and vegetables onto skewers, alternating as desired.',
            '4. Grill for 10-15 minutes, turning occasionally, until paneer is lightly charred and vegetables are tender-crisp. If baking, bake for 15-20 minutes, flipping halfway, until golden and cooked through.',
            '5. **Pan-Frying Method:** Heat a little oil in a non-stick pan over medium heat. Place marinated paneer and vegetables (without skewers) in the pan in a single layer. Cook, turning occasionally, until golden brown on all sides (10-15 minutes).',
            '6. Serve hot with mint chutney or lemon wedges.'
        ]
    },
    {
        id: 'rec19',
        title: 'Spinach and Feta Stuffed Chicken',
        description: 'Tender chicken breasts stuffed with a creamy mixture of spinach and feta cheese, a gourmet meal made easy.',
        image: spinachFetaChickenImage,
        prepTime: '20m',
        cookTime: '25-30m',
        servings: 2,
        tags: ['Main Course', 'Healthy', 'Mediterranean', 'High-Protein'],
        ingredients: [
            '2 boneless, skinless chicken breasts',
            '100g fresh spinach, cooked and squeezed dry',
            '60g feta cheese, crumbled',
            '2 tbsp cream cheese, softened',
            '1 clove garlic, minced',
            'Salt and black pepper to taste',
            '1 tbsp olive oil',
            'Toothpicks or kitchen twine (optional)'
        ],
        instructions: [
            '1. Preheat oven to 190°C (375°F).',
            '2. Carefully slice a pocket into the thickest part of each chicken breast, being careful not to cut all the way through.',
            '3. In a small bowl, combine the cooked and squeezed dry spinach, crumbled feta cheese, softened cream cheese, minced garlic, salt, and pepper. Mix well.',
            '4. Divide the spinach and feta mixture evenly and stuff it into the pockets of the chicken breasts.',
            '5. If desired, secure the openings with toothpicks or tie with kitchen twine to keep the stuffing in.',
            '6. Heat olive oil in an oven-safe skillet over medium-high heat. Sear the stuffed chicken breasts for 2-3 minutes per side until lightly golden.',
            '7. Transfer the skillet to the preheated oven and bake for 20-25 minutes, or until chicken is cooked through (internal temperature of 165°F/74°C) and juices run clear.',
            '8. Remove toothpicks/twine before serving. Let rest for a few minutes before slicing and serving.'
        ]
    },
    {
        id: 'rec20',
        title: 'Vegetable Curry',
        description: 'A flavorful and aromatic mixed vegetable curry, perfect for a hearty vegetarian meal.',
        image: vegetableCurryImage,
        prepTime: '20m',
        cookTime: '30m',
        servings: 4,
        tags: ['Vegetarian', 'Vegan', 'Main Course', 'Indian', 'Comfort Food'],
        ingredients: [
            '2 tbsp oil',
            '1 onion, chopped',
            '2 cloves garlic, minced',
            '1 tbsp ginger, grated',
            '1 tsp cumin seeds',
            '1/2 tsp turmeric powder',
            '1 tsp red chili powder (adjust to taste)',
            '1 tbsp coriander powder',
            '1/2 tsp garam masala',
            '1 can (400g) crushed tomatoes',
            '1/2 cup coconut milk (full-fat or light)',
            '3 cups mixed vegetables, chopped (e.g., potatoes, carrots, peas, green beans, cauliflower)',
            '1/2 cup water or vegetable broth',
            'Salt to taste',
            'Fresh cilantro, chopped for garnish'
        ],
        instructions: [
            '1. Heat oil in a large pot or Dutch oven over medium heat.',
            '2. Add cumin seeds and let them splutter. Add chopped onion and sauté until golden brown and softened, about 5-7 minutes.',
            '3. Stir in minced garlic and grated ginger, cook for 1 minute until fragrant.',
            '4. Add turmeric powder, red chili powder, coriander powder, and garam masala. Cook for 1 minute, stirring constantly, adding a splash of water if spices stick.',
            '5. Pour in the crushed tomatoes and cook for 8-10 minutes, stirring occasionally, until the sauce thickens and oil separates.',
            '6. Add the chopped mixed vegetables, water (or broth), and salt. Bring to a simmer, then cover and cook for 15-20 minutes, or until vegetables are tender.',
            '7. Stir in the coconut milk and simmer for another 5 minutes, allowing flavors to meld. Do not boil vigorously after adding coconut milk.',
            '8. Taste and adjust seasoning if needed.',
            '9. Garnish with fresh chopped cilantro and serve hot with rice or naan.'
        ]
    },
    {
        id: 'rec21',
        title: 'Chapli Kebab',
        description: 'A spicy and savory Pakistani ground meat patty, shallow-fried and traditionally served with naan or pita.',
        image: chapliKebabImage,
        prepTime: '20m',
        cookTime: '20m',
        servings: 4,
        tags: ['Pakistani', 'Main Course', 'Spicy', 'Grill'],
        ingredients: [
            '500g ground beef or lamb (preferably with some fat)',
            '1 large onion, finely chopped and squeezed to remove excess water',
            '2 tomatoes, finely chopped',
            '2-3 green chilies, finely chopped (adjust to taste)',
            '1/4 cup fresh cilantro, chopped',
            '1 tbsp ginger-garlic paste',
            '1 tbsp pomegranate seeds (anardana), crushed (optional)',
            '1 tbsp crushed red chili flakes',
            '1 tbsp coriander seeds, roasted and crushed',
            '1 tsp cumin seeds, roasted and crushed',
            '1 tsp garam masala',
            '1/2 cup corn flour or all-purpose flour',
            '1 egg, lightly beaten',
            'Salt to taste',
            'Oil for shallow frying'
        ],
        instructions: [
            '1. In a large bowl, combine ground meat, chopped onion, chopped tomatoes, green chilies, cilantro, ginger-garlic paste, crushed pomegranate seeds (if using), red chili flakes, crushed coriander seeds, crushed cumin seeds, garam masala, and salt. Mix thoroughly by hand for 5-7 minutes until well combined and slightly sticky.',
            '2. Add corn flour (or all-purpose flour) and the beaten egg. Mix again until just incorporated. Do not overmix.',
            '3. Heat oil in a large non-stick skillet over medium heat. The oil should be about 1/2 inch deep.',
            '4. Take a portion of the mixture (about 1/4 cup) and flatten it into a thin, round patty, about 4-5 inches in diameter. You can place a tomato slice on top of each patty before frying for traditional presentation.',
            '5. Carefully place the kebabs in the hot oil. Do not overcrowd the pan.',
            '6. Fry for 4-6 minutes per side, or until golden brown and cooked through. Ensure the internal temperature reaches 71°C (160°F) for beef/lamb.',
            '7. Remove kebabs from the pan and place on paper towels to drain excess oil.',
            '8. Serve hot with naan, pita bread, yogurt raita, or a fresh salad.'
        ]
    },
    {
        id: 'rec22',
        title: 'Black Bean Burgers',
        description: 'Hearty and flavorful homemade black bean burgers, a delicious vegetarian alternative to traditional burgers.',
        image: blackBeanBurgersImage,
        prepTime: '20m',
        cookTime: '20m',
        servings: 4,
        tags: ['Vegetarian', 'Vegan-Option', 'Main Course', 'Healthy'],
        ingredients: [
            '1 can (400g) black beans, rinsed and drained',
            '1/2 cup breadcrumbs (use gluten-free for GF option)',
            '1/4 cup finely chopped onion',
            '2 cloves garlic, minced',
            '1/4 cup finely chopped bell pepper (any color)',
            '1 tsp chili powder',
            '1/2 tsp ground cumin',
            '1/4 tsp smoked paprika',
            'Salt and black pepper to taste',
            '1 egg, beaten (optional, for binding; omit for vegan)',
            '1 tbsp olive oil',
            'Burger buns and toppings for serving'
        ],
        instructions: [
            '1. In a large bowl, mash the rinsed and drained black beans with a fork or potato masher until mostly mashed but still some whole beans remain.',
            '2. Add breadcrumbs, chopped onion, minced garlic, chopped bell pepper, chili powder, cumin, smoked paprika, salt, and black pepper. Mix well.',
            '3. If using, add the beaten egg and mix until everything is combined.',
            '4. Divide the mixture into 4 equal portions and form into patties about 1-inch thick.',
            '5. Heat olive oil in a large non-stick skillet over medium heat.',
            '6. Carefully place the black bean patties in the hot skillet. Cook for 5-7 minutes per side, or until golden brown and heated through.',
            '7. Alternatively, you can bake them at 190°C (375°F) for 20-25 minutes, flipping halfway, until firm.',
            '8. Serve the black bean burgers on buns with your favorite toppings like lettuce, tomato, avocado, and onion.'
        ]
    }
];

// --- Dummy User Data (for AuthContext) ---
export const users = [
    {
        id: 'user1',
        email: 'test@example.com',
        password: 'password', // In a real app, never store plain passwords
        username: 'TestUser',
        favoriteRecipeIds: ['rec1', 'rec3'] // Example favorite recipes
    },
    {
        id: 'user2',
        email: 'admin@example.com',
        password: 'admin',
        username: 'AdminUser',
        favoriteRecipeIds: ['rec2', 'rec5']
    }
    // Add more dummy users as needed
];

// --- Helper Functions for Users ---
export const findUserById = (id) => {
    return users.find(user => user.id === id);
};

export const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

// --- Helper Functions for Recipes (for HomePage and ModifyRecipePage) ---
export const getRecipes = () => {
    // In a real application, this would fetch from an API
    return recipes;
};

export const getRecipeById = (id) => {
    return recipes.find(recipe => recipe.id === id);
};

export const addRecipe = (newRecipe) => {
    // Assign a new unique ID (for dummy data)
    const newId = `rec${recipes.length + 1}`;
    const recipeToAdd = { ...newRecipe, id: newId };
    recipes.push(recipeToAdd); // Directly modify the dummy array
    console.log("Recipe added:", recipeToAdd);
    return recipeToAdd;
};

export const updateRecipe = (updatedRecipe) => {
    const index = recipes.findIndex(r => r.id === updatedRecipe.id);
    if (index !== -1) {
        recipes[index] = { ...recipes[index], ...updatedRecipe }; // Merge updated fields
        console.log("Recipe updated:", recipes[index]);
        return recipes[index];
    }
    return null; // Recipe not found
};

export const deleteRecipe = (id) => {
    const initialLength = recipes.length;
    // Filter creates a new array, so reassign to the exported `recipes`
    // Note: In a real app with a backend, you'd send a DELETE request.
    const newRecipes = recipes.filter(recipe => recipe.id !== id);
    // Directly reassign the 'recipes' array to ensure the changes are reflected
    // in modules that import 'recipes'.
    recipes.splice(0, recipes.length, ...newRecipes); // Clear and repopulate to maintain reference

    return recipes.length < initialLength; // True if a recipe was deleted
};

// You might also need functions for filtering/searching, depending on your HomePage logic
export const searchRecipes = (query, filters) => {
    let filteredRecipes = recipes;

    if (query) {
        const lowerCaseQuery = query.toLowerCase();
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(lowerCaseQuery) ||
            recipe.description.toLowerCase().includes(lowerCaseQuery) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerCaseQuery))
        );
    }

    if (filters && filters.tags && filters.tags.length > 0) {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.tags.some(tag => filters.tags.includes(tag))
        );
    }
    // Add more filters as needed (e.g., prepTime, cookTime, servings)

    return filteredRecipes;
};