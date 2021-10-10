
var deleteButton = document.getElementsByClassName('delete-item');
var deleteItemlist = [];
for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', (event) => {
        const item = Number(event.currentTarget.getAttribute('value'));
        delitem(item);
    });
}
const deleteURL = '/buy/delete';
function delitem(item) {
    const option = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deletes: item }),
    }
    fetch(deleteURL, option)
        .then(res => {
            res.json().then(data => {
                if (data.res) {
                    alert("삭제 완료하였습니다.");
                    location.reload();
                }
                else {
                    alert("삭제 실패하였습니다.");
                }
            })
        });
}



var price = document.getElementsByClassName('item-price-all')[0];
if (price) {
    price.innerHTML = price.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}