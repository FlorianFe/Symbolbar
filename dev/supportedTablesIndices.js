
const { 
    DEFAULT, 
    AMS 
} = require('../data/packages.json')

const { 
	BINARY_OPERATORS, 
	VARIABLE_SIZED_MATH_OPERATORS,
	BINARY_RELATIONS,
	SUBSET_AND_SUPERSET_RELATIONS,
	INEQUALITIES,
	ARROWS,
	HARPOONS,
	LOG_LIKE_SYMBOLS,
	GREEK_LETTERS,
	HEBREW_LETTERS,
	LETTER_LIKE_SYMBOLS,
	DELIMITERS,
	VARIABLE_SIZED_DELIMITERS,
	LARGE_VARIABLE_SIZED_DELIMITERS,
	MATH_MODE_ACCENTS,
	EXTENSIBLE
} = require('../data/categories.json')

module.exports = 
{
    50:
    {
        category: BINARY_OPERATORS,
        package: DEFAULT 
    }, 
    51: 
    {
        category: BINARY_OPERATORS,
        package: AMS
    },

    72:
    {
        category: VARIABLE_SIZED_MATH_OPERATORS,
        package: DEFAULT 
    }, 
    73: 
    {
        category: VARIABLE_SIZED_MATH_OPERATORS,
        package: AMS
    },

    89:
    {
        category: BINARY_RELATIONS,
        package: DEFAULT 
    }, 
    90: 
    {
        category: BINARY_RELATIONS,
        package: AMS
    },

    113:
    {
        category: SUBSET_AND_SUPERSET_RELATIONS,
        package: DEFAULT 
    }, 
    114: 
    {
        category: SUBSET_AND_SUPERSET_RELATIONS,
        package: AMS
    },

    123:
    {
        category: INEQUALITIES,
        package: DEFAULT 
    }, 
    124: 
    {
        category: INEQUALITIES,
        package: AMS
    },

    139:
    {
        category: ARROWS,
        package: DEFAULT 
    }, 
    142: 
    {
        category: ARROWS,
        package: AMS
    },

    140:
    {
        category: HARPOONS,
        package: DEFAULT 
    }, 
    144: 
    {
        category: HARPOONS,
        package: AMS
    },
    
    183:
    {
        category: LOG_LIKE_SYMBOLS,
        package: DEFAULT 
    }, 
    184: 
    {
        category: LOG_LIKE_SYMBOLS,
        package: AMS
    },

    188:
    {
        category: GREEK_LETTERS,
        package: DEFAULT 
    }, 
    189: 
    {
        category: GREEK_LETTERS,
        package: AMS
    },

    198: 
    {
        category: HEBREW_LETTERS,
        package: AMS
    },

    203:
    {
        category: LETTER_LIKE_SYMBOLS,
        package: DEFAULT 
    }, 
    204: 
    {
        category: LETTER_LIKE_SYMBOLS,
        package: AMS
    },

    216: 
    {
        category: DELIMITERS,
        package: AMS
    },

    222:
    {
        category: VARIABLE_SIZED_DELIMITERS,
        package: DEFAULT
    }, 

    223:
    {
        category: LARGE_VARIABLE_SIZED_DELIMITERS,
        package: DEFAULT
    }, 
    224: 
    {
        category: LARGE_VARIABLE_SIZED_DELIMITERS,
        package: AMS
    },

    236:
    {
        category: MATH_MODE_ACCENTS,
        package: DEFAULT
    }, 

    246:
    {
        category: EXTENSIBLE,
        package: DEFAULT
    }, 
    249: 
    {
        category: EXTENSIBLE,
        package: AMS
    }

    // TODO ... up to 316
}