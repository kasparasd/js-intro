console.clear();

const text = `
We're no strangers to love
You know the rules and so do I (do I)
A full commitment's what I'm thinking of
You wouldn't get this from any other guy

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching, but you're too shy to say it (say it)
Inside, we both know what's been going on (going on)
We know the game and we're gonna play it

And if you ask me how I'm feeling
Don't tell me you're too blind to see

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching, but you're too shy to say it (to say it)
Inside, we both know what's been going on (going on)
We know the game and we're gonna play it

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`;

// 1 Rasti ne tuščių eilučių kiekį;
// 2 Rasti žodžių kiekį;
// 3 Rasti ilgiausia eilutę ir gražinti jos tekstą;
// 4 Rasti ilgiausios eilutės raidžių kiekį;
// 5 Rasti dažniausiai pasikartojančia raidę (nepriklausomai ar ji didžioji, ar mažoji);
// 6 Rasti dažniausiai pasikartojantį žodį (nepriklausomai ar jis su didžiosiomis, ar mažosiomis);
// 7 Rasti unikalių raidžių kiekį;
// 8 Rasti unikalių žodžių kiekį;
// 9 Rasti žodžių su apostrofu kiekį;


// Rasti ne tuščių eilučių kiekį;
const splitted = text.split('\n');

let lineCount = 0;
for(const line of splitted){
    if (line!==''){
        lineCount++
    }
}

console.log('1. Ne tusciu eiluciu skaicius:',lineCount);

// Rasti žodžių kiekį;
let words = [];
for (line of splitted){
    if(line !==''){
        words.push(...line.split(' '))
    }
}

console.log('2. Zodziu skaicius:', words.length);

// Rasti ilgiausia eilutę ir gražinti jos tekstą;

let eilute = '';

for (const line of splitted){
    if(line.length>eilute.length){
        eilute =line
    }
}

console.log('3. ilgiausia eilute:', eilute);

// Rasti ilgiausios eilutės raidžių kiekį;
let ilgiausiaEilutesRaidziuKiekis = '';
let raidziuSkaicius = 0;
let abc = 'abcdefghijklmnopqrstuvwxyz'

for (const line of splitted){
    const splittedLine = line.split('');
    let skaicius = 0;
    let onlyLetters = ''

    for (let j = 0; j < splittedLine.length; j++) {
        if(splittedLine[j] !== '' && abc.includes(splittedLine[j].toLowerCase())){
            skaicius++
            onlyLetters +=splittedLine[j]
        }
        
    }
    if(skaicius>raidziuSkaicius){
        raidziuSkaicius = skaicius;
        ilgiausiaEilutesRaidziuKiekis = onlyLetters;
    }
    
}

console.log('4. Ilgiausios eilutes raidziu skaicius',raidziuSkaicius)

// Rasti dažniausiai pasikartojančia raidę (nepriklausomai ar ji didžioji, ar mažoji);

let lettersObj = {};

for(const fullLine of splitted){
    const splitLineIntoLetters = fullLine.toLocaleLowerCase().split('');
    // console.log(splitLineIntoLetters);
    for (let j = 0; j < fullLine.length; j++) {
        if(splitLineIntoLetters[j] !=='' && abc.includes(splitLineIntoLetters[j])){
            lettersObj[splitLineIntoLetters[j]] ? lettersObj[splitLineIntoLetters[j]]++ : lettersObj[splitLineIntoLetters[j]]=1;
        }
        
    }
}

let biggestLetter = '';
let biggestLetterCount = 0;

for(const letter in lettersObj){
    if(biggestLetterCount<lettersObj[letter]){
        biggestLetter = letter;
        biggestLetterCount = lettersObj[letter]
    }
}

console.log(`5. Dazniausiai pasikartojanti raide: ${biggestLetter}, kartojasi ${biggestLetterCount} kartus`);

// 6 Rasti dažniausiai pasikartojantį žodį (nepriklausomai ar jis su didžiosiomis, ar mažosiomis);


let allWords = {};
for(const line of splitted){
    let newLine = line.replaceAll('(', '')
    newLine = newLine.replaceAll(')', '')
   const wordArr = newLine.split(' ');
   for (const word of wordArr){
    if(word !== ''){

        const wordLower = word.toLowerCase();
        allWords[wordLower] ? allWords[wordLower]++ : allWords[wordLower] = 1;
    }
   }
}

let mostRepeatedWord = ''
let mostRepeatedWordCount = 0
for (const word in allWords){
    if(allWords[word]>mostRepeatedWordCount){
        mostRepeatedWord = word;
        mostRepeatedWordCount = allWords[word]
    }
}

console.log(`6. Dazniausiai pasikartojantis zodis: "${mostRepeatedWord}", kartojasi: ${mostRepeatedWordCount}`);

// 7 Rasti unikalių raidžių kiekį;

let symbolsInText = text.split('\n').join('').split(' ').join('');

const setOfSymbols = new Set([symbolsInText])

const string = Array.from(setOfSymbols).join(' ');


let abcToRemove = 'abcdefghijklmnopqrstuvwxyz';
abcToRemove = abcToRemove.replace('a', '')




for (const letter of abc){
    if(string.includes(letter)){
        abcToRemove = abcToRemove.replace(letter, '')
    }
}

console.log(`7. Unikalios raides? ${abc.length - abcToRemove.length}`);

// 8 Rasti unikalių žodžių kiekį;

let uniqueWordCount = 0;
for (const word in allWords){
    uniqueWordCount++
}

console.log(`8. Unikalus zodziai tekste ${uniqueWordCount}`);
// console.log(allWords);

// 9 Rasti žodžių su apostrofu kiekį;

let apostropheCount = 0; 

const textString = text.split('\n').join(' ').split(' ');

for (let i = 0; i < textString.length; i++) {
    const element = textString[i];
    if (element.includes("'")){
        apostropheCount++
    }
    
}


console.log(`9. apostrofu kiekis ${apostropheCount}`);

