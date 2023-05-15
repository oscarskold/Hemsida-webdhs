//RÖR EJ
function relod_remove(productid, table){
    console.log('here')
    location.reload()
    remove(productid, table);
  }
  
  function remove(productid, table){
    fetch("/admin/delete", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        id: productid,
        table: table
      })
      }) // body data type must match "Content-Type" header
    }