var books = []

var titles = document.getElementsByClassName("title");
var authors = document.getElementsByClassName("author");
    var pics = document.getElementsByClassName("pic");
    var dates = document.getElementsByClassName("date");
    var rates = document.getElementsByClassName("rate");
    var reviews = document.getElementsByClassName("reviews");
  for (var i = 0; i < titles.length; i++) {
    books.push( {title: titles[i].innerHTML, date_published: dates[i].innerHTML,
    author: authors[i].innerHTML, reviews: reviews[i].innerHTML,
    rate: rates[i].innerHTML, img: pics[i].innerHTML} );
  }
  

    sortByRating()
    upDateDOM()

    function createBookItem(bookObj) {

      var lists = document.getElementById("bookslist");
      var liElem = document.createElement('li')



      var img = document.createElement('img')
      img.src = bookObj.img
      liElem.appendChild(img);

      var Btitle = document.createElement("p")
      var Ttext = document.createTextNode("Title: " + bookObj.title)
      Btitle.appendChild(Ttext)
      liElem.appendChild(Btitle)

      var author = document.createElement("p")
      var Atext = document.createTextNode("Author: " + bookObj.author)
      author.appendChild(Atext)
      liElem.appendChild(author)

      var date = document.createElement("p")
      var Dtext = document.createTextNode("Published date: " + bookObj.date_published)
      date.appendChild(Dtext)
      liElem.appendChild(date);

      var star = document.createElement("p")
      var stext = document.createTextNode("Rate " + bookObj.rate)
      star.appendChild(stext)
      liElem.appendChild(star);

      var review = document.createElement("p")
      var rtext = document.createTextNode("Reviews " + bookObj.reviews)
      review.appendChild(rtext)
      liElem.appendChild(review);

      return liElem
    }

    function sortByReviews() {
      books.sort(function(a, b) {

        return b.reviews - a.reviews
      })
    }

    function sortByRating() {
      books.sort(function(a, b) {

        return b.rate - a.rate
      })
    }

    function sortByDate() {
      books.sort(function(a, b) {

        return b.date_published - a.date_published
      })
    }

    function upDateDOM() {
      var ulBooks = document.getElementById('bookslist')
      ulBooks.innerHTML = ''
      for (item of books) {
        ulBooks.appendChild(createBookItem(item))
      }
    }



    var select = document.getElementById("sort-option")
    select.onchange = function() {
      if (select.value === 'reviews') {
        sortByReviews()
        upDateDOM()
      } else if (select.value === 'rating') {
        sortByRating()
        upDateDOM()
      } else if (select.value === 'Date') {
        sortByDate()
        upDateDOM()
      }
    }
