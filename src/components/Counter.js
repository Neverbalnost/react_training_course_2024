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
        {type: 'number', 'data-testid': 'counter__input',  className: 'counter__input', value: value, key: 'Input',
            onChange: (e) => {
                if (parseInt(e.target.value, 10)) {
                    setValue(parseInt(e.target.value));
                }
            }
        },

    );
    const incButton = React.createElement(
        'button',
        {'data-testid': 'counter__plus', className: 'counter__button--inc', onClick: increment, key: 'Plus'},
        '+'
    );

    const decButton = React.createElement(
        'button',
        {'data-testid': 'counter__minus', className: 'counter__button--dec', onClick: decrement, key: 'Minus'},
        '-'
    );

    return React.createElement(
        'section',
        {className: 'counter'},
        [input, incButton, decButton]
    );
}