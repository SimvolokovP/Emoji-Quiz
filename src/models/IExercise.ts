export interface IExercise {
  id: number;
  answer: {
    answerEng: string;
    answerRu: string;
  };
  emojis: IEmoji[];
}

export interface IEmoji {
  label: string;
  symbol: string;
}

export const exercises: IExercise[] = [
  {
    id: 1,
    answer: { answerEng: "Harry Potter", answerRu: "Гарри Поттер" },
    emojis: [
      { label: "wizard", symbol: "🧙‍♂️" },
      { label: "books", symbol: "📚" },
      { label: "lightning", symbol: "⚡️" },
      { label: "mage", symbol: "🧙‍♀️" },
    ],
  },
  {
    id: 2,
    answer: { answerEng: "Ratatouille", answerRu: "Рататуй" },
    emojis: [
      { label: "cook", symbol: "👨‍🍳" },
      { label: "pasta", symbol: "🍝" },
      { label: "rat", symbol: "🐭" },
      { label: "glasses", symbol: "👓" },
    ],
  },
  {
    id: 3,
    answer: { answerEng: "The Lion King", answerRu: "Король Лев" },
    emojis: [
      { label: "lion", symbol: "🦁" },
      { label: "crown", symbol: "👑" },
      { label: "savannah", symbol: "🌄" },
      { label: "wildebeest", symbol: "🦙" },
    ],
  },
  {
    id: 4,
    answer: { answerEng: "Titanic", answerRu: "Титаник" },
    emojis: [
      { label: "ship", symbol: "🚢" },
      { label: "heart", symbol: "❤️" },
      { label: "iceberg", symbol: "🧊" },
      { label: "tears", symbol: "😢" },
    ],
  },
  {
    id: 5,
    answer: { answerEng: "Finding Nemo", answerRu: "В поисках Немо" },
    emojis: [
      { label: "fish", symbol: "🐟" },
      { label: "ocean", symbol: "🌊" },
      { label: "tropical_fish", symbol: "🐠" },
      { label: "diver", symbol: "🤿" },
    ],
  },
  {
    id: 6,
    answer: { answerEng: "Frozen", answerRu: "Холодное сердце" },
    emojis: [
      { label: "snowflake", symbol: "❄️" },
      { label: "ice", symbol: "🧊" },
      { label: "princess", symbol: "👸" },
      { label: "snowman", symbol: "☃️" },
    ],
  },
  {
    id: 7,
    answer: { answerEng: "The Matrix", answerRu: "Матрица" },
    emojis: [
      { label: "glasses", symbol: "🕶️" },
      { label: "computer", symbol: "💻" },
      { label: "green", symbol: "🟩" },
      { label: "bullet", symbol: "💥" },
    ],
  },
  {
    id: 8,
    answer: { answerEng: "Jurassic Park", answerRu: "Парк Юрского периода" },
    emojis: [
      { label: "dinosaur", symbol: "🦖" },
      { label: "tree", symbol: "🌲" },
      { label: "park", symbol: "🏞️" },
      { label: "scientist", symbol: "👨‍🔬" },
    ],
  },
  {
    id: 9,
    answer: {
      answerEng: "Pirates of the Caribbean",
      answerRu: "Пираты Карибского моря",
    },
    emojis: [
      { label: "pirate", symbol: "🏴‍☠️" },
      { label: "treasure", symbol: "💰" },
      { label: "ship", symbol: "⛵" },
      { label: "anchor", symbol: "⚓️" },
    ],
  },
  {
    id: 10,
    answer: { answerEng: "Spider-Man", answerRu: "Человек-паук" },
    emojis: [
      { label: "spider", symbol: "🕷️" },
      { label: "web", symbol: "🕸️" },
      { label: "city", symbol: "🌆" },
      { label: "mask", symbol: "😷" },
    ],
  },
  {
    id: 11,
    answer: { answerEng: "Toy Story", answerRu: "История игрушек" },
    emojis: [
      { label: "toy", symbol: "🧸" },
      { label: "cowboy", symbol: "🤠" },
      { label: "spaceship", symbol: "🚀" },
      { label: "dinosaur", symbol: "🦖" },
    ],
  },
  {
    id: 12,
    answer: { answerEng: "Avatar", answerRu: "Аватар" },
    emojis: [
      { label: "alien", symbol: "👽" },
      { label: "nature", symbol: "🌿" },
      { label: "blue", symbol: "💙" },
      { label: "spaceship", symbol: "🚀" },
    ],
  },
  {
    id: 13,
    answer: { answerEng: "The Godfather", answerRu: "Крестный отец" },
    emojis: [
      { label: "family", symbol: "👪" },
      { label: "crime", symbol: "💼" },
      { label: "gun", symbol: "🔫" },
      { label: "pasta", symbol: "🍝" },
    ],
  },
  {
    id: 14,
    answer: { answerEng: "Inception", answerRu: "Начало" },
    emojis: [
      { label: "dream", symbol: "💭" },
      { label: "maze", symbol: "🌀" },
      { label: "top", symbol: "🪅" },
      { label: "night", symbol: "🌙" },
    ],
  },
  {
    id: 16,
    answer: { answerEng: "The Avengers", answerRu: "Мстители" },
    emojis: [
      { label: "superhero", symbol: "🦸‍♂️" },
      { label: "suit", symbol: "🤵" },
      { label: "shield", symbol: "🛡️" },
      { label: "team", symbol: "👥" },
    ],
  },
  {
    id: 17,
    answer: { answerEng: "Shrek", answerRu: "Шрек" },
    emojis: [
      { label: "ogre", symbol: "👹" },
      { label: "princess", symbol: "👸" },
      { label: "donkey", symbol: "🐴" },
      { label: "swamp", symbol: "🦠" },
    ],
  },
  {
    id: 18,
    answer: { answerEng: "The Dark Knight", answerRu: "Темный рыцарь" },
    emojis: [
      { label: "bat", symbol: "🦇" },
      { label: "city", symbol: "🌆" },
      { label: "villain", symbol: "🦹‍♂️" },
      { label: "car", symbol: "🚗" },
    ],
  },
  {
    id: 20,
    answer: { answerEng: "Minions", answerRu: "Миньоны" },
    emojis: [
      { label: "minion", symbol: "👶" },
      { label: "goggles", symbol: "🕶️" },
      { label: "banana", symbol: "🍌" },
      { label: "mischief", symbol: "😈" },
    ],
  },
];
