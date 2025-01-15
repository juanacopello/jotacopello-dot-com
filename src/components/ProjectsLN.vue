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

<style>
article a {
  text-decoration: none;
  width: 100%;
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
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #2b2424;
  margin-bottom: 40px;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
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
  margin: 10px 0;
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
  padding-bottom: 20px;
}

.roles {
  border: 1px solid #00000087;
  border-radius: 3px;
  padding: 2px 10px;
  color: #000;
  margin-left: 7px;
  font-size: 12px !important;
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
    width: auto;
  }
}

@media screen and (min-width: 1000px) {
  .container article .texto_project {
    padding: 0 0.5rem;
    font-size: 0.85rem;
  }
  .container {
    grid-template-columns: repeat(3, 1fr);
  }

  .container article figure,
  .container article video {
    height: 250px;
  }

  .projects {
    max-width: 1100px;
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
import proyectoCalle from "@/images/proyecto-calle.png";
import argendata from "@/images/argendata.png";
import gifCompass from "@/images/compass.gif";
import gifCharts from "@/images/charts.gif";

export default {
  name: "ProjectsLN",
  data() {
    return {
      articles: [
        //Simulación en el colectivo
        {
          title:
            "Simulation. This Is How The Covid-19 Can Spread In Public Transport.",
          image:
            "https://resizer.glanacion.com/resizer/wsH9qhqEmYUDAbfMZo3pgMNQyM8=/1200x746/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4VT6FVWGRJEMZNGRDOFAWME4GA.gif",
          alt: "simulacion_particulas_colectivo_gif",
          link: "https://www.lanacion.com.ar/sociedad/simulacion-asi-se-puede-propagar-el-virus-en-el-transporte-nid11042021/",
          published: "La Nacion",
          role: ["Reporting"],
        },
        //Islas de calor
        {
          title:
            "Heat Islands: These Are the Corners in Buenos Aires Where the Temperature is Hell",
          image: gifTemperatura,
          alt: "heat-islands-gif",
          link: "https://www.lanacion.com.ar/sociedad/islas-de-calor-portenas-tenes-calor-entonces-ni-te-asomes-a-estas-esquinas-portenas-donde-la-nid06022024/#/",
          published: "La Nacion",
          role: ["Web development"],
        },

        //Distorsión de precios
        {
          title:
            "Do you Know How Much Milk and Gasoline Cost? Test your Notion of Prices in Times of Uncontrolled Inflation.",
          image: gifInflacion,
          alt: "test_inflacion_captura_home",
          link: "https://www.lanacion.com.ar/economia/sabes-cuanto-vale-la-leche-y-la-nafta-testea-tu-nocion-de-los-precios-en-tiempos-de-inflacion-nid07092022/",
          published: "La Nacion",
          role: ["Reporting", "Web development"],
        },
        //Graficos de Milei
        {
          title:
            "Who Elected Milei? The Economic Analysis of the Libertarian Vote ",
          image: mileiGraficos,
          alt: "graficos_dispersion_milei",
          link: "https://www.lanacion.com.ar/sociedad/quien-eligio-a-milei-el-analisis-economico-del-voto-libertario-y-el-grafico-revelador-que-implosiono-nid07092023/#/",
          published: "La Nacion",
          role: ["Data Visualization"],
        },
        //Plataformas de vacunas
        {
          title: "How the Covid-19 Vaccines Work",
          image:
            "https://resizer.glanacion.com/resizer/1efleqADafaG5DwG7uvgaRMDt6U=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/WXIM3KE6QFDTNPNMTLEBTK2BTE.gif",
          alt: "plataformas_vacunas_covid19_gif",
          link: "https://www.lanacion.com.ar/sociedad/vacunas-covid-19-cuales-llegaran-argentina-que-resultados-nid2526910/",
          published: "La Nacion",
          role: ["Reporting"],
        },
        //Aplausómetro
        {
          title:
            "Justice, Mauricio Macri, Debt and Abortion: Year by Year, Which Theme was the Most Clapped in Each of the President's Speech in Congress.",
          image:
            "https://resizer.glanacion.com/resizer/bgzZwVQheMcpBo7UsqTz3HjbJMU=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PYNUBRJEH5HBTCJEBF3RWG4HXA.jpg",
          alt: "alberto_fernandez_speech",
          link: "https://www.lanacion.com.ar/politica/macri-deuda-y-aborto-aplausometro-ano-a-ano-cuanto-y-por-que-aplaudieron-a-alberto-fernandez-en-el-nid01032023/",
          published: "La Nacion",
          role: ["Data analysis", "Reporting"],
        },
        //Viajes de precandidatos en todo el país
        {
          title:
            "Campaign Log. Thousands of Kilometers, Crossed Strategies and an Abrupt Ending",
          image: capturaViajes,
          alt: "viajes_de_precandidatos_en_todo_el_pais",
          link: "https://www.lanacion.com.ar/politica/elecciones-2023-como-fue-la-campana-de-los-principales-candidatos-para-las-paso-nid12082023/",
          published: "La Nacion",
          role: ["Web development"],
        },
        //Dengue
        {
          title:
            "Dengue. This is How the Virus Acts Inside your Body and How it Spreads",
          image:
            "https://resizer.glanacion.com/resizer/ZBq-a_kAPECZPeFZmXtKvRg02vA=/375x250/smart/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/IWZGCFVLKNFNJLJDFF7RZA3WDE.jpg",
          alt: "mosquito",
          link: "https://www.lanacion.com.ar/sociedad/dengue-viaje-al-interior-de-la-epidemia-asi-actua-el-virus-dentro-de-tu-cuerpo-y-asi-se-propaga-nid11042024/#/",
          published: "La Nacion",
          role: ["Reporting"],
        },

        //Diferencia General
        {
          title:
            "Can Javier Milei Win in the First Round? The Feat that he Seeks and that Challenges Electoral Statistics",
          image: difGeneralPaso,
          alt: "dif_general_paso_captura",
          link: "https://www.lanacion.com.ar/politica/puede-ganar-en-primera-vuelta-la-hazana-que-busca-javier-milei-y-que-desafia-a-las-estadisticas-nid21102023/",
          published: "La Nacion",
          role: ["Data visualization"],
        },

        //Artemis
        {
          title:
            "First the Moon, then Mars. Half a Century after Apollo XI, United States wants to conquer space again.",
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
            "Plaza de Mayo in Flames. 24 hours of Anger, Repression and Death that Changed History.",
          image:
            "https://resizer.glanacion.com/resizer/2wmHNtkS2PsATDxKmOi_Ox8s2Lk=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/4F3ACEW52VBSRMZDEME2YJVHHQ.gif",
          alt: "plaza_de_mayo_gif",
          link: "https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/",
          published: "La Nacion",
          role: ["Reporting"],
        },

        //Elecciones 2023: Mapa de resultados en todo el país
        {
          title:
            "The New Political Map: the Results of the 2023 General Elections",
          image: mapaElectoral,
          alt: "mapa_resultados_en_el_pais_2023",
          link: "https://www.lanacion.com.ar/politica/elecciones-2023-los-resultados-de-los-comicios-presidenciales-en-todo-el-pais-nid22102023/#/presidente",
          published: "La Nacion",
          role: ["data reporting"],
        },
        //Mapa de intendentes
        {
          title:
            "Mayor Map: Winners and Losers in the Districts of the Buenos Aires Province",
          image:
            "https://resizer.glanacion.com/resizer/v2/-G7FFCPNQCFBAFN6VMGJZ72O4EY.jpg?auth=f941ef7bd17d0fc74925b07468c7a0bf40ceb391d72339f20fa186a36f3b98d3&width=768&quality=70&smart=false",
          alt: "mayor-map-image",
          link: "https://www.lanacion.com.ar/politica/elecciones-2023-el-nuevo-mapa-de-intendentes-bonaerenses-nid22102023/#/intendentes",
          published: "La Nacion",
          role: ["Reporting"],
        },

        //Cards debate
        {
          title:
            "Who Won the Presidential Debate? The Evaluation of LA NACION's Reporters on the Candidates' Performance",
          image: cardsDebate,
          alt: "dif_general_paso_captura",
          link: "https://www.lanacion.com.ar/politica/quien-gano-el-debate-presidencial-2023-los-aciertos-y-errores-de-los-candidatos-segun-los-columnitas-nid02102023/#/",
          published: "La Nacion",
          role: ["Web development"],
        },
        //Comparativo de discursos de asunción
        {
          title:
            "From Néstor Kirchner to Javier Milei: Comparison of Presidential Inaugural Speeches",
          image: discursosGif,
          alt: "gif_comparacion_discursos_asuncion",
          link: "https://www.lanacion.com.ar/politica/focos-frases-y-aplausos-de-nestor-kirchner-a-javier-milei-comparativo-de-discursos-de-asuncion-nid10122023/",
          published: "La Nacion",
          role: ["Web development"],
        },

        //Cómo ataca el virus en el organismo
        {
          title: "SARS-CoV-2: Day by Day, How the Virus Affect the Body",
          image:
            "https://buckets3.glanacion.com/lntools/anexos/fotos/66/18866.svg",
          alt: "covid19_virus_attack_body_img",
          link: "https://www.lanacion.com.ar/sociedad/dia-dia-como-actua-virus-organismo-nid2358830/",
          published: "La Nacion",
          role: ["Reporting"],
        },
        //Cromañón
        {
          title:
            "20th Anniversary of Cromañón Tragedy: The Route Through a Sinister Labyrinth",
          image: gifCromanion,
          alt: "cromanion_sinister_maze_gif",
          link: "https://www.lanacion.com.ar/seguridad/a-20-anos-de-cromanon-recorrido-3d-por-un-laberinto-siniestro-colmado-de-desesperacion-y-muerte-nid29122024/",
          published: "La Nacion",
          role: ["Reporting"],
        },
        // Political Compass EEUU 2024
        {
          title:
            "Political Compass:  Test If You are Closer to Harris’ or Trump’s Ideas",
          image: gifCompass,
          alt: "compass_gif",
          link: "https://www.lanacion.com.ar/estados-unidos/political-compass-donald-trump-o-kamala-harris-descubri-cual-es-el-candidato-de-estados-unidos-que-nid27102024/",
          published: "La Nacion",
          role: ["Web development"],
        },
        /* Inflacion Charts */
        {
          title: "Inflation Charts",
          image: gifCharts,
          alt: "cromanion_sinister_maze_gif",
          link: "https://www.lanacion.com.ar/economia/la-inflacion-de-noviembre-fue-de-24-y-acumulo-112-en-el-ano-nid11122024/",
          published: "La Nacion",
          role: ["Web development"],
        },
        //Calculadora Electoral
        // {
        //   title:
        //     "Will There be a Ballottage or Will it be Defined in the First Round? Predict How the Votes will Rearrange in October in the General Election",
        //   image: gifCalculadora,
        //   alt: "calculator_gif",
        //   link: "https://www.lanacion.com.ar/politica/elecciones-2023-la-calculadora-para-proyectar-como-se-reacomodaran-los-votos-en-la-primera-vuelta-nid26082023/",
        //   published: "La Nacion",
        //   role: ["Reporting"],
        // },
        //Proyecto Calle
        {
          title:
            "Living in the Streets: What Do people who Don't Have a Bed to Spend the Night Dream About?",
          image: proyectoCalle,
          alt: "proyecto_calle",
          link: "https://www.lanacion.com.ar/comunidad/con-que-suenan-las-personas-que-no-tienen-ni-una-cama-donde-pasar-la-noche-nid29062024/#/",
          published: "La Nacion",
          role: ["web development"],
        },
        //Argendata
        {
          title: "Argendata: Data to Understand Argentina",
          image: argendata,
          alt: "argendata_captura",
          link: "https://argendata.fund.ar/",
          published: "Fundar",
          role: ["Data visualization"],
        },
      ],
    };
  },
};
</script>
