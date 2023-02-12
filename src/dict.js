// API used https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=8&limit=100&api_key=YOURAPIKEY

const DICTIONARY = [
    {
        "id": 0,
        "word": "trimer"
    },
    {
        "id": 0,
        "word": "handlock"
    },
    {
        "id": 0,
        "word": "lezbos"
    },
    {
        "id": 0,
        "word": "Tennyson"
    },
    {
        "id": 0,
        "word": "panthers"
    },
    {
        "id": 0,
        "word": "tipsters"
    },
    {
        "id": 0,
        "word": "unital"
    },
    {
        "id": 0,
        "word": "measure"
    },
    {
        "id": 0,
        "word": "strangle"
    },
    {
        "id": 0,
        "word": "tekkie"
    },
    {
        "id": 0,
        "word": "colloquy"
    },
    {
        "id": 0,
        "word": "creams"
    },
    {
        "id": 0,
        "word": "suvs"
    },
    {
        "id": 0,
        "word": "Alastair"
    },
    {
        "id": 0,
        "word": "sunbaths"
    },
    {
        "id": 0,
        "word": "kimri"
    },
    {
        "id": 0,
        "word": "moaned"
    },
    {
        "id": 0,
        "word": "diopter"
    },
    {
        "id": 0,
        "word": "nardoo"
    },
    {
        "id": 0,
        "word": "mirrours"
    },
    {
        "id": 0,
        "word": "sravana"
    },
    {
        "id": 0,
        "word": "perifery"
    },
    {
        "id": 0,
        "word": "Triassic"
    },
    {
        "id": 0,
        "word": "nomadism"
    },
    {
        "id": 0,
        "word": "glost"
    },
    {
        "id": 0,
        "word": "upheaved"
    },
    {
        "id": 0,
        "word": "factions"
    },
    {
        "id": 0,
        "word": "whiplash"
    },
    {
        "id": 0,
        "word": "tuffoon"
    },
    {
        "id": 0,
        "word": "clags"
    },
    {
        "id": 0,
        "word": "beatdown"
    },
    {
        "id": 0,
        "word": "yorkers"
    },
    {
        "id": 0,
        "word": "crutch"
    },
    {
        "id": 0,
        "word": "deemer"
    },
    {
        "id": 0,
        "word": "Broadway"
    },
    {
        "id": 0,
        "word": "dyes"
    },
    {
        "id": 0,
        "word": "duathlon"
    },
    {
        "id": 0,
        "word": "transect"
    },
    {
        "id": 0,
        "word": "inciter"
    },
    {
        "id": 0,
        "word": "egols"
    },
    {
        "id": 0,
        "word": "mutts"
    },
    {
        "id": 0,
        "word": "suttle"
    },
    {
        "id": 0,
        "word": "Lucifer"
    },
    {
        "id": 0,
        "word": "Thatch"
    },
    {
        "id": 0,
        "word": "Digha"
    },
    {
        "id": 0,
        "word": "tenancy"
    },
    {
        "id": 0,
        "word": "savour"
    },
    {
        "id": 0,
        "word": "wharfie"
    },
    {
        "id": 0,
        "word": "Maidu"
    },
    {
        "id": 0,
        "word": "snowless"
    },
    {
        "id": 0,
        "word": "escroll"
    },
    {
        "id": 0,
        "word": "orignal"
    },
    {
        "id": 0,
        "word": "barytone"
    },
    {
        "id": 0,
        "word": "ignites"
    },
    {
        "id": 0,
        "word": "lichwake"
    },
    {
        "id": 0,
        "word": "Garry"
    },
    {
        "id": 0,
        "word": "slash"
    },
    {
        "id": 0,
        "word": "feta"
    },
    {
        "id": 0,
        "word": "alcali"
    },
    {
        "id": 0,
        "word": "squeezes"
    },
    {
        "id": 0,
        "word": "Leuctra"
    },
    {
        "id": 0,
        "word": "deguise"
    },
    {
        "id": 0,
        "word": "wayless"
    },
    {
        "id": 0,
        "word": "bittie"
    },
    {
        "id": 0,
        "word": "reliever"
    },
    {
        "id": 0,
        "word": "Garifuna"
    },
    {
        "id": 0,
        "word": "murmurs"
    },
    {
        "id": 0,
        "word": "rustical"
    },
    {
        "id": 0,
        "word": "refeed"
    },
    {
        "id": 0,
        "word": "room"
    },
    {
        "id": 0,
        "word": "dipter"
    },
    {
        "id": 0,
        "word": "despot"
    },
    {
        "id": 0,
        "word": "washer"
    },
    {
        "id": 0,
        "word": "empery"
    },
    {
        "id": 0,
        "word": "freepers"
    },
    {
        "id": 0,
        "word": "Oresund"
    },
    {
        "id": 0,
        "word": "mojito"
    },
    {
        "id": 0,
        "word": "forby"
    },
    {
        "id": 0,
        "word": "vestries"
    },
    {
        "id": 0,
        "word": "checky"
    },
    {
        "id": 0,
        "word": "uretic"
    },
    {
        "id": 0,
        "word": "matzoth"
    },
    {
        "id": 0,
        "word": "naevus"
    },
    {
        "id": 0,
        "word": "demonism"
    },
    {
        "id": 0,
        "word": "ousts"
    },
    {
        "id": 0,
        "word": "igniting"
    },
    {
        "id": 0,
        "word": "blatant"
    },
    {
        "id": 0,
        "word": "grown"
    },
    {
        "id": 0,
        "word": "bioassay"
    },
    {
        "id": 0,
        "word": "rouns"
    },
    {
        "id": 0,
        "word": "festered"
    },
    {
        "id": 0,
        "word": "distant"
    },
    {
        "id": 0,
        "word": "tink"
    },
    {
        "id": 0,
        "word": "swivels"
    },
    {
        "id": 0,
        "word": "PIREPs"
    },
    {
        "id": 0,
        "word": "ametria"
    },
    {
        "id": 0,
        "word": "omit"
    },
    {
        "id": 0,
        "word": "mousepox"
    },
    {
        "id": 0,
        "word": "appalled"
    },
    {
        "id": 0,
        "word": "zels"
    }
];

export const getWord = () => {
    const word = DICTIONARY.at(Math.floor(Math.random() * DICTIONARY.length));
    return word.word.toUpperCase();
};