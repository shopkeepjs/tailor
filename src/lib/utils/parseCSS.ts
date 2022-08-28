import type { Styles, Volume } from '../../types';
import { volumes } from '../../types';

interface Map {
	[key: string]: string;
}
const camelToKebab: Map = {
	backgroundColor: 'background-color',
	minHeight: 'min-height',
	alignItems: 'align-items',
	flexFlow: 'flex-flow',
	boxShadow: 'box-shadow',
	alignContent: 'align-content',
	alignSelf: 'align-self',
	animationDelay: 'animation-delay',
	aniamtionDirection: 'animation-direction',
	animationFillMode: 'animation-fill-mode',
	animationIterationCount: 'animation-iteration-count',
	animationName: 'animation-name',
	animationPlayState: 'animation-play-state',
	animationTimingFunction: 'animation-timing-function',
	backgroundClip: 'background-clip',
	backgroundBlendMode: 'background-blend-mode',
	backgroundImage: 'background-image',
	backgroundOrigin: 'background-origin',
	backgroundPosition: 'background-position',
	backgroundRepeat: 'background-repeat',
	backgroundSize: 'background-size',
	borderBottom: 'border-bottom',
	borderBottomColor: 'border-bottom-color',
	borderBottomLeftRadius: 'border-bottom-left-radius',
	borderBottomRightRadius: 'border-bottom-right-radius',
	borderBottomStyle: 'border-bottom-style',
	borderBottomWidth: 'border-bottom-width',
	borderCollapse: 'border-collapse',
	borderImage: 'border-image',
	borderImageOutset: 'border-image-outset',
	borderImageRepeat: 'border-image-repeat',
	borderImageSource: 'border-image-source',
	borderImageSlice: 'border-image-slice',
	borderImageWidth: 'border-image-width',
	borderLeft: 'border-left',
	borderLeftColor: 'border-left-color',
	borderLeftStyle: 'border-left-style',
	borderLeftWidth: 'border-left-width',
	borderRadius: 'border-radius',
	borderRight: 'border-right',
	borderRightColor: 'border-right-color',
	borderRightStyle: 'border-right-style',
	borderRightWidth: 'border-right-width',
	borderSpacing: 'border-spacing',
	borderStyle: 'border-style',
	borderTop: 'border-top',
	borderTopColor: 'border-top-color',
	borderTopStyle: 'border-top-style',
	borderTopWidth: 'border-top-width',
	borderWidth: 'border-width',
	boxSizing: 'box-sizing',
	caretColor: 'caret-color',
	clipPath: 'clip-path',
	columnCount: 'column-count',
	columnFill: 'column-fill',
	columnGap: 'column-gap',
	columnRule: 'column-rule',
	columnRuleColor: 'column-rule-color',
	columnRuleStyle: 'column-rule-style',
	columnRuleWidth: 'column-rule-width',
	counterIncrement: 'counter-increment',
	counterReset: 'counter-reset',
	emptyCells: 'empty-cells',
	flexBasis: 'flex-basis',
	flexDirection: 'flex-direction',
	flexGrow: 'flex-grow',
	flexShrink: 'flex-shrink',
	flexWrap: 'flex-wrap',
	fontFamily: 'font-family',
	fontKerning: 'font-kerning',
	fontSize: 'font-size',
	fontSizeAdjust: 'font-size-adjust',
	fontStretch: 'font-stretch',
	fontStyle: 'font-style',
	fontVariant: 'font-variant',
	fontWeight: 'font-weight',
	gridArea: 'grid-area',
	gridAutoColumns: 'grid-auto-columns',
	gridAutoFlow: 'grid-auto-flow',
	gridColumn: 'grid-column',
	gridColumnEnd: 'grid-column-end',
	gridColumnGap: 'grid-column-gap',
	gridColumnStart: 'grid-column-start',
	gridTemplate: 'grid-template',
	gridTemplateAreas: 'grid-template-areas',
	gridTemplateColumns: 'grid-template-columns',
	gridTemplateRows: 'grid-template-rows',
	justifyContent: 'justify-content',
	letterSpacing: 'letter-spacing',
	lineHeight: 'line-height',
	listStyle: 'list-style',
	listStyleImage: 'list-style-image',
	listStylePosition: 'list-style-position',
	listStyleType: 'list-style-type',
	marginBottom: 'margin-bottom',
	marginLeft: 'margin-left',
	marginRight: 'margin-right',
	marginTop: 'margin-top',
	maxHeight: 'max-height',
	maxWidth: 'max-width',
	minWidth: 'min-width',
	objectFit: 'object-fit',
	objectPosition: 'object-position',
	outlineColor: 'outline-color',
	outlineOffset: 'outline-offset',
	outlineStyle: 'outline-style',
	outlineWidth: 'outline-width',
	overflowX: 'overflow-x',
	overflowY: 'overflow-y',
	paddingBottom: 'padding-bottom',
	paddingLeft: 'padding-left',
	paddingRight: 'padding-right',
	paddingTop: 'padding-top',
	pageBreakAfter: 'page-break-after',
	pageBreakBefore: 'page-break-before',
	pageBreakInside: 'page-break-inside',
	perspectiveOrigin: 'perspective-origin',
	pointerEvents: 'pointer-events',
	scrollBehavior: 'scroll-behavior',
	tableLayout: 'table-layout',
	textAlign: 'text-align',
	textAlignLast: 'text-align-last',
	textDecoration: 'text-decoration',
	textDecorationColor: 'text-decoration-color',
	textDecorationLine: 'text-decoration-line',
	textDecorationStyle: 'text-decoration-style',
	textIndent: 'text-indent',
	textJustify: 'text-justify',
	textOverflow: 'text-overflow',
	textShadow: 'text-shadow',
	textTransform: 'text-transform',
	transformOrigin: 'transform-origin',
	transformStyle: 'transform-style',
	transitionDelay: 'transition-delay',
	transitionDuration: 'transition-duration',
	transitionProperty: 'transition-property',
	transitionTimingFunction: 'transition-timing-function',
	userSelect: 'user-select',
	verticalAlign: 'vertical-align',
	whiteSpace: 'white-space',
	wordBreak: 'word-break',
	wordSpacing: 'word-spacing',
	wordWrap: 'word-wrap',
	writingMode: 'writing-mode',
	zIndex: 'z-index'
};

const boxShadowLookup = {
	low: '13px 13px 6px -11px rgba(0, 0, 0, 0.5);',
	medium: '10px 13px 14px -7px rgba(0, 0, 0, 0.5);',
	high: '13px 13px 13px -5px rgba(0, 0, 0, 0.5);'
};

const typeGuard = <T extends string>(value: string, arrayToCompare: readonly string[]): value is T => {
	if (typeof value !== 'string') return false;
	return arrayToCompare.includes(value);
};

export const parse = (styles: Styles) => {
	return Object.entries(styles).reduce((str: string, [key, value]: [string, unknown]) => {
		if (key === 'boxShadow' && typeof value === 'string' && typeGuard<Volume>(value, volumes))
			return (str += `box-shadow: ${boxShadowLookup[value]};`);
		return (str += `${camelToKebab[key] ? camelToKebab[key] : key}: ${value};`);
	}, '');
};
