import stickIcon from './media/appIcons/stickIcon.png';
import takeIcon from './media/appIcons/takeIcon.png';
import dontIcon from './media/appIcons/dontIcon.png';
import easterIcon from './media/appIcons/easterIcon.png';
import pusherIcon from './media/appIcons/pusherIcon.png';
import zombieIcon from './media/appIcons/zombieIcon.png';
import brideIcon from './media/appIcons/brideIcon.png';
import foreIcon from './media/appIcons/foreIcon.png';
import grabIcon from './media/appIcons/grabIcon.png';
import boonieIcon from './media/appIcons/boonieIcon.png';
import sewIcon from './media/appIcons/sewIcon.png';
import cashIcon from './media/appIcons/cashIcon.png';
import colormixIcon from './media/appIcons/colormixIcon.png';
import colorshotsIcon from './media/appIcons/colorshotsIcon.png';
import coloridleIcon from './media/appIcons/coloridleIcon.png';
import nonIcon from './media/appIcons/nonIcon.png';

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
        name: 'Color Mix Idle',
        short_description: 'Arcade idle make up company',
        description:
            'Mix the colors and try to make bestseller color for your products.' +
            'Take the color tubes from the source tanks, attach them to the mixer tanks and produce different makeup products.' +
            'Sell make up prouducts to your customers.' +
            'Keeping up to produce and collect money to unlock different types of makeup products',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: coloridleIcon,
        videoUrl: "https://vimeo.com/741862553",
        details: [
            "Development platform: Unity",
            "Development time: 1 month",
            'Tool: Liquid shader',
        ],
    },
    {
        name: 'Color Mixer Puzzle',
        short_description: 'ASMR color mix puzzle game',
        description:
            'Mix colors with the color tubes and try to find the perfect match!',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: colormixIcon,
        videoUrl: "https://vimeo.com/741872406",
        details: [
            "Development platform: Unity",
            "Development time: 2 weeks",
            'Tool: Liquid Shader, Ripple Shader, Dynamic Bone, Final Ik',
        ],
    },
    {
        name: 'Colorshots',
        short_description: 'Puzzle game',
        description:
            'Swipe the glasses, let them fall into each other.' +
            'Your aim is to match the same colors',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: colorshotsIcon,
        videoUrl: "https://vimeo.com/741863101",
        details: [
            "Development platform: Unity",
            "Development time: 2 weeks",
            'Tool: Liquid Shader',
        ],
    },
    {
        name: 'Sew Master',
        short_description: 'Idle management game',
        description:
            'You manage your customers by selling them the right colored clothes. ' +
            'You have sewing machines and different colored ball of yarns.' +
            'You should only attach the right colors to the machines. ' +
            'Upgrade your machines to produce different textured clothes ',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: sewIcon,
        videoUrl: "https://vimeo.com/741861905",
        details: [
            "Development platform: Unity",
            "Development time: 2 weeks",
            'Tool: Cloth Color Shader',
        ],
    },
    {
        name: 'CashGun3D',
        short_description: 'Shooter runner game',
        description:
            'You have to spend money or find weapons to break down the obstacles. ' +
            'Buy and dress cloths with destroying the obstacles',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: cashIcon,
        videoUrl: "https://vimeo.com/741862370",
        details: [
            "Development platform: Unity",
            "Development time: 2 weeks",
        ],
    },
    {
        name: 'Couple Shooter',
        short_description: 'Shooter runner game with swipe and rotate',
        description:
            'Swipe couple to rotate right direction' +
            'Upgrade weapons for different range and speed',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: boonieIcon,
        videoUrl: "https://vimeo.com/741862180",
        details: [
            "Development platform: Unity",
            "Development time: 2 weeks",
        ],
    },
    {
        name: 'Non-stop Adventures',
        short_description: '2D choose story game',
        description:
            'Non-stop adventure is a 2D story game' +
            'Aim is choosing the right option to not fail',
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        appIcon: nonIcon,
        videoUrl: "https://vimeo.com/742272025",
        details: [
            "Development platform: Unity",
            "Development time: 2 months",
        ],
    },
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
