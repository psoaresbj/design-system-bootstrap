/* eslint-disable no-nested-ternary */
const applySingularSize = size => css`
    font-size: ${(typeof size === 'number' ? size : size[0]) / 16}rem;
    letter-spacing: ${typeof size === 'number'
        ? undefined
        : size[2] !== undefined
        ? `${size[2] / 16}rem`
        : undefined};
    line-height: ${typeof size === 'number'
        ? undefined
        : size[1] !== undefined
        ? `${size[1] / 16}rem`
        : undefined};
`;

const applyMultipleSizes = sizes =>
    Object.keys(sizes).map(size =>
        size === 'xs'
            ? applySingularSize(sizes[size])
            : mq.from(size, applySingularSize(sizes[size]))
    );

const applySizes = sizes =>
    typeof sizes === 'number' || Array.isArray(sizes)
        ? applySingularSize(sizes)
        : applyMultipleSizes(sizes);

export const setSizeVariations = sizeVariations =>
    Object.keys(sizeVariations).reduce(
        (result, key) => ({
            ...result,
            [key === 'base' || key === 'h1' || key === 't1'
                ? 'default'
                : key]: css`
                ${applySizes(sizeVariations[key])}
            `
        }),
        {}
    );
