var x = 1;
var start = prompt("Welcome! Ready to begin?");
while(x == 1){
  if (start == "yes"){
    alert("Good!")
    while(x == 1){
      var q1 = prompt("Question 1: Name one famous artist that you learned about earlier.");
      if(q1 == "Michelangelo" || q1 == "Leonardo da Vinci" || q1 == "Akira Yoshizawa" || q1 == "Zaha Hadid"){
        alert("Well done!");
        while(x == 1){
          var q2 = prompt("Question 2: How long ago was the first piece of art created? Hint: answers include '300,000-200,000 BCE', '100,000 BCE', '700,000 BCE' and '70,000 BCE'. ");
          if(q2 == "700,000 BCE"){
            var end = prompt("Fantastic! Last question: did you like this website?");
            if(end == "yes"){
              alert("Thank you, enjoy your day!");
              break;
            }else{
              alert("Thanks for the feedback. Enjoy your day!");
              break;
            }
          }else{
            alert("Sorry, please try again.");
          }
        }
        break;
      }else{
        alert("Sorry, please try again.");
      }
    }
  }else{
    break;
  }
  break;
}

