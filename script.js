function printerSeveral() {
  var listWords = [];
  var sizeWord = [];
  var i = 0;
  while (i < 3) {
    var word = prompt("Entrer un mot");
    listWords.push(word);
    sizeWord.push(word.length);
    i++;
  }
  console.log(listWords);
  console.log(sizeWord);
  console.log(Math.max(...sizeWord));
  console.log("*".repeat(Math.max(...sizeWord) + 2));
  for (let word of listWords) {
    console.log(`*${word + " ".repeat(Math.max(...sizeWord) - word.length)}*`);
  }
  console.log("*".repeat(Math.max(...sizeWord) + 2));
}

printerSeveral();
