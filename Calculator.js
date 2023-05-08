
    function func1() {
      var a = document.querySelector("#first").value;
      var b = document.querySelector("#second").value;
      var o = document.querySelector("#third").value;
      var ans = document.querySelector("#fourth");
      if (a == "") fourth.innerHTML = "Please enter number 1.";
      else if (b == "") fourth.innerHTML = "Please enter number 2.";
      else if (o == "") fourth.innerHTML = "Please enter operation.";
      else if (o == "+") fourth.innerHTML = Number(a) + Number(b);
      else if (o == "-") fourth.innerHTML = Number(a) - Number(b);
      else if (o == "*") fourth.innerHTML = Number(a) * Number(b);
      else if (o == "/") fourth.innerHTML = Number(a) / Number(b);
      else if (o == "%") fourth.innerHTML = Number(a) % Number(b);
      else fourth.innerHTML = "Invalid operation";

    }

