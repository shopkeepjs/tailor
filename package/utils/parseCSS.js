const camelToCSS = {
    backgroundColor: 'background-color',
    minHeight: 'min-height',
    alignItems: 'align-items',
    flexFlow: 'flex-flow'
};
export const parse = (styles) => {
    return Object.entries(styles).reduce((str, [key, value]) => {
        return (str += `${camelToCSS[key] ? camelToCSS[key] : key}: ${value};`);
    }, '');
};
