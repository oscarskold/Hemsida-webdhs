//RÖR EJ
function relod_remove(productid){
  remove(productid);
}

function remove(productid){
  fetch("/remove", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      id: productid,
    })
    }) // body data type must match "Content-Type" header
  }