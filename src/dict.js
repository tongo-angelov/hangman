const DICTIONARY = [
    'word',
    'test',
    'speed',
    'fast',
    'firous',
    'what',
    'something',
    'whatever',
    'lina'
];

export const getWord = () => {
    const word = DICTIONARY.at(Math.floor(Math.random() * DICTIONARY.length));
    return word.toUpperCase();
};