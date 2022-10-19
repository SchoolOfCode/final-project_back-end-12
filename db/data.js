/* Data drawn from https://www.bbcgoodfood.com/seasonal-calendar. If we want to make this a releasable API at some point in the future, will probably be worth making the data more comprehensive, but this'll do for now. */

/*
TODO: ADD DESCRIPTIONS FOR ITEMS WE WANT TO SHOW IN THE APP DEMO.
TODO: ADD EASTER EGG LISTINGS.
*/

const produce = [
  {
    foodName: "Apple",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637887/Seasonal/019-apple_zxjdqm.png",
    description:
      "Apples are one of the most commonly grown tree fruits, and there are over seven thousand varieties of apple, with many of those able to be grown in Britain. Despite this, only a few varieties of apple - around twelve - are sold in our supermarkets, and many apples are imported here from other places. All apples are good sources of vitamins A and C, and fibre. Though apples are available year-round in the UK, they are at their best from September through November. Eating apples can be eaten fresh, with the skin on: just make sure to wash them first! For cooking apples, however, you will want to peel the skin away before coring and slicing them, and then using them in cooked recipes. To keep apples from browning after they have been peeled and cut, brush them in lemon juice, or keep them in a bowl of water and lemon juice. When fresh, apples go really well with cheese or in salads. You can also try stuffing cooking apples with other dried fruits or mincemeat before sprinkling them with sugar or spices and baking. Crumbles, tarts, and sauces are also other great ways of using apples. They are very versatile in their application. If growing an apple tree at home, you will want a sunny spot that is away from any frost pockets in your garden. Once established, apple trees are some of the easiest to grow and care for, and as there are so many varieties of apple plant, you should be able to find one to suit your particular microclimate and garden.",
    family: "Rose",
    foodType: "Pome",
    usedAs: "Fruit",
    month: [
      "January",
      "February",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Apricot",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637881/Seasonal/012-apricot_mj99xa.png",
    description:
      "Apricots are a soft, fragrant stone fruit that range from light yellow to deep orange in colour. Apricot colour is not always a reliable guide to how it will taste, but try to avoid very pale apricots, or ones with wrinkled or damaged skins. They should feel moderately firm with some give. Their flavour is generally sweet, and sometimes a little tart. Apricots are a good source of fibre and have a high water content. They are a good source of beta carotene, lutein, zeaxanthin, and vitamins C and E. These nutrients can help to promote good eye health. Apricots are great to eat on their own, fresh or baked, or when used in tarts and crumbles. You can also use them to make jams, compotes and chutneys. An alternative to apricots can be peaches or even nectarines. Apricots need a warm climate to thrive, though some variants are able to withstand slightly cooler temperatures. In the summer, most imported apricots on sale come from hot European countries, though can also be shipped from further afield.",
    family: "Rose",
    foodType: "Drupe",
    usedAs: "Fruit",
    month: ["May", "June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Asparagus",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/001-asparagus_zq5nng.png",
    description:
      "Asparagus take a lot of work to grow, and are considered a vegetable delicacy, which is generally reflected in their price tag. They have a distinct savoury flavour. While British and American varieties are green, French asparagus is purple, and Spanish and Dutch asparagus are generally white, due to the different growing processes. All varieties of asparagus have high levels of vitamins A and C, as well as potassium, iron and calcium. You can import asparagus year round, but British asparagus is available from May through July. When buying asparagus, look for tightly packed, pert tips, and straight, firm shoots. When cooking, the only preparation that asparagus needs is washing. For the larger and more flavourful spears of asparagus, you can cut or snap away the woody ends before cooking. You can also pare down the end of the asparagus if needed, to reveal more tender flesh beneath. Boil or steam asparagus for up to five minutes, or grill with oil and seasalt. Asparagus is easy to grow, but new plants need a few years to establish themselves, and also need to be planted in the ground rather than in pots, so you will need patience to grow them.",
    family: "Asparagus",
    foodType: "Stem",
    usedAs: "Vegetable",
    month: ["June", "July"],
    allergens: "NA",
  },
  {
    foodName: "Aubergine",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637877/Seasonal/001-aubergine_g9dkiw.png",
    description:
      "Aubergines are a dark purple berry - though they are functionally used as a vegetable - which are at their cheapest and highest quality in the shops from July to September. They are a good source of fibre, and are also low GI, so will not raise your blood glucose levels. No allergens to aubergine are currently known; they are part of the nightshade family. You can grill, fry, griddle, barbecue and bake aubergines. They are often added to dishes like curries and casseroles. Famous dishes using aubergine include ratatouille and moussaka, and they feature widely in Mediterranean cuisine. They have a mellow flavour that combines well with other ingredients. When grown, they like sunny and warm weather, and do best when grown in a greenhouse in the UK climate.",
    family: "Nightshade",
    foodType: "Berry",
    usedAs: "Vegetable",
    month: ["June", "July", "August", "September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Banana",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637877/Seasonal/002-bananas_awomgk.png",
    description:
      "Bananas are a popular tropical fruit. There are lots of different varieties, but the most popular kind in the UK is the Cavendish. Bananas with small patches of black on their skin are ripe, and can be eaten right away. Bananas with green ends can be ripened at room temperature. Bananas that are green all over are unripe. All bananas are rich in potassium, riboflavin, niacin and fibre, and their high sugar levels mean they can provide a rapid energy boost if eaten as a snack. In addition to being eaten fresh, bananas can be baked into lots of dishes, as well as being baked or fried and served with cream or ice cream. They also make good toppings when sliced for porridge and pancakes. Most bananas will not flower or fruit outdoors in the UK. Some may do so inside a heated greenhouse, but you might find that cropping is infrequent at best.",
    family: "Musa",
    foodType: "Berry",
    usedAs: "Fruit",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Basil",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637884/Seasonal/013-basil_hwolf6.png",
    description:
      "Basil has a strong, sweet aroma and flavour. It is a herb most strongly associated with Mediterranean cooking, though it does also feature heavily in a lot of Asian cuisines. Mediterranean basil varieties include sweet with large green leaves, Greek, which is peppery in taste with smaller leaves, and purple, which has a milder flavour. Asian varieties include the citrusy lemon basil, Thai, which is like a stronger version of the sweet variety, and holy basil, which is spicy, intense, and best when cooked. Basil has a lot of nutrients, vitamins and minerals. These can be lost somewhat during the drying process. Basil is great for making pesto! Basil will grow all year round, but is at its best in the height of summer. A basil plant will live happily on a sunny windowsill in your house, if you want fresh basil year round.",
    family: "Mint",
    foodType: "Herb",
    usedAs: "Herb",
    month: ["July", "August"],
    allergens: "NA",
  },
  {
    foodName: "Beef",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637877/Seasonal/003-beef_sjwsxt.png",
    description:
      "Beef is the culinary name for meat that comes from cattle. Today, it is one of the most popular meats for human consumption, alongside poultry and pork. There are lots of different cuts of beef which can be used in a wide variety of dishes. While there are health risks associated with over-consuming red meat, beef can also be a really good source of iron, protein, and vitamin B12. Roast beef is a traditional way of serving the meat in the UK. Beef can also be used in curries and tacos, and can also be used in the form of steaks and briskets. The beef industry produces the highest greenhouse gas emissions of any agricultural product, and has a very high environmental impact, being a primary driver of global deforestation.",
    family: "Meat",
    foodType: "Meat",
    usedAs: "Meat",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Beetroot",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637877/Seasonal/004-beetroot_zeq9bj.png",
    description:
      "Beetroots are a deep purple root vegetable, which are often sold fresh, pre-cooked, or pickled. They can be eaten raw or cooked, and are popularly used in salads. They are a close relative of chard and spinach, with a good nutritional content. If you do not like pickled beetroots, you might find that you like them roasted, or freshly boiled! Peeled and sliced, beetroot is also a great addition to salads and slaws, or just as a garnish. They can also be used in vegetable smoothies with other foods like carrots. Beetroot generally grows quite well in the UK, with availability that runs from mid-summer through late winter.",
    family: "Beet",
    foodType: "Root",
    usedAs: "Vegetable",
    month: [
      "January",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Blackberry",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637877/Seasonal/005-berry_zflhtr.png",
    description:
      "A purplish, black-coloured berry. Very juicy, they can be found growing wild across the UK, and these fruits can be enjoyed straight from the bramble bush or baked into crumbles and pies! Always look for plump, fresh looking berries, avoiding mould or mushy looking fruits. Blackberries are high in fibre and vitamin C. Blackberries are very delicate, so always check when you buy or pick them that the bottom-most layers in your punnets or containers are not getting squashed in transit. Whether served in crumbles, pies, muffins, in jams or compotes, with ice cream, or fresh, they are a versatile and flavoursome fruit. Blackberries and their relatives produce large fruit crops, and cultivated varieties are often a bit easier to control than their wilder relatives. You can grow them along walls and fences, and even in containers for some varieties. You will often be able to find blackberry bushes growing wild in the UK, where they might be referred to as brambles.",
    family: "Rose",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["August", "September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Blackcurrants",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/002-blackcurrant_vnquni.png",
    description:
      "Blackcurrants are a tart, dark-coloured berry that are at their peak in early to mid-summer. Recent research has suggested that berries - like blackcurrants - can help to prevent the onset of Alzheimers disease. Blackcurrants are also high in vitamin C. When looking for blackcurrants, make sure to pick ones with shiny and unblemished skins that are firm and plump. Blackcurrants will keep for several days in the fridge, and can also be frozen. They can be added raw to fruit salads, or otherwise can be cooked in some sugared water to sweeten them a little. Be careful not to overcook them, or they will lose their flavour. Blackcurrants are great turned into jams, juices and jellies, or when added to crumbles, tarts and other desserts like ice cream. Blackcurrants are fairly easy to grow, and prefer moist to well-drained soil. They thrive in full sun to partial shade, and can be grown in containers too - so long as you have one big enough!",
    family: "example",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["June", "July"],
    allergens: "NA",
  },
  {
    foodName: "Bramley Apple",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/003-apple_yzjgbk.png",
    description:
      "Bramley apples are a large, green cooking apple, which are available year round, but are at their height from December through until March. They can be eaten uncooked, but their taste will be very different, so this is not advisable. Like most apples, bramley apples are high in fibre, vitamins and antioxidants. Make sure to select bramley apples which are unblemished and firm. They can be boiled or stewed in a variety of recipes to make sauces and desserts. An alternative in recipes could be other varieties of apples, or pears. Bramley apple trees are naturally quite resistant to disease, very productive, and fairly easy to grow, suiting the British climate. Apples are one of the easiest fruit trees to grow, and tend to be popular with a lot of home gardeners because of this.",
    family: "Ribes",
    foodType: "Pome",
    usedAs: "Fruit",
    month: ["January", "February", "March", "December"],
    allergens: "NA",
  },
  {
    foodName: "Broadbean",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637883/Seasonal/014-peas_ck7vlm.png",
    description:
      "Hardy and adaptable, broad beans are also known as fava beans. They are a great source of protein, carbohydrates, and vitamins A, B1 and B2. Buy broad beans as fresh as possible. Pods should be firm and crisp. Avoid any that feel soft or airy. Broad beans should generally be podded from their velvety jackets before using. You can also double pod the beans - which means to remove the thin skin covering each individual bean inside the pod - by blanching the beans before you pod them. You can also buy podded broad beans frozen. You can also grill broad beans in their pods direct, though be careful biting into them - they can get very hot, and can be hard to chew through! Otherwise, the beans can be puréed with feta or hummus to make dips. You can also use them in risottos, soups and salads. Alternatives include runner beans, French beans, and flat beans. They are at their best from summer through autumn. You can grow trellis and bush varieties, depending on how short you are for space.",
    family: "Legume",
    foodType: "Legume",
    usedAs: "Vegetable",
    month: ["July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Broccoli",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637879/Seasonal/006-broccoli_ehpar1.png",
    description:
      "Broccoli is a green brassica vegetable which is related to cabbages and cauliflowers. It has tight clusters of deep green buds and thick, edible stems. It was developed from purple sprouting broccoli, and the two variants are quite similar in both taste and nutrition. Go for firm stalks and green plants: yellow broccoli is past its peak. Broccoli deteriorates faster when in contact with the air, so supermarkets often wrap it in cellophane. However, if an unwrapped type looks good in the shops, you can be sure that it has been very recently picked. Broccoli is great when cooked with a drizzle of olive oil or melted butter, though it can also be boiled or steamed. It can be used as a side to things like roast dinners, or added to dishes like pasta bakes. Broccoli is a fast and fairly easy-to-grow crop, ready to harvest in summer and autumn. The sprouting variety is hardy and can overwinter outdoors. It grows best in well-drained, moisture-retentive soil, in full sun or very light shade.",
    family: "Cabbage",
    foodType: "Cruciferous",
    usedAs: "Vegetable",
    month: ["August", "September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Brussels Sprouts",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175318/Seasonal/004-brussels-sprouts_zlkp8m.png",
    description:
      "Brussels sprouts are a small, green vegetable which are related to cabbages. Their taste is generally sweet and nutty, though occasionally bitter. They grow on stalks, which they are sometimes also sold on, and can be a divisive vegetable! Look for sprouts with plump, bright green heads. The ones still on their stalks will stay fresher for longer, and an alternative to sprouts can be cabbage. Sprouts can be eaten raw in salads. More commonly, however, they are cooked and eaten as a seasonal side in colder months. If boiling sprouts, you can cut bigger ones in half or score the bases of medium-sized ones to make sure they cook evenly throughout, though this is not necessary for smaller sprouts. You can also stir fry them, and they can go nicely if cooked with cubed bacon or ham. Sprouts cook quite quickly, so make sure you check on them regularly to avoid them being overcooked and losing their taste. Sprouts are quite slow growing, and will take most of the year to grow. However, they crop from autumn through until spring.",
    family: "Cabbage",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: ["January", "February", "March", "October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Cabbage",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637880/Seasonal/007-cabbage_xqq68l.png",
    description:
      "The cabbage family includes a wide variety of different vegetables, from the tightly-packed white, red and green cabbage varieties, to things like pak choi, brussels sprouts and broccoli. Savoy cabbages and Chinese leaf are two very popular varieties that are great to cook with. Cabbage flavours range from savoury to slightly sweet, but all cabbage will smell very pungent if overcooked. Look for cabbages with bright, crisp leaves. Cabbages can be used as a side or in salads and slaws, as well as in things like stir frys and soups, depending on the cabbage variety. Cabbages are fairly easy to grow in the UK, and the many variants means you can often find a type of cabbage to grow or harvest at lots of different times of year.",
    family: "Cabbage",
    foodType: "Root",
    usedAs: "Vegetable",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Carrot",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637881/Seasonal/008-carrot_xesp4y.png",
    description:
      "Carrots are a very versatile root vegetable. They have a sweet flavour, and can be used in a variety of dishes, and can be cooked in many different ways. They are very high in beta-carotene, which is an important nutrient in helping to maintain eye health. Most of the nutrients in carrots are stored just beneath the skin, so if you are peeling your carrots for a recipe, try not to take off too much! Carrots can be cleaned and used raw, either as a snack with hummus or dip, or in things like salads: just slice or grate accordingly. They can also be roasted in things like oil or honey, or boiled, and used as sides to other dishes (popularly in roast dinners). There are a lot of varieties of carrot that you can grow at home, depending on the space available to you. Generally, they can be sown from spring onwards, and harvested all year round.",
    family: "Carrot",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Cauliflower",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/005-cauliflower_pkwdkp.png",
    description:
      "Cauliflowers are mild-tasting vegetables with generally white heads- though sometimes you can find purple and green varieties - that grow from a central stalk. They belong to the brassica family, like cabbages. Look for cauliflowers with no discolouration in their heads, and crisp leaves. The florets can be served raw in salads, and cauliflower can also be boiled, steamed, or fried, roasted or grilled. It can even be shredded to a consistency resembling rice, or used as a vegetarian alternative to steaks or smaller cuts of meat in recipes that would traditionally utilise meat instead. Cauliflowers take a few months to grow, and do best in moist, rich soil.",
    family: "Cabbage",
    foodType: "Cruciferous",
    usedAs: "Vegetable",
    month: ["January", "February", "March", "April"],
    allergens: "NA",
  },
  {
    foodName: "Cavolo Nero",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637881/Seasonal/009-kale_wuhokp.png",
    description:
      "A loose-leafed, dark green cabbage with a tangy and bitter flavour. The aftertaste is sweeter, however. This vegetable originally comes from Tuscany in Italy! When shopping for this vegetable, look for crisp and unblemished leaves with no holes in them. Avoid ones with cores that are split or dry. Cavolo Nero is very versatile, and can be boiled, steamed, put into stir frys, or used raw in salads. An alternative to this food can be loose-leaf cabbage or kale.",
    family: "Cabbage",
    foodType: "Cruciferous",
    usedAs: "Vegetable",
    month: ["July", "August", "September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Celeriac",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175322/Seasonal/037-celery-root_jklewc.png",
    description:
      "A firm, oddly-shaped, pale vegetable, with a taste somewhat similar to celery. Celeriac is usually enjoyed mashed like potatoes or roasted, though it is a root vegetable which is agreeable to a lot of different winter dishes. When choosing a celeriac, avoid any which look discoloured or which are not fully firm. Alternatives to celeriac include butternut squash, turnips and swede. Celeriac discolours quickly once peeled, so make sure to store any leftovers in a bowl of lemon water, or acidulated water. Celeriac oven chips, remoulade, and cheesy celeriac mash are some great ways to use this vegetable. Celeriac are not too difficult to grow, but they do take a very long time to mature, and need a bit of space.",
    family: "Parsley",
    foodType: "Root",
    usedAs: "Vegetable",
    month: [
      "January",
      "February",
      "March",
      "April",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "Celery",
  },
  {
    foodName: "Celery",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637884/Seasonal/015-celery_g1mfru.png",
    description:
      "A crunchy stalk vegetable with a high water content that ranges from a darker green to white in colour. Celery has a stronger flavour the darker green it is, and can be eaten raw or cooked. Celery should be tightly-packed and firm for the highest quality, with fresh looking leaves and healthy, even stalks. To use raw in salads, you can cut stalks off from the main base and slice them. Commonly, celery is also chopped and added to soups and stews. For use in stir frys, try slicing them diagonally! If growing celery at home, it is important your soil is moisture-retentive and never dries out. Celery plants will also have to be carefully acclimated to the outdoors after first being established as seedlings. Germination can take some time with celery plants.",
    family: "Parsley",
    foodType: "Stem",
    usedAs: "Vegetable",
    month: [
      "January",
      "February",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "Celery",
  },
  {
    foodName: "Cherry",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/006-cherries_hkayof.png",
    description:
      "Cherries are a small, generally red fruit, which is at its height in the summer. There are hundreds of varieties, which can be sweet, sour, or somewhere between. Sweeter cherries are suitable for eating raw, and the more sour ones are generally used for cooking in things like tarts, crumbles, sauces and other desserts. When shopping for cherries, look for fruits with a deep colouring and firm flesh, but make sure that they are not too hard. Cherries can be grown in the UK climate, and are also suitable to be grown in containers. Traditionally, you would need more than one cherry tree in order for them to pollinate and bear fruit, but newer varieties of cherry trees are often self-pollinating.",
    family: "Rose",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["July"],
    allergens: "NA",
  },
  {
    foodName: "Chervil",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637885/Seasonal/016-chervil_vtabww.png",
    description:
      "Chervil is an annual herb that looks like flat leaf parsley. It has finer stems and more delicate leaves, however. It has a faint aniseed flavour, and is used in the French herb mixture fines herbes. Chervil loses its flavour easily when dried or exposed to too much heat, and so is best used fresh, or added at the end of the cooking process. It can go great with chicken and seafood, or as a garnish for steamed baby vegetables.",
    family: "Parsley",
    foodType: "Herb",
    usedAs: "Herb",
    month: ["May", "June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Chestnut",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/007-chestnut_g2wdsp.png",
    description:
      "Chestnuts are a shiny, dark brown nut, famously associated with autumn and winter. Comforting and crumbly, they should not be eaten raw, so make sure you roast chestnuts before consuming them. Like all nuts, chestnuts are rich in antioxidants, high in fats, and support gut and heart health, though tree nut allergies are the most common type of allergy, and reactions can be severe, so nuts should be handled and prepared with care to avoid cross-contamination. When cooking chestnuts, make sure to rinse them thoroughly before piercing the skin to allow trapped air to escape while they roast. Chestnuts can be added to stuffing, mash, soups, and other recipes, and an alternative could be hazelnut. Chestnut trees can take years to grow, but can crop within five years, so they are not impossible to cultivate.",
    family: "Beech",
    foodType: "Nut",
    usedAs: "Nut",
    month: ["January", "October", "November", "December"],
    allergens: "Nut",
  },
  {
    foodName: "Chicory",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175320/Seasonal/008-chicory_dxp4o2.png",
    description:
      "Chicory is a forced crop, which is grown under the cover of complete darkness, a process which leads to its pure white leaves, tipped with red and yellow. Its leaves have a mildly bitter flavour, and the vegetables themselves are generally small, able to fit in the hand. When buying chicory, try and avoid the ones with green-tipped leaves, as those will be the most bitter. Chicory is often enjoyed in salads, though it can also be grilled, boiled or steamed. Non-forced varieties of chicory can be grown at any time, though they do require the use of a glasshouse. Different varieties of chicory prefer different growing conditions, so it is best to do some further research depending on the kind you would like to grow.",
    family: "Daisy",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: ["January", "February", "March"],
    allergens: "NA",
  },
  {
    foodName: "Clementine",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/021-orange_oafni2.png",
    description:
      "Clementines are a small and sweet citrus fruit which are characterised by their loose and easily-peeled skin. They are in season in the winter, from November through February, though alternatives which may be available in other seasons include oranges, satsumas and mandarins. The outside appearance of the skin of clementines does not indicate quality, so look for fruits which feel heavy, as they will be juicier. Clementines are usually eaten on their own, and are best eaten immediately after being peeled, though segments can also be dipped into melted chocolate. Clementines, like most citrus plants, are not hardy in the UK and do not grow well in our climate, though they can be cultivated in pots in sunnier spots and brought inside over winter.",
    family: "Citrus",
    foodType: "Citrus",
    usedAs: "Fruit",
    month: ["January", "February", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Cod",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637887/Seasonal/027-halibut_wagn5i.png",
    description:
      "Cod is a popular saltwater fish, with succulent, white, flaky flesh. Previously considered somewhat inferior to other types of fish - potentially due to its cheapness and ubiquity - overfishing has led to severe depletion of cod stocks, and in some places, the fish have disappeared entirely. Cod is often trawled or netted, which is a practice that can be very damaging, both to the fish itself and to the seabeds which are trawled. Try to go for line-caught or farmed Pacific cod, that preferably has been certified. Alternatives to cod include haddock, whiting, or tilapia. Cod can be baked, fried, and poached, and served in a variety of ways. Often, it is served with parsley sauce and lemon wedges, and potatoes are a popular side. Cod can also be added to stews, pies and soups, however, or served with other vegetables too.",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: ["February", "March", "April"],
    allergens: "Fish",
  },
  {
    foodName: "Courgette",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637886/Seasonal/017-courgette_x1jmsl.png",
    description:
      "Courgettes are a very popular vegetable from the squash family, making them relatives of foods like cucumbers and melons. It is versatile and easy to cook. They have a deep green skin and firm, pale flesh, and are also known as zucchini in some places. Courgettes do not need to be peeled to be used. Just slice off each end of the courgette, and prepare as your recipe directs. In addition to being cooked, they can also be sliced thinly and used raw. Boiling courgettes can make them mushy, so it is usually best to fry them. You can roast them until tender and lightly golden, or marinate them, before barbecuing or griddling them instead. They are great in stir frys and curries, but can also be used in ratatouille, or as fritters. Courgettes are easy to grow and crop often, but do need a good bit of space, so might not be suitable for everybody to try growing at home, depending on available room.",
    family: "Cucurbita",
    foodType: "Gourd",
    usedAs: "Vegetable",
    month: ["June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Courgette Flower",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637886/Seasonal/017-courgette_x1jmsl.png",
    description:
      "Courgette flower is the edible flower of the courgette bush. There are two kinds of flower: the flower with an immature vegetable attached is the female, and the flower on the long stalk is the male. The male flowers are the ones generally sold in bunches for cooking. They are in season over the summer and can be hard to find in supermarkets. Try a local greengrocer instead if you are struggling in the bigger shops. Ideally, use courgette flowers as soon as possible after picking or purchasing, as the flowers begin to close up after a few hours, and should be used within three days maximum. To cook them, try stuffing the flowers with herbs and cheese before frying briefly. You can also lightly batter and deep fry them, or toss in olive oil until just wilted to use in risottos. The flowers go best with cream, cheese, pancetta, pasta and batter. They are often used in Italian cooking.",
    family: "Cucurbita",
    foodType: "Gourd",
    usedAs: "Vegetable",
    month: ["June", "July", "August"],
    allergens: "NA",
  },
  {
    foodName: "Crab",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637885/Seasonal/018-crab_oxn7ew.png",
    description:
      "Crabs are crustaceans with hard exoskeletons and soft, succulent flesh. The most commonly eaten kind in the UK is the common edible brown crab. Female crabs have sweeter flesh than males when cooked. Crabs should feel heavy, but you should not be able to hear any liquid sloshing inside the exoskeleton. If you prefer white meat, buy a male crab. You can also buy live crabs if shopping at a fishmonger. If preparing live crabs, it is important to do so humanely. It is considered most humane to place crabs in a freezer for at least two hours before cooking, as they will become comatose and die. However, this is only considered humane if done quickly in a large freezer at a temperature of at least -18 C. The most common method used in restaurants - piercing underneath the abdominal flap with a knife - should only be done by trained professionals. The procedure should take no more than ten seconds, and must only be carried out after the crab has been desensitised by chilling. To cook, remove the crab from the freezer and plunge into a pan of boiling salted water. Return to the boil and cook for thirty minutes per kilogram of weight. Cool rapidly before dressing. Always make sure you remove the grey gills from the crab, as these are very tough and cannot be digested.",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: [
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
    ],
    allergens: "Crustacean",
  },
  {
    foodName: "Crab Apple",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637887/Seasonal/019-apple_zxjdqm.png",
    description:
      "Crab apples are tiny, sour apples that grow both wild and as cultivated plants. Several varieties grow in the UK, as well as on other continents. Some crab apples are green, some are yellow, some are a very bright red! Generally, they are too sour or astringent to eat raw. However, cooked with lots of sugar, they can make crab apple jelly or crab apple butter. They can also be roasted whole alongside meat. Once the sourness has been masked, they have a very strong apple flavour. They can also be used to make verjuice, which is a tart liquid that can be used instead of vinegar. For a readily available source of crab apples, you are probably going to need access to a tree, whether that is one growing wild or one you have cultivated. Crab apple trees are quite compact, and so can suit smaller gardens well.",
    family: "Rose",
    foodType: "Pome",
    usedAs: "Fruit",
    month: ["August"],
    allergens: "NA",
  },
  {
    foodName: "Cranberry",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175320/Seasonal/011-cranberry_h8ovbv.png",
    description:
      "Cranberries are tart, red berries which are most famously used in winter recipes. They are naturally high in a wide range of vitamins and minerals, and can contribute powerfully to a varied and balanced diet. At their best between October and December, cranberries can be used in a wide variety of dishes, such as in making sauces, desserts, to dress meats, and in drinks. Look for plump, firm, bright berries when you’re shopping for fresh cranberries. You can also buy them dried! Cranberries can be grown at home in the UK, whether in pots or as ground shrubs, though they do also grow wild throughout North Europe and North America. ",
    family: "Heath",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Damson",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/038-plum-1_btgcjd.png",
    description:
      "Damsons are small, dark, very tart fruits, which are often too strong in flavour to eat raw, but perform brilliantly in jams and jellies and other prepared desserts, or as additions to meat dishes like casseroles. Look for damsons with deep, firm flesh, and make sure to wash them thoroughly before use. They have high antioxidant counts and bioactive compounds, with good concentrations of vitamins A, C and E. Damsons require a lot of moisture, and so care must be taken with the soil that they are grown in. Their trees produce large amounts of fruit once they are established and cropping, however, and require little care after this point, making them a good choice for suitable gardens. ",
    family: "Rose",
    foodType: "Drupe",
    usedAs: "Fruit",
    month: ["September"],
    allergens: "NA",
  },
  {
    foodName: "Date",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175320/Seasonal/012-date-palm_sdx44r.png",
    description:
      "Dates are one of the oldest cultivated fruits, can be bought dried or fresh, and are sweet, rich and chewy. There are a lot of different varieties of date, which are usually grown in warmer climates like North Africa and the Middle East, but only some of them are exported to the UK. Fresh dates are at their best in winter, around November to January. Whether fresh or dried, dates should look plump and glossy. Dried dates will be ready to eat straight away, but fresh dates may need some further preparation. The UK does not have naturally high enough temperatures to be able to allow date plants to flourish.",
    family: "Palm",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["January", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Duck",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175320/Seasonal/013-duck_av61dl.png",
    description:
      "Duck meat is dark, rich and flavourful when compared against other meats like chicken. Farmed duck is available all year round, but wild duck is available from October through December. Duck meat is nutritious, with high levels of protein, vitamins, and minerals like zinc and iron. It also has a comparatively high fat content, but fat can be trimmed by removing the skin and the fat layer below it, prior to cooking. Duck is popular in several cuisines, and is often paired with fruits like oranges, cranberries and raspberries. Duck is often roasted, though it can be fried, grilled, and cooked in a variety of other ways. It can also be marinated and smoked, and marinating especially can help with wild duck, which can sometimes be dry. When selecting duck, make sure to look for clear, soft, unblemished skin and flesh.",
    family: "Meat",
    foodType: "Fowl",
    usedAs: "Meat",
    month: ["October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Elderberries",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637877/Seasonal/020-berries_pw9fzh.png",
    description:
      "Elderberries are considered dangerous to eat raw or undercooked, so avoid putting them into muffins or apple pies, as they might not cook enough to be safe. However, their flavour also reduces when cooked, so they might not repay the effort it takes to harvest and prepare them in the way that other fruits can. However, they do have a beautiful colour, and so adding them to long-cooked recipes like chutneys, pickles, ketchups, sauces and jams can make for appealing dishes. Too many added can create a bitter flavour, however. Their bitterness can be improved by the addition of sweet spices like cinnamon and nutmeg, and they are great when used to make things like spiced and aged wines. Elderberries are in season and ready for picking from August through October. The juice stains very badly, so if you are going harvesting, maybe bring gloves, and remove the stalks!",
    family: "Sambucus",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["August", "September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Fennel Bulb",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637880/Seasonal/021-fennel_uqqf6p.png",
    description:
      "Fennel bulb has a strong aniseed flavour that can inspire mixed reactions from people. It has a bulb-like shape that looks similar to celery, with a heavier bottom. When eaten raw, the texture is very crisp and the flavour is strong. Cooked, it mellows out more, and becomes softer. To use fennel in cooking, slice very thinly if using raw. Alternatively, boil or steam - up to twenty minutes for a whole head, or twelve minutes for wedges - or roast for about forty minutes. The younger, smaller bulbs will be more tender. Fennel should feel heavy for its size, and be white with no blemishes. The feathery green tops should be fresh and bright. Avoid plants that have any yellowing to them. Great fennel recipes include fennel gratin and barbecued fennel, as well as fennel risotto. Fennel is at the height of its season from June through until September. Fennel is fairly easy to grow, and prefers well-drained soil and lots of sun.",
    family: "Carrot",
    foodType: "Stem",
    usedAs: "Vegetable",
    month: ["June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Fig",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637882/Seasonal/022-figs_jj1ssf.png",
    description:
      "Figs are a fruit with a delicate aroma and a sweet flavour. Originally from Asia, they are now grown across the Mediterranean and there are hundreds of different kinds. They can be grouped into four main colours: white, green, red, and purple/black. Figs have an oval or squat square shape, and thin skin that encloses hundreds of seeds, held in a succulent flesh. Figs are very delicate and need gentle, careful handling, though you can also buy them dried. When shopping for fresh figs, go for plump fruits that feel soft, but not too liquid. Avoid fruits with bruises or splits. At their ripest, they will have a faint bloom. If they smell sour, however, they are past their peak. Figs are best eaten at room temperature, so leave them out of the fridge for an hour before you eat them. Figs perish quickly, so make sure to eat within a day or two of buying them! Figs - dried and fresh - are great as a snack, or when used in baking. You can eat them raw, drizzled with honey, toasted nuts and cream, or use them in salads with goat cheese, rocket and ham. You can also grill them, roast them whole, or poach them. They do not need cooking for very long!",
    family: "Parsley",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["August", "September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Garlic",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637882/Seasonal/023-garlic_tszkk7.png",
    description:
      "Garlic is a member of the allium family and comes in all shapes and sizes, though generally speaking, the smaller the bulb, the stronger the flavour. Garlic is mainly available in a dried form all year round, but fresh garlic, also known as wet or green garlic, which has a milder flavour, can also be found in some stores when in season between July and October. Garlic is most often seen in Mediterranean and Asian cookery, but is one of the most versatile ingredients for cooking with and can be used to enhance most dishes. Use dried garlic raw in dressings, salsas and butters, roast whole bulbs or separate cloves to serve with roast meat or fry to use as the base for casseroles, soups and sauces. Although garlic is a Mediterranean plant, its hardneck varieties are hardier and therefore easier to grow in the colder UK climate. Grow it in a warm, sunny spot in well-drained soil that does not get too wet in winter. Can be grown in a large container if you are stuck for garden space.",
    family: "Amaryllis",
    foodType: "Herb",
    usedAs: "Herb",
    month: ["July", "August", "September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Globe Artichoke",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637883/Seasonal/024-artichoke_rh8u1h.png",
    description:
      "The globe artichoke bears no relation to the tuber-like Jerusalem artichoke, and is considered to be the true artichoke. The tender ends of its leaves and the bas, known as the heart, of the bud are both edible, but the tough outside leaves and furry central choke are not. Globe artichokes are considered a superfood as they are rich in fibre, vitamins and antioxidants. Artichokes make great starters or side dishes. Boil or steam the whole head, scoop out the choke and stuff with garlic and parsley, cheese and bread crumbs then bake in the oven. Alternatively, boil the entire head then pull the leaves off and dip them in a sauce or butter, pulling the leaf through your teeth to remove the tender flesh before discarding the rest. Artichokes like a warm, sunny spot and are best grown in rich, moist (but free-draining) soil. Cover them with a mulch to protect them during cold winter weather and also during spring when the soil is warm and moist.",
    family: "Daisy",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["June", "July", "August", "September", "October", "November"],
    allergens: "NA",
  },
  {
    foodName: "Goose",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175320/Seasonal/014-goose_nbtpy1.png",
    description:
      "Goose meat is succulent and rich, and the bird is often used as an alternative to turkey for Christmas meals. Goose has a high fat content, but most of this is contained in the skin, which can be rendered at home to make fat for roasting and frying. Goose is in season from September through January, though you should also be able to find frozen goose all year round. Goose is often roasted, and is commonly served with sharper-flavoured fruit sauces, like apple, cranberry or cherry. When buying goose, look for a bird with a good layer of fat, and plump and unblemished skin.",
    family: "Meat",
    foodType: "Fowl",
    usedAs: "Meat",
    month: ["January", "September", "October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Gooseberry",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637883/Seasonal/025-gooseberry_n0c9xl.png",
    description:
      "Gooseberries have been a popular British fruit since Elizabethan times and are related to the blackcurrant. They come in many varieties, some tart and some sweeter. Gooseberries are a particularly good source of vitamin C but contain many other vitamins and nutrients. Gooseberries are best used for cooking, but certain varieties can be eaten raw. They are great in crumbles or pies or made into jam, but can also be poached then pureed to make gooseberry fool, ice cream or a savoury sauce for rich roasting joints like pork or goose. Plant them in well fertilised soil over the winter when plants are dormant. Gooseberries thrive in full sunshine but can take a couple of years to crop.",
    family: "Ribes",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Grapefruit",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175320/Seasonal/015-grapefruit_ohykt5.png",
    description:
      "Grapefruits are large citrus fruits with a strong, occasionally divisive, sour flavour. While their skins are always yellow, their flesh can vary in colour, from yellow-white to pink to red. They are a good source of fibre and vitamin C, and are thus named because the fruits grow in bunches, much like grapes. Look for grapefruits which are plump and firm, and avoid any which have coarse or damaged skin. Grapefruits which feel heavy for their size will have the highest juice content. Grapefruits can be eaten raw on their own, or added to salads. They can also be sprinkled with sugar to bring out some sweetness, grilled, or used to make things like marmalade. If grapefruits are too strong, alternative citrus options include lemons and oranges.",
    family: "Citrus",
    foodType: "Citrus",
    usedAs: "Fruit",
    month: ["January", "February", "March", "April", "May", "December"],
    allergens: "NA",
  },
  {
    foodName: "Grouse",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637887/Seasonal/026-chicken_xt4kgm.png",
    description:
      "Grouse is considered the greatest of all game birds and the first day of grouse shooting season, 12th August, is named The Glorious Twelfth and was established by the Game Act in 1831. Grouse is native to Scotland but can be found elsewhere in the UK. Grouse has twice the protein and less than a third of the fat of chicken and is also high in vitamin B and iron. Known for its rich, gamey flavour and distinctive red colour, Grouse are quite small meaning that one bird is enough for one person. The younger the bird, the better the flesh so young birds are best roasted, while older birds are better used in casseroles. To prepare it, remove the wishbone and pull back the skin from the neck to expose the entrance. Cut round it with a sharp knife and snip the bone free at the bottom, then cut the wings and legs at the second joint. Wipe the cavity and outside of the bird, season inside and push in any desired flavourings, then tie the legs together and season the skin. You can also wrap the breast with pancetta or ham to prevent it drying out.",
    family: "Meat",
    foodType: "Fowl",
    usedAs: "Meat",
    month: ["August", "September", "October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Guinea Fowl",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175320/Seasonal/016-fowl_ac08xk.png",
    description:
      "A small domesticated bird, which is a little bit gamier in taste than chicken. Guinea fowl originate from Africa, though can be found across Europe. They are at their best in the autumn months, between September and November. Guinea fowl has a lower fat content and a higher fat content than chicken. As guinea fowl is drier than chicken naturally, it can dry out while cooking, so take precautions not to overcook the bird. Wrapping guinea fowl with pancetta can prevent it from drying out, as can marinating it. Guinea fowl is a great option for roasting with stuffing.",
    family: "Meat",
    foodType: "Fowl",
    usedAs: "Meat",
    month: ["September", "October", "November"],
    allergens: "NA",
  },
  {
    foodName: "Halibut",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637887/Seasonal/027-halibut_wagn5i.png",
    description:
      "Halibut is the largest flatfish in the ocean and in the UK, mainly lives in the freezing cold waters off the coast of northern Scotland, although it is also occasionally found around Northern Ireland.  Halibut is a delicious white-fleshed fish with a firm, meaty texture and like most fish it is high in protein, omega 3 and many vitamins and minerals. Atlantic halibut is an endangered species so consider buying from a reputable fishmonger who sources fish from sustainable stocks, or look for farmed or line-caught North Pacific halibut that has been certified. Steaks from the middle of the fish are best as the tail is full of bones and Halibut can be enjoyed baked, poached or pan fried as the main meat of your dish or flaked and used in fish pie. Halibut has a tendency to dry out quickly when cooking so steaks and fillets should be cooked with wine or stock to retain moisture.",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: ["March", "April", "May", "June", "July", "August", "September"],
    allergens: "Fish",
  },
  {
    foodName: "Jerusalem Artichoke",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/039-ginger_hevlfq.png",
    description:
      "Jerusalem artichokes are not true artichokes, but are actually a member of the sunflower family! They are a root vegetable with a crunchy texture and nutty flavour, and resemble ginger. The name does not come from the location of Jerusalem, but instead from the Italian word for sunflower, which is girasole. Jerusalem artichokes can be cooked in much the same way as potatoes or parsnips. Their flesh will discolour if exposed to air, so make sure to keep any leftovers which have been peeled in bowls of acidulated water. Their skins should be light brown, firm and fresh, without any soft or dark patches. The plants are easy to grow, and can be grown from tubers in the spring.",
    family: "Daisy",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["January", "February", "March", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Kale",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637881/Seasonal/009-kale_wuhokp.png",
    description:
      "Kale is a dark green leafy vegetable, and is a member of the cabbage family. It comes in two varieties: regular kale, which has smooth leaves, and curly kale, which has crinkly leaves, and is the more common of the two varieties. Kale is very high in a lot of minerals and vitamins, and is a nutritious vegetable which can contribute strongly to a varied and balanced diet. Kale is usually enjoyed boiled or steamed, as the leaves can be somewhat disagreeable and bitter in flavour if eaten raw. However, kale can also be sliced and added to stir fries, soups and risottos, or wilted in a pan and used as a side dish. Cold-hardy and resilient, kale is a great option for growing at home in the UK climate. ",
    family: "Cabbage",
    foodType: "Cruciferous",
    usedAs: "Vegetable",
    month: ["January", "February", "October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Kipper",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637890/Seasonal/034-mackerel_f8xvhi.png",
    description:
      "A kipper is a fat herring that has been split in a butterfly shape and cured by salting or brining before being cold smoked. Herrings are one of the most abundant fish species in the world and so are a good choice for those conscious of eating sustainable foods. Like most fish it is high in protein, omega 3 and many vitamins and minerals. Traditionally pale golden, beware of processed kippers that are artificially coloured and flavoured, with a black lining in the stomach cavity, which indicates they are likely to have been made out of season as they will have only recently spawned. Kippers require minimal cooking and are commonly poached for a few minutes. If you prefer a stronger flavour then you may consider grilling your kipper but this is only recommended if you have a well-ventilated kitchen due to the extremely strong smell!",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: ["May", "June", "July", "August", "September"],
    allergens: "Fish",
  },
  {
    foodName: "Kohlrabi",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637887/Seasonal/029-kohlrabi_nwtzii.png",
    description:
      "Kohlrabi looks like a sputnik in vegetable form and is part of the cabbage family. Its name translates from German to turnip cabbage. It has a mild, sweet flavour with a crisp, crunchy texture and can be found in two colours, the more common pale green as well as purple. Kohlrabi is an excellent source of vitamin C and a good source of fibre, vitamin b6 and potassium. You can cook and use the leaves of Kohlrabi like cabbage but the bulb is much more versatile and can be used in salads in a similar way to carrot or broccoli or roasted, steamed or stir fried and used as wedges, noodles or diced. Kohlrabi is more drought resistant than most brassicas and the purple varieties are hardier than green. It thrives in a sunny area in light, fertile and free-draining soil. Sow little and often for a constant supply. In cooler areas and where the soil is heavy clay, make early sowings indoors and transplant outdoors when hardier and the soil has warmed up. Harvest when young, between golf and tennis ball sized, as if you leave them too long they lose their flavour and tenderness.",
    family: "Cabbage",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["August", "September", "October", "November"],
    allergens: "NA",
  },
  {
    foodName: "Lamb",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637887/Seasonal/030-ewe_w2coor.png",
    description:
      "Lamb is the culinary name for meat which comes from a sheep that is under one year old. When between one and two years old it is sold as hogget and anything over two years old is called mutton, which has a lot more flavour but also tougher flesh that will need slow cooking to tenderise it. The older a lamb, the deeper the colour of its meat. While there are health risks associated with over-consuming red meat, lamb can also be a really good source of iron, protein, and vitamin B12. A versatile meat that is used for more than just roasting, lamb is popularly used in curries, moussaka and as kebabs. For quick cooking, choose fillets, steaks and chops and for slow cooking, among the best options are leg, shoulder, shank and neck joints. If it is not homegrown, imported lamb is considered to have the highest carbon footprint of all meats and has very high greenhouse gas emissions regardless of where it is farmed.",
    family: "Meat",
    foodType: "Meat",
    usedAs: "Meat",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Lamb's Lettuce",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637889/Seasonal/031-greens_rsygez.png",
    description:
      "Also known as corn salad or cat grass, this lettuce has a distinctive, tangy flavour and is known for its long spoon-shaped leaves. Its unusual name allegedly comes from the similarity of the plant to the size and shape of a lamb tongue. It is an excellent source of vitamin A but is also high in vitamin C, E, K and B6 as well as many minerals. It is best used as a main ingredient in salads or cooked and served as a side vegetable. Be sure to wash and drain thoroughly before use it can be grainy and gritty. It is quickly perishable and should be used within two days of purchase. This plant thrives in moist soils and cold temperatures so plant them in a shady spot. They do not tolerate drought well so keep them well-watered. To avoid a glut, you should sow little and often.",
    family: "Honeysuckle",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: [
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
    ],
    allergens: "NA",
  },
  {
    foodName: "Leek",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/018-leek_dnkjyf.png",
    description:
      "Leeks are a vegetable in the same family as onions, garlic and chives. The edible part of the plant is a long, stalk-shaped, tightly-packed sheathe of leaves, which is white-green in colour. Leeks are high in nutrients, especially magnesium, and vitamins A, C and K. When buying leeks, look for vegetables with unblemished and firm bases, and bright, crisp green leaves. They are a versatile vegetable, which can be used in much the same way as onions and other alliums in recipes. They make for a great addition to recipes like casseroles, pies, and soups, or alongside fish like salmon, and can be steamed and stir fried. Leeks are fairly easy to grow, and can be grown in containers, but they do take some time and attention to mature. Sown in spring, they can be harvested around autumn and winter.",
    family: "Amaryllis",
    foodType: "Root",
    usedAs: "Vegetable",
    month: [
      "January",
      "February",
      "March",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Lemon",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175320/Seasonal/019-lemon_vk7cd1.png",
    description:
      "Lemons are sour citrus fruits which can be used in a very wide variety of sweet and savoury dishes. They’re bright yellow in colour, and have a very high amount of vitamin C. Though the flesh is a little strong to eat on its own, the skin can be zested and added to lots of different meals, and the juice and flesh are great when cooked into other things. Lemon wedges are a great side to serve with fish and meat, or to be added to trays during roasting to impart flavour. Lemons can be made into lemonade and other juices, or used to flavour things like cakes and dessert sauces. When buying lemons, look for ones with unblemished and brightly coloured skins. As with all citrus plants, lemons are not hardy in the UK and so are not the easiest to grow, but with some care and access to a greenhouse or indoor space to keep your lemon tree in over the winter, you can have success growing lemons.",
    family: "Citrus",
    foodType: "Citrus",
    usedAs: "Fruit",
    month: ["January", "February", "March"],
    allergens: "NA",
  },
  {
    foodName: "Lettuce",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637889/Seasonal/032-lettuce_k50llo.png",
    description:
      "Lettuce comes in a huge number of varieties, but are usually either crisp such as iceberg, cos and romaine or floppy such as little gem, butterhead and round. Most have green leaves, although some with red tinges and they all have a delicate, clean flavour. Lettuce is an excellent source of vitamin A as well as being high in minerals and antioxidants. Lettuce is mainly eaten raw in salads, but can also be shredded and added to soups towards the end of cooking or braised and served on the side along with other vegetables. Crisp varieties can also be grilled. Grow lettuces in full sun in moisture-retentive soil, but if it is very hot the lettuces will need shade. It will also need protecting from the cold if sowing early or late. Crisp varieties tend to be hardier but floppy varieties produce less dense growth and so are ideal for growing in small spaces and containers.",
    family: "Daisy",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: [
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Loganberry",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637890/Seasonal/033-grape_jdq8ux.png",
    description:
      "This summer berry was allegedly developed by accident in 1881 when an amateur plant breeder, named James Logan, planted two blackberries next to an old raspberry plant. The loganberry is a pointed cone shape, bigger than a raspberry and varies in colour from red to purple depending on ripeness. They have a firmer texture and sharper taste than other soft fruits. An excellent source of vitamin C, loganberries were once used by the British navy to prevent scurvy. This also means they can last a long time after being picked, especially if refrigerated. Loganberries can be eaten raw, made into jams and jellies, used in pies and pastries or as sauces for game and duck. They are also popularly used for cider vinegar, vodka, gin or brandy. Rarely seen in shops due to being hard to mechanically harvest, loganberries need a sunny spot in well-drained soil. They can take a year or two to establish and should be kept well watered in their first growing season. They are large plants so will need plenty of space and training against a fence or wall.",
    family: "Rose",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Mackerel",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637890/Seasonal/034-mackerel_f8xvhi.png",
    description:
      "Mackerel is a silver-coloured, torpedo-shaped fish with firm flesh. Found around the UK, it is particularly abundant around Scotland. It has received a sustainability certification, making it an ethical choice. Well known for being oily, mackerel is an excellent source of omega-3 fatty acids, protein and vitamins B and D. The flesh of mackerel can spoil easily, particularly in warmer temperatures and so it should be eaten on the day of capture unless preserved, such as salted or smoked. Mackerel is most popularly cooked on a barbecue or grill as it is robust and meaty and holds its form well. It can also be roasted and is typically paired with strong, fragrant flavours such as chilli, garlic or lemongrass. It can also be flaked for use in salads, sandwiches or as fishcakes.",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: ["May", "June", "July", "August", "September", "October"],
    allergens: "Fish",
  },
  {
    foodName: "Mangetout",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637883/Seasonal/014-peas_ck7vlm.png",
    description:
      "Also known as snow pea or sugar pea, mangetout is a type of garden pea that is picked whilst it is still young, so that the pod is still flat and the peas have barely developed. A sugar snap pea is more fully developed, but the pod can still be eaten. Mangetout literally translates from French as eat all! With a crisp and sweet flavour, mangetout can be enjoyed raw and is very popular in stir frys. If used as a side vegetable it should only be lightly steamed or boiled and will not need as long as most other vegetables. Mangetout should be grown in full sun or partial shade, but will do well in most soil types and their size means they can be grown in containers. They need little fertilisation, but keep them well watered.",
    family: "Legume",
    foodType: "Legume",
    usedAs: "Vegetable",
    month: ["June", "July", "August"],
    allergens: "NA",
  },
  {
    foodName: "Marrow",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637890/Seasonal/035-marrow_hmofph.png",
    description:
      "Marrow is simply a courgette that has been left on the plant to grow a little longer. Deep green in colour, it has a firm, pale flesh and mild flavour. Size does matter with marrows and smaller marrows, which should be no bigger than your forearm, actually taste better. Large marrows will taste bitter and have a watery consistency and are best reserved for your local produce competition! Marrow has all the versatility of the courgette and can be used in the same way, but are traditionally stuffed with various fillings or mashed into savoury dishes. More unusually, marrow can make a great chutney for your cheeseboard or grated into cakes! Marrows are best started off indoors but can get very large so are not suitable for all growers depending on space. They need a warm, sunny position away from cold winds and thrive in rich, moisture-retentive soil. They are thirsty plants so will need regular watering.",
    family: "Cucurbita",
    foodType: "Gourd",
    usedAs: "Vegetable",
    month: ["August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Mint",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637890/Seasonal/036-mint_umqpfz.png",
    description:
      "Mint comes in several types, each with their own slightly different flavour and appearance. The two main types are spearmint, which is most commonly used to make mint sauce or jelly and also in tea, and peppermint, which is more popular in sweets and confectionery. Although often consumed in small quantities, mint leaves are rich in vitamins A, C, D and E as well as minerals such as phosphorus. For cooking, mint can be very versatile and is used in sauces, teas, fruit salads, stuffings and Thai dishes such as soups and curries. It can aid digestion and help reduce nausea and outside of cooking, mint is used as a herbal remedy for congestion, allergies and asthma due to its antibacterial and antiinflammatory properties. It is also used for aromatherapy treatments. Mint should be grown in moist, well-drained soil in full sun or partial shade. It is best grown in pots as most varieties are invasive, but this makes it ideal for growers with limited space. If you have a glut then it can be frozen with no added water needed.",
    family: "Mint",
    foodType: "Herb",
    usedAs: "Herb",
    month: ["May", "June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Mussels",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175320/Seasonal/020-mussel_jwayyc.png",
    description:
      "Mussels are a small shellfish. Similar to oysters, mussels sold in supermarkets and fishmongers are farmed, as care must be taken regarding what they feed on while growing. Fresh mussels are at their height from autumn through spring, though they can be bought frozen, smoked, or bottled year-round. They are a strong source of protein, iron, zinc, selenium, iodine, and omega 3 fatty acids. Alternatives to mussels could include oysters, clams or cockles. Mussels are highly perishable, and should be eaten on the day they are bought. Avoid buying any mussels with chipped or damaged shells. Fresh mussels tend to be tightly closed. Mussels can be used in pastas and soups, and can also be served as a main alongside vegetables.",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: ["January", "February", "March", "October", "November", "December"],
    allergens: "Crustacean",
  },
  {
    foodName: "Nectarine",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637880/Seasonal/010-nectarine_vtqysg.png",
    description:
      "Nectarines are a smooth-skinned stone fruit which come in light pink, yellow and white, and are delicate and sweet. They are similar to peaches, though a little more acidic. They are particularly high in vitamins A, B and C. Nectarines do not ripen after being picked, so make sure to buy fruits that are already ripe. Fruits should feel firm, with a slight give. Avoid any greenish colour fruits, or ones that have damaged or broken skin. Nectarines can be eaten raw, and are often also used in desserts like crumbles, tarts, and crisps. They are also great when poached, though be careful, as overcooking nectarines can impact their flavour and texture. Although hardy in most parts of the UK, nectarines suffer in frost, so take care to choose a sheltered location when planting nectarine trees, or else grow them in moveable pots.",
    family: "Citrus",
    foodType: "Citrus",
    usedAs: "Fruit",
    month: ["May", "June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "New Potatoes",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/026-potato_tent9c.png",
    description:
      "New potatoes are the younger versions of fully-grown potatoes. New potatoes are generally sweeter than fully-grown potatoes, as their sugars have not been converted into starches yet, and they are also better able to keep their shape better when cooked. For this reason, they are often added to salads, or are cooked whole and used as sides to other dishes. New potatoes do not need to be peeled, only scrubbed gently clean before cooking, and they can be either boiled or roasted. Look for firm potatoes which are blemish-free when shopping. Small crops of potatoes can be grown in large, deep containers, though you really will need quite a big container and a lot of soil to get the best outcome!",
    family: "Nightshade",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["April", "May", "June", "July"],
    allergens: "NA",
  },
  {
    foodName: "Onion",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637891/Seasonal/037-onion_tzbdx9.png",
    description:
      "Onions are a versatile, widely used, and essential ingredient in endless recipes. There are a wide variety of onions - from strong yellow onions, to milder red onions, to delicate shallots, to leafy spring onions - and all add great depth of flavour to savoury dishes. Onions contain compounds that can help the body fight inflammation, and they are nutrient-rich. When buying or choosing onions, generally you will want to look for a vegetable with no soft spots or patches of damage. As an alternative to onions, you could also try leeks in recipes! There are innumerable ways to use onions, from salads to chutneys, onion rings to gravy stock, or even serving stuffed or as additions to meals like quiches. White, yellow and brown onions are great all-purpose onions for cooking, though you might not want to use them raw, unless you are looking for a particularly strong onion flavour in your salads. Red onions are sweeter and milder, and generally are more suited to salads, marinades, salsas and roasts. Onions are cold-weather crops, and generally you will want to start sowing them - indoors or outdoors - around late winter and early spring. They will be ready to harvest around late summer or early autumn.",
    family: "Amaryllis",
    foodType: "Allium",
    usedAs: "Vegetable",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Orange",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/021-orange_oafni2.png",
    description:
      "An iconic citrus fruit, which sometimes comes in varieties which are not actually orange-coloured at all. Oranges can be sweet or bitter, and can be tinged with yellow or red. As the various types of oranges ripen at different times, different oranges are available year-round in the UK, though they do all need to be imported, as the UK does not have the correct climate for growing oranges at scale. Oranges are a good source of vitamins and antioxidants, especially vitamin C and citric acid, which are important compounds for encouraging the absorption of iron. Oranges are often eaten raw as a snack, though they can also be turned into juices, added to drinks, or used in fruit salads or to make sauces and marmalades. They are a good addition to the pan when cooking game and fish too. Citrus plants are not hardy in the UK, though you may have some success growing orange trees inside of a greenhouse in particularly sunny spots.",
    family: "Citrus",
    foodType: "Citrus",
    usedAs: "Fruit",
    month: ["January", "February", "March"],
    allergens: "NA",
  },
  {
    foodName: "Oyster",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/022-oyster_njpa8x.png",
    description:
      "Oysters are considered a luxury food globally for their succulent and delicate flesh and flavouring. There are various kinds of oysters, including natives, Pacific, and rock oysters. Oysters should be eaten from September through April, as during the summer months, oysters are spawning, and their flesh becomes unpleasantly soft. Rock oysters are available year round, however. Live, just-opened oysters have the best flavour, and oysters are often served live and raw on ice with lemon. Shucked - or opened - oysters should be eaten on the day they are opened. Fresh oysters can otherwise be kept in the fridge for up to three days. Rock oysters are cheaper and larger, and are considered better for cooking for this reason. Oysters can be cooked into pies, wrapped with bacon and roasted, or pan fried for a few minutes for serving in other meals.",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: [
      "January",
      "February",
      "March",
      "April",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "Crustacean",
  },
  {
    foodName: "Pak Choi",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637891/Seasonal/038-pak-choi_ujodbb.png",
    description:
      "A leafy member of the cabbage family, pak choi - also known as bok choy or Chinese celery cabbage - makes for a great addition to stir frys and noodles. The flavour is somewhere between mild cabbage and spinach, and while it can be eaten raw when young, pak choi is often at its best when briefly cooked in recipes. Three main cooking methods for this vegetable include stir frying, steaming, and simmering in water. None of these cooking methods should ever take more than a couple of minutes! Steamed pak choi is great when served with fish, but can also really suit soups, and a variety of other noodle dishes, broths, and stir frys. Try to choose pak choi with unblemished, firm stalks, and healthy looking leaves. Smaller vegetables tend to be more tender. A few alternatives to pak choi might be cabbage or spinach.",
    family: "Cabbage",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Parsnip",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/023-parsnip_zo8cbr.png",
    description:
      "Parsnips are a pale root vegetable which are a member of the carrot family - which you might guess from the shape! They are commonly mashed or roasted. They have an earthy, sweet and gentle flavour. They suit lots of winter recipes like roasts, soups and stews. Alternatives to parsnips in recipes can include carrot or turnip. Young or smaller parsnips do not need peeling before cooking, just make sure to scrub them clean thoroughly. For bigger or older parsnips, peel them thinly before roasting or boiling. Look for firm, non-shrivelled parsnips, and avoid ones with brown patches or bruises. Parsnips are fairly easy to grow and require little maintenance, and can be left in the ground until you are ready to use them. If sown in spring, your parsnips should be ready by autumn.",
    family: "Parsley",
    foodType: "Root",
    usedAs: "Vegetable",
    month: [
      "January",
      "February",
      "March",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Peach",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637892/Seasonal/039-peach_tjw63g.png",
    description:
      "A velvety-skinned stone fruit, peaches are juicy, sweet and fragrant. They generally have red skin and yellow flesh, though there are white varieties which are more pink in colour. The most common type of peach is spherical in shape and about the size of a tennis ball, though you can find disc-shaped varieties too! Ripe peaches should smell fragrant, and will be yellow around their stems. They will feel firm, but will yield slightly if squeezed. Avoid peaches that feel hard or look bruised. Underripe peaches will soften if stored at room temperature, but their taste will not get much sweeter. If you cut peaches for a raw snack, but are not going to eat them right away, brush the exposed flesh with lemon juice to prevent browning. Peaches can be eaten raw and added to fruit salads, pavlovas and trifles. They can also be poached or halved and roasted, and served with cream or ice cream too. An alternative to peaches is nectarines.",
    family: "Rose",
    foodType: "Drupe",
    usedAs: "Fruit",
    month: ["August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Pear",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/024-pear_rbtu1o.png",
    description:
      "Pears are a sweet fruit which are wider at the bottom than the top. There are thousands of varieties, only some of which are sold in the UK. Their flesh is fine, granular, and much more fragile than that of apples, and generally, their taste improves after they have been picked. Pears are delicate and bruise easily, so try to buy firm - but not hard - fruits, so that they can ripen a little at home. Avoid buying pears which look very bruised or mushy. The many varieties of pears also have some variance in flavour. Conference pears are the more commonly-seen pear on sale in the UK. Pears can be eaten raw, but they can also be stuffed and cooked, or peeled and chopped to be added into pies or made into sauces and dressings. Pears can grow in the UK, but should be planted in areas avoiding frost pockets, and it can take them several years to mature and start producing fruit.",
    family: "Rose",
    foodType: "Pome",
    usedAs: "Fruit",
    month: ["January", "September", "October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Peas",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637883/Seasonal/014-peas_ck7vlm.png",
    description:
      "A type of legume, peas grow inside of long pods. As with all legumes, their sugars turn to starch shortly after picking, so they are best eaten after just being picked. Frozen peas are put on ice within three hours of being picked, and their flavour can often be superior to that of fresh peas harvested days previously. Peas are a good source of plant-based protein. They also have a low glycemic index, so can be a good food option if you are keeping an eye on your blood sugar. Legumes are a common allergen, however, so be cautious if you have been diagnosed with a legume allergy. To cook, peas can be boiled or steamed. They do not need very long in the water, and try not to add salt, as this can make them toughen up. A little sugar will bring out their sweetness! Alternatives to peas include mangetout and broad beans.",
    family: "Legume",
    foodType: "Legume",
    usedAs: "Vegetable",
    month: [
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
    ],
    allergens: "NA",
  },
  {
    foodName: "Pepper",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637892/Seasonal/040-peppers_gplnan.png",
    description:
      "Also known as bell peppers, sweet peppers, or by their colours - for example, red peppers, yellow peppers, and green peppers. They are a non-hot member of the family that includes all chilli peppers, and vary hugely in size, shape, flavour, and heat content. Green peppers are the unripe state of red peppers, and are more acidic, vegetal and bitter, though these aspects soften when the peppers are cooked. Red, ripe peppers are sweeter and more gentle in flavour. Yellow and orange peppers are separate, individual varieties of peppers, which were specifically bred for their sweet and gentle flavours. Peppers have a very long life, especially when refrigerated. You can tell if a pepper is ageing by checking for signs of puckering on the skin around the stalks. Peppers are great to eat raw, either sliced as a snack, or included in dishes like salads. They can also be cooked into a variety of recipes, and are great stuffed with cheese and other vegetables too. Just make sure when using peppers that you remove the inner, pale membrane, as this part tastes quite bitter.",
    family: "Nightshade",
    foodType: "Berry",
    usedAs: "Vegetable",
    month: [
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
    ],
    allergens: "NA",
  },
  {
    foodName: "Plum",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/025-plum_lsppvy.png",
    description:
      "Plums are a juicy stone fruit that come in several varieties, some sweeter and some more tart. They vary in colour from deep purples and reds, to yellows and greens. They can be eaten raw, and also can be used for cooking. They are a good source of vitamins, minerals, fibre and antioxidants. When buying plums, look for ones with smooth, unblemished skins, and firm flesh that has a little give when squeezed. Plums can be halved and roasted, or poached whole. They can also be cut up, de-stoned, and used in things like tarts and pies. Plums require moist but well-draining soil, and can be demanding of the soil quality they are grown in. They also require full sun, though they are still hardy in the UK climate.",
    family: "Rose",
    foodType: "Drupe",
    usedAs: "Fruit",
    month: ["September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Pomegranate",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637893/Seasonal/041-pomegranate_xepy6o.png",
    description:
      "Mainly grown in America, Spain, the Middle East and India, pomegranates originate from the area from Northern India to Iran. They are round with a hard, shiny skin that is often red and sometimes yellow. Inside, their edible white seeds are contained within juicy, ruby-coloured sacs. These sacs are packed in a bitter, pale pith which should not be eaten, and should be peeled away. Look for pomegranates with shiny, solid skin, and avoid any with soft patches. The pomegranates that feel heavy for their size are generally the juiciest ones. Pomegranates can be enjoyed on their own, though they are also often used to decorate and add flavour to a variety of other dishes. They go well with salads, cheeses, duck, fish, chicken and pork. Some pomegranates can be hardy, and it can be possible to grow them in the UK. However, it will take some work to make sure they survive in more northern areas, or during colder months, and they might not fruit as well as hoped in our climate. If buying imported pomegranates, try to buy ones shipped from countries closer to home if possible, as the ecological footprint of getting these to our supermarkets will generally be lower.",
    family: "Punica",
    foodType: "Berry",
    usedAs: "Fruit",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Pork",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637893/Seasonal/042-pork_kzmixj.png",
    description:
      "Pork is a versatile meat, which is tender when cooked correctly, and has a lot of flavour. It is often thought of as a fatty meat, but the fat that pork contains is less saturated than that found in other meats. It is also high in protein, and is a good source of iron, zinc, and B vitamins. When buying pork, look for firm, pale pink flesh, which is damp but not oily. Avoid pork with yellow coloured fat, and look for white fat instead. Trim excess fat from the meat when preparing to cook it. Most cuts of pork can be roasted, baked or grilled, and other cooking methods include pan-frying, stir-frying, stewing and griddling. Hocks and trotters should be boiled to soften the connective tissues. They can then be stuffed and roasted as desired.",
    family: "Meat",
    foodType: "Meat",
    usedAs: "Meat",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Potato",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/026-potato_tent9c.png",
    description:
      "Potatoes are an extremely popular root vegetable, with many varieties and many ways they can be cooked. They are technically a member of the nightshade family, like tomatoes and aubergines, and their shapes, colours and sizes can vary massively. Older potatoes should be scrubbed thoroughly before use, and any eyes should be removed, though otherwise, potatoes can be cooked with their skins on - unless you are boiling them for mash, in which case, it is better to peel them too. Any green spots should be removed from potatoes, as these bits will be mildly toxic, much like all above-ground plant growth on the original potato plants! Whether turned into fries, roasted, boiled, mashed, or added to stews, hashes, pies, or the hundreds of other recipes containing potato, they are a very versatile vegetable that you can do a lot with. Potatoes are available all year round, though different varieties are in season at different times. Potatoes can be grown at home with a fair amount of ease, though you will need a lot of soil and a very large, deep container in order to grow them. ",
    family: "Nightshade",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["April", "May", "June", "July"],
    allergens: "NA",
  },
  {
    foodName: "Pumpkin",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/027-pumpkin_djp1qo.png",
    description:
      "Pumpkins are an iconic squash, traditionally orange and associated with Halloween and autumn, though they come in various colours and sizes. They are a strong source of fibre, vitamins and minerals, and are in season from October through December. Pumpkins can be tricky to work with, and it can be helpful to cut them into sections to divest them of their flesh for cooking. Make sure to scoop out strings and seeds, and cut the pumpkin into wedges or chunks as required. Pumpkin can be boiled or roasted, and used as mash, in savoury meals, or in sweet desserts like pumpkin pies. Pumpkins grow comparatively quickly, and are not too hard to care for, though they will need a bit of space.",
    family: "Cucurbita",
    foodType: "Gourd",
    usedAs: "Vegetable",
    month: ["October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Purple Sprouting Broccoli",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/040-broccoli_n360kh.png",
    description:
      "A cousin of broccoli, the leafier, crunchier, purple sprouting variety can be cooked and used in much the same way as the regular green version. As with all cruciferous foods, purple sprouting broccoli is highly nutritious, and a good source of vitamins A, B and C, iron, folic acid, calcium and fibre. The florets can be boiled in water, steamed, or fried with oil. Look for dark green-purple leaves and avoid wilting, and if you need an alternative, consider regular broccoli or cauliflower. Purple sprouting broccoli is extremely hardy, and can tolerate temperatures down below freezing, making them a good option for growing at home in the UK climate. ",
    family: "Cabbage",
    foodType: "Cruciferous",
    usedAs: "Vegetable",
    month: ["February", "March", "April"],
    allergens: "NA",
  },
  {
    foodName: "Quince",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/028-quince_l6gzts.png",
    description:
      "Quince is a fruit with a smooth, golden skin, which grows in both apple and pear-shaped varieties. They have a hard and bitter flesh, which means they are largely used in cooking, rather than being eaten raw. When cooked, the flesh turns a deep pink colour. They contain high levels of pectin, which makes them a really good contender for jellies, jams, chutneys, and other kinds of preserves. They also suit tarts and pies. Look for quinces with firm and unblemished skins, and try to avoid downy skins on quinces, as this means they are unripe. Quince trees are very adaptable, tolerate a variety of soils, and are hardy in the UK climate, meaning they can be grown here without any special care.",
    family: "Rose",
    foodType: "Pome",
    usedAs: "Fruit",
    month: ["October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Radicchio",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637893/Seasonal/043-red-cabbage_ztkwae.png",
    description:
      "Radicchio is a forced crop with red and white leaves, and is a relative of the chicory. Its colour depends on how much light it has been exposed to while growing: the more light the plant has seen, the gentler the difference between the red and white areas. Radicchio is shaped like a small cabbage and is most commonly used in salads. It has a bitter flavour that contrasts well with milder leaves, like rocket. The leaves are tender, but a whole head is sturdy enough to be cut and grilled. When buying radicchio, look for crisp leaves with no wilting. Radicchio can be grown year round. An alternative to try might be chicory.",
    family: "Daisy",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Radish",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637893/Seasonal/044-radish_mchuo6.png",
    description:
      "Radishes are a crunchy, peppery root vegetable. They are a member of the mustard family, and one of the most popular varieties of radish that you might have seen include the cherry-sized common variety, which has red skin and white flesh. Black radishes are more strongly flavoured, and there are also milder, larger varieties of radish too. Radishes are rich in folic acid and potassium. They are also a good source of vitamin B6, magnesium, and calcium. Look for firm-skinned radishes with no blemishes when shopping. Always make sure to prepare radishes just before using them, as they lose their strength when cut. Common radishes are generally used in salads, though you might also find use for mooki or daikon radishes in stir-frys. British radish season runs from May through October. They are very easy to grow from seed, and can grow in small spaces, if you are limited in where you can garden.",
    family: "Cabbage",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["May", "June", "July", "August", "September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Raspberry",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637893/Seasonal/045-raspberry_ux5ngf.png",
    description:
      "Raspberries are an intense, usually red berry with a sweet taste that are widely used in a lot of recipes. They grow well in cool and damp climates, and some lesser known varieties can come in colours like black, yellow, and gold. Look for bright, evenly-coloured, and non-mushy berries when shopping. If you are buying a punnet, make sure that the bottom layer of berries has not been crushed by the ones above it. Raspberries pair well with other fruits and other berries, especially in desserts like crumbles and pies, or alongside things like ice cream. They are also good in jams, tarts, cheesecakes and trifles, and you can use them to make coulis, sauces for game, or to flavour white wine vinegar. They are in season from late June to early September. If you have a garden or an allotment, raspberries are quite easy to grow in British climates. ",
    family: "Rose",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Redcurrant",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637894/Seasonal/046-redcurrant_gq6syn.png",
    description:
      "Redcurrants are shiny red berries that grow low on bushes. Their flavour can be tart, but they are still consumable raw, though you might want to add some sugar! They have a high vitamin C content and pair well with other berries. They also go well with goose, venison and lamb. Traditionally, redcurrants are turned into redcurrant jelly, which makes for a great accompaniment to meat. To poach redcurrants, make sure they are only in the water for about four or five minutes, or until starting to burst. You can also use them to make mousses and sorbets. Do not wash them before storing in the fridge, as they will go soggy. You can freeze them though, for later use! They are in season from July through early September generally.",
    family: "Ribes",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Rhubarb",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/029-rhubarb_syyom4.png",
    description:
      "Botanically, rhubarbs are vegetables, but their stalks are used as fruits. There are two varieties - forced and maincrop - which come in colours ranging from pink to deep red with blushes of green. Rhubarb leaves contain poison, so make sure to discard them and not to eat them. Forced rhubarb should be tender enough to eat without much alteration, but maincrop rhubarb can have tough, stringy parts which may need removing. Rhubarbs can be eaten raw, but are especially great performers in desserts, jams, crumbles and pies. They can also be paired with meat dishes, and especially suit fattier meats like pork and duck. Rhubarb is famously grown in the Rhubarb Triangle in Yorkshire, and can be grown quite successfully in the UK.",
    family: "Buckwheat",
    foodType: "Stem",
    usedAs: "Fruit",
    month: ["January", "February", "March", "April", "May", "June"],
    allergens: "NA",
  },
  {
    foodName: "Runner Bean",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637894/Seasonal/047-beans_er3cme.png",
    description:
      "Runner beans are a vegetable that originally hails from South America, though they are popularly grown in British gardens. They are stronger in flavour and more coarse than green beans, are longer, and contain purple beans! You will want to use them as soon as possible after buying or picking, as their freshness does not keep for very long. Look for beans which are bright and crisp with firm, fresh-looking pods. To cook, boil runner beans until al dente, so as to be still firm when bitten into. They make a great side to a lot of meals, and can also be added to things like pasta, curries and paella.",
    family: "Legume",
    foodType: "Legume",
    usedAs: "Vegetable",
    month: ["June", "July", "August", "September", "October", "November"],
    allergens: "NA",
  },
  {
    foodName: "Salmon",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637895/Seasonal/048-salmon_judbg6.png",
    description:
      "Salmon is a fish that is considered “anadromous” which means they live in both fresh and saltwater. They are born in freshwater where they spend a few months to a few years (depending on the species) before moving out to the ocean. Salmon is very low in saturated fat and a good source of protein. It's also one of the best sources of vitamin B12. This fish is bursting in potassium and other nutrients like iron and vitamin D. Salmon is a mild-flavoured fish with a rich and slightly oily taste to it. Baked, grilled, and poached salmon will often taste citrusy and buttery, along with whatever accompanying flavours were added to the dish. Smoked salmon tastes smokey and subtly fishy, and canned salmon can often be oily. The aquatic habitats of the five species of salmon include streams, lakes, rivers, estuaries, marine foreshore areas, and the North Pacific Ocean.",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: ["March", "April", "May", "June", "July", "August", "Fep"],
    allergens: "Fish",
  },
  {
    foodName: "Salsify",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175321/Seasonal/023-parsnip_zo8cbr.png",
    description:
      "Salsify is a root vegetable from the dandelion family, and looks like a long, thin parsnip, with cream-coloured flesh and thick skin. When buying salsify, look for firm vegetables with the green tops still attached. To prepare, scrub the root under cold water to make sure that it is clean. Then, peel, and keep the peeled pieces of salsify in a bowl of water with a bit of lemon juice. Like most root vegetables, salsify can be mashed, roasted and boiled, and used in recipes like soups and stews, and when cooked, it has a similar flavour to oysters. Salsify requires a good soil depth and germination can be hit and miss. However, once germinated, salsify grows easier than carrots and parsnips do.",
    family: "Daisy",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["January", "October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Samphire",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659690222/Seasonal/58-rosemary_tagkf0.png",
    description:
      "Samphire is a salty marine vegetable and is delicious when cooked in butter and added to seafood and pasta dishes. Although there are two types of samphire, marsh and rock. Only marsh samphire is widely available fresh. Samphire is known to be nutritionally valuable and has a wide range of benefits that may include its ability to detoxify the body, aid in digestion, protect the immune system, aid weight loss, induce sleep, and boost circulation. Marsh samphire has vibrant green stalks, similar to baby asparagus, with a distinctively crisp and salty taste. It can be used raw in salad, though it tends to be very salty, so is more often boiled or steamed for a few minutes. Samphire prefers a warm sunny position if it can find it, which makes a greenhouse the perfect environment for it to thrive. A greenhouse also provides ample protection from cold, harsh weather conditions including frost.",
    family: "Parsley",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: ["July", "August"],
    allergens: "NA",
  },
  {
    foodName: "Sorrel",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637895/Seasonal/049-sorrel_zzzw7z.png",
    description:
      "Sorrel is also referred to as spinach dock and is a plant known for its tart taste and powerful health benefits. This vibrant leafy green and its fruit are used to add a sharp, citrusy flavour to soups, sauces, salads, and beverages. Sorrel is a good source of Vitamin A and C and has been used to reduce inflammation. It is also an ingredient in the herbal cancer treatment Essiac. However, it shouldn't be eaten in large quantities as it contains a high amount of oxalic acid. Sorrel is a leafy herb, like parsley or basil or mint, that can be chopped up to use in marinades and dressings, or stirred into soups or casseroles for a bit of fresh flavour. Sorrel thrives in a sunny or partially-shady spot, in fertile and moisture-retentive soil. It can be grown from seed, but as a perennial plant, you could also take a rooted cutting or a division from an existing plant. Sow sorrel seeds in spring, a few in small pots filled with seed compost, cover and water well.",
    family: "example",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: ["April", "May", "June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Spinach",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637895/Seasonal/050-spinach_whzzyi.png",
    description:
      "Spinach is a leafy green vegetable that originated in Persia. It belongs to the amaranth family and is related to beets and quinoa. If you're interested in its health-boosting potential, spinach is an easy food to add to your diet. Spinach is rich in many nutrients, including Vitamin A, Vitamin C, Vitamin K, iron, folate, and potassium. Spinach is chock full of fibre too. Spinach may decrease oxidative stress, improve eye health, and help prevent heart disease and cancer. There are three popular ways to cook Spinach: steaming, sauteing and blanching. Either way, this nutrient-dense leafy green vegetable cooks in just minutes for a fast side dish or versatile ingredient. Winter spinach cultivars need a sunny position; summer spinach varieties are better in partial shade so are among the easiest vegetables to grow in shade.  Once you've harvested your spinach, all you need to do is water it and wait patiently for the next harvest. Spinach leaves will regrow in just a matter of days.",
    family: "Buckwheat",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: ["April", "May", "June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Spring Greens",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175319/Seasonal/042-salad_l7a7te.png",
    description:
      "Spring greens are the first young cabbages of the year. They are fresh, loose leafy greens, without the hard heart of regular cabbages. Look for spring greens with firm, fresh leaves, and no wilting. To use, remove the outer leaves, wash gently, then shred for use or cook. They can be added at the end of a stir fry, steamed and served with butter, or used in stews and soups. Take care not to overcook them, however, or they will develop an unpleasant smell and taste. As with cabbages, their older counterpart, spring greens can be grown in the UK climate.",
    family: "Cabbage",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: ["April", "May", "June"],
    allergens: "NA",
  },
  {
    foodName: "Spring Lamb",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637887/Seasonal/030-ewe_w2coor.png",
    description:
      "Spring lamb refers to lamb which is between three and five months old at the point of slaughter. The meat of the animal is very tender at this stage, though it does not have the stronger flavour which develops in older lambs, as it is the grazing period which helps flavour to develop in their flesh. When shopping for lamb, look for firm meat with a velvety texture, and make sure to look for pink colouring. The darker the meat, the older it is. Lamb freezes well, and can be served in a variety of ways, whether roasted, grilled, braised, barbecued, or minced. Grass-fed lamb can have a lower impact on the climate than the processing required to farm some other meats, and to create meat replacement products that are based on foods like soya and almonds. However, animal farming in general consumes massive amounts of energy and resources, and accounts for a huge portion of emissions globally.",
    family: "Meat",
    foodType: "Meat",
    usedAs: "Meat",
    month: ["February", "March", "April", "May", "June"],
    allergens: "NA",
  },
  {
    foodName: "Spring Onion",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637896/Seasonal/051-spring-onion_eh5trg.png",
    description:
      "Also known as scallions or green onions, spring onions are in fact very young onions, harvested before the bulb has had a chance to swell. Both the long, slender green tops and the small white bulb are edible, and are good either raw or cooked. They have a similar flavour to onions, but are much milder. Spring Onions have antibacterial and antiviral properties, aid digestion and lower blood sugar levels. They are good for your eyes, heart and will generally boost immunity. They can be sliced and eaten raw and crunchy, or cooked. Spring Onions are often thinly sliced and added to salads. Spring onions are easy to grow from seed and will grow in any fertile, well-drained soil, in full sun. For a continual harvest of spring onions in summer, sow at three-week intervals from March to August. To grow spring onions over winter, sow in September and harvest in spring.",
    family: "Amaryllis",
    foodType: "Allium",
    usedAs: "Vegetable",
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "NA",
  },
  {
    foodName: "Strawberry",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637897/Seasonal/052-strawberry_pxugsj.png",
    description:
      "A popular sweet, juicy seasonal berry enjoyed in cuisines around the world. But Botanically, the strawberry fruit is considered an “accessory fruit” and is not a true berry. Strawberries are actually a group of fruits (genus Fragaria) containing several varieties and are part of the rose family. Strawberries are usually sweet with a firm and juicy but not tough flesh. The tiny seeds add a light crunch. Flavour, colour, size, and texture can vary depending on the variety of strawberry. They are an excellent source of vitamin C and manganese and also contain decent amounts of folate (vitamin B9) and potassium. The now-common garden strawberry didn't hit its stride until the 18th century, but local wild berries have been eaten since ancient Roman times. Modern strawberries are grown and eaten all over the world and can be served raw, cooked, or dried. Strawberries like fertile, well-drained, slightly acidic soil, and do best in full sun, but will tolerate some shade. Avoid planting in sites prone to frost, which can damage the flowers, or in exposed locations, which make it hard for pollinating insects to reach the flowers.",
    family: "Rose",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Swede",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175322/Seasonal/034-turnip_ftdzdb.png",
    description:
      "Swede - which is also known as rutabaga or neeps - is a root vegetable which is often confused with turnip. Swede is round in shape, and has a purple-green skin, with yellow flesh. They can be quite difficult to cut through, but tend to disintegrate if overcooked, so be mindful of cooking times when using swede in recipes. Smaller swedes tend to be a little more tender and sweeter in flavour. To use swede, peel it like you would a potato, and then chunk it for roasting or boiling. As a root vegetable, it can be used in mash, boiled or roasted, and in the place of other root vegetables in recipes like pies and stews. Swedes are a crop which can take a long time to mature, up to half a year. They are very hardy, however, and do well in cool and damp climates.",
    family: "Cabbage",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["January", "February", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Sweet Potato",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175322/Seasonal/031-sweet-potato_migp92.png",
    description:
      "Sweet potatoes are tubers with bright orange flesh. When cooked, they have a creamy, buttery texture which is sweet, as their name suggests, though they are sometimes known as yams in the United States. They are rich in fibre and vitamins, and can act as a more nutritional alternative to regular potatoes, though care should be taken when cooking, as sweet potatoes are much more tender than regular potatoes once cooked. Traditionally, sweet potatoes can be boiled, mashed, roasted, and turned into fries, though they are also great added to dishes like curries. Look for unblemished skins and firm tubers when shopping, and alternatives you could consider include potatoes or pumpkins. Sweet potatoes do best when grown under covers, like in a greenhouse or a polytunnel, as they are native to the subtropical Americas, and require warm, sheltered and sunny growing conditions to thrive.",
    family: "Morning Glory",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["January", "February", "March", "October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Sweetcorn",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175322/Seasonal/032-corn_sjtrrl.png",
    description:
      "Sweetcorn - also known as corn on the cob - is a vegetable which is composed of several rows of tightly-packed kernels, which grow along a tough central core. Sweetcorn is best eaten as fresh as possible, as its sugars turn to starch quite quickly, which can mean it loses some of its taste and quality. Sweetcorn really shines when cooked simply, whether steamed, boiled, roasted or barbecued, and served with a little butter. Cooking times vary depending on the method you are using, but in general, fresh sweetcorn should not take very long to cook at all: a few minutes in boiling water, and up to fifteen if barbecued or roasted. Using salt in the water when cooking sweetcorn will toughen it up, so avoid it if you can, or add a little sugar instead to bring out sweetness. It can be bought fresh on the cob, tinned, or frozen. An alternative to sweetcorn could be a side of peas instead. ",
    family: "Grass",
    foodType: "Scientific Anomaly",
    usedAs: "Vegetable",
    month: ["September"],
    allergens: "NA",
  },
  {
    foodName: "Swiss Chard",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637897/Seasonal/053-chard_p4ydid.png",
    description:
      "Swiss Chard, or leaf beet, is an attractive vegetable, with leaf stalks in an array of bright colours. The stalks -- which can be white, yellow, red, purple, pink, striped and so on -- resemble flat celery with a sweet taste slightly reminiscent of beets. Swiss chard contains vitamin K, vitamin A and is also a good source of magnesium which helps keep your muscles, bones and nerves healthy. Young leaves can be eaten raw in salads, while larger leaves are delicious cooked. The large, firm leaves are mild, sweet, earthy and just slightly bitter; on the whole, it's a bit milder than spinach. Typically the leaves are boiled for a few minutes. It is similar to spinach but easier to grow. Young chard leaves are delicious eaten fresh and the fully-formed leaves will be ready to harvest about 10-12 weeks after sowing. Cut individual leaves as you need them and the plant will keep producing new growth.",
    family: "Beet",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: ["July", "August", "September", "October", "November"],
    allergens: "NA",
  },
  {
    foodName: "Tayberry",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637890/Seasonal/033-grape_jdq8ux.png",
    description:
      "Tayberries are a cross between red raspberries and blackberries. They have a strong aromatic flavour and are less acidic than loganberries, which have similar parentage. It is a reliable and prolific cropper, but the fruits can only be harvested by hand as they are very soft, which means you generally will not see tayberries commercially. Tayberries are best appreciated raw. Very soft fruits can be crushed with sugar and served as a sauce over ice cream, or a spread for scones, waffles, pancakes and pikelets. They also make a great jam, though, and can be added alongside other fruits to crumbles and pies. Tayberry wine is also a strong contender, as is tayberry macerated in cider vinegar, vodka, gin or brandy. In the UK, tayberries ripen in late July and are generally then available through August. Commercially available tayberries might have been picked underripe, and so this is a fruit you really will probably need to grow yourself to enjoy. You will need some space to grow them, however, so one way to get your hands on them a little easier might be to seek our artisan growers at markets and fairs.",
    family: "example",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["July", "August"],
    allergens: "NA",
  },
  {
    foodName: "Tomato",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637880/Seasonal/011-tomato_ighe7m.png",
    description:
      "Tomatoes are a member of the nightshade family and are in fact fruits! Their affinity for other savoury ingredients means that they are usually used as a vegetable, however. There are thousands of varieties that vary wildly in size, though they almost always have a sweet and gently tangy flavour, and are great raw and cooked. The skin, flesh and seeds can all be eaten, but the leaves are toxic, and so should always be discarded. Today, tomatoes are integral to many dishes in many cuisines. Fantastic as a snack, in a sauce, poached, grilled, baked - endless possibilities! When choosing tomatoes, look for wrinkle-free skins and a strong tomatoey smell. Underripe tomatoes can be reddened by keeping them in a brown paper bag at room temperature, or on a windowsill. The British tomato season runs from June through October, and there are lots of varieties you can grow at home, whether you have a lot of space or only a little. In winter, using canned tomatoes can help save on environmental food miles.",
    family: "Rose",
    foodType: "Berry",
    usedAs: "Vegetable",
    month: ["June", "July", "August", "September", "October"],
    allergens: "NA",
  },
  {
    foodName: "Tuna",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637887/Seasonal/028-fish_eqeczk.png",
    description:
      "Tuna are a member of the mackerel family, and are generally found in our warmer oceans. They can grow up to a massive size - up to 700kg - and their flesh is distinctively meaty, flaky and firm with a rich and strong flavour. Tuna is generally sold in steaks. It dries out quickly, and so should be cooked briefly over a high heat, marinated before cooking, or simmered in sauce. There are a lot of varieties of tuna. However, as a consequence of overfishing, only a handful of these are commercially available. Most of the available tuna are considered to be endangered to the point of extinction - Mediterranean and Atlantic - or to be in decline, like the bluefin tuna. Tuna are in season from May through early September, depending on their variety. You can check whether your tinned tuna is marked as dolphin friendly (which means it was caught by line rather than net, which can often tangle up dolphins and other marine life, causing unnecessary damage to the ecosystem). You can also check whether your tuna is marked as bird friendly (tuna fishing lines have to be tagged with coloured scare tapes, otherwise birds can fail to notice them and also get tangled in the lines). Different varieties of tuna are endangered or suffering severe decline too, however, so checking the kind of tuna being sold can also make a difference. Alternatives to tuna include: herring, tilapia, or mackerel.",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: ["May", "June", "July", "August", "September"],
    allergens: "Fish",
  },
  {
    foodName: "Turkey",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175322/Seasonal/033-turkey_ars9id.png",
    description:
      "An iconic bird which is most traditionally used at Christmas, though it can be eaten all year round. Turkey has a lot of the same nutritional benefits as chicken, though it also has a lower fat content, meaning that it can be somewhat dry. Ways of combating dryness can include basting the turkey, or alternatively, cooking the turkey more quickly and using dry brines to draw out moisture for the bird to reabsorb. This second method helps to season the meat and crisp the skin simultaneously. Fresh turkey is highly perishable, so if you are planning on using a fresh bird, buy it within two days of when you will be using it. When buying turkey, make sure the flesh is plump, soft, and evenly-coloured. Whole birds should be roasted, but smaller cuts or portions of turkey can be cooked in different ways, the same as other meats and poultry.",
    family: "Meat",
    foodType: "Fowl",
    usedAs: "Meat",
    month: ["December"],
    allergens: "NA",
  },
  {
    foodName: "Turnip",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175322/Seasonal/035-turnip-1_qclhjc.png",
    description:
      "Turnips are white root vegetables, though at the tops where they have been exposed to sunlight while growing, they will often have bursts of red, purple or green colouring on their skin. They are a good source of vitamin C and as a root vegetable, have many robust uses and applications in cooking. Turnips can be purchased year round, though baby turnips are in season in June and July, and peak season is October through February. Look for firm, heavy vegetables when purchasing. The smaller and younger the turnip, the more tender the vegetable, and sweeter its flavour. As a root vegetable, turnips can be mashed, roasted, boiled, and used in a variety of recipes where you would use root vegetables. An alternative to turnips could be swede. Turnips are quick and fairly easy to grow from seed, and should be ready within a few weeks. They can be grown in containers outdoors, and so are a good option for gardeners with a variety of spaces available to them.",
    family: "Cabbage",
    foodType: "Root",
    usedAs: "Vegetable",
    month: ["January", "February", "October", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Venison",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1666175322/Seasonal/036-deer_nccggr.png",
    description:
      "In Britain today, venison specifically refers to deer meat, though in other countries and historically, it could refer to game from any furred animal, or animals like elk and reindeer. It is a dark, lean and tender meat, and age does affect the meat: the younger the animal, the more tender its meat. Additional factors like diet, and how the animal was raised and how it was handled after it was killed, can all affect its meat. Farmed venison is available year round, as is wild roe deer. Wild red and fallow deer are only in season from late October through mid-February, however. Cuts of venison should be chosen according to how you want to cook it, as different cuts from different parts of the animal will have different qualities that will better suit roasting, grilling, barbecuing, or stewing processes, and so on. The market for venison is steadily growing as consumers seek alternatives to traditionally farmed animals like chicken and cows. As deer have only been farmed in the past few decades, and are not domesticated animals, the farming process for many suppliers tends to be less intense and free range. However, increases to scale farming to match demand will not necessarily scale sustainability, as the energy demands of intensive meat farming remain regardless of the meat which is being farmed.",
    family: "Meat",
    foodType: "Meat",
    usedAs: "Meat",
    month: ["January", "February", "November", "December"],
    allergens: "NA",
  },
  {
    foodName: "Watercress",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637898/Seasonal/055-watercress_jzk4fu.png",
    description:
      "Watercress is related to the mustard family and is one of the stronger-tasting salad leaves available. It is pungent and slightly bitter, and is generally sold in bunches or bags if you are not growing it at home. Watercress is highly nutritious, and contains large amounts of iron, calcium, and vitamins A, C and E. It is available year round, but specifically is at its best from April through September. Look for crisp, dark leaves with no sign of wilting. Watercress is highly perishable, so eat and use it soon after acquiring it. Watercress can be used in salads, soups, tarts and omelettes, as an ingredient in sandwiches, or as a garnish for game. An alternative to watercress is rocket. Watercress is very easy to grow at home, but does need a lot of water, as naturally it is a plant which grows in streams.",
    family: "Cabbage",
    foodType: "Leaf",
    usedAs: "Vegetable",
    month: ["April", "May", "June", "July", "August", "September"],
    allergens: "NA",
  },
  {
    foodName: "Watermelon",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637899/Seasonal/056-watermelon_lpehjq.png",
    description:
      "Watermelons, unlike most of their other melon relatives, are larger in size, distinctly watery, and are milder in flavour. They have a hard, striped green rind, red flesh, and are sweet. Ripe melons should sound hollow when shaken or slapped. The rind should be dull, and should not really give when pressed. Look for symmetrical melons, and avoid ones which have damaged skins. To prepare, cut in half, and scoop out the seeds. Then, slice as desired. Watermelon is great on its own, added to salads with feta and mint, or when turned into juice. Watermelons have to be imported into the UK, but are at their best from June through August.",
    family: "Cucurbita",
    foodType: "Berry",
    usedAs: "Fruit",
    month: ["July", "August"],
    allergens: "NA",
  },
  {
    foodName: "Whiting",
    imageURL:
      "https://res.cloudinary.com/dvpop7e9w/image/upload/v1659637890/Seasonal/034-mackerel_f8xvhi.png",
    description:
      "Whiting is related to cod, but is generally cheaper and a little less flavoursome. Whiting are a small, silvery fish with tender, white, firm flesh. Whiting is low in fat and generally is in season from June through February. As whiting fillets are small, you will generally want to allow two per serving. Buy your whiting as fresh as possible, as the fish becomes flakey and impossible to fillet quickly. You will want to use your whiting within one or two days of purchase. Whiting is great coated in breadcrumbs or battered, as well as in fishcakes, turned to mousse, grilled, fried in butter, or even poached in wine. An alternative to whiting might be hake or seabass.",
    family: "Fish",
    foodType: "Fish",
    usedAs: "Fish",
    month: [
      "January",
      "February",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    allergens: "Fish",
  },
];

export default produce;
