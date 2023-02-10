const Head = (
    <div className="hangman-part" style={{
        position: 'absolute',
        width: '50px',
        height: '50px',
        right: '-30px',
        top: '30px',
        borderRadius: '100%',
        background: 'none',
        border: 'solid 10px black'
    }} />
);
const Body = (
    <div className="hangman-part" style={{
        position: 'absolute',
        width: '10px',
        height: '120px',
        right: '0px',
        top: '90px',
    }} />
);
const ArmL = (
    <div className="hangman-part" style={{
        position: 'absolute',
        width: '10px',
        height: '60px',
        right: '0px',
        top: '90px',
        rotate: '-40deg',
        transformOrigin: 'right bottom'
    }} />
);
const ArmR = (
    <div className="hangman-part" style={{
        position: 'absolute',
        width: '10px',
        height: '60px',
        right: '0px',
        top: '90px',
        rotate: '40deg',
        transformOrigin: 'left bottom'
    }} />
);
const LegL = (
    <div className="hangman-part" style={{
        position: 'absolute',
        width: '10px',
        height: '80px',
        right: '0px',
        top: '210px',
        rotate: '30deg',
        transformOrigin: 'right top'
    }} />
);
const LegR = (
    <div className="hangman-part" style={{
        position: 'absolute',
        width: '10px',
        height: '80px',
        right: '0px',
        top: '210px',
        rotate: '-30deg',
        transformOrigin: 'left top'
    }} />
);

export const Hangman = ({ dmg }) => {
    const bodyParts = [Head, Body, ArmL, ArmR, LegL, LegR];
    return (
        <div className="hangman">
            {bodyParts.map((part, index) => index <= dmg - 1 ? <span key={index}>{part}</span> : '')}
            <div className="hangman-part" style={{ width: '10px', height: '30px', right: '0px', position: 'absolute' }} />
            <div className="hangman-part" style={{ width: '10px', height: '100px', right: '155px', top: '-10px', position: 'absolute', rotate: '45deg' }} />
            <div className="hangman-part" style={{ width: '200px', height: '10px', marginLeft: '100px' }} />
            <div className="hangman-part" style={{ width: '10px', height: '350px', marginLeft: '100px' }} />
            <div className="hangman-part" style={{ width: '210px', height: '10px' }} />
        </div>
    );
};