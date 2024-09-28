document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('recipe-modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const readMoreButtons = document.querySelectorAll('.read-more');

    const recipes = {
        'vegan-pancakes': {
            title: 'Fluffy Vegan Pancakes',
            image: 'photo 16.png',
            description: 'Start your day with these light and fluffy vegan pancakes. They\'re easy to make and absolutely delicious!',
            ingredients: [
                '1 cup all-purpose flour',
                '2 tablespoons sugar',
                '1 tablespoon baking powder',
                '1/4 teaspoon salt',
                '1 cup non-dairy milk',
                '2 tablespoons vegetable oil',
                '1 teaspoon vanilla extract'
            ],
            instructions: [
                'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
                'In another bowl, mix non-dairy milk, vegetable oil, and vanilla extract.',
                'Pour the wet ingredients into the dry ingredients and mix until just combined. Don\'t overmix!',
                'Heat a non-stick pan or griddle over medium heat.',
                'Pour 1/4 cup of batter for each pancake. Cook until bubbles form on top, then flip and cook the other side until golden brown.',
                'Serve with your favorite toppings like maple syrup, fresh fruits, or vegan butter.'
            ],
            benefits: [
                'Plant-based and cholesterol-free',
                'Can be made gluten-free with alternative flour',
                'Customizable with various toppings for added nutrients',
                'Great source of energy to start your day'
            ]
        },
        'tofu-scramble': {
            title: 'Savory Tofu Scramble',
            image: 'photo17.png',
            description: 'A protein-packed breakfast that\'s quick, easy to make, and infinitely customizable.',
            ingredients: [
                '1 block firm tofu, drained and pressed',
                '1 tablespoon olive oil',
                '1/4 cup diced onion',
                '1/4 cup diced bell pepper',
                '2 cloves garlic, minced',
                '1/2 teaspoon turmeric',
                '1/4 teaspoon cumin',
                'Salt and pepper to taste',
                '2 tablespoons nutritional yeast (optional)',
                'Fresh herbs for garnish (optional)'
            ],
            instructions: [
                'Crumble the tofu into bite-sized pieces.',
                'Heat olive oil in a large skillet over medium heat. Add onion and bell pepper, sauté until softened.',
                'Add garlic and cook for another minute.',
                'Add crumbled tofu, turmeric, cumin, salt, and pepper. Cook for 5-7 minutes, stirring occasionally.',
                'Stir in nutritional yeast if using.',
                'Garnish with fresh herbs and serve hot.'
            ],
            benefits: [
                'High in protein and low in calories',
                'Customizable with various vegetables for added nutrients',
                'Rich in calcium and iron from tofu',
                'Turmeric provides anti-inflammatory benefits'
            ]
        },
        'overnight-oats': {
            title: 'Berry Bliss Overnight Oats',
            image: 'photo19.png',
            description: 'A delicious, no-cook breakfast that you can prepare the night before for a hassle-free morning.',
            ingredients: [
                '1/2 cup rolled oats',
                '1/2 cup plant-based milk',
                '1/4 cup mixed berries (fresh or frozen)',
                '1 tablespoon chia seeds',
                '1 tablespoon maple syrup',
                '1/4 teaspoon vanilla extract',
                'Pinch of salt'
            ],
            instructions: [
                'In a jar or container, combine oats, plant-based milk, chia seeds, maple syrup, vanilla extract, and salt.',
                'Stir well to combine all ingredients.',
                'Add mixed berries on top.',
                'Cover and refrigerate overnight or for at least 4 hours.',
                'In the morning, stir the oats and add more milk if desired.',
                'Top with additional fresh berries and enjoy!'
            ],
            benefits: [
                'High in fiber for digestive health',
                'Chia seeds provide omega-3 fatty acids',
                'Berries are rich in antioxidants',
                'Can be prepared in advance for busy mornings'
            ]
        },
        'buddha-bowl': {
            title: 'Colorful Vegan Buddha Bowl',
            image: 'photo20.png',
            description: 'A nourishing bowl packed with vibrant veggies, plant-based protein, and a delicious tahini dressing.',
            ingredients: [
                '1 cup cooked quinoa',
                '1 cup roasted sweet potato cubes',
                '1 cup chickpeas, drained and rinsed',
                '1 cup mixed salad greens',
                '1/2 avocado, sliced',
                '1/4 cup shredded red cabbage',
                '2 tablespoons pumpkin seeds',
                'For the dressing:',
                '2 tablespoons tahini',
                '1 tablespoon lemon juice',
                '1 tablespoon maple syrup',
                'Water to thin'
            ],
            instructions: [
                'Arrange quinoa in the base of your bowl.',
                'Add roasted sweet potato, chickpeas, mixed greens, avocado, and red cabbage on top of the quinoa.',
                'Sprinkle pumpkin seeds over the bowl.',
                'In a small bowl, whisk together tahini, lemon juice, and maple syrup. Add water as needed to reach desired consistency.',
                'Drizzle the dressing over the buddha bowl.',
                'Enjoy your colorful and nutritious meal!'
            ],
            benefits: [
                'Balanced meal with protein, complex carbs, and healthy fats',
                'Rich in fiber for digestive health',
                'Variety of vegetables provides a range of vitamins and minerals',
                'Customizable to personal preferences and seasonal produce'
            ]
        },
        'chickpea-sandwich': {
            title: 'Chickpea \'Tuna\' Salad Sandwich',
            image: 'photo21.png',
            description: 'A plant-based twist on the classic tuna salad sandwich that\'s creamy, flavorful, and satisfying.',
            ingredients: [
                '1 can chickpeas, drained and rinsed',
                '1/4 cup vegan mayonnaise',
                '1 celery stalk, finely chopped',
                '2 tablespoons red onion, finely chopped',
                '1 tablespoon capers, drained',
                '1 tablespoon lemon juice',
                '1/2 teaspoon dijon mustard',
                'Salt and pepper to taste',
                '4 slices of bread',
                'Lettuce leaves',
                'Sliced tomato'
            ],
            instructions: [
                'In a large bowl, mash the chickpeas with a fork, leaving some chunks for texture.',
                'Add vegan mayonnaise, celery, red onion, capers, lemon juice, and dijon mustard. Mix well.',
                'Season with salt and pepper to taste.',
                'Toast the bread slices if desired.',
                'Assemble the sandwich by spreading the chickpea mixture on one slice of bread, topping with lettuce and tomato, and covering with another slice of bread.',
                'Cut in half and serve immediately.'
            ],
            benefits: [
                'High in protein and fiber from chickpeas',
                'Lower in mercury compared to traditional tuna salad',
                'Rich in vitamins and minerals from fresh vegetables',
                'Easily customizable with different herbs and spices'
            ]
        },
        'lentil-soup': {
            title: 'Hearty Lentil Soup',
            image: 'photo22.png',
            description: 'A comforting and filling soup that\'s perfect for chilly days and packed with plant-based protein.',
            ingredients: [
                '1 cup dried green or brown lentils, rinsed',
                '1 onion, diced',
                '2 carrots, diced',
                '2 celery stalks, diced',
                '3 cloves garlic, minced',
                '1 can diced tomatoes',
                '6 cups vegetable broth',
                '1 teaspoon cumin',
                '1 teaspoon paprika',
                '1/2 teaspoon thyme',
                'Salt and pepper to taste',
                '2 cups chopped spinach',
                'Lemon wedges for serving'
            ],
            instructions: [
                'In a large pot, sauté onion, carrots, and celery in a bit of water or oil until softened.',
                'Add garlic and cook for another minute.',
                'Add lentils, diced tomatoes, vegetable broth, cumin, paprika, and thyme. Bring to a boil.',
                'Reduce heat and simmer for about 25-30 minutes, or until lentils are tender.',
                'Season with salt and pepper to taste.',
                'Stir in cho pped spinach and cook until wilted.',
                'Serve hot with a squeeze of lemon juice.'
            ],
            benefits: [
                'High in protein and fiber from lentils',
                'Rich in vitamins and minerals from various vegetables',
                'Cumin and paprika provide antioxidants',
                'Warming and comforting, perfect for cold days'
            ]
        },
        'vegan-lasagna': {
            title: 'Hearty Vegan Lasagna',
            image: 'photo23.png',
            description: 'A comforting and satisfying plant-based version of the classic Italian dish.',
            ingredients: [
                '1 package lasagna noodles',
                '1 block firm tofu, crumbled',
                '1 can crushed tomatoes',
                '1 cup cashews, soaked and blended',
                '1 cup spinach, chopped',
                '1 zucchini, sliced',
                '1 cup mushrooms, sliced',
                '1/4 cup nutritional yeast',
                '2 cloves garlic, minced',
                '1 tsp dried basil',
                '1 tsp dried oregano',
                'Salt and pepper to taste'
            ],
            instructions: [
                'Preheat oven to 375°F (190°C).',
                'Cook lasagna noodles according to package instructions.',
                'In a bowl, mix crumbled tofu with nutritional yeast, garlic, basil, oregano, salt, and pepper.',
                'In a baking dish, layer noodles, tofu mixture, vegetables, crushed tomatoes, and cashew cream.',
                'Repeat layers until all ingredients are used.',
                'Cover with foil and bake for 25 minutes.',
                'Remove foil and bake for an additional 15 minutes until top is golden.',
                'Let cool for 10 minutes before serving.'
            ],
            benefits: [
                'High in protein from tofu and cashews',
                'Rich in vitamins and minerals from vegetables',
                'Dairy-free alternative to traditional lasagna',
                'Can be made gluten-free with alternative noodles'
            ]
        },
        'mushroom-risotto': {
            title: 'Creamy Mushroom Risotto',
            image: 'photo24.png',
            description: 'A rich and flavorful risotto that\'s perfect for a cozy dinner.',
            ingredients: [
                '1 1/2 cups arborio rice',
                '4 cups vegetable broth',
                '2 cups mixed mushrooms, sliced',
                '1 onion, finely chopped',
                '2 cloves garlic, minced',
                '1/2 cup white wine (optional)',
                '2 tbsp olive oil',
                '1/4 cup nutritional yeast',
                '1 tbsp fresh thyme',
                'Salt and pepper to taste'
            ],
            instructions: [
                'In a large pan, sauté onions and garlic in olive oil until translucent.',
                'Add mushrooms and cook until they release their moisture.',
                'Add arborio rice and stir to coat with oil.',
                'If using, add white wine and cook until absorbed.',
                'Gradually add vegetable broth, 1/2 cup at a time, stirring constantly until absorbed.',
                'Continue adding broth and stirring until rice is creamy and al dente.',
                'Stir in nutritional yeast, thyme, salt, and pepper.',
                'Serve hot, garnished with additional thyme if desired.'
            ],
            benefits: [
                'Rich in B-vitamins from nutritional yeast',
                'Mushrooms provide immune-boosting properties',
                'Arborio rice offers a good source of energy',
                'Can be customized with different mushroom varieties'
            ]
        },
        'vegetable-curry': {
            title: 'Spicy Vegetable Curry',
            image: 'photo25.png',
            description: 'A warming and aromatic curry filled with colorful vegetables.',
            ingredients: [
                '2 cups mixed vegetables (carrots, bell peppers, cauliflower, peas)',
                '1 can coconut milk',
                '1 can diced tomatoes',
                '1 onion, chopped',
                '2 cloves garlic, minced',
                '1 tbsp ginger, grated',
                '2 tbsp curry powder',
                '1 tsp turmeric',
                '1 tsp cumin',
                '1 tbsp coconut oil',
                'Salt to taste',
                'Fresh cilantro for garnish'
            ],
            instructions: [
                'Heat coconut oil in a large pot. Add onion, garlic, and ginger, sauté until fragrant.',
                'Add curry powder, turmeric, and cumin. Stir for 1 minute.',
                'Add mixed vegetables and stir to coat with spices.',
                'Pour in coconut milk and diced tomatoes. Bring to a simmer.',
                'Cook for 15-20 minutes until vegetables are tender.',
                'Season with salt to taste.',
                'Serve hot over rice, garnished with fresh cilantro.'
            ],
            benefits: [
                'Rich in antioxidants from various spices',
                'High in fiber from mixed vegetables',
                'Coconut milk provides healthy fats',
                'Turmeric offers anti-inflammatory properties'
            ]
        },
        'homemade-hummus': {
            title: 'Creamy Homemade Hummus',
            image: 'photo26.png',
            description: 'A versatile and protein-rich dip perfect for snacking.',
            ingredients: [
                '1 can chickpeas, drained and rinsed',
                '1/4 cup tahini',
                '1/4 cup lemon juice',
                '2 cloves garlic',
                '2 tbsp olive oil',
                '1/4 tsp cumin',
                'Salt to taste',
                'Water as needed',
                'Paprika for garnish'
            ],
            instructions: [
                'In a food processor, combine chickpeas, tahini, lemon juice, garlic, olive oil, cumin, and salt.',
                'Process until smooth, adding water as needed to reach desired consistency.',
                'Taste and adjust seasonings as needed.',
                'Transfer to a serving bowl, drizzle with olive oil, and sprinkle with paprika.',
                'Serve with vegetable sticks or pita bread.'
            ],
            benefits: [
                'High in protein and fiber from chickpeas',
                'Rich in healthy fats from tahini and olive oil',
                'Garlic provides immune-boosting properties',
                'Can be customized with various flavors and spices'
            ]
        },
        'energy-balls': {
            title: 'No-Bake Energy Balls',
            image: 'photo27.png',
            description: 'Nutrient-dense bites for a quick energy boost.',
            ingredients: [
                '1 cup rolled oats',
                '1/2 cup peanut butter',
                '1/3 cup maple syrup',
                '1/4 cup ground flaxseed',
                '1/4 cup vegan chocolate chips',
                '1 tsp vanilla extract',
                'Pinch of salt'
            ],
            instructions: [
                'In a large bowl, mix all ingredients until well combined.',
                'Cover and chill in the refrigerator for 30 minutes.',
                'Roll the mixture into small balls, about 1 inch in diameter.',
                'Store in an airtight container in the refrigerator for up to a week.'
            ],
            benefits: [
                'Quick and easy source of energy',
                'Rich in fiber and omega-3 fatty acids from flaxseed',
                'Protein from peanut butter helps keep you full',
                'No baking required, perfect for hot days'
            ]
        },
        'kale-chips': {
            title: 'Crispy Kale Chips',
            image: 'photo28.png',
            description: 'A healthy alternative to potato chips that\'s easy to make.',
            ingredients: [
                '1 bunch kale, washed and thoroughly dried',
                '1 tbsp olive oil',
                '1/4 tsp salt',
                'Optional seasonings: nutritional yeast, garlic powder, or chili powder'
            ],
            instructions: [
                'Preheat oven to 300°F (150°C).',
                'Remove kale leaves from stems and tear into bite-sized pieces.',
                'In a large bowl, massage kale with olive oil and salt until evenly coated.',
                'Spread kale in a single layer on a baking sheet.',
                'Bake for 10-15 minutes, or until crispy but not browned.',
                'Let cool before serving. Add additional seasonings if desired.'
            ],
            benefits: [
                'Low in calories and high in nutrients',
                'Kale is rich in vitamins A, K, and C',
                'Provides a satisfying crunch without unhealthy fats',
                'Can be seasoned in various ways for different flavors'
            ]
        },
        'quinoa-salad': {
            title: 'Mediterranean Quinoa Salad',
            image: 'photo29.png',
            description: 'A refreshing and protein-packed salad with Mediterranean flavors.',
            ingredients: [
                '1 cup quinoa, cooked and cooled',
                '1 cucumber, diced',
                '1 cup cherry tomatoes, halved',
                '1/4 cup red onion, finely chopped',
                '1/4 cup kalamata olives, sliced',
                '1/4 cup fresh parsley, chopped',
                '2 tbsp lemon juice',
                '2 tbsp olive oil',
                '1 tsp dried oregano',
                'Salt and pepper to taste'
            ],
            instructions: [
                'In a large bowl, combine cooled quinoa, cucumber, tomatoes, red onion, olives, and parsley.',
                'In a small bowl, whisk together lemon juice, olive oil, oregano, salt, and pepper.',
                'Pour the dressing over the salad and toss to combine.',
                'Chill for at least 30 minutes before serving to allow flavors to meld.',
                'Taste and adjust seasonings as needed before serving.'
            ],
            benefits: [
                'High in protein and fiber from quinoa',
                'Rich in vitamins and minerals from fresh vegetables',
                'Healthy fats from olive oil and olives',
                'Can be served as a main dish or side salad'
            ]
        },
        'asian-slaw': {
            title: 'Crunchy Asian Slaw',
            image: 'photo30.png',
            description: 'A vibrant and tangy slaw with an Asian-inspired dressing.',
            ingredients: [
                '4 cups shredded cabbage (mix of purple and green)',
                '1 carrot, julienned',
                '1 red bell pepper, thinly sliced',
                '2 green onions, chopped',
                '1/4 cup cilantro, chopped',
                '1/4 cup peanuts, chopped',
                'For the dressing:',
                '2 tbsp rice vinegar',
                '1 tbsp soy sauce',
                '1 tbsp sesame oil',
                '1 tsp maple syrup',
                '1 tsp grated ginger'
            ],
            instructions: [
                'In a large bowl, combine cabbage, carrot, bell pepper, green onions, and cilantro.',
                'In a small bowl, whisk together all dressing ingredients.',
                'Pour the dressing over the vegetables and toss to combine.',
                'Let the slaw sit for at least 10 minutes to allow flavors to meld.',
                'Before serving, toss again and top with chopped peanuts.'
            ],
            benefits: [
                'High in fiber and vitamin C from cabbage and bell peppers',
                'Ginger provides anti-inflammatory properties',
                'Low in calories and high in nutrients',
                'Crunchy texture satisfies without unhealthy fats'
            ]
        },
        'roasted-veggie-salad': {
            title: 'Warm Roasted Vegetable Salad',
            image: 'photo31.png',
            description: 'A hearty salad featuring a medley of roasted vegetables.',
            ingredients: [
                '2 cups mixed vegetables (sweet potato, Brussels sprouts, bell peppers)',
                '1 can chickpeas, drained and rinsed',
                '2 tbsp olive oil',
                '1 tsp dried thyme',
                '1 tsp dried rosemary',
                'Salt and pepper to taste',
                '2 cups mixed salad greens',
                '1/4 cup pumpkin seeds',
                'For the dressing:',
                '2 tbsp balsamic vinegar',
                '1 tbsp Dijon mustard',
                '1 tbsp maple syrup'
            ],
            instructions: [
                'Preheat oven to 400°F (200°C).',
                'Toss vegetables and chickpeas with olive oil, thyme, rosemary, salt, and pepper.',
                'Spread on a baking sheet and roast for 25-30 minutes, stirring halfway through.',
                'In a small bowl, whisk together balsamic vinegar, Dijon mustard, and maple syrup.',
                'In a large bowl, combine roasted vegetables, chickpeas, and salad greens.',
                'Drizzle with dressing and toss to combine.',
                'Top with pumpkin seeds before serving.'
            ],
            benefits: [
                'Rich in fiber and plant-based protein from vegetables and chickpeas',
                'Roasting enhances flavors and nutrient absorption',
                'Variety of vegetables provides a range of vitamins and minerals',
                'Warm salad is comforting in cooler weather'
            ]
        },
        'green-smoothie': {
            title: 'Energizing Green Smoothie',
            image: 'photo32.png',
            description: 'A nutrient-packed smoothie to start your day right.',
            ingredients: [
                '2 cups spinach',
                '1 banana',
                '1 cup plant-based milk',
                '1 tbsp almond butter',
                '1 tbsp chia seeds',
                '1/2 tsp spirulina powder (optional)',
                'Ice cubes'
            ],
            instructions: [
                'Add all ingredients to a blender.',
                'Blend on high speed until smooth and creamy.',
                'Add more plant-based milk if needed to reach desired consistency.',
                'Pour into a glass and enjoy immediately.'
            ],
            benefits: [
                'High in vitamins and minerals from spinach',
                'Banana provides natural sweetness and potassium',
                'Chia seeds add omega-3 fatty acids and fiber',
                'Spirulina is a nutrient-dense superfood'
            ]
        },
        'matcha-latte': {
            title: 'Vegan Iced Matcha Latte',
            image: 'photo33.png',
            description: 'A refreshing and antioxidant-rich drink for any time of day.',
            ingredients: [
                '1 tsp matcha green tea powder',
                '1 cup plant-based milk',
                '1 tbsp maple syrup (or to taste)',
                'Ice cubes'
            ],
            instructions: [
                'In a bowl, whisk matcha powder with a small amount of hot water until smooth.',
                'In a glass, combine the matcha mixture with plant-based milk and maple syrup.',
                'Stir well to combine.',
                'Add ice cubes and enjoy!'
            ],
            benefits: [
                'Matcha is rich in antioxidants',
                'Contains L-theanine for calm alertness',
                'Can be customized with different plant-based milks',
                'Lower in calories than many coffee shop drinks'
            ]
        },
        'infused-water': {
            title: 'Refreshing Fruit-Infused Water',
            image: 'photo34.png',
            description: 'A simple and delicious way to stay hydrated.',
            ingredients: [
                '4 cups water',
                '1 cup mixed fruits (e.g., strawberries, cucumber, lemon)',
                'Fresh herbs (e.g., mint or basil)',
                'Ice cubes'
            ],
            instructions: [
                'Wash and slice the fruits.',
                'Add fruits and herbs to a large pitcher.',
                'Fill the pitcher with water and ice.',
                'Let infuse in the refrigerator for at least 1 hour before serving.',
                'Refill with water 2-3 times before replacing fruits.'
            ],
            benefits: [
                'Encourages increased water intake',
                'Adds natural flavor without added sugars',
                'Can be customized with seasonal fruits',
                'Provides small amounts of vitamins from the fruits'
            ]
        },
        'avocado-mousse': {
            title: 'Chocolate Avocado Mousse',
            image: 'photo35.png',
            description: 'A rich and creamy dessert that\'s surprisingly healthy.',
            ingredients: [
                '2 ripe avocados',
                '1/4 cup cocoa powder',
                '1/4 cup maple syrup',
                '1/4 cup plant-based milk',
                '1 tsp vanilla extract',
                'Pinch of salt'
            ],
            instructions: [
                'In a food processor, blend all ingredients until smooth and creamy.',
                'Taste and adjust sweetness if needed.',
                'Chill in the refrigerator for at least 30 minutes before serving.',
                'Serve in small bowls, optionally topped with fresh berries or coconut whipped cream.'
            ],
            benefits: [
                'Rich in healthy fats from avocados',
                'Lower in sugar than traditional chocolate mousse',
                'Cocoa powder provides antioxidants',
                'Creamy texture without dairy'
            ]
        },
        'apple-crisp': {
            title: 'Warm Vegan Apple Crisp',
            image: 'photo36.png',
            description: 'A comforting dessert perfect for cooler evenings.',
            ingredients: [
                '4 apples, peeled and sliced',
                '1 tbsp lemon juice',
                '1/4 cup maple syrup',
                '1 tsp cinnamon',
                'For the topping:',
                '1 cup rolled oats',
                '1/2 cup almond flour',
                '1/4 cup coconut oil, melted',
                '1/4 cup maple syrup',
                '1/2 tsp cinnamon'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C).',
                'In a bowl, toss apples with lemon juice, 1/4 cup maple syrup, and 1 tsp cinnamon.',
                'In another bowl, mix oats, almond flour, melted coconut oil, 1/4 cup maple syrup, and 1/2 tsp cinnamon.',
                'Place apple mixture in a baking dish and top with oat mixture.',
                'Bake for 35-40 minutes until top is golden and apples are tender.',
                'Let cool slightly before serving.'
            ],
            benefits: [
                'Apples are rich in fiber and antioxidants',
                'Oats provide additional fiber and nutrients',
                'Lower in sugar than traditional apple crisp recipes',
                'Can be enjoyed warm or cold'
            ]
        },
        'nice-cream': {
            title: 'Banana Nice Cream',
            image: 'photo37.png',
            description: 'A healthy alternative to ice cream that\'s easy to make.',
            ingredients: [
                '3 ripe bananas, frozen and sliced',
                '1/4 cup plant-based milk',
                '1 tsp vanilla extract',
                'Optional add-ins: cocoa powder, peanut butter, or frozen berries'
            ],
            instructions: [
                'Add frozen banana slices, plant-based milk, and vanilla to a food processor.',
                'Blend until smooth and creamy, scraping down the sides as needed.',
                'If using, add optional ingredients and blend again.',
                'Serve immediately for soft-serve consistency, or freeze for 1-2 hours for a firmer texture.',
                'Scoop and enjoy!'
            ],
            benefits: [
                'Made with whole fruits, no added sugars',
                'Rich in potassium from bananas',
                'Can be customized with various flavors',
                'Satisfies ice cream cravings with a healthier option'
            ]
        }
    };

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const recipe = recipes[this.dataset.recipe];
            document.getElementById('modal-title').textContent = recipe.title;
            document.getElementById('modal-image').src = recipe.image;
            document.getElementById('modal-image').alt = recipe.title;
            document.getElementById('modal-description').textContent = recipe.description;
            
            const ingredientsList = document.getElementById('modal-ingredients');
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });

            const instructionsList = document.getElementById('modal-instructions');
            instructionsList.innerHTML = '';
            recipe.instructions.forEach(instruction => {
                const li = document.createElement('li');
                li.textContent = instruction;
                instructionsList.appendChild(li);
            });

            const benefitsList = document.getElementById('modal-benefits');
            benefitsList.innerHTML = '';
            recipe.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                benefitsList.appendChild(li);
            });

            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});