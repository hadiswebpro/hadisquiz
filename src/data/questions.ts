// 100 English-language questions for "How Well Do You Know Hadis?"
// 20 questions per world. Correct answers are kept in the data, not shown to players.
// Q36 and Q54 reflect the current interpretation of the user's answers.
export type QuizLevel = "bloom" | "echo" | "veil" | "abyss" | "void";
export interface QuizQuestion {
  id: number;
  level: QuizLevel;
  question: string;
  options: { id: "A" | "B" | "C" | "D"; text: string }[];
  correctAnswerId: "A" | "B" | "C" | "D";
}

export const questions: QuizQuestion[] = [
  {
    "id": 1,
    "level": "bloom",
    "question": "What's my favorite color?",
    "options": [
      {
        "id": "A",
        "text": "Olive green"
      },
      {
        "id": "B",
        "text": "Deep purple"
      },
      {
        "id": "C",
        "text": "Moss green"
      },
      {
        "id": "D",
        "text": "Navy blue"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 2,
    "level": "bloom",
    "question": "What's my favorite season?",
    "options": [
      {
        "id": "A",
        "text": "Winter"
      },
      {
        "id": "B",
        "text": "Autumn"
      },
      {
        "id": "C",
        "text": "Summer"
      },
      {
        "id": "D",
        "text": "Spring"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 3,
    "level": "bloom",
    "question": "What's my favorite drink?",
    "options": [
      {
        "id": "A",
        "text": "Orange juice"
      },
      {
        "id": "B",
        "text": "Iced coffee"
      },
      {
        "id": "C",
        "text": "Lemonade"
      },
      {
        "id": "D",
        "text": "Apple juice"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 4,
    "level": "bloom",
    "question": "What's my favorite food?",
    "options": [
      {
        "id": "A",
        "text": "Pizza"
      },
      {
        "id": "B",
        "text": "Zereshk polo ba morgh (barberry rice with chicken)"
      },
      {
        "id": "C",
        "text": "Sushi"
      },
      {
        "id": "D",
        "text": "Pasta"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 5,
    "level": "bloom",
    "question": "Who would I want to be like?",
    "options": [
      {
        "id": "A",
        "text": "My best friend"
      },
      {
        "id": "B",
        "text": "A famous artist"
      },
      {
        "id": "C",
        "text": "Not even one person"
      },
      {
        "id": "D",
        "text": "Someone successful"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 6,
    "level": "bloom",
    "question": "Which animal do I love most?",
    "options": [
      {
        "id": "A",
        "text": "Kittens"
      },
      {
        "id": "B",
        "text": "Foxes"
      },
      {
        "id": "C",
        "text": "Puppies"
      },
      {
        "id": "D",
        "text": "Rabbits"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 7,
    "level": "bloom",
    "question": "Which natural setting do I prefer?",
    "options": [
      {
        "id": "A",
        "text": "The beach"
      },
      {
        "id": "B",
        "text": "The desert"
      },
      {
        "id": "C",
        "text": "The mountains"
      },
      {
        "id": "D",
        "text": "A forest"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 8,
    "level": "bloom",
    "question": "What's my favorite month?",
    "options": [
      {
        "id": "A",
        "text": "December"
      },
      {
        "id": "B",
        "text": "October"
      },
      {
        "id": "C",
        "text": "June"
      },
      {
        "id": "D",
        "text": "April"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 9,
    "level": "bloom",
    "question": "What's my favorite kind of weather?",
    "options": [
      {
        "id": "A",
        "text": "Foggy weather"
      },
      {
        "id": "B",
        "text": "Snowy weather"
      },
      {
        "id": "C",
        "text": "Rainy weather"
      },
      {
        "id": "D",
        "text": "Sunny weather"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 10,
    "level": "bloom",
    "question": "Where do I feel most at peace?",
    "options": [
      {
        "id": "A",
        "text": "At a café"
      },
      {
        "id": "B",
        "text": "In a busy city"
      },
      {
        "id": "C",
        "text": "In nature"
      },
      {
        "id": "D",
        "text": "At a party"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 11,
    "level": "echo",
    "question": "Which band do I love?",
    "options": [
      {
        "id": "A",
        "text": "Muse"
      },
      {
        "id": "B",
        "text": "Radiohead"
      },
      {
        "id": "C",
        "text": "Coldplay"
      },
      {
        "id": "D",
        "text": "Anathema"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 12,
    "level": "echo",
    "question": "Which TV series would I pick?",
    "options": [
      {
        "id": "A",
        "text": "Supernatural"
      },
      {
        "id": "B",
        "text": "The Vampire Diaries"
      },
      {
        "id": "C",
        "text": "Dark"
      },
      {
        "id": "D",
        "text": "The Walking Dead"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 13,
    "level": "echo",
    "question": "Which country would I love to visit?",
    "options": [
      {
        "id": "A",
        "text": "Spain"
      },
      {
        "id": "B",
        "text": "Italy"
      },
      {
        "id": "C",
        "text": "France"
      },
      {
        "id": "D",
        "text": "Japan"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 14,
    "level": "echo",
    "question": "Which sweet treat do I prefer?",
    "options": [
      {
        "id": "A",
        "text": "Cake"
      },
      {
        "id": "B",
        "text": "Candy"
      },
      {
        "id": "C",
        "text": "Chocolate"
      },
      {
        "id": "D",
        "text": "Ice cream"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 15,
    "level": "echo",
    "question": "What does my mind often drift into?",
    "options": [
      {
        "id": "A",
        "text": "Planning"
      },
      {
        "id": "B",
        "text": "Overthinking conversations"
      },
      {
        "id": "C",
        "text": "Daydreaming"
      },
      {
        "id": "D",
        "text": "Remembering the past"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 16,
    "level": "echo",
    "question": "Which style do I prefer?",
    "options": [
      {
        "id": "A",
        "text": "Classic"
      },
      {
        "id": "B",
        "text": "Sporty"
      },
      {
        "id": "C",
        "text": "Bohemian"
      },
      {
        "id": "D",
        "text": "Minimalist"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 17,
    "level": "echo",
    "question": "What's my favorite flower?",
    "options": [
      {
        "id": "A",
        "text": "Tulips"
      },
      {
        "id": "B",
        "text": "Lilies"
      },
      {
        "id": "C",
        "text": "Sunflowers"
      },
      {
        "id": "D",
        "text": "Roses"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 18,
    "level": "echo",
    "question": "Which color combination do I love?",
    "options": [
      {
        "id": "A",
        "text": "Black and red"
      },
      {
        "id": "B",
        "text": "Blue and white"
      },
      {
        "id": "C",
        "text": "Purple and moss green"
      },
      {
        "id": "D",
        "text": "Pink and cream"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 19,
    "level": "echo",
    "question": "Which platform do I spend the most time on?",
    "options": [
      {
        "id": "A",
        "text": "Pinterest"
      },
      {
        "id": "B",
        "text": "YouTube"
      },
      {
        "id": "C",
        "text": "TikTok"
      },
      {
        "id": "D",
        "text": "Instagram"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 20,
    "level": "echo",
    "question": "Who would I most want to spend time with?",
    "options": [
      {
        "id": "A",
        "text": "Someone I love"
      },
      {
        "id": "B",
        "text": "Nobody at all"
      },
      {
        "id": "C",
        "text": "A big group of friends"
      },
      {
        "id": "D",
        "text": "New people"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 21,
    "level": "veil",
    "question": "How am I when I talk about something important?",
    "options": [
      {
        "id": "A",
        "text": "Serious"
      },
      {
        "id": "B",
        "text": "Indifferent"
      },
      {
        "id": "C",
        "text": "Playful"
      },
      {
        "id": "D",
        "text": "Shy"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 22,
    "level": "veil",
    "question": "What do I usually do when someone upsets me?",
    "options": [
      {
        "id": "A",
        "text": "Confront them immediately"
      },
      {
        "id": "B",
        "text": "Ask others for advice"
      },
      {
        "id": "C",
        "text": "I distance myself"
      },
      {
        "id": "D",
        "text": "Pretend nothing happened"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 23,
    "level": "veil",
    "question": "When something painful happens to me, what do I want?",
    "options": [
      {
        "id": "A",
        "text": "Everyone to comfort me"
      },
      {
        "id": "B",
        "text": "To tell everyone"
      },
      {
        "id": "C",
        "text": "For nobody to notice"
      },
      {
        "id": "D",
        "text": "To receive constant attention"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 24,
    "level": "veil",
    "question": "What hurts me most?",
    "options": [
      {
        "id": "A",
        "text": "Receiving advice"
      },
      {
        "id": "B",
        "text": "Having my freedom restricted"
      },
      {
        "id": "C",
        "text": "Making plans"
      },
      {
        "id": "D",
        "text": "Being alone"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 25,
    "level": "veil",
    "question": "What do I do if someone asks for another chance?",
    "options": [
      {
        "id": "A",
        "text": "I give one if they genuinely ask; otherwise, I cut them off"
      },
      {
        "id": "B",
        "text": "I always say yes"
      },
      {
        "id": "C",
        "text": "I always say no"
      },
      {
        "id": "D",
        "text": "I ask someone else to decide"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 26,
    "level": "veil",
    "question": "What do I do when something is bothering me?",
    "options": [
      {
        "id": "A",
        "text": "I dig into it even more"
      },
      {
        "id": "B",
        "text": "I ignore it"
      },
      {
        "id": "C",
        "text": "I forget it quickly"
      },
      {
        "id": "D",
        "text": "I distract myself"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 27,
    "level": "veil",
    "question": "How might I jokingly describe myself?",
    "options": [
      {
        "id": "A",
        "text": "Always serious"
      },
      {
        "id": "B",
        "text": "Spoiled as fuck"
      },
      {
        "id": "C",
        "text": "Quiet and reserved"
      },
      {
        "id": "D",
        "text": "Easy to please"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 28,
    "level": "veil",
    "question": "What might be hidden behind my unusual behavior?",
    "options": [
      {
        "id": "A",
        "text": "A desire for attention"
      },
      {
        "id": "B",
        "text": "Anger"
      },
      {
        "id": "C",
        "text": "A joke"
      },
      {
        "id": "D",
        "text": "A cry for help"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 29,
    "level": "veil",
    "question": "What do I do in a group where I feel uncomfortable?",
    "options": [
      {
        "id": "A",
        "text": "I become the center of attention"
      },
      {
        "id": "B",
        "text": "I force myself to stay"
      },
      {
        "id": "C",
        "text": "I start talking to everyone"
      },
      {
        "id": "D",
        "text": "I don't join in"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 30,
    "level": "veil",
    "question": "How do I describe my fixed habits?",
    "options": [
      {
        "id": "A",
        "text": "I never change my habits"
      },
      {
        "id": "B",
        "text": "I need the same schedule daily"
      },
      {
        "id": "C",
        "text": "I follow a strict routine"
      },
      {
        "id": "D",
        "text": "I don't really have any"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 31,
    "level": "abyss",
    "question": "What do I need from someone who sees my vulnerable side?",
    "options": [
      {
        "id": "A",
        "text": "They tell everyone"
      },
      {
        "id": "B",
        "text": "They ask me to hide it"
      },
      {
        "id": "C",
        "text": "They offer quick solutions"
      },
      {
        "id": "D",
        "text": "Never mock it; try to understand it"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 32,
    "level": "abyss",
    "question": "What would hurt me in a relationship?",
    "options": [
      {
        "id": "A",
        "text": "Not receiving the same care I've given someone I love"
      },
      {
        "id": "B",
        "text": "They don't agree with me"
      },
      {
        "id": "C",
        "text": "They don't buy me gifts"
      },
      {
        "id": "D",
        "text": "They need time alone"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 33,
    "level": "abyss",
    "question": "Which emotions might I struggle with in love?",
    "options": [
      {
        "id": "A",
        "text": "Calm and certainty"
      },
      {
        "id": "B",
        "text": "Indifference and relief"
      },
      {
        "id": "C",
        "text": "Jealousy, self-blame, and fear of abandonment"
      },
      {
        "id": "D",
        "text": "Excitement and confidence"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 34,
    "level": "abyss",
    "question": "How do I want to be accepted?",
    "options": [
      {
        "id": "A",
        "text": "Only when I'm cheerful"
      },
      {
        "id": "B",
        "text": "Exactly as I am, even at my worst"
      },
      {
        "id": "C",
        "text": "Only if I change"
      },
      {
        "id": "D",
        "text": "Only when I succeed"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 35,
    "level": "abyss",
    "question": "What matters after someone hurts me?",
    "options": [
      {
        "id": "A",
        "text": "They ask for forgiveness and stay to rebuild things"
      },
      {
        "id": "B",
        "text": "They act like nothing happened"
      },
      {
        "id": "C",
        "text": "They blame someone else"
      },
      {
        "id": "D",
        "text": "They leave me alone"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 36,
    "level": "abyss",
    "question": "Which question about my future stays with me?",
    "options": [
      {
        "id": "A",
        "text": "Will I become famous?"
      },
      {
        "id": "B",
        "text": "Will I reach the life I've always wanted?"
      },
      {
        "id": "C",
        "text": "Will I travel enough?"
      },
      {
        "id": "D",
        "text": "Will everyone approve of me?"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 37,
    "level": "abyss",
    "question": "Which contradiction describes me in love?",
    "options": [
      {
        "id": "A",
        "text": "I want someone to control my life"
      },
      {
        "id": "B",
        "text": "I want complete solitude"
      },
      {
        "id": "C",
        "text": "I never want commitment"
      },
      {
        "id": "D",
        "text": "I want freedom, but I also want to belong with someone"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 38,
    "level": "abyss",
    "question": "What do I need when I ask for space?",
    "options": [
      {
        "id": "A",
        "text": "Someone to make decisions for me"
      },
      {
        "id": "B",
        "text": "A long explanation"
      },
      {
        "id": "C",
        "text": "Constant messages"
      },
      {
        "id": "D",
        "text": "To be left alone"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 39,
    "level": "abyss",
    "question": "How can someone earn my trust?",
    "options": [
      {
        "id": "A",
        "text": "Immediate intimacy"
      },
      {
        "id": "B",
        "text": "Through consistent, reliable behavior"
      },
      {
        "id": "C",
        "text": "Big promises"
      },
      {
        "id": "D",
        "text": "Expensive gifts"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 40,
    "level": "abyss",
    "question": "Which betrayal would hurt me most?",
    "options": [
      {
        "id": "A",
        "text": "A canceled date"
      },
      {
        "id": "B",
        "text": "Using my wounds against me and stabbing me in the back"
      },
      {
        "id": "C",
        "text": "Being forgotten on a special day"
      },
      {
        "id": "D",
        "text": "A small disagreement"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 41,
    "level": "void",
    "question": "Which behavior hurts me even when someone understands my words?",
    "options": [
      {
        "id": "A",
        "text": "They ask questions"
      },
      {
        "id": "B",
        "text": "They understand, but act as if they don't"
      },
      {
        "id": "C",
        "text": "They need time to think"
      },
      {
        "id": "D",
        "text": "They argue with me openly"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 42,
    "level": "void",
    "question": "What pushes me away from someone?",
    "options": [
      {
        "id": "A",
        "text": "Quiet confidence and honesty"
      },
      {
        "id": "B",
        "text": "Needing personal space"
      },
      {
        "id": "C",
        "text": "Having different interests"
      },
      {
        "id": "D",
        "text": "Unjustified pride and indifference"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 43,
    "level": "void",
    "question": "What's one of my greatest fears about people I love?",
    "options": [
      {
        "id": "A",
        "text": "Failing at work"
      },
      {
        "id": "B",
        "text": "Being alone forever"
      },
      {
        "id": "C",
        "text": "Losing my independence"
      },
      {
        "id": "D",
        "text": "Hurting and disappointing them until they leave"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 44,
    "level": "void",
    "question": "What makes forgiveness feel bitter to me?",
    "options": [
      {
        "id": "A",
        "text": "Someone exploiting it and mistaking it for stupidity"
      },
      {
        "id": "B",
        "text": "They respect my boundaries"
      },
      {
        "id": "C",
        "text": "They admit their mistake"
      },
      {
        "id": "D",
        "text": "They give me time"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 45,
    "level": "void",
    "question": "What would mean a lot to me in a relationship?",
    "options": [
      {
        "id": "A",
        "text": "They praise me publicly"
      },
      {
        "id": "B",
        "text": "Someone compromising for me and forgiving me"
      },
      {
        "id": "C",
        "text": "They always agree with me"
      },
      {
        "id": "D",
        "text": "They buy me things"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 46,
    "level": "void",
    "question": "What do I dislike people assuming about my kindness?",
    "options": [
      {
        "id": "A",
        "text": "That I hate everyone"
      },
      {
        "id": "B",
        "text": "That I value everyone equally"
      },
      {
        "id": "C",
        "text": "That I'm always pretending"
      },
      {
        "id": "D",
        "text": "That I never care about anyone"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 47,
    "level": "void",
    "question": "How do I choose when I truly love someone?",
    "options": [
      {
        "id": "A",
        "text": "I avoid choosing anyone"
      },
      {
        "id": "B",
        "text": "I keep everyone as an option"
      },
      {
        "id": "C",
        "text": "I switch whenever things get hard"
      },
      {
        "id": "D",
        "text": "I keep choosing that one person"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 48,
    "level": "void",
    "question": "Which statement sounds most like me?",
    "options": [
      {
        "id": "A",
        "text": "I forgive instantly and forget"
      },
      {
        "id": "B",
        "text": "I never take anything seriously"
      },
      {
        "id": "C",
        "text": "I'm hard to put up with, and harder to understand"
      },
      {
        "id": "D",
        "text": "I'm easy to read"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 49,
    "level": "void",
    "question": "When do I fight for someone?",
    "options": [
      {
        "id": "A",
        "text": "I fight for everyone equally"
      },
      {
        "id": "B",
        "text": "I never get attached"
      },
      {
        "id": "C",
        "text": "I always walk away"
      },
      {
        "id": "D",
        "text": "Only when I love them; otherwise I don't care"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 50,
    "level": "void",
    "question": "What would convince me someone doesn't love me?",
    "options": [
      {
        "id": "A",
        "text": "They knowingly hurt me and feel no remorse"
      },
      {
        "id": "B",
        "text": "They disagree with me"
      },
      {
        "id": "C",
        "text": "They forget one message"
      },
      {
        "id": "D",
        "text": "They need space"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 51,
    "level": "bloom",
    "question": "What color sky do I like?",
    "options": [
      {
        "id": "A",
        "text": "Only gray skies"
      },
      {
        "id": "B",
        "text": "Only blue skies"
      },
      {
        "id": "C",
        "text": "Any color"
      },
      {
        "id": "D",
        "text": "Only pink skies"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 52,
    "level": "bloom",
    "question": "Which music genre do I like?",
    "options": [
      {
        "id": "A",
        "text": "Hip-hop"
      },
      {
        "id": "B",
        "text": "Pop"
      },
      {
        "id": "C",
        "text": "Jazz"
      },
      {
        "id": "D",
        "text": "Rock"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 53,
    "level": "bloom",
    "question": "What kind of city would I want to live in?",
    "options": [
      {
        "id": "A",
        "text": "A busy seaside city"
      },
      {
        "id": "B",
        "text": "A crowded capital"
      },
      {
        "id": "C",
        "text": "A remote desert town"
      },
      {
        "id": "D",
        "text": "A quiet city close to nature"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 54,
    "level": "bloom",
    "question": "What would I like for a pet-related living arrangement?",
    "options": [
      {
        "id": "A",
        "text": "Keeping pets completely separate"
      },
      {
        "id": "B",
        "text": "My pet and my partner's pet living together"
      },
      {
        "id": "C",
        "text": "Not having pets at all"
      },
      {
        "id": "D",
        "text": "Only adopting one pet"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 55,
    "level": "bloom",
    "question": "What's my ideal way to spend a free day?",
    "options": [
      {
        "id": "A",
        "text": "Go to a loud party"
      },
      {
        "id": "B",
        "text": "Stay home and watch movies"
      },
      {
        "id": "C",
        "text": "Shop all day"
      },
      {
        "id": "D",
        "text": "Travel without a plan"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 56,
    "level": "bloom",
    "question": "Which books do I prefer?",
    "options": [
      {
        "id": "A",
        "text": "Fantasy novels"
      },
      {
        "id": "B",
        "text": "Historical biographies"
      },
      {
        "id": "C",
        "text": "Psychology books"
      },
      {
        "id": "D",
        "text": "Cookbooks"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 57,
    "level": "bloom",
    "question": "Where would I like to take a walk?",
    "options": [
      {
        "id": "A",
        "text": "Morning markets"
      },
      {
        "id": "B",
        "text": "Busy shopping streets"
      },
      {
        "id": "C",
        "text": "Quiet streets at night"
      },
      {
        "id": "D",
        "text": "Crowded parks"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 58,
    "level": "bloom",
    "question": "Which fictional world appeals to me?",
    "options": [
      {
        "id": "A",
        "text": "A realistic modern city"
      },
      {
        "id": "B",
        "text": "A medieval fantasy world"
      },
      {
        "id": "C",
        "text": "A science-fiction world"
      },
      {
        "id": "D",
        "text": "An ancient kingdom"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 59,
    "level": "bloom",
    "question": "Which physical activity interests me?",
    "options": [
      {
        "id": "A",
        "text": "Ballet"
      },
      {
        "id": "B",
        "text": "Swimming"
      },
      {
        "id": "C",
        "text": "Martial arts"
      },
      {
        "id": "D",
        "text": "Cycling"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 60,
    "level": "bloom",
    "question": "What kind of gift would make me happiest?",
    "options": [
      {
        "id": "A",
        "text": "Something I've wanted for a long time"
      },
      {
        "id": "B",
        "text": "A practical household item"
      },
      {
        "id": "C",
        "text": "A surprise party"
      },
      {
        "id": "D",
        "text": "The most expensive thing"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 61,
    "level": "echo",
    "question": "What do I do when someone never approaches me on their own?",
    "options": [
      {
        "id": "A",
        "text": "Nothing special; it doesn't matter to me"
      },
      {
        "id": "B",
        "text": "I ask others to intervene"
      },
      {
        "id": "C",
        "text": "I chase them"
      },
      {
        "id": "D",
        "text": "I confront them"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 62,
    "level": "echo",
    "question": "What do I do when something is on my mind?",
    "options": [
      {
        "id": "A",
        "text": "I immediately forget it"
      },
      {
        "id": "B",
        "text": "I post about it"
      },
      {
        "id": "C",
        "text": "Think it through"
      },
      {
        "id": "D",
        "text": "I ask everyone for opinions"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 63,
    "level": "echo",
    "question": "How do I handle waiting?",
    "options": [
      {
        "id": "A",
        "text": "I complain nonstop"
      },
      {
        "id": "B",
        "text": "I give up waiting"
      },
      {
        "id": "C",
        "text": "I check the clock constantly"
      },
      {
        "id": "D",
        "text": "I keep myself busy"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 64,
    "level": "echo",
    "question": "What's my first reaction when someone disagrees with me?",
    "options": [
      {
        "id": "A",
        "text": "I stop listening"
      },
      {
        "id": "B",
        "text": "I try to understand why"
      },
      {
        "id": "C",
        "text": "I assume they're wrong"
      },
      {
        "id": "D",
        "text": "I argue to win"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 65,
    "level": "echo",
    "question": "How do I respond to valid criticism?",
    "options": [
      {
        "id": "A",
        "text": "I reject it immediately"
      },
      {
        "id": "B",
        "text": "I get defensive forever"
      },
      {
        "id": "C",
        "text": "I agree without listening"
      },
      {
        "id": "D",
        "text": "I accept it and say I'll think about it"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 66,
    "level": "echo",
    "question": "What do I do when several difficult things happen at once?",
    "options": [
      {
        "id": "A",
        "text": "Prioritize them"
      },
      {
        "id": "B",
        "text": "I ignore everything"
      },
      {
        "id": "C",
        "text": "I panic and freeze"
      },
      {
        "id": "D",
        "text": "I let others choose"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 67,
    "level": "echo",
    "question": "How do I feel if an exciting plan gets canceled?",
    "options": [
      {
        "id": "A",
        "text": "Angry"
      },
      {
        "id": "B",
        "text": "Completely indifferent"
      },
      {
        "id": "C",
        "text": "Excited"
      },
      {
        "id": "D",
        "text": "Relieved"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 68,
    "level": "echo",
    "question": "Who usually knows about my private problems?",
    "options": [
      {
        "id": "A",
        "text": "Everyone online"
      },
      {
        "id": "B",
        "text": "All my friends"
      },
      {
        "id": "C",
        "text": "Anyone who asks"
      },
      {
        "id": "D",
        "text": "Usually nobody; at most one or two people if needed"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 69,
    "level": "echo",
    "question": "What do I rely on most when making decisions?",
    "options": [
      {
        "id": "A",
        "text": "Pure instinct"
      },
      {
        "id": "B",
        "text": "Random chance"
      },
      {
        "id": "C",
        "text": "Logical analysis"
      },
      {
        "id": "D",
        "text": "Other people's opinions"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 70,
    "level": "echo",
    "question": "What do I do if someone's behavior confuses me?",
    "options": [
      {
        "id": "A",
        "text": "I guess their motives"
      },
      {
        "id": "B",
        "text": "I avoid them forever"
      },
      {
        "id": "C",
        "text": "Ask them directly"
      },
      {
        "id": "D",
        "text": "I ask their friends"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 71,
    "level": "veil",
    "question": "What would I refuse to do just to express love?",
    "options": [
      {
        "id": "A",
        "text": "Change who I am"
      },
      {
        "id": "B",
        "text": "Agree with everything"
      },
      {
        "id": "C",
        "text": "Give up my goals"
      },
      {
        "id": "D",
        "text": "Never spend time alone"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 72,
    "level": "veil",
    "question": "What if my partner needs more personal space?",
    "options": [
      {
        "id": "A",
        "text": "I forbid it"
      },
      {
        "id": "B",
        "text": "I disappear without talking"
      },
      {
        "id": "C",
        "text": "I understand, as long as they explain and ask for it"
      },
      {
        "id": "D",
        "text": "I take it personally immediately"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 73,
    "level": "veil",
    "question": "What damages my trust?",
    "options": [
      {
        "id": "A",
        "text": "An honest disagreement"
      },
      {
        "id": "B",
        "text": "Different hobbies"
      },
      {
        "id": "C",
        "text": "Someone breaking their promises"
      },
      {
        "id": "D",
        "text": "Needing time alone"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 74,
    "level": "veil",
    "question": "What do I need before forgiving someone?",
    "options": [
      {
        "id": "A",
        "text": "A public post"
      },
      {
        "id": "B",
        "text": "Pretending nothing happened"
      },
      {
        "id": "C",
        "text": "Genuine remorse and a request for forgiveness"
      },
      {
        "id": "D",
        "text": "An expensive apology gift"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 75,
    "level": "veil",
    "question": "What do I do when I want to text someone?",
    "options": [
      {
        "id": "A",
        "text": "Text them, unless I know they don't want to talk"
      },
      {
        "id": "B",
        "text": "I ask a mutual friend"
      },
      {
        "id": "C",
        "text": "I never text first"
      },
      {
        "id": "D",
        "text": "I always wait for them"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 76,
    "level": "veil",
    "question": "What shows me someone will really stay?",
    "options": [
      {
        "id": "A",
        "text": "They see me at my worst and still stay"
      },
      {
        "id": "B",
        "text": "They promise grand gestures"
      },
      {
        "id": "C",
        "text": "They avoid hard conversations"
      },
      {
        "id": "D",
        "text": "They only stay when I'm happy"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 77,
    "level": "veil",
    "question": "What do I do when a relationship has a problem?",
    "options": [
      {
        "id": "A",
        "text": "Talk about it; leave if it can't be resolved"
      },
      {
        "id": "B",
        "text": "I ignore the issue"
      },
      {
        "id": "C",
        "text": "I silently endure it"
      },
      {
        "id": "D",
        "text": "I ask others to fix it"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 78,
    "level": "veil",
    "question": "When does a repeated mistake become a deal-breaker?",
    "options": [
      {
        "id": "A",
        "text": "When they make one honest mistake"
      },
      {
        "id": "B",
        "text": "When they apologize sincerely"
      },
      {
        "id": "C",
        "text": "When they know what they did, pretend otherwise, and make no amends"
      },
      {
        "id": "D",
        "text": "When they need more time"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 79,
    "level": "veil",
    "question": "What's essential for me to stay in a relationship?",
    "options": [
      {
        "id": "A",
        "text": "Always agreeing"
      },
      {
        "id": "B",
        "text": "Never arguing"
      },
      {
        "id": "C",
        "text": "Actually loving that person"
      },
      {
        "id": "D",
        "text": "Having identical hobbies"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 80,
    "level": "veil",
    "question": "What do I need my partner to respect without being told repeatedly?",
    "options": [
      {
        "id": "A",
        "text": "Constant reassurance"
      },
      {
        "id": "B",
        "text": "My independence and choices, without pressure"
      },
      {
        "id": "C",
        "text": "Permission for every choice"
      },
      {
        "id": "D",
        "text": "Total agreement"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 81,
    "level": "abyss",
    "question": "Which inner contradiction describes me?",
    "options": [
      {
        "id": "A",
        "text": "I love being alone but also want someone always beside me"
      },
      {
        "id": "B",
        "text": "I dislike being alone"
      },
      {
        "id": "C",
        "text": "I always want crowds"
      },
      {
        "id": "D",
        "text": "I never need closeness"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 82,
    "level": "abyss",
    "question": "What helps me let go of someone?",
    "options": [
      {
        "id": "A",
        "text": "Knowing they aren't interested in me"
      },
      {
        "id": "B",
        "text": "One disagreement"
      },
      {
        "id": "C",
        "text": "A single missed call"
      },
      {
        "id": "D",
        "text": "A busy week"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 83,
    "level": "abyss",
    "question": "How do I feel when I make a mistake?",
    "options": [
      {
        "id": "A",
        "text": "I blame everyone else"
      },
      {
        "id": "B",
        "text": "Upset with myself"
      },
      {
        "id": "C",
        "text": "I immediately forget it"
      },
      {
        "id": "D",
        "text": "I feel nothing"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 84,
    "level": "abyss",
    "question": "What would I rather know, even if it's painful?",
    "options": [
      {
        "id": "A",
        "text": "The truth"
      },
      {
        "id": "B",
        "text": "Silence forever"
      },
      {
        "id": "C",
        "text": "A comforting lie"
      },
      {
        "id": "D",
        "text": "A vague answer"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 85,
    "level": "abyss",
    "question": "What kind of agreement feels especially hurtful?",
    "options": [
      {
        "id": "A",
        "text": "A different perspective"
      },
      {
        "id": "B",
        "text": "A request for clarification"
      },
      {
        "id": "C",
        "text": "Someone pretending to agree without understanding me"
      },
      {
        "id": "D",
        "text": "An honest disagreement"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 86,
    "level": "abyss",
    "question": "What if someone pulls away out of fear?",
    "options": [
      {
        "id": "A",
        "text": "I mock their fear"
      },
      {
        "id": "B",
        "text": "I talk with them about the fear and may continue"
      },
      {
        "id": "C",
        "text": "I force them to stay"
      },
      {
        "id": "D",
        "text": "I end it without talking"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 87,
    "level": "abyss",
    "question": "What worries me about letting someone close?",
    "options": [
      {
        "id": "A",
        "text": "Having separate hobbies"
      },
      {
        "id": "B",
        "text": "Receiving honest advice"
      },
      {
        "id": "C",
        "text": "Being disagreed with"
      },
      {
        "id": "D",
        "text": "Letting them influence me too much"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 88,
    "level": "abyss",
    "question": "How do I approach a truth that feels unfamiliar?",
    "options": [
      {
        "id": "A",
        "text": "Pretend it doesn't exist"
      },
      {
        "id": "B",
        "text": "Ask others to decide"
      },
      {
        "id": "C",
        "text": "Look for similarities first, then accept it"
      },
      {
        "id": "D",
        "text": "Reject it instantly"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 89,
    "level": "abyss",
    "question": "What's painful about someone's refusal to seek forgiveness?",
    "options": [
      {
        "id": "A",
        "text": "They ask for space"
      },
      {
        "id": "B",
        "text": "They never even wanted to be forgiven"
      },
      {
        "id": "C",
        "text": "They need time to heal"
      },
      {
        "id": "D",
        "text": "They admit the mistake"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 90,
    "level": "abyss",
    "question": "What would I never change for a relationship?",
    "options": [
      {
        "id": "A",
        "text": "My daily schedule"
      },
      {
        "id": "B",
        "text": "My hairstyle"
      },
      {
        "id": "C",
        "text": "My core personality traits"
      },
      {
        "id": "D",
        "text": "My favorite restaurant"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 91,
    "level": "void",
    "question": "Who has seen my most authentic self?",
    "options": [
      {
        "id": "A",
        "text": "Everyone I've met"
      },
      {
        "id": "B",
        "text": "No one has ever seen any part of me"
      },
      {
        "id": "C",
        "text": "Only one person: someone I was in love with"
      },
      {
        "id": "D",
        "text": "Only my classmates"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 92,
    "level": "void",
    "question": "How far would I go for someone I truly love?",
    "options": [
      {
        "id": "A",
        "text": "I'd give my life without hesitation to make them feel better"
      },
      {
        "id": "B",
        "text": "I'd wait for someone else"
      },
      {
        "id": "C",
        "text": "I'd send a short message"
      },
      {
        "id": "D",
        "text": "I'd only help if convenient"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 93,
    "level": "void",
    "question": "What matters to me in how I treat loved ones?",
    "options": [
      {
        "id": "A",
        "text": "Always agreeing with them"
      },
      {
        "id": "B",
        "text": "Buying them gifts"
      },
      {
        "id": "C",
        "text": "Never exploiting or betraying them"
      },
      {
        "id": "D",
        "text": "Avoiding difficult conversations"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 94,
    "level": "void",
    "question": "What behavior destroys my sense of safety?",
    "options": [
      {
        "id": "A",
        "text": "Needing time alone"
      },
      {
        "id": "B",
        "text": "Disagreeing politely"
      },
      {
        "id": "C",
        "text": "Aggression"
      },
      {
        "id": "D",
        "text": "Being quiet"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 95,
    "level": "void",
    "question": "What would make my dream life stop being my dream life?",
    "options": [
      {
        "id": "A",
        "text": "Learning a new skill"
      },
      {
        "id": "B",
        "text": "Moving to a new city"
      },
      {
        "id": "C",
        "text": "Having to give up something I truly love"
      },
      {
        "id": "D",
        "text": "Changing my routine"
      }
    ],
    "correctAnswerId": "C"
  },
  {
    "id": 96,
    "level": "void",
    "question": "Why do I forgive people?",
    "options": [
      {
        "id": "A",
        "text": "To avoid an apology"
      },
      {
        "id": "B",
        "text": "So I don't carry resentment, not out of weakness or need"
      },
      {
        "id": "C",
        "text": "To get something back"
      },
      {
        "id": "D",
        "text": "To prove I'm better"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 97,
    "level": "void",
    "question": "How do love and trust develop for me?",
    "options": [
      {
        "id": "A",
        "text": "I fall out of love quickly"
      },
      {
        "id": "B",
        "text": "I trust immediately"
      },
      {
        "id": "C",
        "text": "I never trust anyone"
      },
      {
        "id": "D",
        "text": "I love steadily, but need a long time to trust"
      }
    ],
    "correctAnswerId": "D"
  },
  {
    "id": 98,
    "level": "void",
    "question": "When feelings and logic clash, what do I choose?",
    "options": [
      {
        "id": "A",
        "text": "Whatever others prefer"
      },
      {
        "id": "B",
        "text": "What I believe is logically right"
      },
      {
        "id": "C",
        "text": "Whatever feels easiest"
      },
      {
        "id": "D",
        "text": "Whatever avoids conflict"
      }
    ],
    "correctAnswerId": "B"
  },
  {
    "id": 99,
    "level": "void",
    "question": "What if I discover a belief of mine was false?",
    "options": [
      {
        "id": "A",
        "text": "I accept reality; a false belief has no value to me"
      },
      {
        "id": "B",
        "text": "I defend it at all costs"
      },
      {
        "id": "C",
        "text": "I hide the evidence"
      },
      {
        "id": "D",
        "text": "I refuse to reconsider"
      }
    ],
    "correctAnswerId": "A"
  },
  {
    "id": 100,
    "level": "void",
    "question": "Which conflict about love and values feels most like me?",
    "options": [
      {
        "id": "A",
        "text": "I never need space in love"
      },
      {
        "id": "B",
        "text": "I can love someone and need distance while still following my values and goals"
      },
      {
        "id": "C",
        "text": "I abandon my goals for a partner"
      },
      {
        "id": "D",
        "text": "I always choose love over everything"
      }
    ],
    "correctAnswerId": "B"
  }
];
