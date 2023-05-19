const { Items } = require('../models');

const itemData = [
  
  {
    searchable_item: 'astronauts-log-book',
    item_name: 'Astronauts Log Book',
    description: `A weathered and out of print logbook filled with handwritten accounts of a legendary astronaut. The book is filled with vivid descriptions and details of all the places he visited. You can almost imagine it, but it would be even better if it was illustrated.`,
  },
  {
    searchable_item: 'medical-kit',
    item_name: 'Medical Kit',
    description: `Barf has used most of the bandaids but there still may be a few drops of antibiotic and a bit of gauze.`,
  },
  {
    searchable_item: 'timekeepers-pocket-watch',
    item_name: 'Timekeepers Pocket Watch',
    description: `A beautifully engraved pocket watch with intricate gears and a mesmerizing ticking sound that lulls even the most fitful sleeper to sleep`,
  },
  {
    searchable_item: 'universal-translator',
    item_name: 'Universal Translator',
    description: `A device loaded with software that allows the traveler to understand and communicate in different alien species by translating languages and dialects in real-time. Extremely useful, for space-travel. But it is glitching and currently only translates Zork, the language of a reclusive species that hasn't been seen in eons.`,
  },
  {
    searchable_item: 'gossamer-grove-spade',
    item_name: 'Gossamer Grove Spade',
    description: `A remarkable tool that harmonizes the art of gardening with a touch of enchantment. Crafted by an ancient order of mystical faeries, the spade gives the unique experience of effortlessly tending to beloved plants without the worry of breaking a nail or experiencing discomfort.`,
  },
  {
    searchable_item: 'Aetheric-spanner',
    item_name: 'Aetheric Spanner',
    description: `A unique tool that appears to be an ordinary wrench at first glance but possesses hidden mechanisms and modifications specifically designed for repairing intricate machinery found on futuristic spacecraft`,
  },
  {
    searchable_item: 'eye-of-newt',
    item_name: 'Eye of Newt',
    description: `You don't want to know`,
  },
  {
    searchable_item: 'healing-balm-of-beryl',
    item_name: 'Healing Balm of Beryl',
    description: `A legendary salve known for its extraordinary restorative properties. Its crafted from a mix of rare healing herbs that grow in a dangerous forest, that only Hydras dare to venture. The recipe has been passed down for centuries to all Hydras who have notoriously rough skin.`,
  },
  {
    searchable_item: 'solar-compass',
    item_name: 'Solar Compass',
    description: `A celestial navigational instrument that harnesses the power of sunlight to guide travelers through uncharted lands. It provides precise directions even in the most treacherous environments.`,
  },

  {
    searchable_item: 'stellar-scope',
    item_name: 'Stellar Scope',
    description: `A compact telescope with celestial enchantments. See distant celestial bodies with incredible clarity, unravel cosmic phenomena, and even decipher encrypted astral messages.`,
  },
  { 
    searchable_item: 'crimson-feather',
    item_name: 'Crimson Feather',
    description: `A rare feather from an exotic bird, known for its vibrant red color and symbolic significance. When dipped in colored ink, it infuses the paint with magical properties. The resulting brushstrokes seem to come alive and produce the most beautiful works of art. Legend has it that it was plucked from the tail feathers of the bird by the Hydra's great-great-great-grandfather.`
  },
  {
    searchable_item: 'arcane-locket',
    item_name: 'Arcane Locket',
    description: `A delicate locket containing a hidden compartment that holds an old photograph of great-great-great-grandfather Hydra. It is very valuable but its highest value is sentimental`,
  },
  {
    searchable_item: 'stealth-striders',
    item_name: 'Stealth Striders',
    description: `A pair of pants cut from a specialized cloth. It allows the wearer to have maximum agility and silent movement. They are durable and sleek in appearance and make your butt look great!`,
  },

  {
    searchable_item: 'wispfire-lantern',
    item_name: 'Wispfire Lantern',
    description: `A mystical lantern containing a captured wisp of elemental fire. When lit, it emits a warm, gentle glow and grants the bearer protection against darkness.`,
  },

  {
    searchable_item: 'botanical-elixir',
    item_name: 'Botanical Elixir ',
    description:`Also known as Whispering Bloom, Botanical Elixir was created centuries ago by a reclusive herbalist who possessed a deep connection with nature. Seeking to nurture and restore the balance of the natural world, and support a variety of life. Legend has spread across the galaxy, that when in the hands of a true lover of flora, it has helped reseed entire planets.`
  },
  {
    searchable_item: 'starlight-harp',
    item_name: 'Starlight Harp',
    description:`A celestial musical instrument that resonates with the harmony of the cosmos. When played under a starry night sky, its ethereal melodies have the power to soothe hearts, inspire creativity, and even evoke celestial phenomena.`,
  },
 
];

const seedItems = () => Items.bulkCreate(itemData);

module.exports = seedItems;