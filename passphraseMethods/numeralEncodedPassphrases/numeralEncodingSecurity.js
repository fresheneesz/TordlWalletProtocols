var fs = require("fs")

var shortlist = fs.readFileSync("eff_short_wordlist_1.txt").toString()
var longlist = fs.readFileSync("eff_large_wordlist.txt").toString()

console.log()
console.log("Class A: 10,000 passwords/second")
console.log("Class B: 1 million passwords/second")
console.log("Class C: 100 million passwords/second")
console.log("Class D: 1 billion passwords/second")

console.log()
console.log("Note that crack time is calculated as the time it takes for the cracker"
           +" to have a 1% chance of cracking the password in that time.")

console.log()
printInfo("Original Short list", filterWordsWithoutSymbols(shortlist))
console.log()
printInfo("Short Number-word list 2-9", numberwordList2to9(shortlist))
console.log()
printInfo("Short Number-word list 0-9", numberwordList0to9(shortlist))
console.log()
printInfo("Original Long list", filterWordsWithoutSymbols(longlist))
console.log()
printInfo("Long Number-word list 2-9", numberwordList2to9(longlist))
console.log()
printInfo("Long Number-word list 0-9", numberwordList0to9(longlist))

function printInfo(name, wordlist) {
  
  console.log(name)
  console.log("Items: "+wordlist.length)
  
  console.log("\t\t\t\t\t       Crack Time")
  console.log("\t\tEntropy\tClass A\t\tClass B\t\tClass C\t\tClass D")
  
  var Combinations2Words = Math.pow(wordlist.length,2)
  var Combinations3Words = Math.pow(wordlist.length,3)
  var Combinations4Words = Math.pow(wordlist.length,4)
  var Combinations5Words = Math.pow(wordlist.length,5)
  var Combinations6Words = Math.pow(wordlist.length,6)
  
  var classA = 10*1000
  var classB = 1*1000*1000
  var classC = 100*1000*1000
  var classD = 1*1000*1000*1000
  
  console.log("2 words: \t"
      +passwordEntropy(Combinations2Words)+"\t"
      +crackTime(classA, Combinations2Words)+"\t"
      +crackTime(classB, Combinations2Words)+"\t"
      +crackTime(classC, Combinations2Words)+"\t"
      +crackTime(classD, Combinations2Words)
  )
  console.log("3 words: \t"
      +passwordEntropy(Combinations3Words)+"\t"
      +crackTime(classA, Combinations3Words)+"\t"
      +crackTime(classB, Combinations3Words)+"\t"
      +crackTime(classC, Combinations3Words)+"\t"
      +crackTime(classD, Combinations3Words)
  )
  console.log("4 words: \t"
      +passwordEntropy(Combinations4Words)+"\t"
      +crackTime(classA, Combinations4Words)+"\t"
      +crackTime(classB, Combinations4Words)+"\t"
      +crackTime(classC, Combinations4Words)+"\t"
      +crackTime(classD, Combinations4Words)
  )
  console.log("5 words: \t"
      +passwordEntropy(Combinations5Words)+"\t"
      +crackTime(classA, Combinations5Words)+"\t"
      +crackTime(classB, Combinations5Words)+"\t"
      +crackTime(classC, Combinations5Words)+"\t"
      +crackTime(classD, Combinations5Words)
  )
  console.log("6 words: \t"
      +passwordEntropy(Combinations6Words)+"\t"
      +crackTime(classA, Combinations6Words)+"\t"
      +crackTime(classB, Combinations6Words)+"\t"
      +crackTime(classC, Combinations6Words)+"\t"
      +crackTime(classD, Combinations6Words)
  )
    
}

function filterWordsWithoutSymbols(wordlist) {
  var words = 
    wordlist.split('\r\n').map((x) => x.split('\t')[1])
        
  var wordsWithoutSymbols = words.filter((x) => {
    for(var n=0; n<x.length; n++) {
      if(!('a' <= x[n] && x[n] <= 'z')) {
        return false
      }
    }  
    return true
  })
  
  return wordsWithoutSymbols
}

function numberwordList0to9(wordlist) {
  var wordsWithoutSymbols = filterWordsWithoutSymbols(wordlist)

  var numberWords = wordsWithoutSymbols.map((x) => converToNumerals0to9(x))

  removeDuplicates(numberWords)
  return numberWords
}

function numberwordList2to9(wordlist) {
  var wordsWithoutSymbols = filterWordsWithoutSymbols(wordlist)

  var numberWords = wordsWithoutSymbols.map((x) => converToNumerals2to9(x))

  removeDuplicates(numberWords)
  return numberWords
}

function converToNumerals0to9(word) {
  var result = []
  for(var n=0; n<word.length; n++) {
    var letter = word[n]
    if('a' <= letter && letter <= 'c') {
      result.push(1)
    } else if('d' <= letter && letter <= 'f') {
      result.push(2)
    } else if('g' <= letter && letter <= 'i') {
      result.push(3)
    } else if('j' <= letter && letter <= 'l') {
      result.push(4)
    } else if('m' <= letter && letter <= 'o') {
      result.push(5)
    } else if('p' <= letter && letter <= 'r') {
      result.push(6)
    } else if('s' <= letter && letter <= 't') {
      result.push(7)
    } else if('u' <= letter && letter <= 'v') {
      result.push(8)
    } else if('w' <= letter && letter <= 'x') {
      result.push(9)
    } else if('y' <= letter && letter <= 'z') {
      result.push(0)
    } else {
      throw new Error("Wha: '"+word+"'")
    }    
  }
  
  return result.join('')
}

function converToNumerals2to9(word) {
  var result = []
  for(var n=0; n<word.length; n++) {
    var letter = word[n]
    if('a' <= letter && letter <= 'c') {
      result.push(2)
    } else if('d' <= letter && letter <= 'f') {
      result.push(3)
    } else if('g' <= letter && letter <= 'i') {
      result.push(4)
    } else if('j' <= letter && letter <= 'l') {
      result.push(5)
    } else if('m' <= letter && letter <= 'o') {
      result.push(6)
    } else if('p' <= letter && letter <= 's') {
      result.push(7)
    } else if('t' <= letter && letter <= 'v') {
      result.push(8)
    } else if('w' <= letter && letter <= 'z') {
      result.push(9)
    } else {
      throw new Error("Wha: '"+word+"'")
    }    
  }
  
  return result.join('')
}

function removeDuplicates(list) {
  var sortedList = list.sort()
  for(var n=0; n<sortedList.length; n++) {
    var sequence = sortedList[n]
    while(sequence === sortedList[n+1]) {
      sortedList.splice(n+1, 1)
    }
  }
  
  return sortedList
}

function passwordEntropy(items) {
  return Math.log2(items).toPrecision(3)
}

function crackTime(testRate, combinations) {
  var probabilityOfCrack = .01
  var crackSeconds = probabilityOfCrack*combinations/testRate
  return displayTime(crackSeconds).padEnd(14, ' ')
}

function displayTime(seconds) {
  if(seconds < 60) {
    return Number(seconds.toPrecision(1)) + " seconds"
  } else if(seconds/60 < 60) {
    return Number((seconds/60).toPrecision(1)) + " minutes"
  } else if(seconds/60/60 < 24) {
    return Number((seconds/60/60).toPrecision(1)) + " hours"
  } else if(seconds/60/60/24 < 365) {
    return Number((seconds/60/60/24).toPrecision(1)) + " days"
  } else if(seconds/60/60/24/365 < 1000 ) {
    return Number((seconds/60/60/24/365).toPrecision(1)) + " years"
  } else {
    // Allow scientific notation
    return (seconds/60/60/24/365).toPrecision(1) + " years"
  }
}
