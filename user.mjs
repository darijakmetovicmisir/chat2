import Soba from './soba.mjs'

const User = {
      nickname: "Darija",
      password: "Kmetovic",
      identSes: null,
      trenutnaSobaId: null,
      trenutnaSoba: "",
      listaPrivatnihSoba: [], 
      listaJavnihSoba: [],


      dohvatiSobe: async function () {
            this.trenutnaSoba = document.getElementById("trenutnaSoba").value;
            this.identSes = "";
            this.trenutnaSobaId = "";
            const dohvati = await fetch (`https://www.digital-abundance.hr/chatAPI/dohvatiSobe.php?nick=Darija`);
            const dohvatiJSON = dohvati.json();
            console.log(dohvatiJSON);
      
            const privatneSobe = dohvatiJSON.privatne;
            const javne = dohvatiJSON.javne;
            

            for(let i=0; i<privatneSobe.length; i++){
                  const soba = new Soba(this);
                  soba.id = privatne[i].idSobe;
                  soba.osoba2 = privatne[i].nick2;
                  soba.imeSobe = `Privatna soba s korisnicima ${this.nickname} i ${privatne[i].nick2}`;
                  soba.tipSobe = "Privatna"
                  this.listaPrivatnihSoba.push(Soba);     
            };
            console.log(listaPrivatnihSoba);
            
            for(let i=0; i<javne.length; i++){
                  const soba = new Soba(this);
                  soba.id = javne[i].idSobe;
                  soba.imeSobe = javne[i].imeSobe;
                  soba.tipSobe = "Javna"
                  this.listaJavnihSoba.push(Soba)
            };
            console.log(listaJavnihSoba);  

            const aktivneSobe = document.getElementById("aktivneSobe");
            this.listaJavnihSoba.map(soba =>{
                  let p = document.createElement('p');
                  let udiUSobu = document.createElement('button');
                  aktivneSobe.append(p);
                  aktivneSobe.append(udiUSobu);
                  udiUSobu.innerText = `Udi u ${soba.imeSobe}`;
                  udiUSobu.onclick = ()=>{
                        soba.udiUSobu(this);
                  };
                  p.innerText = soba.imeSobe;
            });

            this.listaPrivatnihSoba.map(soba =>{
                  let p = document.createElement('p');
                  let udiUsobu = document.createElement('button');
                  aktivneSobe.append(p);
                  aktivneSobe.append(udiUsobu);
                  udiUsobu.innerText = `Udi u ${soba.imeSobe}`
                  udiUsobu.onclick = ()=>{
                        soba.udiUSobu(this);
                  };
                  p.innerText = soba.imeSobe;
            });
      },

     prijava: async function (event){
            event.preventDefault();
            this.nickname = document.getElementById("nick").value;
            this.password = document.getElementById("pass").value;
            this.identSes = 1;
            const prijaviSe = await fetch(`https://www.digital-abundance.hr/chatAPI/prijava.php?nick=${this.nickname}&&pass=${this.password}`);
            var objekt = await prijaviSe.json();
            console.log(objekt);
            this.trenutnaSobaId = objekt.idSobe;
            this.trenutnaSoba = objekt.imeSobe;
            this.logirajSe = objekt.logirajSe;
            this.odjaviSe = false,
            console.log(this);
            this.dohvatiSobe();
            document.getElementById("trenutnaSoba").innerText= `Ime sobe: ${objekt.imeSobe}`;
      },
      
      
      odjava: async function (event){
            event.preventDefault();
            const odjaviSe = await fetch(`https://www.digital-abundance.hr/chatAPI/odjava.php?nick=${this.nickname}&&pass=${this.password}`);
            var objekt = await odjaviSe.json();
            console.log(objekt); 
            this.odjaviSe = objekt.odjaviSe;
            this.trenutnaSobaId = objekt.idSobe;
            this.trenutnaSoba = objekt.imeSobe;
            this.nickname = "Darija";
            this.password = "Kmetovic";
            console.log(this);
      },

     

      posaljiPoruku: async function (event) {
            event.preventDefault();
            const poruka = document.getElementById("poruka").value;
            const posalji = await fetch(`https://www.digital-abundance.hr/chatAPI/dodajPoruku.php?nick=Darija&&idSobe=6&&poruka="Evoimene"&&referentnaPoruka=0`);
            const posaljiJSON = await posalji.json();
            return posaljiJSON
            
      },

      dodajJavnuSobu: async function () {
            let imeSobe = document.getElementById("stvoriSobu").value;
            let novaSoba = await fetch (`https://www.digital-abundance.hr/chatAPI/dodajSobu.php?imeSobe=${imeSobe}`);
            let novaSobaJSON = await novaSoba.json();
            return novaSobaJSON;
            Soba.id = novaSobaJSON.idSobe;
            Soba.imeSobe = imeSobe;
            Soba.tipSobe = 'Javna soba';
            let lista = this.listaJavnihSoba.push(Soba);
      },

      dodajPrivatnuSobu: async function () {
            let imePrivatneSobe = document.getElementById("stvoriSobu").value;
            let provjera = true;
            const novaPrivatnaSoba = await fetch (`https://www.digital-abundance.hr/chatAPI/dodajSobu.php?nick1=Darija&&nick2=Zvonimir`);
            const novaPrivatnaSobaJSON = await novaPrivatnaSobaJSON.json();
            return novaPrivatnaSobaJSON;
            let lista = this.listaPrivatnihSoba.push(Soba);
      }
};

export default User







