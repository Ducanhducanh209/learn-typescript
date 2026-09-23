class student{
    id: string;
    name: string;
    age: number;
    constructor(id: string, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    showStudent(){
        console.log(this.id);
    }
}

const sv1 = new student("ph72881" , "đức anh", 21);
sv1.showStudent();

// interface
interface User{
  name: string;
  age: number;
}

type UserInfo ={
    id: number,
    name: string,
    age: number,
}

const user: UserInfo = {
    id: 1,
    name: "đưc anh",
    age: 21,

}

const users: User[] =[

    {
        name:"đức anh",
        age:21,
    },
];

//bai 1
class Student{
    id: number;
    name: string;

    constructor(id:number, name:string){
        this.id =id;
        this.name = name;
    }
    display() :void{
        console.log(`ID: ${this.id}, Name:${this.name}`);
    }
}

const hs=  new Student( 123,"nguyen duc anh");
hs.display();

//bai 4

type Status = "loading" | "succes" | "erroe";
  function LogStatus(status : Status): void{
    if(status === "loading"){
        console.log("đang tải");
    }else if(status==="succes"){
        console.log("thanh cong");
    }else{
        console.log("lỗi");
    }
  }
  LogStatus("loading");
  LogStatus("succes");
  LogStatus("erroe");

  //bai5