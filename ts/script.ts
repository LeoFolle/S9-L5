const costo = 0.20 
const caricaSoldi = 1


class telefono {
    minutiChiamata: number = 0;
    numeroChiamata: number = 0;
    carica: number = 0;
   
    constructor(minutiChiamata: number, numeroChiamata: number, carica: number){
        this.minutiChiamata = minutiChiamata;
        this.numeroChiamata = numeroChiamata;
        this.carica = carica;
    }
    
}


class User extends telefono {
    static carica: number;
    constructor(minutiChiamata: number, numeroChiamata: number, carica: number) {
        super(minutiChiamata, numeroChiamata, carica)
    }
    //ricarica il credito nel telefono
    public ricarica(soldi: number): void {
        this.carica = this.carica + soldi
        console.log("caricato un credito di " + soldi + " nel telefono, in totale " + this.carica)
    } 
    //restituisce il credito nel telefono
    public numero404(): number {
        console.log("restituito il credito rimanente")
        return this.carica;
    } 
    //effettua una chiamata col telefono
    public chiamata(minutiDurata: number):void {
        if(minutiDurata * costo < this.carica){
           this.carica = this.carica - minutiDurata * costo;
           this.numeroChiamata = this.numeroChiamata + 1;
           console.log("chiamata di " + minutiDurata + " minuti effettuata")
           console.log("ti rimangono " + this.carica + " crediti")
        }
        else {
            alert("credito non sufficiente per eseguire la chiamata")
            console.log("errore nella chiamata")
        }
    }
    //azzera le chiamate effettuate dal telefono
    public azzeraChiamate():void {
        this.numeroChiamata = 0;
        console.log("numero di chiamate azzerato");
    }
    //restituisce il numero di chiamate effettuate dal telefono
    public getNumeroChiamate():number {
        console.log("restituito il numero di chiamate effettuate")
        return this.numeroChiamata
    }
}

//creo nuovi user di telefoni
let userList: User[] = []
let user1 = new User(0, 0, 5);
let user2 = new User(0, 0, 5);
let user3 = new User(0, 0, 5); 
userList.push(user1, user2, user3)



//effettua una chiamata col telefono
let chiama1 = document.getElementById('chiama1');
chiama1!.addEventListener('click',function (){
    user1.chiamata(5);}
);
let chiama2 = document.getElementById('chiama2');
chiama2!.addEventListener('click',function (){
    user2.chiamata(5);}
);
let chiama3 = document.getElementById('chiama3');
chiama3!.addEventListener('click',function (){
    user3.chiamata(5);}
);

//restituisce il credito nel telefono
let credito1 = document.getElementById("credito1");
credito1!.addEventListener('click',function(){
    alert("Hai " + user1.numero404() + " crediti");
})
let credito2 = document.getElementById("credito2");
credito2!.addEventListener('click',function(){
    alert("Hai " + user2.numero404() + " crediti");
})
let credito3 = document.getElementById("credito3");
credito3!.addEventListener('click',function(){
    alert("Hai " + user3.numero404() + " crediti");
})


//ricarica il credito nel telefono
let ricarica1 = document.getElementById('ricarica1');
ricarica1!.addEventListener('click',function (){
    user1.ricarica(2);}
);
let ricarica2 = document.getElementById('ricarica2');
ricarica2!.addEventListener('click',function (){
    user2.ricarica(2);}
);
let ricarica3 = document.getElementById('ricarica3');
ricarica3!.addEventListener('click',function (){
    user3.ricarica(2);}
);

//azzera le chiamate effettuate dal telefono
let azzera1 = document.getElementById("azzera1");
azzera1!.addEventListener('click',function(){
    user1.azzeraChiamate();
})
let azzera2 = document.getElementById("azzera2");
azzera2!.addEventListener('click',function(){
    user2.azzeraChiamate();
})
let azzera3 = document.getElementById("azzera3");
azzera3!.addEventListener('click',function(){
    user3.azzeraChiamate();
})

 //restituisce il numero di chiamate effettuate dal telefono
let nchiamata1 = document.getElementById('nchiamata1');
nchiamata1!.addEventListener('click',function (){
    alert("Hai efffettuato " + user1.getNumeroChiamate() + " chiamate")}
);
let nchiamata2 = document.getElementById('nchiamata2');
nchiamata2!.addEventListener('click',function (){
    alert("Hai efffettuato " + user2.getNumeroChiamate() + " chiamate")}
);
let nchiamata3 = document.getElementById('nchiamata3');
nchiamata3!.addEventListener('click',function (){
    alert("Hai efffettuato " + user3.getNumeroChiamate() + " chiamate")}
);