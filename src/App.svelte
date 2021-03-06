
<script>
	
import { onMount } from 'svelte'
import texToSVG from 'tex-to-svg'
import MiniSearch from 'minisearch'
import SvelteTooltip from 'svelte-tooltip'
import Textfield from '@smui/textfield'
import categories  from '../data/symbols.json'
import CATEGORIES from '../data/categories.json'

let searchWord = ""
let selectedSymbol = null
let copiedSymbol = null

const htmlToElement = (html) => 
{
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = html;
	
    return template.content.firstChild;
}

const filterSymbols = (symbols, searchWord) => 
{	
	if(searchWord.length <= 0) return symbols

	let miniSearch = new MiniSearch(
	{
		fields: ['code', 'keywords.text', 'keywords.math'],
		storeFields: ['code'],
		extractField: (document, fieldName) => 
		{
			// Access nested fields
			return fieldName.split('.').reduce((doc, key) => doc && doc[key], document)
		}
	})

	// Index all documents
	miniSearch.addAll(symbols)

	const searchResults = miniSearch.search(searchWord, 
	{ 
		fuzzy: term => term.length > 3 ? 0.2 : null, 
		boost: { 'keywords.math': 3 } 
	})

	console.log(searchResults)

	return searchResults.map(searchResult => symbols[searchResult.id])
}

categories.forEach(symbols => symbols.forEach(symbol => 
{
	symbol.svg = texToSVG('\\' + symbol.code)
}))

</script>

<style>

main 
{
	height: 100%;
	width: 100%;
}

h2
{
	font-size: 12pt;
}

header
{
	padding: 15px;
	width: calc(100% - 30px);
	height: calc(100px - 31px);
	border-bottom: 1px solid grey;
	display: flex;
}

.container
{
	padding: 15px;
	max-height: calc(100% - 100px - 30px);
	width: calc(100% - 30px);
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.symbol-container
{
	width: 50px;
	height: 50px;
	cursor: pointer;
	color: black;
	margin: 5px;
	border: 1px solid black;
	border-radius: 5px;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 8pt;
}

.symbol-container.selected
{
	border-color: #03a9f4;
	color: #03a9f4;
}

.category-heading
{
	margin: 5px;
	margin-top: 5px;
	margin-bottom: 0px;
	width: 100%;
}

.selected-container
{
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #666;
}

.search-container
{
	width: 50%;
}

</style>

<svelte:window 
	on:keydown={(e) => 
	{
		const key = e.key;

		if(key === 'Escape')
		{
			try
			{
				const { remote } = require('electron')
				const window = remote.getCurrentWindow()
				window.hide()
			}
			catch(e)
			{
				console.warn("You have to use electron for window hiding options")
			}
		}
	}
}></svelte:window>

<main>
	<header>
		<div class="search-container">
			<Textfield bind:value={searchWord} label="symbol"/>
		</div>
		<div class="selected-container">
			{#if selectedSymbol != null}
				\{selectedSymbol.code}
			{/if}
		</div>
	</header>

	<content class="container">
		{#each categories as symbols, categoryIndex}
			{#if filterSymbols(symbols, searchWord).length > 0}
				<div class="category-heading">
					<h2>{CATEGORIES[categoryIndex]}</h2>
				</div>
			{/if}
			{#each filterSymbols(symbols, searchWord) as symbol, symbolIndex}
				<div class="symbol-container" 
					on:mouseenter={() => { selectedSymbol = symbol }}
					on:mouseleave={() => { selectedSymbol = null }}
					on:click={() => 
					{ 
						try
						{
							const { clipboard, remote } = require('electron')
							clipboard.writeText('\\' + symbol.code) 
							const window = remote.getCurrentWindow()
       						window.hide()
						}
						catch(e)
						{
							console.warn("You have to use electron for clipboard actions")
						}

						copiedSymbol = symbol; 
					}}
					class:selected="{ copiedSymbol === symbol }"
				>
					<div class="symbol">
						{ @html symbol.svg }
					</div>
				</div>
			{/each}
		{/each}
	</content>
</main>

