
const fs = require('fs');
const { PdfReader } = require('pdfreader');
const { uniq } = require('ramda')

const addKeywords = require('./addKeywords.js')

let categories = []
let tableIndex = 0
let lastItemText = ""

const supportedTablesIndices = require('./supportedTablesIndices')

const wordContainsExclusionList = 
[
    "Change",
    "fontsize",
    "old",
    "cline",
    "DeclareMathSymbol",
    "overline",
    "hline",
    "right",
    "left",
    "middle",
    "big)"
]

const exactMatchExclusionList = [
    "\\pod", 
    "\\pmod", 
    "\\mod", 
    "\\longdivision"
]


new PdfReader().parseFileItems("./dev/symbols.pdf", (error, item) =>
{

    if(error) console.error(error)

    if(!item)
    {
        const processedCategories = addKeywords(categories.map(symbols => uniq(symbols)))
        
        fs.writeFile('./data/symbols.json', JSON.stringify(processedCategories, null, 2), (err) =>
        {
            if (err) return console.error(err);
            console.log('json file written successfully');
        });

        return;
    }

    if (item.page) 
    {
        console.log("PAGE:", item.page)
    } 
    
    if (item.text) 
    {
        if(lastItemText.includes("Table"))
        {
            tableIndex = parseInt(item.text.replace(/(^\d+)(.+$)/i,'$1'))
            console.log("Table:", tableIndex)
        }

        const keys = Object.keys(supportedTablesIndices).map(key => parseInt(key))

        
        if(
            item.text.substring(0, 1) == "\\" && 
            keys.includes(tableIndex) 
        )
        {
            const category = supportedTablesIndices[tableIndex].category

            if(!categories[category])
            {
                categories[category] = []
            }
        }

        if(
            item.text.substring(0, 1) == "\\" && 
            keys.includes(tableIndex) && 
            wordContainsExclusionList.every(excluded => !item.text.includes(excluded)) && 
            exactMatchExclusionList.every(excluded => item.text !== excluded) && 
            item.text.length > 1
        )
        {
            const query = item.text.substring(item.text.indexOf("\\") + 1)
            const category = supportedTablesIndices[tableIndex].category

            categories[category].push(
            { 
                code: query.split('\\')[0], 
                package: supportedTablesIndices[tableIndex].package
            })
        }

        lastItemText = item.text
    }
});

console.log(exactMatchExclusionList);
