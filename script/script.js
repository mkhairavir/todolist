let tambah = () => {
    let list = document.createElement("li");
    let input = document.getElementById("teks").value;
    let tulisan = document.createTextNode(input);

    list.appendChild(tulisan);

    document.getElementById("uL").appendChild(list);
}