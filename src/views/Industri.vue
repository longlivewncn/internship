<template>
  <div class="div33">
    <v-card>
      <v-img
        src="@/assets/images/taksu.webp"
        aspect-ratio="16/9"
        cover
      ></v-img>

      <v-card-title><h1>Taksu Teknologi</h1></v-card-title>

      <v-card-text>
        <p>
          Taksu Teknologi adalah software development studio yang berbasis di
          Singapura dan Bali. Dengan pengalaman yang luas dalam membangun
          aplikasi mobile dan web khusus untuk klien di seluruh dunia, Taksu
          Teknologi telah menjadi pilihan utama bagi banyak perusahaan.
        </p>
        <br />
        <p>
          Didirikan pada tahun 2012 di Singapura dengan nama Spinroam oleh Made
          Adi, Spinroam kemudian mengubah namanya pada tahun 2018 dan membuka PT
          Taksu Teknologi Indonesia di Bali tepatnya di Jalan Cokroaminoto
          No.394, Ubung Kaja, Kec. Denpasar Utara, Kota Denpasar
        </p>
      </v-card-text>
    </v-card>
    
    <v-card>
      <v-img
        src="@/assets/images/taksu2.webp"
        aspect-ratio="16/9"
        cover
      ></v-img>

      <v-card-title><h1>Culture</h1></v-card-title>

      <v-card-text>
        <p>
          Taksu Teknologi memiliki jadwal kerja yang berlangsung dari hari Senin
          hingga Jumat, dimulai dari pukul 8 pagi hingga pukul 5 sore, dengan
          waktu istirahat satu jam yang dimulai pada pukul 12 siang. Taksu
          Teknologi juga memiliki budaya atau kebiasaan yang unik, yaitu Town
          Hall dan Demo Day. Town Hall adalah pertemuan yang diadakan setiap
          hari Senin untuk mempresentasikan sejauh mana proyek dari suatu tim
          telah dikerjakan dan membahas berbagai masalah serta tantangan yang
          dihadapi.
        </p>
        <br />
        <p>
          Sedangkan Demo Day adalah wadah untuk membagikan berbagai hal tentang
          coding, seperti teknologi baru, best practice, dan pengalaman belajar,
          kepada seluruh rekan kerja yang diadakan setiap hari Selasa. Budaya
          ini memperkuat kerja sama dan kolaborasi antara tim, serta memastikan
          bahwa semua anggota tim memiliki pemahaman yang jelas tentang proyek
          yang sedang dikerjakan dan teknologi terbaru yang digunakan.
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.div33 {
  display: flex;
  flex-direction: column;
  gap: calc(2vw + 2vh);
  align-items: center;
  width: calc(100% - 15vw);
  margin: 5vw 0;
}

h1 {
  font-size: calc(1rem + 2vw);
  line-height: 1em;
}

p {
  font-size: calc(1rem + 1vw);
  line-height: 1.2em;
}

.v-card {
  display: flex;
  gap: 1vw;
  flex-direction: column;
}

.v-card-text, .v-card-title{
    padding: 1vw 2vw;
}
</style>
