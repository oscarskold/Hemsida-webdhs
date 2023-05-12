//RÖR EJ
function addtocart(item, login) {
  console.log(item)
  let itemCount = 0;
  itemCount++;

  document.querySelector('.cart-indicator').textContent = itemCount;

  if (login == true) {
    fetch("/add", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        item: item,
      }) // body data type must match "Content-Type" header 
    })


  } else {
    console.log("KKKL")
    var objStr = JSON.stringify(obj)
    var objStrid = JSON.stringify(obj.id)
    localStorage.setItem(objStrid, objStr);
  }

  // }  
};

