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


// default params
  const sayHelloUser = (user ="ducanh") =>{
    return user;

  }

  console.log(sayHelloUser());
  console.log(sayHelloUser("ducanh"));

  const sayHelloPerson =(user?:string) => {
    return user;
  }

  console.log(sayHelloPerson());

  // Hàm tạo thông tin người dùng (Default + Optional Parameter)
  function createUser (
    name: String,
    age?: number,
    role: string = "user"
){
    let result = "name:" +name;
    if(age){
     result +=", age:" + age;
    }
    result +=", role:" +role;
    return result;
}

console.log(createUser("đức anh"));
console.log(createUser("nam",25,"ad"));


//Hàm xử lý danh sách sản phẩm (Spread + Rest)

function mergeProducts(a: string[], b: string[]){
    return[...a, ...b];
}

function printProducts(...product: string[]){
    for(let p of product){
        console.log(p);
    }
}

const a =["iphone", "samsung"];
const b =["xiaomi", "huawei"];

const result = mergeProducts(a,b);

console.log(result);
printProducts(...result);






