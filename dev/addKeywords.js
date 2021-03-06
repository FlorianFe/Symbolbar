
const keywordList = 
{
    sum:
    {
        text: ['addition'],
        math: ['+']
    },

    /* plus */
    oplus: 
    {
        text: ['addition'],
        math: ['+']
    },
    uplus: 
    {
        text: ['addition', 'u'],
        math: ['+']
    },
    boxplus: 
    {
        text: ['addition', 'box'],
        math: ['+']
    },
    dotplus: 
    {
        text: ['addition', 'dot'],
        math: ['+']
    },
    bigoplus: 
    {
        text: ['addition', 'O'],
        math: ['+']
    },
    biguplus: 
    {
        text: ['addition', 'U'],
        math: ['+']
    },

    /* minus */
    setminus: 
    {
        text: ['subtraction'],
        math: ['-']
    },
    ominus: 
    {
        text: ['subtraction', 'o'],
        math: ['-']
    },
    boxminus: 
    {
        text: ['subtraction', 'box'],
        math: ['-']
    },
    smallsetminus: 
    {
        text: ['subtraction', 'small', 'set'],
        math: ['-']
    },

    /* equal */
    equiv: 
    {
        text: ['equal'],
        math: ['=']
    },
    preceq: 
    {
        text: ['equal', 'predecessor'],
        math: ['=', '<=']
    },
    succeq: 
    {
        text: ['equal', 'successor'],
        math: ['=', '>=']
    },
    doteq: 
    {
        text: ['equal', 'dot'],
        math: ['=']
    },
    simeq: 
    {
        text: ['equal', 'similar'],
        math: ['=']
    },
    approxeq: 
    {
        text: ['equal', 'approximately'],
        math: ['=']
    },
    eqcirc: 
    {
        text: ['equal', 'circle'],
        math: ['=']
    },
    fallingdotseq: 
    {
        text: ['equal', 'falling', 'dots'],
        math: ['=']
    },
    succcurlyeq: 
    {
        text: ['equal', 'successor', 'curly'],
        math: ['=']
    },
    backsimeq: 
    {
        text: ['equal', 'back', 'similar'],
        math: ['=']
    },
    preccurlyeq: 
    {
        text: ['equal', 'predecessor', 'curly'],
        math: ['=', '<=']
    },
    Bumpeq: 
    {
        text: ['equal', 'bump'],
        math: ['=']
    },
    risingdotseq: 
    {
        text: ['equal', 'rising', 'dots'],
        math: ['=']
    },
    circeq: 
    {
        text: ['equal', 'circle'],
        math: ['=']
    },
    curlyeqsucc: 
    {
        text: ['equal', 'successor', 'curly'],
        math: ['=', '>=']
    },
    curlypreceq: 
    {
        text: ['equal', 'predecessor', 'curly'],
        math: ['=', '>=']
    },
    doteqdot: 
    {
        text: ['equal'],
        math: ['=']
    },

    /* equal for sets */
    /*
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
    */

    /* TODO  inequalities for 'equal' */
    geq :
    {
        text: ['greater', 'equal'],
        math: ['>=']
    },
    gg : {
        text: ['greater'],
        math: ['>']
    },
    leq : 
    {
        text: ['less', 'equal'],
        math: ['<=']
    },
    ll : 
    {
        text: ['less'],
        math: ['<']
    },
    neq : 
    {
        text: ['greater', 'equal'],
        math: ['=/=', '=|=']
    }
}

const addKeywords = (categories) => 
{
    return categories.map((symbols) => 
    {
        let counter = 0

        return symbols.map((symbol) => 
        {
            if(Object.keys(keywordList).indexOf(symbol.code) > -1)
            {
                symbol.keywords = keywordList[symbol.code]
            }
            else
            {
                symbol.keywords = { text: [], math: [] }
            }

            symbol.id = counter
            counter ++

            return symbol
        })
    })
}

module.exports = addKeywords;