# 12\*\* Seasonality App: Back-End Documentation

This repository holds the back-end documentation for _Seasonal_ by Team 12\*\* (Twelve Exponential). _Seasonal_ is our final project with the [School of Code](https://github.com/SchoolOfCode). In an agile team, over the course of a month, we researched, designed, and built the first iteration of our application, and are currently working on implementing stretch goals.

The core aim of _Seasonal_ is to make it easier and more accessible for users to find out what food is in season in the UK during any given month. Users will be immediately provided with foods currently in season on the landing page, and then can navigate to more food currently in season, or can perform searches for different months, items and recipes to see when they're in season, as well as information on cooking, growing, and ecological impact.

For more details on what we intend on doing next with _Seasonal_, please refer to our project roadmap!

The front-end for this project can be [found in this linked repository](https://github.com/SchoolOfCode/final-project_front-end-12).

Our team consists of:

- Andy Johnson [@multi-vit](https://github.com/multi-vit)
- Fiona Kitchen [@fkit00](https://github.com/fkit00)
- Guiji Darar [@Gdarar](https://github.com/Gdarar)
- Madison Lowe [@madisonlowe](https://github.com/madisonlowe)
- Matthew Miller [@codedresser](https://github.com/codedresser)
- Nathan Lee [@N-LEE-94](https://github.com/N-LEE-94)

If you have any questions, feel free to get in touch! Thanks!

## Installation

To install this repository on your local machine, fork or clone the repository from GitHub. To do this, you can run:

```
git clone https://github.com/SchoolOfCode/final-project_back-end-12.git
```

Or to fork, you can press the 'fork' button on this page, and follow the on-screen instructions.

Once you have access to this repository on your local machine, change directory into the right folder:

```
cd final-project_back-end-12
```

Once you are inside this directory, run:

```
npm i
```

This will install all the necessary dependencies.

We are using ES6 import and export syntax.

## Setting Up Your Environment

After you have installed the project on your local machine, you will want to set up the necessary environment variables to connect the project to the database.

To do this, create a `.env` file at the root level of the folder.

Inside the root level, where 'loremipsum' is a variable representing your own credentials, save the following database credentials inside of the `.env` file:

```
PGURI=loremipsum
```

## Scripts and Commands

To run the back-end on localhost, run:

```
npm start
```

To run our testing suites, run:

```
npm test
```

To reset the database, run:

```
npm run reset
```

For other useful commands and scripts, please refer to `scripts` in the `package.json` file.

## Back-End Structure

We are currently using a relational PostgreSQL database hosted on Heroku, and our back-end is built using Node.js and Express. For testing the back-end, we are currently using Jest and Supertest.

### Directory Structure

In the back-end repository, our key directories and files are structured as follows:

```
-final-project_back-end-12
  - db
    - index.js
    - data.js
    - scripts
      - createTable.js
      - deleteTable.js
      - populateTable.js
  - helper_scripts
    - randomGet.js
    - randomGet.test.js
    - testingdata.js
  - models
    - index.js
    - index.test.js
  - routes
    - index.js
  - app.js
  - app.test.js
  - package.json
  - .env
  - .gitignore
  - README.md
```

## Data Shape

### Produce Table

For the produce table, our data on the back-end is provided to the database as an array of objects.

Each object represents one food entry, and is formatted as thus:

```
{
foodName: string,
imageURL: string,
description: string,
family: string,
foodType: string,
usedAs: string,
month: string[],
allergens: string,
}
```

An example entry:

```
{
name: "Aubergine",
imageURL: "https://auberginepic.com",
description: "This is a description of an aubergine. This will be a longer piece of text. It will describe the following things: what the item is, what value it has nutritionally or if there are any allergens, what to make with it, and how to grow it.",
family: "Nightshade",
foodType: "Berry",
usedAs: "Vegetable",
month: ["January", "February"],
allergens: "None",
}
```

### Data Content Guides

For a description of what each key-value pair inside each data object entry should contain, please see below:

- `name`: The name of the food item.
- `imageURL`: A URL for the image or graphic which represents the item.
- `description`: A description - a few short sentences, according to our description content guide - of the item.
- `family`: The actual family of the item, eg. nightshade, mollusc.
- `usedAs`: How a food is used, eg. tomato and aubergine would be “Vegetable” even though they're technically fruits.
- `month`: The months that the item is in season for.
- `allergens`: Anything that is an allergen in the item.

As a content guide for how the 'description' segment of each object in our `produce` data should be organised, please see the below:

<blockquote>

**_The first part should be a short description of the item._** Aubergines are a dark purple berry - though they’re functionally used as a vegetable - which are at their cheapest and highest quality in the shops from July to September.

**_The second part should mention any allergens or notable nutritional info._** They’re a good source of fibre, and are also low GI, so won’t raise your blood glucose levels. No allergens to aubergine are currently known; they are part of the nightshade family.

**_The third part should mention, broadly, how to cook with it._** You can grill, fry, griddle, barbecue and bake aubergines. They’re often added to dishes like curries and casseroles. Famous dishes using aubergine include ratatouille and moussaka, and they feature widely in Mediterranean cuisine. They have a mellow flavour that combines well with other ingredients.

**_The fourth part should briefly outline ideal growing conditions._** When grown, they like sunny and warm weather, and do best when grown in a greenhouse in the UK climate.

</blockquote>

If any of this information is not available, feel free to substitute as appropriate with more information in one of the other categories, how to pick good examples of the food, or else ommit the section entirely. It's up to personal discretion, keeping in mind at all times our goal of making information readable and accessible to users, without passing prescriptive health advice or judgements.

## Roadmap

The stretch goal that we're currently working on is to integrate the recipe arm of our product design. With this stretch goal, users should be able to locate and search for seasonal recipes which match up to different foods in season.

Following meeting this stretch goal, our next goal will be to integrate a maps API, to allow users to search for local farms and growers near them.

## Notes for Team Members

Please refer to Trello for all upcoming tickets related to this repository.

For any needed credentials, contact a member of the team with server and database access.
