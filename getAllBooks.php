<body>
<?php 
function get_all_books()
{
    $get_all_tasks_query = "SELECT Title, Author, date, Rate, Reviews, Pic FROM Library;";
    $response = $GLOBALS['conn']->query($get_all_tasks_query);
    if ($response && $response->num_rows > 0) {
        while ($row = $response->fetch_array()) {
        echo '<li>' . 
            '<span class="pic">' . $row["Pic"] .  '</span>' . 
            '<span class="author">' . $row["Author"] .  '</span>' .
            '<span class="title">' . $row['Title'] . '</span>' .
            '<span class="date">' . $row['date'] . '</span>' .
            '<span class="rate">' . $row['Rate'] . '</span>' . 
            '<span class="reviews">' . $row['Reviews'] . '</span>' .
        '</li>' ;
        }
        echo '</ul>';
    } else {
        echo '<h2>Your Library is empty!</h2>';
    }
}
?>