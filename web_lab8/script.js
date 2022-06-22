(function (global) {
    var script = {};
    script.names = ["Paul", "John", "Jen", "Jason", "Mil", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
    console.log("Масив: " + script.names);
    console.log("Cпосіб селекціонування імен: за першою буквою 'j'");
    script.names.forEach(i =>
      (i.toLowerCase()[0] == 'j' ? SpeakGoodBye.speak(i) : SpeakHello.speak(i))
    )
    console.log(" " + "\n");
  
    script.names = ["Misha", "Olga", "Oleg", "Andrii", "Alina", "Cena", "Lesnar", "Chris", "Vasia", "Sofia", "Leo"];
    console.log("Масив імен : " + script.names);
    console.log("Cпосіб селекціонування імен: за четвертою буквою 'a'");
    script.names.forEach(i =>
      (i.toLowerCase()[3] == 'a' ? SpeakGoodBye.speak(i) : SpeakHello.speak(i))
    )
    console.log(" " + "\n");
  
    global.script = script
  })(window)