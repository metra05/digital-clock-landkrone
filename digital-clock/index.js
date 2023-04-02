const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const bodyEl = document.querySelector(".bak");
const tanggalLengkap = document.querySelector(".tanggal");
const pasaran = document.querySelector("#weton");

const alamat= "url(img/foto4.jpg)";
let foto = [];
let i=0;

foto[0]="url(img/foto1.jpg)";
foto[1]="url(img/foto2.jpg)";
foto[2]="url(img/foto3.jpg)";
foto[3]="url(img/foto4.jpg)";
foto[4]="url(img/foto5.jpg)";
foto[5]="url(img/foto6.jpg)";
foto[6]="url(img/foto7.jpg)";
foto[7]="url(img/foto8.jpg)";
foto[8]="url(img/foto9.jpg)";
foto[9]="url(img/foto10.jpg)";
foto[10]="url(img/foto11.jpg)";
foto[11]="url(img/foto12.jpg)";
foto[12]="url(img/foto13.jpg)";
foto[13]="url(img/foto14.jpg)";
foto[14]="url(img/foto15.jpg)";
foto[15]="url(img/foto16.jpg)";
foto[16]="url(img/foto17.jpg)";
foto[17]="url(img/foto18.jpg)";
foto[18]="url(img/foto19.jpg)";
foto[19]="url(img/foto20.jpg)";
foto[20]="url(img/foto21.jpg)";
foto[21]="url(img/foto22.jpg)";
foto[22]="url(img/foto23.jpg)";
foto[23]="url(img/foto24.jpg)";
foto[24]="url(img/foto25.jpg)";
foto[25]="url(img/foto26.jpg)";
foto[26]="url(img/foto27.jpg)";
foto[27]="url(img/foto28.jpg)";
foto[28]="url(img/foto29.jpg)";
foto[29]="url(img/foto30.jpg)";

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let tanggal = new Date().getDate();
  let bulan = new Date().getMonth()+1;
  let tahun = new Date().getFullYear();
  let hari = new Date().getDay();
  let ampm = "AM";

  const namahari = ["minggu","senin", "seloso", "rabo", "kemis", "jumuah", "sebtu"];
  const namaweton = ["WAGE", "KLIWON", "LEGI", "PAHING", "PON"]


  function hitungHari(){
    let hb = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    //console.log(tanggal);
    let ht = (tahun - 1970) * 365 - 1;
    let hs = hb[bulan - 1] + hari;
    let kab = 0;
    let i;
      if(tahun % 4 == 0) {
        if(bulan > 2) {
        hs++;
        }
      }

      for(i = 1970; i < tahun; i++) {
        if(i % 4 == 0) {
        kab++;
        }
      }
    
      return (ht + hs + kab); 
  }

  //console.log(hitungHari());

//   // Calculate milliseconds in a year
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// // Divide Time with a year
// const d = new Date();
// let har = Math.round(d.getTime() / day);
// //console.log(har);
// //////////////////////////////////

  let haritext = namahari[hari];
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }


  if (s%10 == 0){
    //console.log("ganti background");
    bodyEl.style.backgroundImage = foto[i];
    bodyEl.classList.add("fade");
    setTimeout(function(){
        bodyEl.classList.remove("fade");
    },1000)
    i++;
    if (i>=29) {
      i=0;
    }
    
    //document.body.style.background-image = 'url("img/foto4.jpg")';
    //console.log(bodyEl);
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  tanggalLengkap.innerText = haritext +", "+tanggal +" / "+bulan+" / "+tahun;
  pasaran.innerText= namaweton[hitungHari()%5];

  setTimeout(() => {
    updateClock();
  }, 1000);

}

updateClock();

  // int jumlahhari(){ 
  //   DateTime  now = RTC.now(); 
  //   int d= now.day();
  //   int m= now.month();
  //   int y= now.year();
  //   int hb[] = {0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365};
  //   int ht = (y - 1970) * 365 - 1;
  //   int hs = hb[m - 1] + d;
  //   int kab = 0;
  //   int i;
  //   if(y % 4 == 0) {
  //     if(m > 2) {
  //     hs++;
  //     }
  //   }
  //   for(i = 1970; i < y; i++) {
  //     if(i % 4 == 0) {
  //     kab++;
  //     }
  //   }
  //   return (ht + hs + kab); 
  // }
