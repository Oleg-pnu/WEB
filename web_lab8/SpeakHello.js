(function (global) {
    var SpeakHello = {};
    SpeakHello.speakWord = "Hi";
    SpeakHello.speak = function (name) {
      console.log(SpeakHello.speakWord + " " + name);
    }
    global.SpeakHello=SpeakHello
  })(window)