import React, {useState} from "react";

export default function Counter(props) {
    const [value, setValue] = useState(props.value);

    function increment() {
        setValue(value + 1);
    }

    function decrement() {
        setValue(value - 1);
    }

    const input = React.createElement(
        'input',
        {type: 'number', 'data-testid': 'counter__input',  className: 'counter__input', value: value, key: 'Input', onChange: (e) => setValue(parseInt(e.target.value))},

    );
    const incButton = React.createElement(
        'button',
        {className: 'counter__button--inc', onClick: increment, key: 'Plus'},
        '+'
    );

    const decButton = React.createElement(
        'button',
        {className: 'counter__button--dec', onClick: decrement, key: 'Minus'},
        '-'
    );

    return React.createElement(
        'section',
        {className: 'counter'},
        [input, incButton, decButton]
    );
}