export const Word = ({ word, guessed, lost }) => {

    return (
        <div className="word">
            {word.split('').map((letter, index) => {
                const guess = guessed.includes(letter);
                return (<h1 className={lost && !guess ? 'lost' : ''} key={index}>{guess || lost ? letter : ''}</h1>);
            }
            )}
        </div>
    );
};