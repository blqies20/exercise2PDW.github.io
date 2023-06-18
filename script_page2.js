function kirimData() {
    var name = document.getElementById("name").value
    var date = document.getElementById("date").value
    var region = document.getElementById("region").value
    var fav = document.querySelector("input[name=fav]:checked").value
    var reason = document.getElementById("reason").value

    alert(
        "Name : " + name + "\n" +
        "Birthday : " + date + "\n" +
        "Region : " + region + "\n" +
        "Favorite : " + fav + "\n" +
        "Reason : " + reason + "\n" 
        )
}
