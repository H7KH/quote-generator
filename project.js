let quoteText = document.querySelector('.quote-text');
let quoteName = document.querySelector('.quote-name');
let quoteBtn = document.querySelector('#quote-btn');

const quotes = [
    {
        quote: `The next generation is going to have terrible handwriting.`,
        person: "-Naval Ravikant"
    },

    {
        quote: `What really matters for the longevity of civilization is making life multiplanetary on a sustained basis.`,
        person: "-Elon Musk"
    },

    {
        quote: `Networking is overrated.
        Become first and foremost a person of value and the network will be available whenever you need it.`,
        person: "-Naval Ravikant"
    },

    {
        quote: `The only way to do great work is to love what you do.`,
        person: "-Steve Jobs"
    },

    {
        quote: `Success is not final, failure is not fatal: It is the courage to continue that counts.`,
        person: "-Winston Churchill"
    },

    {
        quote: `You miss 100% of the shots you don't take.`,
        person: "-Wayne Gretzky"
    },

    {
        quote: `The best way to predict the future is to create it.`,
        person: "-Peter Drucker"
    },

    {
        quote: `Don't watch the clock; do what it does. Keep going.`,
        person: "-Sam Levenson"
    },

    {
        quote: `Your time is limited, don't waste it living someone else's life.`,
        person: "-Steve Jobs"
    },

    {
        quote: `It always seems impossible until it's done.`,
        person: "-Nelson Mandela"
    },

    {
        quote: `You are never too old to set another goal or to dream a new dream.`,
        person: "-C.S. Lewis"
    },

    {
        quote: `The only limit to our realization of tomorrow will be our doubts of today.`,
        person: "-Franklin D. Roosevelt"
    },

    {
        quote: `Everything that can exist, exists, and everything that cannot exist, does not exist.`,
        person: "-Naval Ravikant"
    },

    {
        quote: `Nature is conscious, not self-conscious.`,
        person: "-Naval Ravikant"
    },

    {
        quote: `An enlightened person is one who’s tired of being here.`,
        person: "-Naval Ravikant"
    },

    {
        quote: `The more I learn, the more I realize how much I don't know.`,
        person: "-Albert Einstein"
    },

    {
        quote: `The only true wisdom is in knowing you know nothing.`,
        person: "-Socrates "
    },

    {
        quote: `The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.`,
        person: "-Stephen Hawking"
    },

    {
        quote: `The mind is not a vessel to be filled but a fire to be kindled.`,
        person: "-Plutarch"
    },

    {
        quote: `We don't see things as they are, we see things as we are.`,
        person: "-Anaïs Nin "
    },

    {
        quote: `The only thing that will redeem mankind is cooperation.`,
        person: "-Albert Einstein"
    }
];

quoteBtn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quoteText.innerText = quotes[random].quote;
    quoteName.innerText = quotes[random].person;
})