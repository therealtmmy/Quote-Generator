const quotes = [
  {
    quote:
      "The best way to find yourself is to lose yourself in the service of others.",
    person: "Mahatma Gandhi",
  },

  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    person: "Albert Einstein",
  },

  {
    quote:
      "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
    person: "Aristotle",
  },

  {
    quote:
      "Your time is limited, so dont waste it living someone elses life.",
    person: "Steve Jobs",
  },

  {
    quote:
      "Tell me and I forget, Teach me and I remember. Involve me and I learn.",
    person: "Benjamin Franklin",
  },

  {
    quote:
      "If you look at what you have in life, you will always have more. If you look at what you dont have to live, you will never have enough.",
    person: "Oprah Winfrey",
  },

  {
    quote:
      "It does not matter how slowly you go. As long as you do not stop.",
    person: "Confucius",
  },

  {
    quote:
      "Our lives begin to end the day we become slient about things that matter.",
    person: "Martin Luther King, Jr",
  },

  {
    quote:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    person: "Dalai Lana",
  },

  {
    quote: "The journey of a thousand miles begins with one step.",
    person: "Lao Tzu",
  },

  {
    quote:
      "The price it takes to be fake is the same price it takes to be real!",
    person: "Apostle Joshua Selman",
  },

  {
    quote: "There is no self-made man, we are all products of God’s grace.",
    person: "Bishop David Oyedepo",
  },

  {
    quote: "To be rewarded well is to trade well with Life.",
    person: "Mary Gideon",
  },

  {
    quote:
      "What you see with the eyes of faith is more real than what you see with your optical eyes.",
    person: "Chris Oyakhilome",
  },

  {
    quote:
      "Every problem comes along with it’s solution; the bigger the problem, the bigger the testimony. Cheer up!",
    person: "Chris Oyakhilome",
  },

  {
    quote: "Remember to live while you are busy surviving.",
    person: "Mary Gideon",
  },

  {
    quote:
      "We make a living by what we get, but we make a life by what we give.",
    person: "Winston Churchill",
  },

  {
    quote:
      "The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy.",
    person: "Albert Camus",
  },

  {
    quote:
      "It is always easy to be logical. It is almost impossible to be logical to the bitter end.",
    person: "Albert Camus",
  },

  {
    quote:
      "The nexus of space and time where you are now is the most immediate sector in your universe.",
    person: "Terence McKenna",
  },
   
   {
    quote:
     "So, go ahead and dive right into these notable quotes about life. You may even uncover your next Monday motivation or self-care mantra.",
    person: "William Hazlitt",
   },
   
   {
    quote:
     "Life comes from the earth and life returns to the earth.",
    person: "Wayne Dyer",
   },
   
   {
    quote:
     "We are here to add what we can to life, not to get what we can from life.",
    person: "Vincent Van Gogh",
   },
   
   {
    quote:
     "The art of life is to know how to enjoy a little and to endure very much.",
    person: "Vince Lombardi",
   },
   
   {
    quote:
     "If you change the way you look at things, the things you look at change.",
    person: "Vernon Howard",
   },
   
   {
    quote:
     "For the great doesn't happen through impulse alone, and is a succession of little things that are brought together.",
    person: "Theodore Roosevelt",
   },
   
   {
    quote:
     "Perfection is not attainable. But if we chase perfection we can catch excellence.",
    person: "T.S. Eliot",
   },
   
   {
    quote:
     "You have succeeded in life when all you really want is only what you really need.",
    person: "Sydney J. Harris",
   },
   
   {
    quote:
     "Believe you can and you're halfway there.",
    person: "Stephen Jay Gould",
   },
   
   {
    quote:
     "To do the useful thing, to say the courageous thing, to contemplate the beautiful thing: that is enough for one man's life.",
    person: "Stephen Covey",
   },
   
   {
    quote:
     "When I hear somebody sigh, 'Life is hard,' I am always tempted to ask, 'Compared to what?'",
    person: "Søren Kierkegaard",
   },
   
   {
    quote:
     "We pass through this world but once.",
    person: "Sai Baba",
   },
   
   {
    quote:
     "Live out of your imagination, not your history.",
    person: "Roy T. Bennett",
   },
   
   {
    quote:
     "Life can only be understood backwards; but it must be lived forwards.",
    person: "Roy. T. Bennett",
   },
   
   {
    quote:
     "Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy.",
    person: "Rose Kennedy",
   },
   
   {
    quote:
     "Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.",
    person: "Robert Louis Stevenson",
   },
   
   {
    quote:
     "Don't waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
    person: "Robert Frost",
   },
   
   {
    quote:
     "Life isn't a matter of milestones, but of moments.",
    person: "Rick Riordan",
   },
   
   {
    quote:
     "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    person: "O. Henry",
   },
   
   {
    quote:
     "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Naval Ravikant",
   },
   
   {
    quote:
     "If my life is going to mean anything, I have to live it myself.",
    person: "Michelle Obama",
   },
   
   {
    quote:
     "Life is made up of sobs, sniffles, and smiles, with sniffles predominating.",
    person: "Michael Cunningham",
   },
   
   {
    quote:
     "Three things in life - your health, your mission, and the people you love. That's it.",
    person: "Maxime Legacé",
   },
   
   {
    quote:
     "Success isn't about how your life looks to others. It's about how it feels to you.",
    person: "Mary Anne Radmacher",
   },
   
   {
    quote:
     "You cannot find peace by avoiding life.",
    person: "Mark Twain",
   },
   
   {
    quote:
     "Difficult and meaningful will always bring more satisfaction than easy and meaningless.",
    person: "Margaret Mitchell",
   },
   
   {
    quote:
     "Courage doesn't always roar. Sometimes courage is a quiet voice at the end of the day saying, 'I will try again tomorrow.'",
    person: "Mae West",
   },
   
   {
    quote:
     "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
    person: "Louise Hay",
   },
   
   {
    quote:
     "Life's under no obligation to give us what we expect.",
    person: "Les Brown",
   },
   
   {
    quote:
     "You only live once, but if you do it right, once is enough.",
    person: "Kamal Ravikant",
   },
   
   {
    quote:
     "I choose to make the rest of my life the best of my life.",
    person: "Jim Rohn",
   },
   
   {
    quote:
     "Life has no limitations, except the ones you make.",
    person: "Jean Anouilh",
   },
   
   {
    quote:
     "A secret to life: Know that none of this matters, and yet... live as if every single moment does.",
    person: "Jane Goodall",
   },
   
   {
    quote:
     "Happiness is not by chance, but by choice.",
    person: "Herman Melville",
   },
   
   {
    quote:
     "Things are beautiful if you love them.",
    person: "Henry Ford",
   },
   
   {
    quote:
     "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    person: "Henry David Thoreau",
   },
   
   {
    quote:
     "It is better to fail in originality than to succeed in imitation.",
    person: "Havelock Ellis",
   },
   
   {
    quote:
     "If you say you can or you can't you are right either way.",
    person: "George Lorimer",
   },
   
   {
    quote:
     "The price of anything is the amount of life you exchange for it.",
    person: "George Bernard Shaw",
   },
   
   {
    quote:
     "All the art of living lies in a fine mingling of letting go and holding on.",
    person: "Gary Vaynerchuk",
   },
   
   {
    quote:
     "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
    person: "Frederick Douglass",
   },
   
   {
    quote:
     "Life isn't about finding yourself. Life is about creating yourself.",
    person: "Jennifer Lopez",
   },
   
   {
    quote:
     "Love your family, work super hard, live your passion.",
    person: "Erica Jong",
   },
   
   {
    quote:
     "If there is no struggle, there is no progress.",
    person: "Eminem",
   },
   
   {
    quote:
     "Doubt is a killer. You just have to know who you are and what you stand for.",
    person: "Emily Dickinson",
   },
   
   {
    quote:
     "If you don't risk anything, you risk even more.",
    person: "Eleanor Roosevelt",
   },
   
   {
    quote:
     "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride and nothing is guaranteed.",
    person: "Edna Mode",
   },
   
   {
    quote:
     "That it will never come again is what makes life sweet.",
    person: "Dorothy West",
   },
   
   {
    quote:
     "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
    person: "Dolly Parton",
   },
   
   {
    quote:
     "I never look back, darling. It distracts from the now.",
    person: "David Ogilvy",
   },
   
   {
    quote:
     "To know how much there is to know is the beginning of learning to live.",
    person: "D. H. Lawrence",
   },
   
   {
    quote:
     "If you don't like the road you're walking, start paving another one.",
    person: "Colleen Hoover",
   },
   
   {
    quote:
     "Don't bunt. Aim out of the ballpark. Aim for the company of immortals.",
    person: "Coco Chanel",
   },
   
   {
    quote:
     "A woman has to live her life, or live to repent not having lived it.",
    person: "Charles M. Schluz",
   },
   
   {
    quote:
     "Don't take life too seriously. Punch it in the face when it needs a good hit. Laugh at it.",
    person: "Charles Darwin",
   },
   
   {
    quote:
     "In order to be irreplaceable one must always be different.",
    person: "Cassandra Clare",
   },
   
   {
    quote:
     "I think I've discovered the secret of life - you just hang around until you get used to it.",
    person: "Boris Pasternak",
   },
   
   {
    quote:
     "A man who dares to waste one hour of time has not discovered the value of life.",
    person: "Bob Marley",
   },
   
   {
    quote:
     "Life is a book and there are a thousand pages I have not yet read.",
    person: "Aristotle",
   },
   
   {
    quote:
     "Surprise is the greatest gift which life can grant us.",
    person: "Anthony Pompliano",
   },
   
   {
    quote:
     "Open your eyes, look within. Are you satisfied with the life you're living?",
    person: "Annette Funicello",
   },
   
   {
    quote:
     "We are what we repeatedly do. Excellence, then is not an act, but a habit.",
    person: "Allen Saunders",
   },
   
   {
    quote:
     "Control your emotions, control your mind, Control your mind, control your actions. Control your actions, control your life.",
    person: "Alice Roosevelt Longworth",
   },
   
   {
    quote:
     "Life does not have to be perfect to be wonderful.",
    person: "Albert Einstein",
   },
   
   {
    quote:
     "Life is what happens to us while we are making other plans.",
    person: "Albert Camus",
   },
   
   {
    quote:
     "I have a simple philosophy: Fill what's empty. Empty what's full. Scratch where it itches.",
    person: "A.A. Milne",
   },
   
   {
    quote:
     "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    person: "Lao Tzu",
   },
   
   {
    quote:
     "Live to the point of tears.",
    person: "George Gershwin",
   },
   
   {
    quote:
     "Rivers know this: there is no hurry. We shall get there some day.",
    person: "Erma Bombeck",
   },
   
   {
    quote:
     "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality, let things flow naturally forward in whatever way they like.",
    person: "Buddha",
   },
   
   {
    quote:
     "Life is a lot like jazz... it's best when you improvise.",
    person: "Al Roker",
   },
   
   {
    quote:
     "When I stand before God at the end of my. life, I would hope that I would not have a single bit of talent left, and could say 'I used everything you gave me'.",
    person: "Alice Nkom",
   },
   
   {
    quote:
     "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    person: "Booker T. Washington",
   },
   
   {
    quote:
     "Always be yourself. At the end of the day, that's all you've really got; when you strip everything down, that's all you've got, so always be yourself.",
    person: "Dalai Lama",
   },
   
   {
    quote:
     "“When you are doing something that is right, you just do it and take care … Someone has to do this.”",
    person: "Langston Hughes",
   },
   
   {
    quote:
     "“Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.”",
    person: "Diane Luna",
   },
   
   {
    quote:
     "“The purpose of our lives is to be happy.”",
    person: "Dr. Damary M. Bonilla-Rodriguez",
   },
   
   {
    quote:
     "“I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.”",
    person: "Earl G. Graves, Sr.",
   },
   
   {
    quote:
     "Collaboration, creativity, and respect build life long connections that matter and make a difference, propelling us to work together across all boundaries.",
    person: "Edna Mode",
   },
   
   {
    quote:
     "Stay strong as you live your life story and remember your blessings, no matter what circumstances you face.",
    person: "Eleanor Roosevelt",
   },
   
   {
    quote:
     "“Hold on to your dreams of a better life and stay committed to striving to realize it.”",
    person: "Ernest Hemingway",
   },
   
   {
    quote:
     "“If life were predictable it would cease to be life, and be without flavor.”",
    person: "Frank Sinatra",
   },
   
   {
    quote:
     "“In order to write about life first you must live it.”",
    person: "Gabriel García Márquez",
   },
   
   {
    quote:
     "“The big lesson in life, baby, is never be scared of anyone or anything.”",
    person: "George Takei",
   },
   
   {
    quote:
     "“All human beings have three lives: public, private, and secret.”",
    person: "Harvey Milk",
   },
   
   {
    quote:
     "“I intend to live life, not just exist.”",
    person: "Gabriel García Márquez",
   },
   
   {
    quote:
     "“I know you can't live on hope alone. But without hope, life is not worth living. So you, and you and you: You got to give them hope. You got to give them hope!”",
    person: "Jackie Robinson",
   },
   
   {
    quote:
     "“What matters in life is not what happens to you but what you remember and how you remember it.”",
    person: "James Baldwin",
   },
   
   {
    quote:
     "“A life is not important except in the impact it has on other lives.”",
    person: "Langston Hughes",
   },
   
   {
    quote:
     "You have to go the way your blood beats. If you don’t live the only life you have, you won’t live some other life, you won’t live any life at all.",
    person: "Luisa Fernanda Cicero",
   },
   
   {
    quote:
     "“Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.”",
    person: "Maya Angelou",
   },
   
   {
    quote:
     "Sometimes the biggest accomplishment in life is to find yourself.",
    person: "James Baldwin",
   },
   
   {
    quote:
     "If I am not good to myself, how can I expect anyone else to be good to me?",
    person: "Muhammad Ali",
   },
   
   {
    quote:
     "“Not everything that is faced can be changed, but nothing can be changed until it is faced.”",
    person: "Bruce Lee",
   },
   
   {
    quote:
     "“He who is not courageous enough to take risks will accomplish nothing in life.”",
    person: "Phillipa Soo",
   },
   
   {
    quote:
     "“Do not pray for an easy life, pray for the strength to endure a difficult one.”",
    person: "Rita Dove",
   },
   
   {
    quote:
     "“Life isn’t perfect, any failures you have are actually learning moments. They teach us how to grow and evolve.”",
    person: "Sandra X Pradas Martin",
   },
   
   {
    quote:
     "“There are times in life when, instead of complaining, you do something about your complaints.”",
    person: "Stephen King",
   },
   
   {
    quote:
     "Our life and our success will be measured by the quality of the life we lead and the lives we touch.",
    person: "The Buddha",
   },
   
   {
    quote:
     "“Get busy living or get busy dying.”",
    person: "Oprah Winfrey",
   },
   
   {
    quote:
     "“The only real failure in life is not to be true to the best one knows.",
    person: "Yai Vargas",
   },
   
   {
    quote:
     "“Throughout life people will make you mad, disrespect you and treat you bad. Let God deal with the things they do, cause hate in your heart will consume you too.",
    person: "Oprah Winfrey",
   },
   
   {
    quote:
     "Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not.",
    person: "Serena Williams",
   },
   
   {
    quote:
     "When life hands you a difficult situation where you feel undervalued and disrespected, be bold and brave enough to know your worth.",
    person: "Zora Neale Hurston",
   },
   
   {
    quote:
     "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.",
    person: "Priyanka Chopra",
   },
   
   {
    quote:
     "I decided I can’t pay a person to rewind time, so I may as well get over it.",
    person: "Freida Pinto",
   },
   
   {
    quote:
     "“There are years that ask questions and years that answer.”",
    person: "Hailee Steinfeld",
   },
   
   {
    quote:
     "I think it's great to be flawed. I am hugely flawed, and I like it this way. That's the fun of life. You fall, get up, make mistakes, learn from them, be human and be you.",
    person: "Ava DuVernay",
   },
   
   {
    quote:
     "I'll never forget where I'm from. It's essential to remain humble and evolving.",
    person: "Nikki Giovanni",
   },
   
   {
    quote:
     "It needs to be said and heard: it's OK to be who you are.",
    person: "Tina Turner",
   },
   
   {
    quote:
     "If you’re doing something outside of dominant culture, there’s not an easy place for you. You will have to do it yourself.",
    person: "Zanele Muholi",
   },
   
   {
    quote:
     "Mistakes are a fact of life. It is the response to the error that counts.",
    person: "Lana Condor",
   },
   
   {
    quote:
     "If you are unhappy with anything... whatever is bringing you down, get rid of it. Because you'll find that when you're free, your true creativity, your true self comes out.",
    person: "Robin Roberts",
   },
   
   {
    quote:
     "If I wait for someone else to validate my existence, it will mean that I’m shortchanging myself.",
    person: "Michelle Yeoh",
   },
   
   {
    quote:
     "I've been very fortunate to have good people in my life, and when you find good people, you gotta hold onto them real tight.",
    person: "Wanda Sykes",
   },
   
   {
    quote:
     "Life is not so much what you accomplish as what you overcome.",
    person: "Dolly Parton",
   },
   
   {
    quote:
     "It's very important for us all to understand that we are interconnected and we need to hold hands together, especially when the going gets tough.",
    person: "Helen Keller",
   },
   
   {
    quote:
     "If you feel like there’s something out there that you’re supposed to be doing, if you have a passion for it, then stop wishing and just do it.",
    person: "Hoda Kotb",
   },
   
   {
    quote:
     "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
    person: "Princess Diana",
   },
   
   {
    quote:
     "Life is a series of baby steps.",
    person: "Unknown",
   },
   
   {
    quote:
     "Love yourself first and everything else falls into line.",
    person: "Meghan Markle",
   },
   
   {
    quote:
     "Lead from the heart, not the head.",
    person: "Unknown",
   },
   
   {
    quote:
     "Wherever life plants you, bloom with grace.",
    person: "Reese Witherspoon",
   },
   
   {
    quote:
     "Don't give it five minutes if you're not going to give it five years.",
    person: "Roald Dahl",
   },
   
   {
    quote:
     "What comes easy won’t last long, and what lasts long won’t come easy.",
    person: "Unknown",
   },
   
   {
    quote:
     "Every day is not a success. Every year is not a success. You have to celebrate the good.",
    person: "Reba McEntire",
   },
   
   {
    quote:
     "Those who don't believe in magic will never find it.",
    person: "Oprah Winfrey",
   },
   
   {
    quote:
     "No one is you and that is your superpower.",
    person: "Unknown",
   },
   
   {
    quote:
     "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
    person: "Martin Luther King, Jr.",
   },
   
   {
    quote:
     "The biggest adventure you can take is to live the life of your dreams.",
    person: "Michael Jordan",
   },
   
   {
    quote:
     "The best time for new beginnings is now.",
    person: "Maya Angelou",
   },
   
   {
    quote:
     "Life's most persistent and urgent question is, 'What are you doing for others?",
    person: "Margaret Laurence",
   },
   
   {
    quote:
     "I've failed over and over and over again in my life and that is why I succeed.",
    person: "Unknown",
   },
   
   {
    quote:
     "Nothing can dim the light that shines from within.",
    person: "Elizabeth Gilbert",
   },
   
   {
    quote:
     "It's not what we have in life but who we have in our life that matters.",
    person: "Unknown",
   },
   
   {
    quote:
     "One day or day one. It's your decision.",
    person: "Dr. Seuss",
   },
   
   {
    quote:
     "Embrace the glorious mess that you are.",
    person: "Unknown",
   },
   
   {
    quote:
     "Every day may not be good, but there is something good in every day.",
    person: "Carol Burnett",
   },
   
   {
    quote:
     "Sometimes you will never know the value of a moment until it becomes a memory.",
    person: "Unknown",
   },
   
   {
    quote:
     "Difficult roads often lead to beautiful destinations.",
    person: "C.S. Lewis",
   },
   
   {
    quote:
     "Only I can change my life. No one can do it for me.",
    person: "Unknown",
   },
   
   {
    quote:
     "A diamond is a chunk of coal that did well under pressure.",
    person: "Beyoncé",
   },
   
   {
    quote:
     "You can't go back and change the beginning, but you can start where you are and change the ending.",
    person: "Audrey Hepburn",
   },
   
   {
    quote:
     "Small steps in the right direction can turn out to be the biggest step of your life.",
    person: "Albert Einstein",
   },
   
   {
    quote:
     "If everything was perfect, you would never learn and you would never grow.",
    person: "George Bernard Shaw",
   },
   
   {
    quote:
     "The best thing to hold onto in life is each other.",
    person: "Arthur Rubinstein",
   },
   
   {
    quote:
     "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person: "Oscar Wilde",
   },
   
   {
    quote:
     "I have found that if you love life, life will love you back.",
    person: "Ralph Waldo Emerson",
   },
      
];

export default quotes;
