/* eslint-disable sort-keys */
/**
 * check documentation for
 * props generator:
 *
 * styled-gen
 * https://github.com/psoaresbj/styled-gen/tree/master/src/generator
 */
import { colors } from './colors';
import { flexLayout } from '../utils/flexLayout';
import { fonts } from './fonts';
import propsToCollection from '../utils/propsToCollection';

export const generator = {
    // will generate bool props
    // ex: <Text p200>My text</Text>
    namedProps: [
        { prefix: 'bg', list: colors, cssProp: 'background-color' },
        { list: colors, cssProp: 'color' },
        { list: fonts.families, cssProp: 'font-family' },
        { list: fonts.weights, cssProp: 'font-weight' },
        {
            list: propsToCollection([
                'none',
                'flex',
                'inline-flex',
                'inline-block'
            ]),
            cssProp: 'display'
        }
    ],

    // Will generate spacing shorthanded props
    // <Text pt={1} mb={{ md 1, xs: 2 }} >padding top 1rem and margin bottom 2rem on mobile and 1 rem on tablet landscape and above </Text>
    spaceProps: [
        { prop: 'padding', units: 'rem' },
        { prop: 'margin', units: 'rem' }
    ],

    // Will generate variable props
    // <Text alpha={0.5} alignment={{ md: 'left', xs: 'center' }}>My 0.5 opacity text centered on mobile</Text>
    variableProps: [
        { name: 'alpha', cssProp: 'opacity' },
        { name: 'alignment', cssProp: 'text-align' },
        { name: 'dsp', cssProp: 'display' },

        { name: 'layout', helperFn: flexLayout }
    ]
};
