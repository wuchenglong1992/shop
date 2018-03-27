window.onload = function () {
    moveIn();
}

//右侧nav移入动画
function moveIn() {
    var oDiv = document.getElementById('rightNav');
    var oUl = oDiv.getElementsByTagName('ul');
    //console.log(oUl);
    [].forEach.call(oUl, function (e) {
        e.addEventListener('mouseenter', function (event) {
            var target = event.target;
            if (target.tagName.toLowerCase() === 'li') {
                console.log(target)
            }
        },true)
    })

}