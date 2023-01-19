//RÖR EJ
function addtocart(obj){


  // Check if the item is already in the cart
  var existingItem = localStorage.getItem(obj.id);
  if (existingItem){
     alert('Alredy in cart');
  } else{

  var objStr = JSON.stringify(obj)
  console.log(objStr)
  localStorage.setItem(obj.id, objStr);

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


  
  }  
};

