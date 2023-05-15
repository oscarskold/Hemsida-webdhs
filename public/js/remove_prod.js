//RÖR EJ
function relod_remove(prod, table){
    console.log('here')
    location.reload()
    remove(prod, table,);
  }
  
  function remove(prod, table ){
    console.log(prod.name)
    fetch("/admin/delete", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        id: prod.id,
        table: table,
        prod_name: prod.name,

      })
      }) // body data type must match "Content-Type" header
    }