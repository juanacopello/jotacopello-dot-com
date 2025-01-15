<template>
  <div>
    <section class="projects">
      <h3>Awards</h3>
      <div class="list-container">
        <ul>
          <li v-for="(award, i) in listAwards" :key="i">
            <span class="year__award">{{ award.year }}</span> | <span>{{ award.type }}</span> | {{ award.organization }} |
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
  margin: 10px auto;
  font-size: 16px;
}

.year__award{
  font-weight: 700;
}


.list-container ul li a{
  color: var(--color-text);
  text-decoration: none;
}

.awarded-project-url{
  font-style: italic;
}

</style>

<script>
export default {
  name: "Awards",
  data() {
    return {
      listAwards: [
        {
          year: 2024,
          type: "Silver Medal",
          organization: "Society for News Design",
          publicationText: "Presidential Debates in Argentina",
          publicationUrl: "https://www.lanacion.com.ar/politica/quien-gano-el-debate-presidencial-2023-los-aciertos-y-errores-de-los-candidatos-segun-los-columnitas-nid02102023/#/",
        },
        {
          year: 2024,
          type: "First Place",
          organization: "Asociación de Entidades Periodísticas Argentinas",
          publicationText: "Dengue, a Journey into the Epidemic: This is How it Acts and Spreads",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/dengue-viaje-al-interior-de-la-epidemia-asi-actua-el-virus-dentro-de-tu-cuerpo-y-asi-se-propaga-nid11042024/#//",
        },
        {
          year: 2023,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "Step by Step, the Artemis Mission that Will Return Man to the Moon",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/primero-la-luna-luego-marte-medio-siglo-despues-del-apolo-11-estados-unidos-quiere-volver-a-nid28082022/#/",
        },
        {
          year: 2023,
          type: "Second Place",
          organization: "Asociación de Entidades Periodísticas Argentinas",
          publicationText: "Step by Step, the Artemis Mission that Will Return Man to the Moon",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/primero-la-luna-luego-marte-medio-siglo-despues-del-apolo-11-estados-unidos-quiere-volver-a-nid28082022/#/",
        },
   
        
        {
          year: 2022,
          type: "Bronze Medal",
          organization: "Society for News Design",
          publicationText: "2021 Midterm Elections in Argentina",
          publicationUrl: "https://www.lanacion.com.ar/politica/elecciones-2021-mapa-de-resultados-en-tiempo-real-nid15112021/",
        },
        {
          year: 2022,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "Plaza de Mayo on Flames. How the Five Deaths that Changed Argentina's History Took Place",
          publicationUrl: "https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/",
        },
        {
          year: 2022,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "Simulation. This is How the Virus can Spread in Public Transport",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/simulacion-asi-se-puede-propagar-el-virus-en-el-transporte-nid11042021/",
        },
        {
          year: 2022,
          type: "Recognition",
          organization: "Sociedad Interamericana de Prensa",
          publicationText: "Plaza de Mayo on Flames. How the Five Deaths that Changed Argentina's History Took Place",
          publicationUrl: "https://www.lanacion.com.ar/politica/plaza-de-mayo-en-llamas-asi-ocurrieron-las-cinco-muertes-que-cambiaron-la-historia-de-la-argentina-nid19122021/",
        },
      
        {
          year: 2021,
          type: "First Place",
          organization: "Sociedad Interamericana de Prensa",
          publicationText: "How Covid-19 Vaccines Work",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/asi-actuan-vacunas-carrera-coronavirus-nid2406017/",
        },
        {
          year: 2021,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "How Covid-19 Vaccines Work",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/asi-actuan-vacunas-carrera-coronavirus-nid2406017/",
        },
        {
          year: 2021,
          type: "Award of Excellence",
          organization: "Society for News Design",
          publicationText: "SARS-CoV-2: Day by Day, How the Virus Affects the Body",
          publicationUrl: "https://www.lanacion.com.ar/sociedad/dia-dia-como-actua-virus-organismo-nid2358830/",
        },
      ],
    };
  },
};
</script>
