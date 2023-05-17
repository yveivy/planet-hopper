const { Characters } = require('../models');

const characterData = [
  {
    character_name: 'Barf',
    role: 'Outcast wannabe Hero',
    bio: 'Barf is an outcast but wants to save his world',
    // `Barf is an outcast on his home planet. Building spaceships from junk parts is his passion, but it leaves him looking dirty, smelly and alienated from his community. His planet is running out of oxygen because all the plants are dying. When things on his home planet are dire, Barf steps up with his junk craft to save the people who care little for him. With little more than some scribbled coordinates and a sprig of hope, Barf hurdles himself into space. But junk parts don't make for a smooth landing and he crash lands into his intended destination. And its tough to make a great first impression when you've somehow lost your pants during the journey.`

  },// Barf needs pants, the Botanical Elixir, and a tool to repair his ship.
  {
    character_name: 'Zara Sparks',
    role: 'Mechanic',
    bio: `Zara is a skilled mechanic that can't get any rest`
    // 'Zara is a spirited and skilled mechanic. She specializes in repairing machinery and always has a toolbox in her hand. She seems to know everything there is to know in the world of gears, engines and intricate machinery. Shes ready to retire and move to the countryside, but after years of hearing the hum and whir of machinery, its just too quiet and she cant sleep'
    // Zara has the Aetheric Spanner
    // She needs the Timekeepers Pocket Watch
  },
  {
    character_name: 'Beryl and Basil Hydra',
    role: 'Bickering duo',
    bio: `The Hydras don't get along with anyone, even each other`,
    // `The hydra is a 2 headed beast. They are surly and bad tempered so don't have many friends. Unfortunately they also don't get along with each other and aren't on speaking terms. Basil blames Beryl for losing something very important and will never let it go.`
    // Hydra wants the Arcane Locket that Shady Stole
    // Hydra has some healing balm passed down from an old family recipe. Guaranteed to heal and soften the roughest hands.
  },
  {
    character_name: 'Abe Harmony',
    role: 'Artist',
    bio:`Abe makes beautiful art, but lacks inspiration.`,
    // `Abe is a passionate and resilient soul, that embraces the struggle and sacrifice in pursuit of artistic expression. But lately he feels like he keeps painting the same scenes. Too bad he hates to travel. He'd rather read about someone elses adventures and illustrate the book. `
    // He'd find inspiration in the Astronauts log book
    // He has the stellar scope, perfect for star-gazing
  },
  {
    character_name: 'Shady Schemer',
    role: 'Conman',
    bio: `It may seem like a good deal but never turn your back on Shady`,
    // `Shady is a master of manipulation and deception. He may give have the part you need to repair your ship but he'll strip your ship for parts when you're not looking. But even terrible people have hobbies. Shady is an avid stargazer but his telescope is broken.
    
    //Noone will make any deals with him anymore because he's so dishonest. So he hasn't been able to repair his telescope.
    //He has the Arcane Locket that he stole from Hydra. They are blaming each other for losing it, but it was swiped by Shady a long time ago. 
  },
  {
    character_name: 'Taylor Tuck',
    role: 'Tailor',
    bio: `Tuck can stitch up the finest garments but his fingers are raw and his joints are stiff. `,
    // `Tuck is a master tailor, capable of together the most beautiful garments from the most meager materials. However, years of pulling thread and handling rough fabrics have left his fingers raw and sore. He longs for a solution to alleviate his discomfort so he can continue his beloved craft`.
    //He'll part with any of his fine garments for something that gives him a little relief in his aching hands.
  },
  {
    character_name: 'Violet Meadows',
    role: 'Botanist',
    bio: `Violet loves flora and getting her hands in the dirt, even if it means breaking a nail`,
    // `Violet is a delightful and dedicated botanist, who finds wonder in the enchanting realm of flora. She's a girl that always has dirt under her nails.`
    
    // With her expertise in plant identification, cultivation techniques, and conservation practices, her knowledge just may be the key to saving Barf's planet. Too bad she is super creeped out that he doesn't have pants.

    // Violet has the Botanical Elixir, that will save Barf's planet. But she won't talk to him unless he has pants. She's not picky on trades. If Barf really turns on the charm she may just give it to him.'
  }

];

const seedCharacters = () => Characters.bulkCreate(characterData);

module.exports = seedCharacters;
