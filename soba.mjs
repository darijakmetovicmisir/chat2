export default class Soba{
      constructor(User){this.id = User.trenutnaSobaId;
            this.imeSobe = User.trenutnaSoba;
            this.tipSobe = "";
            this.osoba1 = User.nickname;
            this.osoba2 = "";
            this.poruke = [];
            this.listaOsoba = [];
      }

dohvatiSvePoruke = async function (){
      const poruke = await fetch(`https://www.digital-abundance.hr/chatAPI/dohvatiPoruke.php?idSobe=${this.id}&&tip=${tip}&&broj`);
      const porukeJSON = await poruke.json();
      return porukeJSON;
}

listaKorisnika = async function () {
      const lista = await fetch (`https://www.digital-abundance.hr/chatAPI/tkoJeOnline.php`);
      const listaJSON = await lista.json();
      return listaJSON;
      
}


};


