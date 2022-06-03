const datosEstudiantes = [{
        nombre: "John Dairo Echeverri Acevedo",
        github: "https://github.com/johnda931031",
        neocites: "https://johndairoecheverri.neocities.org/index.html",
        email: "jdecheverria@correo.iue.edu.co",
        telefono: "3017391386",
        foto: "images/JohnDa.jpeg",
        actividades: [{
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }
    ],
        valoraciones: {
        valhtml: "3%",
        valcss: "4%",
        valjs: "6%",
        valui: "4%",
        valux: "9%"
    },
    "calificacion": "54%"
},
    {
        nombre: "Juan José Varela Calle",
        github: "https://github.com/jjvarela30",
        neocites: "https://neocities.org/site/jjvarela",
        email: "jjvarela@correo.iue.edu.co",
        telefono: "3017391385",
        foto: "images/Varela.jpeg",
        actividades: [{
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "3%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "3%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "3%"
        }
    ],
        valoraciones: {
        valhtml: "3%",
        valcss: "4%",
        valjs: "6%",
        valui: "4%",
        valux: "9%"
    }
}];


function Plantilla(datos) {
    return `
    <div class="container">     
        <div class="Nombre"><h1 class="nombre">${datos.nombre}</h1></div>
        <div class="Photo"><img src=${datos.foto} alt="" class="fotoed"></div>
        <div class="Links">
            <ul class="contenla">
                <li><img src="/FichaEstudiantil/images/github-brands.svg" alt=""><a href=${datos.github}>GitHub</a></li>
                <li><img src="/FichaEstudiantil/images/network-wired-solid.svg" alt=""><a href=${datos.neocites}">Neocites</a></li>
                <li><img src="/FichaEstudiantil/images/envelope-square-solid.svg" alt=""><a href="">${datos.email}</a></li>
                <li><img src="/FichaEstudiantil/images/whatsapp-brands.svg" alt=""><a href="">${datos.telefono}</a></li>
            </ul>
        </div>
    </div>
    


    <div class="Activities">
        <table class="tabla">
            <tr>
                <th>Activities</th>
                <th>%UI/UX</th>
                <th>%dev</th>
            </tr>
            <tr>
                <td><a href="">Actividad1</a></td>
                <td>${datos.actividades[0].estadouiux}</td>
                <td>${datos.actividades[0].estadotecnico}</td>
            </tr>

            <tr>
                <td><a href="">Actividad2</a></td>
                <td>${datos.actividades[1].estadouiux}</td>
                <td>${datos.actividades[1].estadotecnico}</td>
            </tr>

            <tr>
                <td><a href="">Actividad3</a></td>
                <td>${datos.actividades[2].estadouiux}</td>
                <td>${datos.actividades[2].estadotecnico}</td>
            </tr>

        </table>
    </div> 
    


    <div class="States">
        <div class="valorhtml"><h2><a href= >Html </a></h2>
            <p>${datos.valoraciones.valhtml}</p>
        </div>
        <div class="valorcss"><h2><a href= >CSS </a></h2> 
            <p>${datos.valoraciones.valcss}</p>
        </div>
        <div class="valorjs"><h2><a href= >JS </a></h2>
            <p>${datos.valoraciones.valjs}</p>
        </div>
        <div class="valorui"><h2><a href= >UI </a></h2>
            <p>${datos.valoraciones.valui}</p>
        </div>
        <div class="valorui"><h2><a href= >UX</a></h2>
            <p>${datos.valoraciones.valux}</p>
        </div>
        <div class="imgicon"><a href=""><img src="/FichaEstudiantil/images/user-solid.svg" alt=""></a>
        </div>
    </div>
`}



const p1 = document.getElementById("fichaTecnica").innerHTML = datosEstudiantes.map(Plantilla).join("");