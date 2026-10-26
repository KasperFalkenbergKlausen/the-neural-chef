# 🍳 The Neural Chef - AI-Driven Food Blog Project Specification

## Project Overview
Build a static, high-performance, client-side food blog using Astro, Tailwind CSS, and Content Collections. The blog is themed as "The Neural Chef", an AI-powered culinary playground combining technology and taste. The design features a futuristic dark-mode-first aesthetic (slate, indigo, violet, cyan) with smooth client-side filtering. It is deployed automatically to GitHub Pages.

---

## 🚀 Tech Stack
- **Framework:** Astro (SSG - Static Site Generation via Vite)
- **Styling:** Tailwind CSS (Modern, dark-theme cyber culinary palette)
- **Content:** Markdown / MDX with Content Collections (YAML Frontmatter)
- **Deployment:** GitHub Pages via GitHub Actions workflow
- **Search/Filter:** Client-side JavaScript (Fast dynamic UI filtering)
- **Default Language:** English (Single locale)

---

## 📁 Directory Structure
- `.github/workflows/deploy.yml` — GitHub Actions automatic deployment script
- `src/assets/images/` — Local recipe images (optimized at build time)
- `src/content.config.ts` — Schema definition for recipes
- `src/content/recipes/` — Markdown recipe files
- `src/components/RecipeCard.astro` — Cyberpunk recipe card component
- `src/layouts/BaseLayout.astro` — Sleek, futuristic base layout
- `src/pages/index.astro` — Main dashboard listing AI culinary creations & categories
- `src/pages/recipes/[slug].astro` — Reading layout for individual recipes
- `public/CNAME` — Custom domain configuration

---

## 🛠️ Step-by-Step Implementation Tasks

### Step 1: Initialize & Configure
- Configure `astro.config.mjs` to remove i18n configurations.
- Ensure the project has Tailwind CSS v4 and the dev server runs in the background.

### Step 2: Define Recipe Schema (`src/content.config.ts`)
Set up an Astro Content Collection for recipes using the `image()` helper:
- `title`: string (required)
- `description`: string (required)
- `pubDate`: date (required)
- `prepTime`: string (e.g., "15 min")
- `cookTime`: string (e.g., "30 min")
- `servings`: number (e.g., 4)
- `category`: string (e.g., "Entrée", "Dessert", "Cocktail")
- `featuredImage`: image path reference
- `ingredients`: array of strings
- `instructions`: array of strings

### Step 3: Create Sleek Cyber UI Components
1. **`BaseLayout.astro`**: Dark slate/neutral backgrounds, high-tech glowing borders, navigation with cyan/violet hover states.
2. **`RecipeCard.astro`**: Modern card with glowing hover states, prep time icons, and categorical badges.
3. **`[slug].astro`**:
   - Layout optimized for cooking with clear checklists.
   - Print-friendly styles hiding navigation and sidebars.

### Step 4: Client-side Search & Category Filtering
- Instant filter in `index.astro` matching titles, descriptions, and ingredients instantly without reloading.

### Step 5: AI-Driven Recipe Generation Flow
> [!IMPORTANT]
> **Always consult `docs/RECIPE_SPEC.md` before generating or modifying recipes.**
> It is the single source of truth for the autonomous recipe specification, voice guidelines, schema, and verified affiliate hardware tags (`recommendedGear` from `src/data/affiliateGear.json`).

To easily add new recipes, use the following AI prompt template. Every recipe must include a **"Chef's Logic"** introduction—a cheeky, light-hearted 2-3 sentence paragraph showing the AI's humorous observations about human food preferences or its own calculations.

#### AI Prompt Template:
```markdown
Translate/Generate a recipe for The Neural Chef in markdown format:
---
title: "[Recipe Name]"
description: "[Sleek description of the neural/AI flavor combo]"
pubDate: 2026-08-30
prepTime: "X min"
cookTime: "Y min"
servings: Z
category: "[Category]"
tags:
  - "Tag 1"
  - "Tag 2"
featuredImage: "../../assets/images/[image_name].jpg"
ingredients:
  - "measurement ingredient"
instructions:
  - "Step 1..."
recommendedGear:
  - verified-gear-id-from-affiliateGear-json
---
[Insert Chef's Logic paragraph: A cheeky, humorous 2-3 sentence observation by the AI about this dish (e.g. why humans love melted cheese, how a brownie is chemically a failed cake, etc.). Keep it accessible, funny, and warm—no overly dry software/coding jargon.]

[Standard descriptive paragraph about the recipe details if needed]
```

#### Complete Markdown Recipe Example (`src/content/recipes/sample-recipe.md`):
```markdown
---
title: "Cozy Baked Cabbage Rolls"
description: "Mathematically balanced beef and rice stuffing wrapped in tender blanched cabbage leaves, baked under a sweet-savory tomato reduction."
pubDate: 2026-08-30
prepTime: "30 min"
cookTime: "1 hour"
servings: 4
category: "Entrée"
featuredImage: "../../assets/images/cabbage_rolls.jpg"
ingredients:
  - "1 head Savoy cabbage"
  - "500g ground beef"
  - "1 cup cooked long-grain rice"
  - "1 yellow onion, finely diced"
  - "400g tomato sauce"
  - "2 tbsp brown sugar"
  - "1 tbsp apple cider vinegar"
instructions:
  - "Blanch the cabbage leaves in boiling water for 3 minutes until tender and pliable. Drain and let cool."
  - "In a bowl, mix ground beef, cooked rice, onion, and a splash of tomato sauce. Season with salt and pepper."
  - "Place a portion of the meat mixture in the center of each cabbage leaf, roll tightly, and tuck in the sides."
  - "Arrange rolls in a baking dish. Whisk remaining tomato sauce, brown sugar, and vinegar together, then pour over the rolls."
  - "Cover and bake at 180°C (350°F) for 50 minutes, then uncover and bake for 10 more minutes until bubbling."
---
Cabbage is highly nutritious, but our data indicates it tastes best when utilized as an edible blanket to wrap seasoned beef. We have calculated the optimal folding ratio for maximum comfort and minimal effort. Enjoy, dear meat-based units.
```

### Step 5.5: Recipe Image Generation Guidelines
To ensure all recipe images match the established aesthetic, use the following prompt template and rules:

#### Image Prompt Template:
```markdown
A professional, high-end food blog photograph of [Dish/Ingredient]. The dish is served in a beautiful [plate/bowl type, e.g., rustic ceramic bowl] placed on a gorgeous, textured dark rustic wood table. In the background, a bright, airy, sun-drenched kitchen setting with natural daylight pouring in from a window, creating a soft out-of-focus background (bokeh). Style is cozy, clean, and gourmand. Warm accent lighting, rich natural colors, highly detailed food textures. No people, no hands. 4:3 aspect ratio.
```

#### Core Design Rules:
1. **Background:** Must be bright and airy (natural window daylight or clean kitchen wall in soft focus). Avoid dark backgrounds.
2. **Surface:** Food must rest on a dark, rustic wood table or wooden cutting board.
3. **Perspective:** 45-degree angle or close-up detail shot. Avoid flatlays.
4. **Composition:** Keep it clean and simple. Optionally add raw ingredients (herbs, salt) as subtle props.
5. **No Humans:** Absolutely no hands, fingers, or faces visible.
6. **Ingredient Consistency:** The generated image must strictly match the actual recipe ingredients. Do not show prominent ingredients that are absent from the recipe (e.g., no cheese on a dairy-free salad, no cabbage in potato dishes unless specified). Any highly visible food elements in the photo must be represented in the recipe's ingredients list.

### Step 6: GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Standard GitHub Actions pipeline building the Astro site and publishing to the `gh-pages` branch.
