document.getElementById("findButton").onclick = function() {

    let typedText = document.getElementById("input").value;
        typedText = alphabetize(typedText)
    let anagrams = [];

    for(let x = 0; x < words.length; x++) {
        let currentWord = words[x];

        if (typedText == alphabetize(currentWord)) {
            anagrams.push(currentWord)
        }
    }

    for(let word in anagrams) {
        let span = document.createElement("span");
        let textContent = document.createTextNode(anagrams[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordDiv").appendChild(span)
    }
}
 function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
   }