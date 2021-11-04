import sunbathingIcon from './media/appIcons/sunbathingIcon.png';
import colorMixerIcon from './media/appIcons/colorMixerIcon.jpg';
//import stickIcon from './media/appIcons/dunkIcon.png';
import islandIcon from './media/appIcons/islandIcon.png';
import popcornIcon from './media/appIcons/popcornIcon.png';
import candyCubeIcon from './media/appIcons/candyCubeIcon.png';
import snapIcon from './media/appIcons/snapIcon.png';
import saveHerIcon from './media/appIcons/saveHerIcon.png';
import torchMasterIcon from './media/appIcons/torchMasterIcon.jpg';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ekinsubozdag.github.io',
  title: 'Ekinsu Bozdag',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ekinsu Bozdag',
  role: 'Game Developer',
  description:
  [
    'High School - Ankara Atatürk \'11',
    'B.S. in CS - Bilkent University \'15',
  ],
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/ekinsu-bozda%C4%9F-a0892b167',
    github: 'https://github.com/ekinsubozdag',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Stick Wizard Game',
    short_description: 'Defeat ghost with drawing their signs.',
    description:
      'Random number of ghosts comes next to the player.' +
      'Levels have multiple stages of ghost attack.' +
      'Defeat them by drawing particular sign on their head.' +
      'When ghost come closer to the players area before drawing level fails. ' +
      'Reaching the opponent\'s area enables dunk mode where you can get style points and make a slam dunk.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    //appIcon: stickIcon,
    videoUrl: "https://vimeo.com/641868531",
    details: [
      "Development platform: Unity",
      "Development time: ~2 week",
      'had a reference one of Google halloween mini game',
    ],
  },
  {
    name: 'Foresight Game',
    short_description: 'Tap in true position',
    description:
      'Every level has different scenerio' +
      'Levels have stages,character animate different poses in stages' +
      'Game aim is tapping on the right time' ,
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
   // appIcon: siegeHeroIcon,
    videoUrl: "https://vimeo.com/641925710",
    details: [
      "Development platform: Unity",
      "Development time: ~2 month",
      "I worked with unity timeline feature in this game",
    ],
  },
  {
    name: 'Pop My Corn',
    short_description: 'Pop the corns and save the boy stuck inside',
    description:
      'Save the little guy stuck inside the popcorn machine. ' +
      'The corns will pop where you touch your finger. ' +
      'Have to play carefully and choose which corns to pop, otherwise your guy may get stuck in a corner somewhere. ',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: popcornIcon,
    videoUrl: "https://vimeo.com/615724463",
    details: [
      "Development platform: Unity",
      "Development time: ~1 week",
      "Depended heavily on physics",
      "Although game is 3D, relied on a single layer of corns tightly fit between invisible quads so the visuals were lacking",
      "The mechanics are somewhat original and may turn out to be good if used in a different context",
      "Custom blendshape animations for popping corns as well as a custom glass machine designed by the 3D artist",
    ],
  },
  {
    name: 'Island Clash',
    short_description: 'Merge the islands and defeat the boss',
    description:
      'Mini strategy game in which you control little islands that carry your army. ' +
      'Pick up volcano island and merge it with forest, the forest burns down and damagest the enemy. ' +
      'Pick up waterfall island and merge it with the volcano, your allies heal up and join your army. ' +
      'Follow the correct order of merges to build the biggest army possible. ' +
      'Only then you will able to defeat the big boss at the end',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: islandIcon,
    videoUrl: "https://vimeo.com/615724306",
    details: [
      "Development platform: Unity",
      "Development time: ~3 weeks",
      "Mostly collider based logic",
      "Custom shaders and effects",
      "Not really successful to convey what type of island is useful for what, lacking in the aspect of game design"
      ],
  },
  {
    name: 'Sunbathing',
    short_description: 'Get the perfect tan',
    description:
      'A summer themed game where you try to get as much sunlight as possible. ' +
      'Each level begins with a sunscreen phase, you have to rub the sunscreen fast to move on.' +
      ' Then the tanning phases begin, you have to avoid the shadows to tan the character properly.' +
      ' In addition, some random objects may come into play and try to block your sun.' +
      ' At the end how much sun tan you got is calculated and a success ratio is determined.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: sunbathingIcon,
    videoUrl: "https://vimeo.com/637362033",
    details: [
      "Development platform: Unity",
      "Development time: ~3 weeks",
      "relied heavily on Inverse Kinematics",
      "contributed heavily to the custom shader created by the Technical Artist",
      "custom tanning made possible by manipulating vertex color of the mesh",
      "tan % calculated by finding out the ratio of tanned vertices",
    ],
  },
  {
    name: 'Snap It All',
    short_description: 'Get rid of annoying flies',
    description:
      'Flies are especially annoying in the summer. ' +
      'Help the old lady kill some flies by slapping, spraying or throwing slippers at them. ',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: snapIcon,
    videoUrl: "https://vimeo.com/615725220",
    details: [
      "Development platform: Unity",
      "Development time: ~1 weeks",
      "Fun little game with cute grandma and custom made flies",
      "Although visually decent, the gameplay was hard due to the controls"
      ],
  },
  {
    name: 'Color Mixer',
    short_description: 'Mix the colors to reach the destination',
    description:
      'Each level has a target color as a destination.' +
      ' The purpose is to draw a line passing through correct colors to reach the target.' +
      ' While passing through each color, the color of the line gradually mixex towards the combination of all colors touched so far.' +
      ' If any of the obstacles laying around is touched, you have to start over.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: colorMixerIcon,
    videoUrl: "https://vimeo.com/615724233",
    details: [
      "Development platform: Unity",
      "Development time: ~1 week",
      "relied on custom shader for showing the drawn line with brush strokes",
      "color mixing is attempted to represent how water colors actually mix in real life",
    ],
  },
  {
    name: 'Candy Cube',
    short_description: 'Match and destroy the cubes',
    description:
      'A simple cube puzzle game where you need to match colors to destroy little cubes inside.' +
      ' After you match the cubes, if they are destroyed the cubes currently above fall down.' +
      ' Each time cubes fall, new matches are checked, so it is possible to match multiple sets of cubes to make combos.' +
      ' Also possible to rotate the cube to find more matches.' +
      ' The goal in each level to reach the target score without running out of time.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: candyCubeIcon,
    videoUrl: "https://vimeo.com/615724190",
    details: [
      "Development platform: Unity",
      "Development time: ~1 week",
      "Biggest challenge was to make the cubes fall down depending on the rotation of the cube instead of physics",
      "Used a matrix to hold a reference to all the cubes and find out if any of the cubes are missing below a cube to make it fall",
      "When a matching is searched, the cubes on the edges allow matches to follow to the connected sides of the cubes"
    ],
  },
  {
    name: 'Save Her',
    short_description: 'Save the girl from the zombies',
    description:
      'A game where you play the role of a dual power wielding super hero.' +
      'Protect the girl at all times by casting ice beam on the zombies running after her. ' +
      'When a zombie is completely frozen, automatically send a fireball to shatter it and inflict damage around the impact. ' +
      'Recommended to use the objects around to make your job easier such as the wooden bridge and explosive barrels. ',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: saveHerIcon,
    videoUrl: "https://vimeo.com/615724585",
    details: [
      "Development platform: Unity",
      "Development time: ~2 weeks",
      'used splines for the movement of camera, hero and the girl',
      'relied on NavMesh to control the zombies',
      'custom shaders on ice beam, fire ball and explosions',
      'separate but synchronized animations for the level end sequence',
    ],
  },
  {
    name: 'Torch Master',
    short_description: 'Light up as many cakes as you can',
    description:
      'In this birthday party themed game, your task is to light up as many cakes as you can.' +
      ' Don\'t let your gas run out by timing your moves precisely' +
      ' But watch out for the bomb cakes!',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: torchMasterIcon,
    videoUrl: "https://vimeo.com/615725255",
    details: [
      "Development platform: Unity",
      "Development time: ~1 week",
      "Simple collider game where cakes spawn at a distance and move towards camera",
    ],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C#',
  'Unity',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Java',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ekinzu09@gmail.com',
}

export { header, about, projects, skills, contact }
