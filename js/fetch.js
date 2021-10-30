var array = [];
class newBird{
    constructor(name, des, date, notes, img, url){
        this.name = name;
        this.des = des;
        this.date = date;
        this.notes = notes;
        this.img = img;
        this.url = url;
    } 
}


window.onload = function(){
 //console.log(localStorge);
 //localStorage.clear();
}

const data = JSON.parse(localStorage.getItem("obj"));



for (i = 0; i < data.length; i++){
   array[i] = new newBird(data[i].name, data[i].des, data[i].date, data[i].notes, data[i].img, data[i].url);
}

for (i = 0; i < array.length; i++){
  createMenu(array[i]);
}

function displayBird(name){
  for (i = 0; i < array.length; i++){
    if (array[i].name == name){
      break;
    }
  }
  var bird = array[i];
  createImage(bird);
  clearTableData();
  const row = createTableRow(bird);

  var birdName = createText(bird.name);
  addContentToRow(birdName, row);

  var birdDes = createText(bird.des);
  addContentToRow(birdDes, row);

  var birdDate = createText(bird.date);
  addContentToRow(birdDate, row);

  var birdNotes = createText(bird.notes);
  addContentToRow(birdNotes, row);

  var birdUrl = createAnchor(bird.url, "Click Here!!");
  addContentToRow(birdUrl, row);
};


function createMenu(bird){
  var div = document.getElementById("dropdown-menu");
  var anchor = document.createElement('a');
  anchor.setAttribute("id", bird.name);
  anchor.setAttribute("class", "dropdown-item");
  anchor.setAttribute("href", "#");
  anchor.setAttribute("onclick", "displayBird(id)");
  anchor.innerHTML = bird.name;
  div.append(anchor);
}

function createImage(bird){
 var img = document.getElementById("img");
 img.src = bird.img;
}

function clearTableData(){
  var table = document.getElementById("rows");
  while(table.hasChildNodes())
  {
    table.removeChild(table.firstChild);
  }
}

function addRowToTable(row) {
  var table = document.getElementById("rows");
  table.appendChild(row);
}

function createTableRow(bird) {
  var row = document.createElement('tr');
  row.setAttribute("id", bird.name);
  return row;
}

function createTableCell(child) {
  var cell = document.createElement('td');
  cell.append(child);
  return cell;
}

function addContentToRow(child, row) {
  var cell = createTableCell(child);
  row.appendChild(cell);
  addRowToTable(row);
}

function createAnchor(href, innerContent) {
  var anchor = document.createElement('a');
  anchor.setAttribute("href", href);
  anchor.append(innerContent);
  return anchor;
}

function createText(text) {
  var TextNode = document.createTextNode(text);
  return TextNode;
}

