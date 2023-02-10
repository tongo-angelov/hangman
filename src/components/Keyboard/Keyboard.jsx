const KEYS = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

export const Keyboard = ({ word, guessed, click, disabled }) => {
    return <div className="keyboard">
        {KEYS.map((key) => (<button className={word.includes(key) && guessed.includes(key) ? 'active' : ''} disabled={disabled || guessed.includes(key)} key={key} onClick={() => click(key)}>{key}</button>))}
    </div>;
};