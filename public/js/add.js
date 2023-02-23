//RÖR EJ
function addtocart(obj){

  let itemCount = 0;
  itemCount++;


function removeItem() {
    itemCount--;
}

document.querySelector('.cart-indicator').textContent = itemCount;


  var objStr = JSON.stringify(obj)
  localStorage.setItem(obj.id, objStr);
  console.log(objStr)


  // fetch("/add", {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify({
  //       id: obj.id
  //     }) // body data type must match "Content-Type" header
  //   });


  // }  
};

