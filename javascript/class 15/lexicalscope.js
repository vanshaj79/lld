function parent(){
    var a = 10
    function child(){
        var b = 20
        function grandchild(){
            console.log(a)
            console.log(b)
        }
        grandchild()
    }
    child()
}
parent()