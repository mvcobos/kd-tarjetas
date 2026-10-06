function pintarTarjetas(){
    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");
    let desde = parseInt(document.getElementById("txtDesde").value);
    let hasta = parseInt(document.getElementById("txtHasta").value);
    let salto = parseInt(document.getElementById("txtSalto").value);
    // Validar que salto sea mayor que cero para evitar ciclos infinitos
    if(isNaN(salto) || salto <= 0){
        alert("El salto debe ser un número mayor que cero");
        return;
    }
    //  <div class="item">1</div>
    for(let i = desde; i <= hasta; i+=salto){
        contenido = contenido + "<div class = 'item'>" + i  + "</div>"
    }
    divTarjetas.innerHTML = contenido;
}
