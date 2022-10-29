<template>
  <div>
    <section class="projects">
      <h3>Selected work</h3>
      <div class="container">
        <article v-for="(articulo, i) in articles" :key="i">
          <a :href="articles[i].link" target="_blank">
            <img :src="articles[i].image" :alt="articles[i].alt" />
            <h4 class="texto_project">{{ articles[i].title }} </h4>
            <h5 class="publisher">{{ articles[i].published }}</h5>
          </a>
          <!-- <button></button> -->
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.publisher{
    margin: 0;
    padding: .5rem;
    text-transform: uppercase;
    font-weight: 600;
    color: #000000;
    font-size: 1rem;
}
.projects {
  margin: 3rem auto;
  width: 80%;
}

.projects h3 {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #000000ba;
  margin-bottom: 10px;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 50px;
  margin: auto;
  padding-bottom: 0.5rem;
}

.container article {
  border: 1px solid #e2e6e7;
  display: flex;
  align-items: center;
  /*height: 350px;*/
    /*box-shadow: 0px 0px 5px 0px #38383873;*/
}

article::after{
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right;
  transition: transform 0.15s ease-out;
}

article:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.container article img,
.container article video {
  width: 100%;
  height: 100%;
}

.container article video {
  background-color: black;
}

.container article .texto_project {
  padding: 0.5rem;
  font-weight: 300;
  font-size: .9rem;
  margin: auto 0;
  line-height: 1.3;
  color: #000000;
}

.container article p {
  font-size: 0.8rem;
  font-weight: 100;
  padding-left: 0.5rem;
}

button {
  border: 1px solid #5e5e5e82;
  background-color: transparent;
  border-radius: 2px;
  background-color: #f7f7f7;
  margin: 0 0 0.8rem 0.5rem;
  padding: 0.3rem 0.5rem;
}

button a {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 12px;
  font-family: "Hind", sans-serif;
}

button a:hover {
  color: black;
  opacity: 0.7;
}

@media screen and (min-width: 500px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1000px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }

  .container article img,
  .container article video {
    height: 250px;
  }

  .projects {
    max-width: 1100px;
  }
}
</style>

<script>
export default {
  name: "ProjectsLN",
  data() {
    return {
      articles: [
        //Simulación en el colectivo
        {
          title:
            "Simulation. This is how the virus can spread in public transport",
          image:
            "https://resizer.glanacion.com/resizer/wsH9qhqEmYUDAbfMZo3pgMNQyM8=/1200x746/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4VT6FVWGRJEMZNGRDOFAWME4GA.gif",
          alt: "simulacion_particulas_colectivo_gif",
          link: "https://www.lanacion.com.ar/sociedad/simulacion-asi-se-puede-propagar-el-virus-en-el-transporte-nid11042021/",
          published: "La Nacion",
        },
        //Plaza de Mayo
        {
          title:
            "Plaza de Mayo in flames: 24 hours of anger, repression and death that changed history",
          image:
            "https://resizer.glanacion.com/resizer/2wmHNtkS2PsATDxKmOi_Ox8s2Lk=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4F3ACEW52VBSRMZDEME2YJVHHQ.gif",
          alt: "plaza_de_mayo_gif",
          link: "https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/",
          published: "La Nacion",
        },
        //Distorsión de precios
        {
          title:
            "Do you know how much the milk costs? And the gasoline? Test your notion of prices in times of accelerated inflation",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaH0_QaiQCYmg_2TEB952YGUZpZRGw_IumSBk5aPgcEmXHq7U0_PbUH09E3ufps4l6_cs&usqp=CAU",
          alt: "test_inflacion_captura_home",
          link: "https://www.lanacion.com.ar/economia/sabes-cuanto-vale-la-leche-y-la-nafta-testea-tu-nocion-de-los-precios-en-tiempos-de-inflacion-nid07092022/",
          published: "La Nacion",
        },
        //Artemis
        {
          title:
            "First the Moon, then Mars. Half a century after Apollo XI, the United States wants to conquer space again",
          image:
            "https://resizer.glanacion.com/resizer/N82f4Ap-wiyxWgJjUVbVfiVuBIg=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/XOJ3AB4RPVBBTPUNWPMT7S622E.jpg",
          alt: "artemis_captura_home",
          link: "https://www.lanacion.com.ar/sociedad/primero-la-luna-luego-marte-medio-siglo-despues-del-apolo-11-estados-unidos-quiere-volver-a-nid28082022/#/",
          published: "La Nacion",
        },
        //Plataformas de vacunas
        {
          title: "This is how the Covid-19 vaccine candidates work",
          image:
            "https://resizer.glanacion.com/resizer/1efleqADafaG5DwG7uvgaRMDt6U=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/WXIM3KE6QFDTNPNMTLEBTK2BTE.gif",
          alt: "plataformas_vacunas_covid19_gif",
          link: "https://www.lanacion.com.ar/sociedad/asi-actuan-vacunas-carrera-coronavirus-nid2406017/",
          published: "La Nacion",
        },
        //Cómo ataca el virus en el organismo
        {
          title: "Coronavirus: day by day, how the virus attacks the body",
          image:
            "https://buckets3.glanacion.com/lntools/anexos/fotos/66/18866.svg",
          alt: "covid19_virus_attack_body_img",
          link: "https://www.lanacion.com.ar/sociedad/dia-dia-como-actua-virus-organismo-nid2358830/",
          published: "La Nacion",
        },
        //Marte
        {
          title:
            '"Seven minutes of terror" to go after the traces of life on Mars',
          image:
            "https://buckets3.glanacion.com/lntools/anexos/fotos/65/40065w345q100.gif",
          alt: "mars_2020_gif",
          link: "https://www.lanacion.com.ar/sociedad/mars-2020-siete-minutos-de-terror-para-ir-tras-las-huellas-de-vida-en-marte-nid18022021/",
          published: "La Nacion",
        },
        //Ucrania
        {
          title: "The war in Ukraine: the maps that explain the invasion",
          image:
            "https://resizer.glanacion.com/resizer/liQKUUJcGewkirjb3TRDu7uWBb4=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QPBXILOUF5DQ3O76MAY6ZBZX3U.gif",
          alt: "war_in_ukraine_maps_explainer_gif",
          link: "https://www.lanacion.com.ar/el-mundo/guerra-en-ucrania-dia-por-dia-los-mapas-que-explican-la-invasion-que-tiene-en-vilo-al-mundo-nid03032022/",
          published: "La Nacion",
        },
        //Candidatos
        {
          title:
            "Candidates. All the lists that will compete in the legislative elections",
          image:
            "https://resizer.glanacion.com/resizer/fOHW-3XZKIGxdVJSlQzxkJaEguI=/1200x746/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/47ASQ4IHYBCJ3DEWGEIO6JKBLM.gif",
          alt: "candidates_lists_visualization_gif",
          link: "https://www.lanacion.com.ar/politica/candidatos-todas-las-listas-que-vas-a-encontrar-en-el-cuarto-oscuro-el-proximo-domingo-nid09112021/",
          published: "La Nacion",
        },
        //Juegos Olímpicos
        {
          title: '"Olympic Tokyo: A tour of the venues and stadiums',
          image:
            "https://resizer.glanacion.com/resizer/sXqS1qhmFGDRUElzrAE7EDBF36o=/1119x746/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/RC4FMYXQRJD5VEEJHWKWCLEU7I.gif",
          alt: "tokyo_venues_gif",
          link: "https://www.lanacion.com.ar/deportes/tokio-olimpica-un-recorrido-por-las-sedes-y-estadios-nid23072021/",
          published: "La Nacion",
        },
      ],
    };
  },
};
</script>