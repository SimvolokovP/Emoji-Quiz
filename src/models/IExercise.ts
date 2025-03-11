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
    answer: { answerEng: "The Dark Knight", answerRu: "Темный рыцарь" },
    emojis: [
      { label: "bat", symbol: "🦇" },
      { label: "city", symbol: "🌆" },
      { label: "villain", symbol: "🦹‍♂️" },
      { label: "car", symbol: "🚗" },
    ],
  },
  {
    id: 14,
    answer: { answerEng: "Inside Out", answerRu: "Головоломка" },
    emojis: [
      { label: "brain", symbol: "🧠" },
      { label: "emotion", symbol: "😊" },
      { label: "angry", symbol: "😡" },
      { label: "emotion", symbol: "😭" },
    ],
  },
  {
    id: 15,
    answer: { answerEng: "Kung Fu Panda", answerRu: "Кунг-фу Панда" },
    emojis: [
      { label: "panda", symbol: "🐼" },
      { label: "karate", symbol: "🥋" },
      { label: "noodles", symbol: "🍜" },
      { label: "tiger", symbol: "🐅" },
    ],
  },
  {
    id: 16,
    answer: { answerEng: "Zootopia", answerRu: "Зверополис" },
    emojis: [
      { label: "animal", symbol: "🐰" },
      { label: "police", symbol: "👮‍♂️" },
      { label: "city", symbol: "🌆" },
      { label: "carrot", symbol: "🥕" },
    ],
  },
  {
    id: 17,
    answer: { answerEng: "WallE", answerRu: "ВАЛЛИ" },
    emojis: [
      { label: "robot", symbol: "🤖" },
      { label: "earth", symbol: "🌍" },
      { label: "garbage", symbol: "🗑️" },
      { label: "plant", symbol: "🌱" },
    ],
  },
  {
    id: 18,
    answer: { answerEng: "Coco", answerRu: "Тайна Коко" },
    emojis: [
      { label: "guitar", symbol: "🎸" },
      { label: "skeleton", symbol: "💀" },
      { label: "festival", symbol: "🎉" },
      { label: "family", symbol: "👪" },
    ],
  },
  {
    id: 19,
    answer: { answerEng: "Up", answerRu: "Вверх" },
    emojis: [
      { label: "balloon", symbol: "🎈" },
      { label: "house", symbol: "🏠" },
      { label: "adventure", symbol: "🗺️" },
      { label: "dog", symbol: "🐕" },
    ],
  },
  {
    id: 20,
    answer: { answerEng: "Scooby-Doo", answerRu: "Скуби-Ду" },
    emojis: [
      { label: "dog", symbol: "🐶" },
      { label: "van", symbol: "🚐" },
      { label: "magnifying_glass", symbol: "🔍" },
      { label: "mystery", symbol: "🕵️‍♂️" },
    ],
  },
  {
    id: 21,
    answer: { answerEng: "Sherlock", answerRu: "Шерлок" },
    emojis: [
      { label: "detective", symbol: "🕵️‍♂️" },
      { label: "hat", symbol: "🎩" },
      { label: "magnifying_glass", symbol: "🔍" },
      { label: "pipe", symbol: "🚬" },
    ],
  },
  {
    id: 22,
    answer: {
      answerEng: "Charlie and the Chocolate Factory",
      answerRu: "Чарли и шоколадная фабрика",
    },
    emojis: [
      { label: "chocolate", symbol: "🍫" },
      { label: "factory", symbol: "🏭" },
      { label: "golden_ticket", symbol: "🎟️" },
      { label: "dream", symbol: "💭" },
    ],
  },
  {
    id: 23,
    answer: { answerEng: "The Hunger Games", answerRu: "Голодные игры" },
    emojis: [
      { label: "bow_and_arrow", symbol: "🏹" },
      { label: "arena", symbol: "🏟️" },
      { label: "survival", symbol: "🤺" },
      { label: "rebellion", symbol: "⚔️" },
    ],
  },
  {
    id: 24,
    answer: { answerEng: "Interstellar", answerRu: "Интерстеллар" },
    emojis: [
      { label: "travel", symbol: "🚀" },
      { label: "time", symbol: "⏳" },
      { label: "space", symbol: "🌌" },
      { label: "planet", symbol: "🌍" },
    ],
  },
  {
    id: 25,
    answer: { answerEng: "Fight Club", answerRu: "Бойцовский клуб" },
    emojis: [
      { label: "fight", symbol: "🥊" },
      { label: "secret", symbol: "🤫" },
      { label: "rebellion", symbol: "⚔️" },
      { label: "identity", symbol: "🧑" },
    ],
  },
  {
    id: 26,
    answer: { answerEng: "The Lord of the Rings", answerRu: "Властелин колец" },
    emojis: [
      { label: "ring", symbol: "💍" },
      { label: "adventure", symbol: "🏔️" },
      { label: "fantasy", symbol: "🧙‍♂️" },
      { label: "together", symbol: "🤝" },
    ],
  },
  {
    id: 27,
    answer: { answerEng: "Joker", answerRu: "Джокер" },
    emojis: [
      { label: "clown", symbol: "🤡" },
      { label: "loneliness", symbol: "😔" },
      { label: "crime", symbol: "🔫" },
      { label: "psychological", symbol: "🧠" },
    ],
  },
  {
    id: 28,
    answer: { answerEng: "The Intouchables", answerRu: "1+1" },
    emojis: [
      { label: "disabled person", symbol: "🧑‍🦼" },
      { label: "man", symbol: "👦🏿" },
      { label: "friendship", symbol: "🤝" },
      { label: "parachute", symbol: "🪂" },
    ],
  },
  {
    id: 29,
    answer: { answerEng: "Breaking Bad", answerRu: "Во все тяжкие" },
    emojis: [
      { label: "drugs", symbol: "💊" },
      { label: "crime", symbol: "🕵️‍♂️" },
      { label: "drama", symbol: "🎭" },
      { label: "transformation", symbol: "🔄" },
    ],
  },
  {
    id: 30,
    answer: { answerEng: "Game of Thrones", answerRu: "Игра престолов" },
    emojis: [
      { label: "politics", symbol: "🏰" },
      { label: "dragons", symbol: "🐉" },
      { label: "battle", symbol: "⚔️" },
      { label: "fantasy", symbol: "🧙‍♂️" },
    ],
  },
  {
    id: 31,
    answer: { answerEng: "Back to the Future", answerRu: "Назад в будущее" },
    emojis: [
      { label: "time_travel", symbol: "🕰️" },
      { label: "car", symbol: "🚗" },
      { label: "back", symbol: "🔙" },
      { label: "adventure", symbol: "🗺️" },
    ],
  },
  {
    id: 32,
    answer: { answerEng: "Iron Man", answerRu: "Железный человек" },
    emojis: [
      { label: "superhero", symbol: "🦸" },
      { label: "suit", symbol: "🤖" },
      { label: "technology", symbol: "💻" },
      { label: "action", symbol: "💥" },
    ],
  },
  {
    id: 33,
    answer: {
      answerEng: "The Wolf of Wall Street",
      answerRu: "Волк с Уолл-стрит",
    },
    emojis: [
      { label: "money", symbol: "💰" },
      { label: "wolf", symbol: "🐺" },
      { label: "business", symbol: "💼" },
      { label: "drama", symbol: "🎭" },
    ],
  },
  {
    id: 34,
    answer: { answerEng: "Going Up", answerRu: "Движение вверх" },
    emojis: [
      { label: "basketball", symbol: "🏀" },
      { label: "top", symbol: "🔝" },
      { label: "team", symbol: "🤼‍♂️" },
      { label: "victory", symbol: "🏆" },
    ],
  },
  {
    id: 35,
    answer: { answerEng: "Kitchen", answerRu: "Кухня" },
    emojis: [
      { label: "knife", symbol: "🔪" },
      { label: "restaurant", symbol: "🍽️" },
      { label: "comedy", symbol: "😂" },
      { label: "friendship", symbol: "🤝" },
    ],
  },
  {
    id: 36,
    answer: { answerEng: "Gravity Falls", answerRu: "Гравити Фолз" },
    emojis: [
      { label: "tree", symbol: "🌲" },
      { label: "star", symbol: "💫" },
      { label: "glasses", symbol: "👓" },
      { label: "lama", symbol: "🦙" },
    ],
  },
];
