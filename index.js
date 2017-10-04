function takeANumber(katzDeliLine, name){
  var katzDeli = [];
  var num = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  katzDeli.push("Welcome, " + name + ". You are number " + num + " in line.")
  return katzDeli;
};

function nowServing(katzDeliLine){
    if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!"
    } else {
      var nextInLine = katzDeliLine.shift();
      return `Currently serving ${nextInLine}.`;
    }
};

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var array = ["The line is currently: "];
    for(let i = 0; i < katzDeliLine.length; i++){
      if(???){
        array.push(`${i + 1}. ${katzDeliLine[i]}, `)
  }
    return array.join("");
  }
}

//currentLine(["Grace","Ada","Tommy"])
