
const keywordList = 
{
    sum: ['addition', '+'],

    /* plus */
    oplus: ['addition', '+'],
    uplus: ['addition', '+'],
    boxplus: ['addition', '+'],
    dotplus: ['addition', '+'],
    bigoplus: ['addition', '+'],
    biguplus: ['addition', '+'],

    /* minus */
    setminus: ['subtraction', '-'],
    ominus: ['subtraction', '-'],
    boxminus: ['subtraction', '-'],
    smallsetminus: ['subtraction', '-'],

    /* equal */
    equiv: ['equal', '='],
    preceq: ['equal', '=', '<='],
    succeq: ['equal', '=', '>='],
    doteq: ['equal', '='],
    simeq: ['equal', '=', 'similar'],
    approxeq: ['equal', '=', 'approximately'],
    eqcirc: ['equal', '=', 'circle'],
    fallingdotseq: ['equal', '='],
    succcurlyeq: ['equal', '=', '>='],
    backsimeq: ['equal', '=', 'similar'],
    preccurlyeq: ['equal', '=', '<='],
    Bumpeq: ['equal', '='],
    risingdotseq: ['equal', '='],
    circeq: ['equal', '=', 'circle'],
    curlyeqsucc: ['equal', '=', '>='],
    curlypreceq: ['equal', '=', '<='],
    doteqdot: ['eqal', '='],

    sqsupseteq : ['equal', '>=', 'super', 'square'],
    sqsubseteq : ['equal', '<=', 'sub', 'square'],
    supseteq : ['equal', '>=', 'super'],
    subseteq : ['equal', '>=', 'sub'],
    nsupseteq : ['equal', '!>=', 'super', 'not'],
    nsubseteq : ['equal', '!<=', 'sub', 'not'],
    supseteqq : ['equal', '>=', 'super'],
    subseteqq : ['equal', '<=', 'sub'],
    supsetneqq : ['equal', '!>=', 'super', 'not'],
    subsetneqq : ['equal', '!<=', 'sub', 'not'],
    supsetneq : ['equal', '!>=', 'super', 'not'],
    subsetneq : ['equal', '!<=', 'sub', 'not'],
    nsupseteq : ['equal', '!>=', 'super', 'not'],
    nsubseteq : ['equal', '!<=', 'sub', 'not'],

    /* TODO  inequalities for 'equal' */
}

const addKeywords = (categories) => 
{
    return categories.map((symbols) => 
    {
        return symbols.map((symbol) => 
        {
            if(Object.keys(keywordList).indexOf(symbol.code) > -1)
            {
                symbol.keywords = keywordList[symbol.code]
            }
            else
            {
                symbol.keywords = [] 
            }

            return symbol
        })
    })
}

module.exports = addKeywords;