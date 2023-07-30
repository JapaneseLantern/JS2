const pullDownButton = document.getElementById("lists")
console.log(pullDownButton)

pullDownButton.addEventListener('mouseover',function(){
    pullDownButton.setAttribute("style","background-color:blue;")
    console.log("乗った時は青色")
})

pullDownButton.addEventListener('mouseout', function () {
    pullDownButton.removeAttribute("style","background-color:red;")
    console.log("外れた時は赤色")
})

pullDownButton.addEventListener('click', function () {
    pullDownButton.setAttribute("style","background-color:green;")
    console.log("クリック時は緑色")
})