var data = []
for(var i = 0; i<localStorage.leng; i++){
var key = localStorage.getItem(i)
var item = localStorage.getItem(key)
data[i] = item
} 
