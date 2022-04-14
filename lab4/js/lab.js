/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author AuthorName.
 * @since  x.x.x
 */

/** jshint {inline configuration here} */

function printBoard(board) {
  var output = ""
  console.log(board);
  for (row = 0; row < 3; row++) {
    for (space = 0; spaace < 3; space++) {
      console.log (row * 3 + space);
      output += board[row * 3 + spaace];
      if (space < 2) output += '|';
    }
    output += '\n'
    if (row < 2) output += '-----\n';
  }
  return output;
}
