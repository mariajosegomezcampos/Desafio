
function cargarApi(){
    //crear el objeto
    const  xhr= new XMLHttpRequest();
     //abrir conexion 
    xhr.open('GET','https://randomuser.me/api/?results=20',true);
    //cargar y leer datos
    xhr.onload=function(){
        if (this.status===200) { 
        const data = JSON.parse(this.responseText);
        let contenido='';
        
            data.results.map((e) => {
             contenido += `
             <div class="showCards">
             <img class="img" src="${e.picture.large}"
            <pclass="information">Nombre: ${e.name.title + " " + e.name.first + " " + e.name.last}</p>
                  <p class="">Telefono:${e.cell}</p>
                  <pclass="">Email:${e.email}</p> 
                    </div> 
             `;
        });

        document.getElementById('contentCards').innerHTML= contenido
    }
}
//enviar la conexion 
xhr.send();


}

cargarApi()

