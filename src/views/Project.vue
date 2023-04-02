<template>
  <div class="div33">
    <v-card>
      <v-img
        src="@/assets/images/weekly-schedule.jpeg"
        aspect-ratio="16/9"
      ></v-img>
      <v-img
        src="@/assets/images/weekly-schedule-penerapan.jpeg"
        aspect-ratio="16/9"
        cover
      ></v-img>

      <v-card-title
        ><h1>Weekly Schedule</h1>
        <h1>Component</h1></v-card-title
      >
      <v-card-subtitle><h2>By Ngurah Yudiantara</h2></v-card-subtitle>

      <v-card-text>
        <p>
          Weekly schedule component adalah sebuah komponen yang berfungsi untuk
          menampikan pilihan daftar jadwal hari untuk siswa bersekolah. Orang
          tua siswa dapat memilih jadwal untuk anak mereka bersekolah sesuai
          dengan paket yang telah di sediakan.
        </p>
        <br />
        <p>
          Cara kerja komponen weekly schedule adalah admin akan menginputkan
          value berupa angka (1,2,3,4,5,6,7) sesuai dengan urutan hari yang
          dimana akan mengaktifkan komponen weekly schedule ini. Jika admin
          menginputkan value yang ada diantara angka 1,2,3,4,5,6,7 maka tampilan
          dari komponen weekly schedule akan barubah menjadi aktif (berubah
          biru) sesuai dengan urutan angka yang di inputkan.
        </p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-img
        src="@/assets/images/information-panel.jpeg"
        aspect-ratio="16/9"
      ></v-img>

      <v-card-title
        ><h1>Information Panel</h1>
        <h1>Component</h1></v-card-title
      >
      <v-card-subtitle><h2>By Ngurah Yudiantara</h2></v-card-subtitle>

      <v-card-text>
        <p>
          Information Panel Component adalah sebuah komponen yang berfungsi
          sebagai pengingat admin untuk memberikan informasi yang tertera pada
          komponen kepada orang tua siswa. Komponen ini hanya berupa tampilan
          saja, tidak di inputkan value apapun.
        </p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-img src="@/assets/images/last-update.jpg" aspect-ratio="16/9"></v-img>

      <v-img
        src="@/assets/images/lastupdate2.png"
        aspect-ratio="16/9"
        cover
      ></v-img>

      <v-card-title
        ><h1>Last Updated By</h1>
        <h1>Component</h1></v-card-title
      >
      <v-card-subtitle><h2>By Anand Krsna</h2></v-card-subtitle>

      <v-card-text>
        <p>
          Last Updated By adalah sebuah komponen yang berfungsi untuk
          memberitahu waktu dan siapa yang terakhir kali melakukan perubahan
          pada sistem dan informasi. Komponen ini biasanya digunakan dalam
          sebuah aplikasi atau website yang membutuhkan pembaruan informasi
          secara berkala. Cara kerja Last Updated By adalah dengan mengambil
          data dari database berupa waktu dan data user yang melakukan
          perubahan, kemudian data tersebut dikirim ke dalam child component.
        </p>
        <br />
        <p>
          Di dalam child component, data tersebut akan diolah dan ditampilkan
          dalam bentuk slot yang telah disiapkan sebelumnya. Dengan menggunakan
          Last Updated By, pengguna aplikasi atau website dapat mengetahui kapan
          terakhir kali informasi tersebut diperbarui dan siapa yang melakukan
          perubahan, sehingga dapat memastikan keakuratan dan kebaruan informasi
          yang diterima.
        </p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-img
        src="@/assets/images/attachmentpreview.png"
        aspect-ratio="16/9"
      ></v-img>

      <v-card-title
        ><h1>Last Updated By</h1>
        <h1>Component</h1></v-card-title
      >
      <v-card-subtitle><h2>By Anand Krsna</h2></v-card-subtitle>

      <v-card-text>
        <p>
          Attachment Preview adalah sebuah komponen yang berfungsi untuk
          memberikan informasi mengenai atribut sebuah file yang diunggah oleh
          pengguna pada aplikasi atau website. Komponen ini biasanya digunakan
          untuk memberikan preview atau pratinjau file yang diunggah, sehingga
          pengguna dapat memeriksa informasi dasar mengenai file tersebut
          sebelum mengunduh atau membukanya.
        </p>
        <br />
        <p>
          Cara kerja Attachment Preview adalah dengan menggunakan input type
          file, dimana pengguna dapat memilih file yang akan diunggah. Setelah
          pengguna memilih file, sistem akan memeriksa tipe file tersebut untuk
          memastikan keamanan dan kesesuaian dengan aplikasi atau website yang
          digunakan. Jika tipe file sesuai dengan yang diharapkan, sistem akan
          mengambil informasi atribut dari file tersebut dengan menggunakan
          fungsi yang telah disediakan, seperti nama file, ukuran, tipe file,
          dan URL download.
        </p>
        <br />
        <p>
          Informasi tersebut kemudian akan ditampilkan dalam bentuk slot yang
          telah disiapkan sebelumnya. Dengan menggunakan Attachment Preview,
          pengguna dapat dengan mudah memeriksa informasi dasar mengenai file
          yang diunggah, sehingga dapat memastikan keamanan dan kesesuaian file
          tersebut sebelum mengunduh atau mengirimnya.
        </p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-img
        src="@/assets/images/attachmentpreview.png"
        aspect-ratio="16/9"
      ></v-img>

      <v-card-title><h1>Addmission form</h1></v-card-title>
      <v-card-subtitle><h2>By Alvin Ramadhan</h2></v-card-subtitle>

      <v-card-text>
        <p>
          Admission Form adalah surel yang berfungsi sebagai form pendaftaran
          sekolah yang dibuat menggunakan Blade dan Tailwind CSS di dalam
          Laravel Framework yang digunakan oleh user atau admin sekolah untuk
          memberitahu orang tua dan wali siswa bahwa anak mereka harus mengisi
          data diri lengkap tentang anak yang ingin di daftarkan di Pathlight
          School. Surel ini memiliki kerangka tetap yang terdiri dari
        </p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-img
        src="@/assets/images/attachmentpreview.png"
        aspect-ratio="16/9"
      ></v-img>

      <v-card-title><h1>Panel component</h1></v-card-title>
      <v-card-subtitle><h2>By Alvin Ramadhan</h2></v-card-subtitle>

      <v-card-text>
        <p>
          Panel Component adalah sebuah komponen yang dibuat menggunakan Angular
          Framework, berfungsi untuk menampilkan form yang akan digunakan agar
          dapat diisi oleh orang tua siswa untuk memenuhi syarat dan ketentuan
          sekolah.
        </p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-img
        src="@/assets/images/attachmentpreview.png"
        aspect-ratio="16/9"
      ></v-img>

      <v-card-title
        ><h1>Base Panel</h1>
        <h1>Component</h1></v-card-title
      >
      <v-card-subtitle><h2>By Adi Permana</h2></v-card-subtitle>

      <v-card-text>
        <p>
          Base panel component adalah component yang dibuat menggunakan Angular
          Framework, komponent yang berfungsi sebagai wadah untuk menunjukkan
          pilihan/slot jam yang mana yang dapat dipilih oleh orang tua siswa
          untuk menyekolahkan anak mereka.
        </p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-img
        src="@/assets/images/attachmentpreview.png"
        aspect-ratio="16/9"
      ></v-img>

      <v-card-title
        ><h1>Button With Dropdown</h1>
        <h1>Component</h1></v-card-title
      >
      <v-card-subtitle><h2>By Adi Permana</h2></v-card-subtitle>

      <v-card-text>
        <p>
          Dropdown component adalah komponent yang digunakan oleh pihak sekolah
          yaitu tim penilai dan koordinator, untuk menilai apakah seorang siswa
          layak untuk bersekolah disana atau tidak
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

h2 {
  font-size: calc(1rem + 0.5vw);
  font-weight: 500;
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

.v-card-text,
.v-card-title,
.v-card-subtitle {
  padding: 1vw 2vw;
}
</style>
