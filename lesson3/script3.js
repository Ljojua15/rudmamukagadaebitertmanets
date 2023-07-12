//რენდომი API-ის წამოღებით

// let contentText
// let authorText
// function getQuote(){
//     fetch("https://api.quotable.io/random")
//         .then(response => response.json())
//         .then(data => {
//     contentText = document.getElementById('text')
//     contentText.innerHTML = data.content
//     authorText = document.getElementById('author')
//     authorText.innerHTML = data.author

//     })
//     .catch(error => {
//         console.log("An error occurred:", error);
//     });
// }

//მანუალ შექმნით

function lasha() {
  var azrebi = {
    "- დენი დიდრო":
      '"განათლება ადამიანს ღირსებას მატებს, მონაც კი იწყებს იმის გააზრებას, რომ იგი მონობისთვის არ არის დაბადებული."',
    "- იაკობ გოგებაშვილი":
      '"განათლება- ორლესული იარაღია, რომლის გამოყენება შეიძლება ადამიანთა სასარგებლოდაც და საზიანოდაც.საქმე იმაშია, თუ ვის უჭირავს იგი ხელში და რა მიმართულებით ხმარობს ის ამ იარაღს"',
    "- არისტოტელე":
      '"განათლებულსა და გაუნათლებელ ადამიანს შორის ისეთივე განსხვავებაა, როგორიც მკვდარსა და ცოცხალს შორის"',
    "- თომას ფულერი":
      '"განათლება კარგ ადამიანს აკეთილშობილებს, ხოლო ცუდს უარესად აქცევს"',
    "- აკაკი წერეთელი":
      '"მხოლოდ განათლება იყო და არის წყარო ყოველგვარი ხალხის ბედნიერებისა და კეთილდღეობისა"',
    "- ილია ჭავჭავაძე":
      '"განათლება ჰგავს მზესა, რომელიც ისე არ ანათებს რომ იმავე დროს არ ათბოს და ისე არ ათბობს, რომ არ ანათოს"',
    "- ილია ჭავჭავაძე":
      '"ქვეყანა იმით კი არ არის უძლური, რომ ღარიბია, არამედ იმით, რომ მცოდნე გონება-გახსნილი გულ-განათებული კაცები არა ჰყავს"',
  };

  var author = Object.keys(azrebi);
  var randomAuthor = author[Math.floor(Math.random() * author.length)];

  var authortext = azrebi[randomAuthor];

  document.getElementById("text").innerHTML = authortext;
  document.getElementById("author").innerHTML = randomAuthor;
}
