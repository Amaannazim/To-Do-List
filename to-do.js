function getAndupdate() {
    console.log("Updating List...")
    tit = document.getElementById('title').value
    des = document.getElementById('description').value
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = []
        itemJsonArray.push([tit, des])
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([tit, des])
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    update()

}
function update() {
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = []
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
    }
    let tablebody = document.getElementById('tablebody')
    let str = ""
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`
    });
    tablebody.innerHTML = str
}
add = document.getElementById('add')
add.addEventListener('click', getAndupdate)
update()

function deleted(itemIndex) {
    console.log("Delete", itemIndex)
    itemJsonArrayStr = localStorage.getItem('itemJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr)
    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    update()

}
function clean() {
    if (confirm("Do you want to clear ?")) {
        console.log("Cleaning the storage")
        localStorage.clear()
        update()
    }
}