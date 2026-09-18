function sum(a : number ,b :number) : number{
    return a+b;
}

sum (3,4);

function sayHello(name:string) : string{
    return "Xin chao" + name;

};

sayHello("duc anh");    

function anhTraiSayHi(name:string) : void{
   console.log( "Xin chao" + name);

};

const sumAB =(a : number , b:number): number=>{
    return a+b;
};

sumAB(3,4);



const averageScore=(...scores:number[]):number =>{
const sum = scores.reduce((total,scores)=>total+scores,0);
return sum/scores.length;

};
console.log(averageScore(7,8,9,10));





