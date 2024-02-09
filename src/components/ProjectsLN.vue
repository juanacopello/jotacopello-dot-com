<template>
  <div>
    <section class="projects">
      <h3>Selected work</h3>
      <div class="container">
        <article v-for="(articulo, i) in articles" :key="i">
          <a :href="articles[i].link" target="_blank">
            <figure>
              <img :src="articles[i].image" :alt="articles[i].alt" />
            </figure>
            <h4 class="texto_project">{{ articles[i].title }}</h4>
            <h5 class="publisher">{{ articles[i].published }}</h5>

            <div class="rolesContainer">
              <p v-for="(roles, j) in articles[i].role" :key="j" class="roles">
                {{ roles }}
              </p>
            </div>
          </a>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
article a {
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.publisher {
  margin: 0;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #000000;
  font-size: 0.85rem;
  margin-top: auto;
}
.projects {
  margin: 10px auto;
  width: 90%;
}

.projects h3 {
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #2b2424;
  margin-bottom: 10px;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
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

article::after {
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
  border-bottom: 1px solid #e2e6e7;
}

.container article video {
  background-color: black;
}

.container article .texto_project {
  padding: 0.5rem;
  font-weight: 200;
  font-size: 0.9rem;
  margin: 3px 0;
  line-height: 1.5;
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

.rolesContainer {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
}

.roles {
  border: 1px solid #00000087;
  border-radius: 3px;
  padding: 2px 10px;
  color: #000;
  margin-left: 7px;
  font-size: 11px !important;
  pointer-events: none;
  font-weight: 200 !important;
  text-transform: lowercase;
}

@media screen and (min-width: 500px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 780px) {
  article figure {
    height: 200px;
  }
}

@media screen and (min-width: 1000px) {
  .container article .texto_project {
    padding: 0 0.5rem;
    font-size: 0.8rem;
  }
  .container {
    grid-template-columns: repeat(3, 1fr);
  }

  .container article img,
  .container article video {
    height: 220px;
  }

  .projects {
    max-width: 1000px;
    margin: 2rem auto;
  }
}
</style>

<script>
import capturaViajes from "@/images/viajes_precandidatos.gif";
import gifInflacion from "@/images/gif_inflacion.gif";
import gifCromanion from "@/images/cromanion_2.gif";
import mileiGraficos from "@/images/Scatter-captura.png";
import gifCalculadora from "@/images/gif_calculadora.gif";
import difGeneralPaso from "@/images/gral_paso_diferencia.png";
import cardsDebate from "@/images/debate_presidencial_captura.png";
import discursosGif from "@/images/discursos.gif";
import gifTemperatura from "@/images/mapa_temperatura.gif";
import mapaElectoral from "@/images/mapa-electoral-generales.gif";

export default {
  name: "ProjectsLN",
  data() {
    return {
      articles: [
        //Simulación en el colectivo
        {
          title:
            "Simulation. This is how the Covid-19 can spread in public transport.",
          image:
            "https://resizer.glanacion.com/resizer/wsH9qhqEmYUDAbfMZo3pgMNQyM8=/1200x746/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4VT6FVWGRJEMZNGRDOFAWME4GA.gif",
          alt: "simulacion_particulas_colectivo_gif",
          link: "https://www.lanacion.com.ar/sociedad/simulacion-asi-se-puede-propagar-el-virus-en-el-transporte-nid11042021/",
          published: "La Nacion",
          role: ["Reporting"],
        },
        //Aplausómetro
        {
          title:
            "Justice, Mauricio Macri, debt and abortion: year by year, which theme was the most clapped in each of the President's speech in Congress.",
          image:
            "https://resizer.glanacion.com/resizer/bgzZwVQheMcpBo7UsqTz3HjbJMU=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PYNUBRJEH5HBTCJEBF3RWG4HXA.jpg",
          alt: "alberto_fernandez_speech",
          link: "https://www.lanacion.com.ar/politica/macri-deuda-y-aborto-aplausometro-ano-a-ano-cuanto-y-por-que-aplaudieron-a-alberto-fernandez-en-el-nid01032023/",
          published: "La Nacion",
          role: ["Data analysis", "Reporting"],
        },
        //Distorsión de precios
        {
          title:
            "Do you know how much milk and gasoline cost? Test your notion of prices in times of uncontrolled inflation.",
          image: gifInflacion,
          alt: "test_inflacion_captura_home",
          link: "https://www.lanacion.com.ar/economia/sabes-cuanto-vale-la-leche-y-la-nafta-testea-tu-nocion-de-los-precios-en-tiempos-de-inflacion-nid07092022/",
          published: "La Nacion",
          role: ["Reporting", "Web development"],
        },
        //Graficos de Milei
        {
          title:
            "Who elected Milei? The economic analysis of the libertarian vote ",
          image: mileiGraficos,
          alt: "graficos_dispersion_milei",
          link: "https://www.lanacion.com.ar/sociedad/quien-eligio-a-milei-el-analisis-economico-del-voto-libertario-y-el-grafico-revelador-que-implosiono-nid07092023/#/",
          published: "La Nacion",
          role: ["Data Visualization"],
        },
        //Plataformas de vacunas
        {
          title: "How the vaccines against coronavirus work",
          image:
            "https://resizer.glanacion.com/resizer/1efleqADafaG5DwG7uvgaRMDt6U=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/WXIM3KE6QFDTNPNMTLEBTK2BTE.gif",
          alt: "plataformas_vacunas_covid19_gif",
          link: "https://www.lanacion.com.ar/sociedad/asi-actuan-vacunas-carrera-coronavirus-nid2406017/",
          published: "La Nacion",
          role: ["Reporting"],
        },
        //Diferencia General
        {
          title:
            "Can Javier Milei win in the first round? The feat that he seeks and that challenges electoral statistics",
          image: difGeneralPaso,
          alt: "dif_general_paso_captura",
          link: "https://www.lanacion.com.ar/politica/puede-ganar-en-primera-vuelta-la-hazana-que-busca-javier-milei-y-que-desafia-a-las-estadisticas-nid21102023/",
          published: "La Nacion",
          role: ["Data visualization"],
        },

        //Elecciones 2023: Mapa de resultados en todo el país
        {
          title:
            "The new political map: the results of the 2023 general elections",
          image: mapaElectoral,
          alt: "mapa_resultados_en_el_pais_2023",
          link: "https://www.lanacion.com.ar/politica/elecciones-2023-los-resultados-de-los-comicios-presidenciales-en-todo-el-pais-nid22102023/#/presidente",
          published: "La Nacion",
          role: ["data reporting"],
        },
        //Mapa de intendentes
        {
          title:
            "Mayor map: Winners and losers in the districts of the Buenos Aires province",
          image:
            "https://resizer.glanacion.com/resizer/v2/-G7FFCPNQCFBAFN6VMGJZ72O4EY.jpg?auth=f941ef7bd17d0fc74925b07468c7a0bf40ceb391d72339f20fa186a36f3b98d3&width=768&quality=70&smart=false",
          alt: "mayor-map-image",
          link: "https://www.lanacion.com.ar/politica/elecciones-2023-el-nuevo-mapa-de-intendentes-bonaerenses-nid22102023/#/intendentes",
          published: "La Nacion",
          role: ["Reporting"],
        },
        //Viajes de precandidatos en todo el país
        {
          title:
            "Campaign log. Thousands of kilometers, crossed strategies and an abrupt ending",
          image: capturaViajes,
          alt: "viajes_de_precandidatos_en_todo_el_pais",
          link: "https://www.lanacion.com.ar/politica/elecciones-2023-como-fue-la-campana-de-los-principales-candidatos-para-las-paso-nid12082023/",
          published: "La Nacion",
          role: ["Web development"],
        },
        //Artemis
        {
          title:
            "First the Moon, then Mars. Half a century after Apollo XI, United States wants to conquer space again.",
          image:
            "https://resizer.glanacion.com/resizer/N82f4Ap-wiyxWgJjUVbVfiVuBIg=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/XOJ3AB4RPVBBTPUNWPMT7S622E.jpg",
          alt: "artemis_captura_home",
          link: "https://www.lanacion.com.ar/sociedad/primero-la-luna-luego-marte-medio-siglo-despues-del-apolo-11-estados-unidos-quiere-volver-a-nid28082022/#/",
          published: "La Nacion",
          role: ["Reporting"],
        },
        //Plaza de Mayo
        {
          title:
            "Plaza de Mayo in flames. 24 hours of anger, repression and death that changed history.",
          image:
            "https://resizer.glanacion.com/resizer/2wmHNtkS2PsATDxKmOi_Ox8s2Lk=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4F3ACEW52VBSRMZDEME2YJVHHQ.gif",
          alt: "plaza_de_mayo_gif",
          link: "https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/",
          published: "La Nacion",
          role: ["Reporting"],
        },

        //Cards debate
        {
          title:
            "Who won the presidential debate? The evaluation of LA NACION's journalists on the performance of the candidates",
          image: cardsDebate,
          alt: "dif_general_paso_captura",
          link: "https://www.lanacion.com.ar/politica/quien-gano-el-debate-presidencial-2023-los-aciertos-y-errores-de-los-candidatos-segun-los-columnitas-nid02102023/#/",
          published: "La Nacion",
          role: ["Web development"],
        },
        //Comparativo de discursos de asunción
        {
          title:
            "From Néstor Kirchner to Javier Milei: Comparison of presidential inaugural speeches",
          image: discursosGif,
          alt: "gif_comparacion_discursos_asuncion",
          link: "https://www.lanacion.com.ar/politica/focos-frases-y-aplausos-de-nestor-kirchner-a-javier-milei-comparativo-de-discursos-de-asuncion-nid10122023/",
          published: "La Nacion",
          role: ["Web development"],
        },
        //Cómo ataca el virus en el organismo
        {
          title: "SARS-CoV-2: day by day, how the virus affect the body",
          image:
            "https://buckets3.glanacion.com/lntools/anexos/fotos/66/18866.svg",
          alt: "covid19_virus_attack_body_img",
          link: "https://www.lanacion.com.ar/sociedad/dia-dia-como-actua-virus-organismo-nid2358830/",
          published: "La Nacion",
          role: ["Reporting"],
        },
        //Islas de calor
        {
          title:
            "Heat islands: These are the corners in Buenos Aires where the temperature is hell",
          image: gifTemperatura,
          alt: "heat-islands-gif",
          link: "https://www.lanacion.com.ar/sociedad/islas-de-calor-portenas-tenes-calor-entonces-ni-te-asomes-a-estas-esquinas-portenas-donde-la-nid06022024/#/",
          published: "La Nacion",
          role: ["Web development"],
        },

        //Calculadora Electoral
        {
          title:
            "Will there be a ballottage or will it be defined in the first round? Predict how the votes will rearrange in October in the general election",
          image: gifCalculadora,
          alt: "calculator_gif",
          link: "https://www.lanacion.com.ar/politica/elecciones-2023-la-calculadora-para-proyectar-como-se-reacomodaran-los-votos-en-la-primera-vuelta-nid26082023/",
          published: "La Nacion",
          role: ["Reporting"],
        },
        //Cromañón
        {
          title: "15th anniversary of Cromañón: tour through a sinister maze",
          image: gifCromanion,
          alt: "cromanion_sinister_maze_gif",
          link: "https://especialess3.lanacion.com.ar/19/12/3d-cromanon/",
          published: "La Nacion",
          role: ["Reporting"],
        },
      ],
    };
  },
};
</script>
