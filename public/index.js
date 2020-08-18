document.getElementById('send').addEventListener('click', () => {
   let word = document.getElementById('word').value;
   console.log(word);
   getData(word);
});

document.getElementById('random-word').addEventListener('click', () => {
   randomWord();
   async function randomWord() {
      console.log('request send');
      const response = await fetch('/randomWord');
      const randomWord = await response.json();
      console.log(randomWord);
      document.getElementById('word').value = randomWord;
      getData(randomWord);
   }
});
async function getData(word) {
   await fetch('/', {
      method: 'GET',
   });

   if (word != null) {
      const response = await fetch(`/image/${word}`, {
         method: 'GET',
      });

      const data = await response.json();
      console.log(data);
      const imageUrl = data.data[0].images.original.url;
      console.log(imageUrl);
      document.getElementById('image').src = imageUrl;
   } else {
      console.log('no image to show');
   }
}
