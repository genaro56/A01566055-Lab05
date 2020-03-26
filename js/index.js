window.onload = function () {
  let itemsList = [""];

  var textInput = document.getElementById("inputItem");

  document.getElementById('addBtn').addEventListener('click', function (e) {
    const name = textInput.value;
    itemsList.push(name);
    const labelId = 'name' + (new Date()).getTime();
    var html = `
    <li class="shoppingItem">
      <span id="${labelId}" >${textInput.value}</span>
      <button id="btnCheck">check</button>
      <button id="btnDelete">delete</button>
    </li>`;

    insertHTML('ul', html, 'afterend');
    addCheckEvent('btnCheck', labelId)
    addDeleteEvent('btnDelete', labelId)
  })

  const insertHTML = (tag = 'ul', html, position = 'afterend', index = 0) => {
    console.log(index)
    document.getElementsByTagName(tag)[index].insertAdjacentHTML(position, html);
  }

  const addCheckEvent = (id, target, event = 'click') => {
    document.getElementById(id).addEventListener(event, function() {
      document.getElementById(target).style.textDecoration = 'line-through'
    })
    // $('.list .checkBtn').on('click', handleCheckButton(event));
  }
      const addDeleteEvent = (id, target, event = 'click') => {
        document.getElementById(id).addEventListener(event, function() {
          document.getElementById(target).parentNode.parentNode.removeChild(document.getElementById(target).parentNode)
        })
}}