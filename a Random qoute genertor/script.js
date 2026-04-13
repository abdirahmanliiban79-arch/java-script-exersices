const quotesData = [
    {
        words: 'The only way to do great work is to love what you do.',
        author: 'Steve Jobs'
    },
    {
        words: 'In the middle of every difficulty lies opportunity.',
        author: 'Albert Einstein'
    },
    {
        words: 'The purpose of our lives is to be happy.',
        author: 'Dalai Lama'
    },
    {
        words: 'Life is what happens when you’re busy making other plans.',
        author: 'John Lennon'
    },
    {
        words: 'Get busy living or get busy dying.',
        author: 'Stephen King'
    },
    {
        words: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West'
    },
    {
        words: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
        author: 'Thomas A. Edison'
    },
    {
        words: 'If you want to live a happy life, tie it to a goal, not to people or things.',
        author: 'Albert Einstein'
    },
    {
        words: 'Never let the fear of striking out keep you from playing the game.',
        author: 'Babe Ruth'
    },
    {
        words: 'Money and success don’t change people; they merely amplify what is already there.',
        author: 'Will Smith'
    },
    {
        words: 'It does not matter how slowly you go as long as you do not stop.',
        author: 'Confucius'
    },
    {
        words: 'Everything you’ve ever wanted is on the other side of fear.',
        author: 'George Addair'
    },
    {
        words: 'Success is not final; failure is not fatal: It is the courage to continue that counts.',
        author: 'Winston S. Churchill'
    },
    {
        words: 'Hardships often prepare ordinary people for an extraordinary destiny.',
        author: 'C.S. Lewis'
    },
    {
        words: 'Believe you can and you’re halfway there.',
        author: 'Theodore Roosevelt'
    },
    {
        words: 'The starting point of all achievement is desire.',
        author: 'Napoleon Hill'
    },
    {
        words: 'The secret of success is to do the common thing uncommonly well.',
        author: 'John D. Rockefeller Jr.'
    },
    {
        words: 'I find that the harder I work, the more luck I seem to have.',
        author: 'Thomas Jefferson'
    },
    {
        words: 'Don’t be distracted by criticism. Remember—the only taste of success some people get is to take a bite out of you.',
        author: 'Zig Ziglar'
    },
    {
        words: 'Success usually comes to those who are too busy to be looking for it.',
        author: 'Henry David Thoreau'
    },
    {
        words: 'Creativity is intelligence having fun.',
        author: 'Albert Einstein'
    },
    {
        words: 'Music washes away from the soul the dust of everyday life.',
        author: 'Berthold Auerbach'
    },
    {
        words: 'Where words fail, music speaks.',
        author: 'Hans Christian Andersen'
    },
    {
        words: 'Everything you can imagine is real.',
        author: 'Pablo Picasso'
    },
    {
        words: 'One good thing about music, when it hits you, you feel no pain.',
        author: 'Bob Marley'
    },
    {
        words: 'To live a creative life, we must lose our fear of being wrong.',
        author: 'Joseph Chilton Pearce'
    },
    {
        words: 'Art is the only way to run away without leaving home.',
        author: 'Twyla Tharp'
    },
    {
        words: 'Music is the shorthand of emotion.',
        author: 'Leo Tolstoy'
    },
    {
        words: 'Creativity takes courage.',
        author: 'Henri Matisse'
    },
    {
        words: 'The world is but a canvas to our imagination.',
        author: 'Henry David Thoreau'
    },
    {
        words: 'The mind is everything. What you think you become.',
        author: 'Buddha'
    },
    {
        words: 'Your time is limited, so don’t waste it living someone else’s life.',
        author: 'Steve Jobs'
    },
    {
        words: 'Change your thoughts and you change your world.',
        author: 'Norman Vincent Peale'
    },
    {
        words: 'Whether you think you can or you think you can’t, you’re right.',
        author: 'Henry Ford'
    },
    {
        words: 'The only person you are destined to become is the person you decide to be.',
        author: 'Ralph Waldo Emerson'
    },
    {
        words: 'Act as if what you do makes a difference. It does.',
        author: 'William James'
    },
    {
        words: 'What we achieve inwardly will change outer reality.',
        author: 'Plutarch'
    },
    {
        words: 'Intelligence without ambition is a bird without wings.',
        author: 'Salvador Dali'
    },
    {
        words: 'Small steps in the right direction can turn out to be the biggest steps of your life.',
        author: 'Unknown'
    },
    {
        words: 'The best way to predict your future is to create it.',
        author: 'Abraham Lincoln'
    },
    {
        words: 'In a world where you can be anything, be kind.',
        author: 'Jennifer Dukes Lee'
    },
    {
        words: 'No act of kindness, no matter how small, is ever wasted.',
        author: 'Aesop'
    },
    {
        words: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        author: 'Mother Teresa'
    },
    {
        words: 'The only way to have a friend is to be one.',
        author: 'Ralph Waldo Emerson'
    },
    {
        words: 'Hate cannot drive out hate: only love can do that.',
        author: 'Martin Luther King Jr.'
    },
    {
        words: 'Kindness is a gift everyone can afford to give.',
        author: 'Unknown'
    },
    {
        words: 'To handle yourself, use your head; to handle others, use your heart.',
        author: 'Eleanor Roosevelt'
    },
    {
        words: 'Try to be a rainbow in someone else’s cloud.',
        author: 'Maya Angelou'
    },
    {
        words: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
        author: 'Anne Frank'
    },
    {
        words: 'Be the change that you wish to see in the world.',
        author: 'Mahatma Gandhi'
    },
    {
        words: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        words: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        words: "You learn more from failure than from success. Don’t let it stop you.",
        author: "Unknown"
    },
    {
        words: "It’s not whether you get knocked down, it’s whether you get up.",
        author: "Vince Lombardi"
    },
    {
        words: "If you are working on something that you really care about, you don’t have to be pushed.",
        author: "Steve Jobs"
    },
    {
        words: "People who are crazy enough to think they can change the world, are the ones who do.",
        author: "Rob Siltanen"
    },
    {
        words: "Failure will never overtake me if my determination to succeed is strong enough.",
        author: "Og Mandino"
    },
    {
        words: "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk.",
        author: "Mohnish Pabrai"
    },
    {
        words: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou"
    },
    {
        words: "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        words: "Imagine your life is perfect in every respect; what would it look like?",
        author: "Brian Tracy"
    },
    {
        words: "We generate fears while we sit. We overcome them by action.",
        author: "Dr. Henry Link"
    },
    {
        words: "Whether you think you can or think you can’t, you’re right.",
        author: "Henry Ford"
    },
    {
        words: "Security is mostly a superstition. Life is either a daring adventure or nothing.",
        author: "Helen Keller"
    },
    {
        words: "The man who has confidence in himself gains the confidence of others.",
        author: "Hasidic Proverb"
    },
    {
        words: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        words: "Creativity is intelligence having fun.",
        author: "Albert Einstein"
    },
    {
        words: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        words: "Develop an 'Attitude of Gratitude'. Say thank you to everyone you meet.",
        author: "Brian Tracy"
    },
    {
        words: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        words: "To see what is right and not do it is a lack of courage.",
        author: "Confucius"
    },
    {
        words: "Reading is to the mind what exercise is to the body.",
        author: "Joseph Addison"
    },
    {
        words: "Fake it until you make it! Act as if you had all the confidence you require.",
        author: "Brian Tracy"
    },
    {
        words: "The future belongs to the competent. Get good, get better, be the best!",
        author: "Brian Tracy"
    },
    {
        words: "Everything comes to him who hustles while he waits.",
        author: "Thomas Edison"
    },
    {
        words: "Code is like humor. When you have to explain it, it’s bad.",
        author: "Cory House"
    },
    {
        words: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        words: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde"
    },
    {
        words: "In order to be irreplaceable, one must always be different.",
        author: "Coco Chanel"
    },
    {
        words: "Java is to JavaScript what car is to Carpet.",
        author: "Chris Heilmann"
    },
    {
        words: "Knowledge is power.",
        author: "Francis Bacon"
    },
    {
        words: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
        author: "Dan Salomon"
    },
    {
        words: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
        author: "Antoine de Saint-Exupéry"
    },
    {
        words: "Ruby is rubbish. PHP is phpantastic.",
        author: "Nikita Popov"
    },
    {
        words: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        words: "Before software can be reusable it first has to be usable.",
        author: "Ralph Johnson"
    },
    {
        words: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    },
    {
        words: "Technology is best when it brings people together.",
        author: "Matt Mullenweg"
    },
    {
        words: "The art of programming is the art of organizing complexity.",
        author: "Edsger W. Dijkstra"
    },
    {
        words: "Don't repeat yourself. Every piece of knowledge must have a single representation.",
        author: "Andy Hunt"
    },
    {
        words: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        words: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates"
    },
    {
        words: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs"
    },
    {
        words: "Information technology and business are becoming inextricably interwoven.",
        author: "Bill Gates"
    },
    {
        words: "The computer was born to solve problems that did not exist before.",
        author: "Bill Gates"
    },
    {
        words: "If you think your users are idiots, only idiots will use it.",
        author: "Linus Torvalds"
    },
    {
        words: "Software is a great combination between artistry and engineering.",
        author: "Bill Gates"
    },
    {
        words: "Quality is a product of a conflict between artists and technicians.",
        author: "Steve Jobs"
    },
    {
        words: "Great things in business are never done by one person.",
        author: "Steve Jobs"
    },
    {
        words: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    }
];
quoteIndex = 0;
const quoteText = document.querySelector('#words');
const quoteAuthor = document.querySelector('#author');
const generateBtn = document.querySelector('#generate-btn')


generateBtn.addEventListener('click',nextQuote)
function generateQuote(quote){
    quoteText.textContent = quote.words;
    quoteAuthor.textContent = quote.author;
}
function nextQuote(){
    quoteIndex++;
    if(quoteIndex>= quotesData.length){
        quoteIndex=0;
    }
    generateQuote(quotesData[quoteIndex]);
}
function displayRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotesData.length);
    generateQuote(quotesData[randomIndex]);
}
window.onload = displayRandomQuote;