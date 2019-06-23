const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readline.question('Type a wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixies = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixies)
        const selectedPrefixText = prefixies[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(content)

}

start()