function square_equation() {
  var a = document.square.square_a.value;
  var b = document.square.square_b.value;
  var c = document.square.square_c.value;
  var sol = document.getElementById("square_sol");

  var d = b * b - 4 * a * c;
  if ( d < 0 ) {
    string = "пара комплексних чисел<br>x<sub>1</sub> = (";
    string += - b / ( 2 * a );
    string += ", ";
    string += Math.sqrt( -d ) / ( 2 * a );
    string += "), x<sub>2</sub> = (";
    string += - b / ( 2 * a);
    string += ", ";
    string += - Math.sqrt( -d ) / ( 2 * a );
    string += ").";
  } else if ( d == 0 ) {
        string = "два одинаковихкорені:<br>x<sub>1</sub> = x<sub>2</sub> = ";
        string += -b / ( 2 * a );
        string += ".";
      } else {
        string = "дварізних корені:<br>x<sub>1</sub> = ";
        string += -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        string += " x<sub>2</sub> = ";
        string += -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
        string += ".";
      }
  }
  document.write(string);
}