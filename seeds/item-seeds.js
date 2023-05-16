const { item } = require('../models');

const itemData = [
  {
    item_name: 'Crimson Feather',
    description: 'A rare feather from an exotic bird, known for its vibrant red color and symbolic significance. When dipped in colored ink, it infuses the paint with magical properties. The resulting brushstrokes seem to come alive and produce the most beautiful works of art. So enchanting it can make even the most uncultured and shady schemer re-evaluate his life choices and turn over a new leaf'
  },
  {
    item_name: 'Solar Compass',
    description: 'A celestial navigational instrument that harnesses the power of sunlight to guide travelers through uncharted lands. It provides precise directions even in the most treacherous environments.',
  },
  {
    item_name: 'Gossamer Grove Spade',
    description: 'A remarkable tool that harmonizes the art of gardening with a touch of enchantment. Crafted by an ancient order of mystical faeries, the spade gives the unique experience of effortlessly tending to beloved plants without the worry of breaking a nail or experiencing discomfort. ',
  },
  {
    item_name: 'Astronauts Log Book',
    description: 'A weathered and out of print logbook filled with handwritten accounts and adventures of a legendary astronaut. Perfect reading for an interstellar space journey.',
  },
  {
    item_name: 'Botanical Elixir ',
    description: 'Also known as Whispering Bloom, Botanical Elixir was created centuries ago by a reclusive herbalist who possessed a deep connection with nature. Seeking to nurture and restore the balance of the natural world, and support a variety of life. Legend has spread across the galaxy, that when in the hands of a true lover of flora, it has helped reseed entire planets.'
  },
  {
    item_name: 'Starlight Harp',
    description: 'A celestial musical instrument that resonates with the harmony of the cosmos. When played under a starry night sky, its ethereal melodies have the power to soothe hearts, inspire creativity, and even evoke celestial phenomena.',
  },
  {
    item_name: 'Stealth Striders',
    description: 'A pair of pants cut from a specialized cloth. It allows the wearer to have maximum agility and silent movement. They are durable an sleek in appearance and make your butt look great!',
  },
  {
    item_name: 'Medical Kit',
    description: 'Barf has used most of the bandaids but there still may be a few drops of antibiotic and a bit of gauze.',
  },
  {
    item_name: 'Aetheric Spanner',
    description: 'A unique tool that appears to be an ordinary wrench at first glance but possesses hidden mechanisms and modifications specifically designed for repairing intricate machinery found on futuristic spacecraft',
  },
  {
    item_name: 'Timekeepers Pocket Watch',
    description: 'A beautifully engraved pocket watch with intricate gears and a mesmerizing ticking sound that lulls even the most fitful sleeper to sleep',
  },
  {
    item_name: 'Wispfire Lantern',
    description: 'A mystical lantern containing a captured wisp of elemental fire. When lit, it emits a warm, gentle glow and grants the bearer protection against darkness.',
  },
  {
    item_name: 'Arcane Locket',
    description: 'A delicate locket containing a hidden compartment that holds an old photograph of great-great-great-grandfather Hydra. It is very valuable but its highest value is sentimental',
  },
  {
    item_name: 'Ethereal Hammer',
    description: 'A hammer with a translucent, shimmering head that can phase through solid objects. It can repair damaged structures or objects without the need for dismantling, making it an invaluable tool for repairs in hart-to-reach places.',
  },
  {
    item_name: 'Stellar Scope',
    description: 'A compact telescope with celestial enchantments. See distant celestial bodies with incredible clarity, unravel cosmic phenomena, and even decipher encrypted astral messages.',
  },
  {
    item_name: 'Universal Translator',
    description: 'A device loaded with software that allows the traveler to understand and communicate in different alien species by translating languages and dialects in real-time. Extremely useful, for space-travel. But it is glitching and currently only translates Zork, the language of a reclusive species that hasnt been seen in eons.',
  },
 


];

const seedCharacters = () => character.bulkCreate(characterData);

module.exports = seedCharacters;