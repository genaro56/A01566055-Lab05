window.onload = function () {
  let itemsList = [];

  var textInput = document.getElementById("inputItem");

  document.getElementById('store').addEventListener('click', function (e) {
    itemsList.push(textInput.value);
    var btnId = 'btnCheck';
    var labelId = 'labelId'
  
    itemsList.forEach((item, index) => {
      var html = `
      <li>
        <span id="${labelId}" >${item}</span>
        <button id="${btnId}">check</button>
        <button>delete</button>
      </li>
      `;
      insertHTML('ul', html, 'afterend', index);
    })
    addEvent(btnId, labelId)
  })

  const insertHTML = (tag = 'ul', html, position = 'afterend', index = 0) => {
    document.getElementsByTagName(tag)[index].insertAdjacentHTML(position, html);
  }

  const addEvent = (id, target, event = 'click') => {
    document.getElementById(id).addEventListener(event, function() {
      document.getElementById(target).style.textDecoration = 'line-through'
    })
    // $('.list .checkBtn').on('click', handleCheckButton(event));
}}