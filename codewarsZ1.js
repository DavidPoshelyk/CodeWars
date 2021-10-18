function getSize(w, h, d) {
    var area = ((h * w)*2) + ((h * d)*2) + ((w * d)*2);
    var volume = (w * h * d);
    var arr = [];
    arr.push(area, volume);
   return arr;
  }