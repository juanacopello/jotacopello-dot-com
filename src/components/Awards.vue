<template>
  <div>
    <section class="projects">
      <h3>Awards</h3>
      <div class="list-container">
        <ul>
          <li v-for="(award, i) in listAwards" :key="i">
            {{ award.year }} | <span>{{ award.type }}</span> | {{ award.organization }} |
            <a class="awarded-project-url" :href="award.publicationUrl" target="_blank"> {{ award.publicationText }} </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style>
.list-container ul{
  list-style: none;
  padding-left: 0;
}

.list-container ul li{
  margin: 20px auto;
}


.list-container ul li a{
  color: var(--color-text);
  /* text-decoration: none; */
}

.awarded-project-url{
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

.awarded-project-url:hover {
  box-shadow: inset 100% 0 0 0 #54b3d6;
  color: red;
  color: rgba(0, 0, 0, 0.671);
}
</style>

<script>
export default {
  name: "Awards",
  data() {
    return {
      listAwards: [
        {
          year: 2023,
          type: "Silver",
          organization: "Society for News Design",
          publicationText: "Presidential Debates in Argentina",
          publicationUrl: "https://www.lanacion.com.ar/politica/quien-gano-el-debate-presidencial-2023-los-aciertos-y-errores-de-los-candidatos-segun-los-columnitas-nid02102023/#/",
        },
        {
          year: 2023,
          type: "First place",
          organization: "Grupo de Diarios América",
          publicationText: "Rosario, a Drug Feud",
          publicationUrl: "https://www.lanacion.com.ar/politica/rosario-feudo-narco-el-imperio-criminal-que-se-administra-detras-de-las-rejas-con-complicidad-nid30102022/#/",
        },
        {
          year: 2022,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "Incriminating Messages. This is How the Attack against Cristina Kirchner was Planned and Carried Out",
          publicationUrl: "https://www.lanacion.com.ar/politica/mensajes-delatores-asi-se-planifico-y-ejecuto-el-atentado-contra-cristina-kirchner-nid17092022/#/",
        },
        {
          year: 2021,
          type: "First Place",
          organization: "Sociedad Interamericana de Prensa",
          publicationText: "Step by Step, The Artemis Mission Plan to Return the Man to the Moon",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/primero-la-luna-luego-marte-medio-siglo-despues-del-apolo-11-estados-unidos-quiere-volver-a-nid28082022/#/",
        },
        {
          year: 2021,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "Plaza de Mayo on Fire. How the Five Deaths that Changed Argentina's History Took Place",
          publicationUrl: "https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/",
        },
        {
          year: 2021,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "Simulation. This is How the Virus can Spread in Public Transport",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/simulacion-asi-se-puede-propagar-el-virus-en-el-transporte-nid11042021/",
        },
        {
          year: 2021,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "How the Covid-19 Vaccines Work",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/asi-actuan-vacunas-carrera-coronavirus-nid2406017/",
        },
        {
          year: 2020,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "15th Anniversary of Cromañon's Tragedy",
          publicationUrl: "https://especialess3.lanacion.com.ar/19/12/3d-cromanon/",
        },
      ],
    };
  },
};
</script>
