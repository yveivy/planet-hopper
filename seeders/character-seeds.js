const { Characters } = require('../models');

const characterData = [
  {
    searchable_name: 'barf',
    full_name: 'Barf',
    role: 'Outcast and Wannabe Hero',
    bio: `Barf is an outcast on his home planet. Building spaceships from junk parts is his passion, but it leaves him looking dirty, smelly and alienated from his community. His planet is running out of oxygen because all the plants are dying. When things on his home planet are dire, Barf steps up with his junk craft to save the people who care little for him. With little more than some scribbled coordinates and a sprig of hope, Barf hurdles himself into space. But junk parts don't make for a smooth landing and he crash lands into his intended destination. Its tough to make a great first impression with the locals when you've somehow lost your pants during the journey.`

  },// Barf needs pants, the Botanical Elixir, and a tool to repair his ship.
  {
    searchable_name: 'zara-sparks',
    full_name: 'Zara Sparks',
    role: 'Mechanic',
    bio: `Zara is a spirited and skilled mechanic. She specializes in repairing machinery and always has a toolbox in her hand. She seems to know everything there is to know in the world of gears, engines and intricate machinery. Shes ready to retire and move to the countryside, but after years of hearing the hum and whir of machinery, its just too quiet and she cant sleep`
    // Zara has the Aetheric Spanner
    // She needs the Timekeepers Pocket Watch
  },
  {
    searchable_name: 'beryl-and-basil-hydra',
    full_name: 'Beryl and Basil Hydra',
    role: 'Bickering duo',
    bio: `The hydra is a fearsome 2 headed beast. They are surly, bad tempered and don't make many friends. Unfortunately they also don't get along with each other and aren't on speaking terms. Basil blames Beryl for losing something very important and will never let it go.`
    // Hydra wants the Arcane Locket that Shady Stole
    // Hydra has some healing balm passed down from an old family recipe. Guaranteed to heal and soften the roughest hands.
  },
  {
    searchable_name: 'abe-harmony',
    full_name: 'Abe Harmony',
    role: 'Artist',
    bio:`Abe is a passionate and resilient soul, that embraces the struggle and sacrifice in pursuit of artistic expression. But lately he feels like he keeps painting the same scenes. Too bad he hates to travel. He'd rather read about someone elses adventures and illustrate the book. `
    // He'd find inspiration in the Astronauts log book
    // He has the stellar scope, perfect for star-gazing
  },
  {
    searchable_name: 'shady-schemer',
    full_name: 'Shady Schemer',
    role: 'Conman',
    bio: `It may seem like a good deal but never turn your back on Shady. He is a master of manipulation and deception. He may have the part you need to repair your ship but he'll strip your ship for parts when you're not looking. But even terrible people have hobbies. Shady is an avid stargazer, but too bad his telescope is broken. He can't find anyone to make the repair because hardly anyone wants to do business with Shady.`

    //He has the Arcane Locket that he stole from Hydra. They are blaming each other for losing it, but it was swiped by Shady a long time ago. 
  },
  {
    searchable_name: 'taylor-tuck',
    full_name: 'Taylor Tuck',
    role: 'Tailor',
    bio: `Tuck is a master tailor, capable of putting together the most beautiful garments from the most meager materials. However, years of pulling thread and handling rough fabrics have left his fingers raw and his joints stiff. He longs for a solution to alleviate his discomfort so he can continue his beloved craft.`
    //He'll part with any of his fine garments for something that gives him a little relief in his aching hands.
  },
  {
    searchable_name: 'violet-meadows',
    full_name: 'Violet Meadows',
    role: 'Botanist',
    bio: ` Violet is a delightful and dedicated botanist, who finds wonder in the enchanting realm of flora. She's a girl that always has dirt under her finger nails. With her expertise in plant identification, cultivation techniques, and conservation practices, her knowledge just may be the key to saving Barf's planet. Too bad she is super creeped out that he doesn't have pants.`

    // Violet has the Botanical Elixir, that will save Barf's planet. But she won't talk to him unless he has pants. She's not picky on trades. If Barf really turns on the charm she may just give it to him.'
  }

];

const seedCharacters = () => Characters.bulkCreate(characterData);

module.exports = seedCharacters;
