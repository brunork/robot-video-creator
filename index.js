const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start(){
    const content = {
        maximumSentences: 10
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSearchTerm(){
        return readline.question('Type a wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixies = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixies)
        const selectedPrefixText = prefixies[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(JSON.stringify(content, null, 4))
}

start()