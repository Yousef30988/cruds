let text = document.getElementById('text');
let price = document.getElementById('price');
let texes = document.getElementById('texes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let category = document.getElementById('category');
let totel = document.getElementById('totel');
let btn = document.getElementById('btn');
let search = document.getElementById('search');
let title = document.getElementById('title');
function getTotal(){
    if(price.value !=''){
        let result = (+price.valuen  + texes.value + ads.value - discount.value );
        totel.innerHTML = result;
        totel.style.background = 'red'
    }
}
let pro
if(localStorage.price != null){
    pro = JSON.parse(localStorage.price)
}else{
    pro = [];
}
btn.ondblclick = function() {
    let prodate ={
        title:title.value,
        price:price.value,
        texes:texes.value,
        ads:ads.value,
        discount:discount.value,
        totel:totel.innerHTML,
        count:count.value,
        category:category.valuen,
    }
    if(prodate.count > 1){
        for (let i = 0; i < prodate.count; i++ ) {
            pro.push(prodate);
            
        }
    }

    localStorage.setItem('product',   JSON.stringify(pro))
    clearData()
    showData()
}
function clearData(){
     title.value = '';
     price.value = '';
     texes.value = '';
     ads.value = '';
     discount.value = '';
     count.value = '';
     category.valuen = '';
     totel.innerHTML = '';
}

function showData(){
    let table = '';
    for( let i = 0; i < pro.length;i++){
        table += `
                  <tr>
                    <td>${i}</td>
                    <td>${pro[i].title}</td>
                    <td>${pro[i].price}</td>
                    <td>${pro[i].texes}</td>
                    <td>${pro[i].ads}</td>
                    <td>${pro[i].discount}</td>
                    <td><button onclick= "updata(${i})" type="button" class="btn btn-outline-danger">updata</button></td>
                    <td> <button onclick= "deleteData(${i})" type="button" class="btn btn-outline-light">delete</button> </td>
                   </tr>`
    }
    let td = document.getElementById('td').innerHTML = table;
}

function deleteData(i){
    pro.splice(i,1);
    localStorage.product = JSON.stringify(pro);
    showData()
}
function updata(i){
    title.value = pro[i].title;
    price.value = pro[i].price;
    texes.value = pro[i].texes;
    ads.value = pro[i].ads;
    discount.value = pro[i].discount;
    category.valuen = pro[i].category;
    getTotal()
}