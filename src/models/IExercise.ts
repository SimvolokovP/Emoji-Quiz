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
];
