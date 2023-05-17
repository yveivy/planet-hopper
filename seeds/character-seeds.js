const { character } = require('../models');

const characterData = [
  {
    character_name: 'Barf',
    role: 'Outcast wannabe Hero',
    bio: `Barf is an outcast on his home planet. Building spaceships from junk parts is his passion, but it leaves him looking dirty, smelly and alienated from his community. His planet is running out of oxygen because all the plants are dying. When things on his home planet are dire, Barf steps up with his junk craft to save the people who care little for him. With little more than some scribbled coordinates and a sprig of hope, Barf hurdles himself into space. But junk parts don't make for a smooth landing and he crash lands into his intended destination. And its tough to make a great first impression when you've somehow lost your pants during the journey.`
  },// Barf needs pants, the Botanical Elixir, and a tool to repair his ship.
  {
    character_name: 'Zara Sparks',
    role: 'Mechanic',
    bio: 'Zara is a spirited and skilled mechanic. She specializes in repairing machinery and always has a toolbox in her hand. She seems to know everything there is to know in the world of gears, engines and intricate machinery. Shes ready to retire and move to the countryside, but after years of hearing the hum and whir of machinery, its just too quiet and she cant sleep'
    // Zara has the Crimson Feather that Abe wants
    // She needs the Timekeepers Pocket Watch
  },
  {
    character_name: 'Beryl and Basil Hydra',
    role: 'Bickering duo',
    bio: `The hydra is a 2 headed beast. They are surly and bad tempered so don't have many friends. Unfortunately they also don't get along with each other and aren't on speaking terms. Basil blames Beryl for losing something very important and will never let it go.`
    //Hydra wants the Arcane Locket that Shady Stole
    // Hydra has the Gossamer Grove Spade
  },
  {
    character_name: 'Abe Harmony',
    role: 'Hydra',
    bio: `Abe is a passionate and resilient soul, that embraces the struggle and sacrifice in pursuit of artistic expression. His life is filled with sleepless nights, meager meals, and a relentless determination to share his creations with his world`
    //Has art that Shady needs that will improve Shady's character and make him a better person. But it won't exist until Abe has the Crimson Feather.
  },
  {
    character_name: 'Shady Schemer',
    role: 'Conman',
    bio: `Shady is a master of manipulation and deception. He may give have the part you need to repair your ship but he'll strip your ship for parts when you're not looking.`
    //Has the Arcane Locket that he stole from Hydra. They are blaming each other for losing it, but it was swiped by Shady a long time ago. But he's not the kind of person that gives things up easily. He needs a personality makeover to change his scheming ways.
  },
  {
    character_name: 'Violet Meadows',
    role: 'Botanist',
    bio: `Violet is a delightful and dedicated botanist, who finds wonder in the enchanting realm of flora. She's a girl that always has dirt under her nails. With her expertise in plant identification, cultivation techniques, and conservation practices, her knowledge just may be the key to saving Barf's planet. Too bad she is super creeped out that he doesn't have pants.`
    //Violet has the Botanical Elixir, that will save Barf's planet. But she won't talk to him unless he has pants. And she'll trade for the Grove Spade  that Hydra has. Or if Barf really turns on the charm she may just give it to him.
  },

];

const seedCharacters = () => character.bulkCreate(characterData);

module.exports = seedCharacters;
