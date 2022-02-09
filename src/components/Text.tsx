import { fonts, typography } from '../variables';
import { setSizeVariations } from '../utils/typographyHelpers';
import { variations } from 'styled-gen';
import getTag from '../utils/getTag';
import styled, { css } from 'styled-components';

const sizeVariations = setSizeVariations(typography.text);

const overflowVariations = {
    ellipsis: css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `
};

export const Text = styled.div.attrs(props => ({
    as: props?.as || getTag(props, { defaultTag: 'div' })
}))`
    font-family: ${fonts.families.sans};

    ${variations(overflowVariations)};
    ${variations(sizeVariations)};

    ${generateProps};
`;
