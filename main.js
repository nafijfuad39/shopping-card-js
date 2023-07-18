let addTocart = document.getElementsByClassName('btn');

const addTocarts = (event) => {
    let addtocart = event.target;
    let addTocart = addtocart.parentElement
    let imgname = addTocart.children[0].src;
    let h2name = addTocart.children[1].innerText;
    let pname = addTocart.children[2].innerText;
    tocart(imgname)
}

for(i = 0; i < addTocart.length; i++){
    addTocart[i].addEventListener('click',addTocarts)
    
}

let tbody = document.getElementsByTagName('tbody')[0]
const tocart = (imgname)  => {
    let createElement  = document.createElement('tr');
    createElement.innerHTML = 
    `<td><img src="${imgname}" class="table_img"></td>
    <td><input type="number" value="1"></td>
    <td><button class="removeBtn">Remove</button></td>`
   tbody.append(createElement);
    for(i = 0; i < removeButton.length; i++){
        removeButton[i].addEventListener('click',buttonRemoves)
    } 
}


let removeButton = document.getElementsByClassName('removeBtn');
const buttonRemoves = (event) => {
    let e = event.target;
    let parents = e.parentElement.parentElement.remove()
}

