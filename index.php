 <head>
     <title> Abdulrahman alzahrani-1408190</title>
     <link rel="stylesheet" href="Style.css" type="text/css" />
 </head>
 <body>
     <?php
     require_once('./dbConnection.php');
     require_once('./getAllBooks.php');
     ?>
     
 <div class="topnav">
      <a href="#">Home</a>
      <a href="#">Community</a>
      <a href="#">Ask</a>
      <a href="#">About US</a>
    </div>

    <ul>


      <h4>Sort By:</h4>
      <select id="sort-option">

        <option value="rating">Rating</option>
        <option value="reviews">Reviews</option>
        <option value="Date">Date</option>


      </select>
    </ul>

    <div id = "books" >

      <ol id="bookslist">
        <?php get_all_books(); ?>
      </ol>
    </div>
    <script src="javaScript.js"></script>
    </body>