
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
             <div class="image"><img src="${e.picture.large}" alt=""></div>    
             <div class="information">
            <p>Nombre: ${e.name.title + " " + e.name.first + " " + e.name.last}</p>
                  <p class="">Telefono:${e.cell}</p>
                  <p class="">Email:${e.email}</p> 
                  </div> 
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

