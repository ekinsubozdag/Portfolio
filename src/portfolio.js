import stickIcon from './media/appIcons/stickIcon.png';
import takeIcon from './media/appIcons/takeIcon.png';
import dontIcon from './media/appIcons/dontIcon.png';
import easterIcon from './media/appIcons/easterIcon.png';
import pusherIcon from './media/appIcons/pusherIcon.png';
import zombieIcon from './media/appIcons/zombieIcon.png';
import brideIcon from './media/appIcons/brideIcon.png';
import foreIcon from './media/appIcons/foreIcon.png';
import grabIcon from './media/appIcons/grabIcon.png';

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
            'High School - Ankara Atatürk \'14',
            'B.S. in CS - Bilkent University \'19',
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
        appIcon: stickIcon,
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
            'Game aim is tapping on the right time',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: foreIcon,
        videoUrl: "https://vimeo.com/641925710",
        details: [
            "Development platform: Unity",
            "Development time: ~2 month",
            "I worked with unity timeline feature in this game",
        ],
    },
    {
        name: 'Easter Egg Runner',
        short_description: 'Egg clones in runner platform',
        description:
            'Eggs can fall into holes' +
            'When egg are crack the visual is obi fluid',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: easterIcon,
        videoUrl: "https://vimeo.com/641927501",
        details: [
            "Development platform: Unity",
            "Development time: ~3 week",
            "Unity asset: Obi fluid",
            "Custom shaders and effects",
        ],
    },
    {
        name: 'Bride To Be',
        short_description: 'Bride in runner platform',
        description:
            'Main Goal is collecting wools and flowers till the level ending ' +
            'Part of Bride dress is obi rope',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: brideIcon,
        videoUrl: "https://vimeo.com/641928432",
        details: [
            "Development platform: Unity",
            "Development time: ~2 month",
            "Unity Asset: Obi Rope"
        ],
    },
    {
        name: 'Pusher Escape',
        short_description: 'Push enemies with objects',
        description:
            'Objects that player can hold gets bigger in time ' +
            'Player can push enemies with those objects',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: pusherIcon,
        videoUrl: "https://vimeo.com/642220080",
        details: [
            "Development platform: Unity",
            "Development time: ~3 weeks",
            "Nav Mesh for Enemies",
        ],
    },
    {
        name: 'Take a Photo',
        short_description: 'Move the Girl to right position',
        description:
            'We can control girls body parts' +
            'Main goal is dragging the girl into right poses',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: takeIcon,
        videoUrl: "https://vimeo.com/642219604",
        details: [
            "Development platform: Unity",
            "Development time: ~3 weeks",
            "Unity Asset: FinalIk",
        ],
    },
    {
        name: 'Grab Your Meal',
        short_description: 'Collecting the right amount of food',
        description:
            'Goal is reaching the right amount of food before enemies take them',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: grabIcon,
        videoUrl: "https://vimeo.com/642219983",
        details: [
            "Development platform: Unity",
            "Development time: ~1 week",
        ],
    },
    {
        name: 'Dont Let Cross',
        short_description: 'Tape the door to block the enemies ',
        description:
            'Goal is keeping enemies behind the door' +
            'Levels have different stages',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: dontIcon,
        videoUrl: "https://vimeo.com/641930163",
        details: [
            "Development platform: Unity",
            "Development time: ~3 week",
            "Unity Assets: Obi Rope, Puppet Master",
        ],
    },
    {
        name: 'Zombie Vampire Run',
        short_description: 'Transform into a vampire',
        description:
            'Game starts with zombie player, transforms into a vampire throughout the levels' +
            'Player collects clones in each level and fight with enemies' +
            'Game has level ending mechanic, player drags clones into coffins',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: zombieIcon,
        videoUrl: "https://vimeo.com/642220364",
        details: [
            "Development platform: Unity",
            "Development time: ~1 month",
            'Unity asset: Puppet Master',
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
    'Git',
    'Java',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'ekinzu09@gmail.com',
}

export {header, about, projects, skills, contact}
