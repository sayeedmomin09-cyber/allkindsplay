const game = (title, image, description) => ({ title, image, description });

const woodenDescription = 'A polished wooden carnival-style challenge that keeps guests engaged with simple rules and competitive replay value.';
const playWinDescription = 'A reward-friendly event game that draws quick queues, cheering groups, and lots of repeat attempts.';
const funDescription = 'A big-format party game built for easy participation, photo moments, and relaxed group entertainment.';
const activityDescription = 'A high-energy activity that brings teams together with movement, laughter, and classic event excitement.';

export const categories = [
  {
    name: 'Inflatable Games',
    accent: 'from-aqua to-grape',
    games: [
      game('Aqua Fun Castle', '/images/aqua-fun-castle-new.jpg', 'A colorful inflatable castle that brings bouncy ocean-themed fun to birthdays, school events, and family celebrations.'),
      game('Trampoline', '/images/trampoline.jpg', 'A crowd-favorite jumping attraction with a secure setup for energetic kids, teens, and playful adults.'),
      game('Giant Dart', '/images/giant-dart.jpg', 'A supersized inflatable dart challenge made for photos, friendly competition, and big event energy.'),
      game('Bouncy Castle', '/images/bouncy-castle.jpg', 'A bright inflatable slide-and-bounce attraction that becomes the centerpiece of kids parties and outdoor events.'),
      game('Kids Soft Ball Pit', '/images/kids-soft-ball-pit.jpg', 'A soft play zone with colorful balls and cushioned shapes for younger children to climb, crawl, and play safely.'),
    ],
  },
  {
    name: 'Interactive Games',
    accent: 'from-coral to-sunshine',
    games: [
      game('360 Camera Photo Booth', '/images/photo-booth.jpg', 'A premium 360 video booth experience that turns event guests into instant share-worthy stars.'),
      game('Catch The Baton', '/images/catch-baton.jpg', 'A reflex-testing challenge where players race the clock to catch falling batons at the perfect moment.'),
      game('Buzz Wire', '/images/buzz-wire.jpg', 'A neon-lit steady-hand game that adds suspense, laughter, and instant competition to any setup.'),
      game('Angry Birds Game', '/images/angry-birds.jpg', 'A playful target game inspired by everyone\'s favorite slingshot action and family-friendly fun.'),
    ],
  },
  {
    name: 'Wooden Games',
    accent: 'from-sunshine to-aqua',
    games: [
      game('Wall Maze', '/images/wall-maze.jpg', woodenDescription),
      game('Plinko', '/images/plinko.jpg', woodenDescription),
      game('Shuttlecock Throw', '/images/bean-bag-toss.jpg', woodenDescription),
      game('Zig Zag Zop', '/images/zig-zag-zop.jpg', woodenDescription),
      game('Counter Balance', '/images/counter-balance.jpg', woodenDescription),
      game('Hook The Ring', '/images/ring-toss.jpg', woodenDescription),
    ],
  },
  {
    name: 'Play & Win Games',
    accent: 'from-grape to-coral',
    games: [
      game('Ring Toss', '/images/ring-toss.jpg', playWinDescription),
      game('Break The Cans', '/images/bean-bag-toss.jpg', playWinDescription),
      game('Spin The Wheel', '/images/spin-the-wheel.jpg', playWinDescription),
      game('Stand A Bottle', '/images/stand-a-bottle.jpg', playWinDescription),
      game('Hoop Shot', '/images/bean-bag-toss.jpg', playWinDescription),
      game('Balloon Dart', '/images/balloon-shooting.jpg', playWinDescription),
      game('Dunk The Duck', '/images/dunk-the-duck.jpg', playWinDescription),
      game('Balloon Shooting', '/images/balloon-shooting.jpg', playWinDescription),
    ],
  },
  {
    name: 'Fun Games',
    accent: 'from-aqua to-coral',
    games: [
      game('Beer Pong', '/images/beer-pong.jpg', funDescription),
      game('Giant Jenga', '/images/counter-balance.jpg', funDescription),
      game('Air Hockey', '/images/zig-zag-zop.jpg', funDescription),
      game('American Corn Hole', '/images/american-corn-hole.jpg', funDescription),
      game('Rope Ladder', '/images/wall-maze.jpg', funDescription),
      game('Giant OX Bean Bag Toss', '/images/giant-ox-bean-bag-toss.jpg', funDescription),
      game('Giant Snake and Ladders', '/images/bouncy-castle.jpg', funDescription),
      game('Giant Ludo', '/images/giant-ludo.jpg', funDescription),
    ],
  },
  {
    name: 'Activity Games',
    accent: 'from-sunshine to-grape',
    games: [
      game('Hand and Foot Race', '/images/tug-of-war.jpg', activityDescription),
      game('Footprint Path Game', '/images/footprint-path-game.jpg', activityDescription),
      game('Limbo', '/images/limbo.jpg', activityDescription),
      game('Tug of War', '/images/tug-of-war.jpg', activityDescription),
      game('Potato Sack Race', '/images/tug-of-war.jpg', activityDescription),
      game('Volleyball', '/images/volleyball.jpg', activityDescription),
    ],
  },
];

export const allGames = categories.flatMap((category) => category.games.map((game) => game.title));
