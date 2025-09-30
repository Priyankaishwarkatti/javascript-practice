let sentence1 = ["I", "am", 24, "Years", "Old."]

function joinWords(...words){
    let word =  words.join(" ")
    console.log(word);
}

joinWords("My", "Name", 'is', "Priyanka!!!.", ...sentence1)
