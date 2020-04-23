
const cargarPosts = document.querySelector('#cargar').addEventListener('click',cargarApi);
   
function cargarApi(){
    //crear el objeto
    const  xhr= new XMLHttpRequest();
     //abrir conexion 
    xhr.open('GET','https://randomuser.me/api/?results=20',true);
    //cargar y leer datos
    xhr.onload=function(){
        if (this.status===200) { 
        const respuesta = JSON.parse(this.responseText);
   console.log(respuesta)
        let contenido='';
         Object.keys(respuesta).forEach(function(post){
            
            contenido += `<img src=" ${respuesta.picture.large}" width="100px"  alt="">
                 <p>Nombre: ${post.title}</p>
                  <p>Telefono:${post.cell}</p>
                   <p>Email:${post.email}</p> 
            `;
        });
        document.getElementById('cardsContainer').innerHTML= contenido
    }
}
//enviar la conexion 
xhr.send();
}

