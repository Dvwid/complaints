abstract class Pojazd {
  numerSeryjny: string;
  numerRejestracyjny: string;
  constructor(nSeryjny: string, nRej: string) {
    this.numerSeryjny = nSeryjny;
    this.numerRejestracyjny = nRej;
  }
  abstract display():void;
}

abstract class Skoda extends Pojazd {
  ld: number = 0;
  constructor(nSer:string, nRej: string, ld:number) {
    super(nSer, nRej);
    this.ld = ld;
  }

  abstract display():void
  abstract openWindow():void
}
class Skoda40 extends Skoda {
  ld: number;
  constructor(nSer:string, nRej:string, LD:number) {
    super(nSer, nRej,40);
    this.ld = LD
  }
  display(){
    console.log(`NR: ${this.numerRejestracyjny} NS: ${this.numerSeryjny} LD: ${this.ld}`)
  }
  openWindow(){
    console.log('Otwieram okno')
  }

}

class Ursus extends Pojazd {
  moc:number;
  constructor(nSer: string, nRej: string, moc:number) {
    super(nSer, nRej);
    this.moc = moc;
  }
  display() {
    console.log(`NR: ${this.numerRejestracyjny} NS: ${this.numerSeryjny} moc: ${this.moc}KM`)
  }
}
class Ursus40 extends Ursus {
  ln: number;
  constructor(nSer: string, nRej: string, LN:number){
    super(nSer,nRej,40)
    this.ln = LN;
  }
  uruchom() {
    console.log('Uruchamiam');
  }
  display() {
    console.log(`NR: ${this.numerRejestracyjny} NS: ${this.numerSeryjny} moc: ${this.moc}`)
  }
}

let auto1:Pojazd = new Skoda40('123','AA123', 5)
let auto3:Pojazd = new Ursus40('1232132132', 'AA123213', 4)



auto1.display();
auto3.display();

let pojazdy: Array<Pojazd> = []
pojazdy.push(auto1)
pojazdy.push(auto3)

pojazdy.forEach(e => {
  e.display()
  if(e instanceof Skoda){
    e.openWindow()
  }
})
