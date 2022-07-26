# 12\*\* Seasonality App: Back-End Documentation

This repository holds the back-end documentation for Team 12\*\* (Twelve Exponential) and their 'Seasonality' final project at the School of Code. TODO: INSERT AUTHOR DETAILS AND PROJECT DESCRIPTION HERE, AS WELL AS LINK TO FRONT-END.

This documentation file is currently intended to primarily act as a reference point for members of the 12\*\* team, when interacting with the back-end half of the project.

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

Referring to the `package.json` details, you will notice the following dependencies: dotenv, nodemon, cors, express, pg. TODO: FORMAT AND WORD THIS BETTER.

You will also notice that `type` is set to `module` and that we are using ES6 import and export syntax.

## Setting Up Your Environment

After you have installed the project on your local machine, you will want to set up the necessary environment variables to connect the project to the database.

To do this, create a `.env` file at the root level of the folder.

Inside the root level, where 'loremipsum' is a variable representing your own credentials, save the following database credentials inside of the `.env` file:

```
PGURI=loremipsum
```

TODO: REWORD SECTION ON DATABASE. For our database, we are linked to Heroku. Nathan is the Data-Lord and has main access to the database and keys on his account for this project.

## Back-End Structure

Our server and our database are both hosted on Heroku, but on different instances.

\*\*Server

TODO: WRITE UP ABOUT THESE ONCE THEY'RE FIXED.

## File Structure

In the back-end repository, our files are structured as follows:

- db
  - index.js
    - scripts
      - createTable.js (the shape of our database can be found here for reference, creates produce table on database)
      - deleteTable.js (deletes produce table from database)
      - populateTable.js (populates produce table on database)
      - dummyData.js (test data, used to make sure our scripts and database are working)
      - data.js (all data currently properly capitalised, so remember to make to lower or upper case when querying or displaying)
- routes
- app.js
- index.js
- .env
- .gitignore

## Data Shape

### Produce Table

For the produce table, our data on the back-end is provided to the database as an array of objects. Each object represents one food entry, and is formatted as thus:

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
name: "aubergine",
imageURL: "https://auberginepic.com"
description: "This is a description of an aubergine. This will be a longer piece of text. It will describe the following things: what the item is, what value it has nutritionally or if there are any allergens, what to make with it, and how to grow it."
family: "Nightshade"
foodType: "Berry"
usedAs: "Vegetable"
month: ["January", "February"]
allergens: "None"
}
```

A more verbose description of what each key-value pair should contain:

```
{
name: The name of the food item,
imageURL: A URL for the image or graphic which represents the item,
description: A description - a few short paragraphs maximum - of the item,
family: The actual family of the item, eg. nightshade, mollusc,
usedAs: How a food is used, eg. tomato and aubergine would be “Vegetable” even though they're fruits,
month: The months it’s in season for,
allergens: Anything that is an allergen in the item. This value should come from one of the legally classified 14
}
```

### Produce Table: 'Description' Example

As a content-guide for how the 'description' segment of each object in our `produce` data should be organised, please see the below:

<blockquote>

**_The first paragraph should be a short description of the item._** Aubergines are a dark purple berry - though they’re functionally used as a vegetable - which are at their cheapest and highest quality in the shops from July to September.

**_The second paragraph should mention any allergens or notable nutritional info._** They’re a good source of fibre, and are also low GI, so won’t raise your blood glucose levels. No allergens to aubergine are currently known; they are part of the nightshade family.

**_The third paragraph should mention, broadly, how to cook with it._** You can grill, fry, griddle, barbecue and bake aubergines. They’re often added to dishes like curries and casseroles. Famous dishes using aubergine include ratatouille and moussaka, and they feature widely in Mediterranean cuisine. They have a mellow flavour that combines well with other ingredients.

**_The fourth paragraph should briefly outline ideal growing conditions._** When grown, they like sunny and warm weather, and do best when grown in a greenhouse in the UK climate.

</blockquote>

## Routes

Current routes:

- "/"

## Models

Current models:

- getAll

## Other

Please refer to Trello for all upcoming tickets related to this repository.

For any needed credentials, TODO: add where to find credentials once we've sorted them out.

# NOTES

Our server and our database are both deployed on Heroku, but on different instances.

TODO: Update when database and server are fixed.
