const prepend = type => {
    if (['start', 'end'].includes(type)) {
        return `flex-${type}`;
    }

    if (['around', 'between', 'evenly'].includes(type)) {
        return `space-${type}`;
    }
};

type FlexPropsShort =
    | 'start'
    | 'end'
    | 'around'
    | 'between'
    | 'evenly'
    | 'stretch'
    | 'unset';

type FlexLayout = (vertical: FlexPropsShort, horizontal) => string;

export const flexLayout: FlexLayout = (
    vertical = 'start',
    horizontal = 'start'
) => {
    return css`
        align-items: ${prepend(vertical)};
        justify-content: ${prepend(horizontal)};
    `;
};
