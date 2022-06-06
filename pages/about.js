import React from "react";
import Head from "next/head";

const About = () => {
   
    return <div>
            <Head>
            <title>Letra Celuloide - About</title>
            <meta name="description" content="Revista de cine y literatura" />
            <link rel="icon" href="/favlogo.ico" />
            <link rel="stylesheet" href="/styles/main.css" />
            <link rel="stylesheet" href="/styles/About.module.css" />
            </Head>
            <div className="container">
                <div className="mobile_text">
                    <h1>La revista</h1>
                </div>
                <div className="desktop_container">
                    <div className="desktop_img">
                        <img src="/img/about.jpg"></img>
                    </div>
                    <div className="desc"><p>Letraceluloide es una revista de cine y literatura fundada en Mar del Plata en el año 2007. Consiste en una publicación bimestral con ensayos de profesionales que trabajan en el campo de la cultura sobre películas basadas en textos literarios. Hasta el momento, cuenta con más de 80 números publicados.</p>
                    <p>Al staff de Letraceluloide lo conforman cinco personas asociadas a la Universidad Nacional de Mar del Plata: Víctor Conenna (Magíster y Doctor en Letras, miembro de la cátedra de Literatura y Cultura Latinoamericanas), Franco Denápole (crítico de cine y columnista en Funcinema Radio, estudiante de la Licenciatura en Letras), Evelyn Ayelén Blanco (Locutora Nacional de Radio y Televisión, estudiante de la Licenciatura en Letras), Carla Irina Tano (Estudiante del Profesorado en Letras) y Maria Sofia Perez H. (Estudiante del Profesorado en Letras, miembro del grupo de investigación en Teoría Literaria).</p>
                    </div>
                </div>
                <div className="mobile_text"> <p>Director General: Víctor Conenna.</p>
                                            <p>Editor en jefe: Franco Denápole.</p>
                                            <p>Coeditoras: Evelyn Blanco, Carla Tano, María Sofía Pérez Hospitaleche. </p>
                                            <p>Diseño web: Ignacio Casaburi.</p>
                                            <p>Desde Noviembre de 2007.</p>
                                            <p>Publicación bimestral de acceso libre y gratuito.</p>
                                            <p>ISSN Nº 1851-4855</p>
               </div>
            </div>
           </div>
}

export default About;