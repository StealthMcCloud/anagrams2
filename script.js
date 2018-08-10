document.getElementById("findButton").onclick = function() {

    let typedText = document.getElementById("input").value;
    let main = document.getElementById("main")
        
        let anagrams = {};

    for(let x = 0; x <= words.length; x++) {
        let currentWord = words[x];
        let total = alphabetize(currentWord)

        if (total in anagrams) {
            anagrams[total].push(currentWord);
        } else { 
            anagrams[total] = [currentWord];
        }

        if (anagrams[total].length > 4) {
            let newDiv = document.createElement("div");
            let result = document.createTextNode(anagrams[total] + ", ");
            main.appendChild(newDiv);
            newDiv.appendChild(result);

        }
    }
}
 function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
   }