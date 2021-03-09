'use strict';
let arr=[];
let arrOfObject =[];
let id =0 ;
let newStudnt;
let divTable = document.getElementById('divTable');
let tableEl  = document.createElement('table');
    divTable.appendChild(tableEl);

function Student(email,mob,tuition){
this.id=id++;
this.email =email;
this.name =this.splitName();
this.mob   =mob;
this.age =this.generatAge();
this.tuition=tuition;
arrOfObject.push(this);
}
Student.prototype.generatAge=function(){
    return Math.floor(Math.random() * (24 - 18 + 1) + 18); 
}
Student.prototype.splitName=function(){
    let email = this.email;
    let name   = email.substring(0, email.lastIndexOf("@"));
    return name ;
}
Student.prototype.saveLocl=function(){
    localStorage.setItem('Allstudent',JSON.stringify(arrOfObject))
}
Student.prototype.renderTable=function(){
arr =JSON.parse(localStorage.getItem('Allstudent'));
if(arrOfObject){
    arrOfObject =arr;
    let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let tdEL1 =document.createElement('td');
        let tdEL2 =document.createElement('td');
        let tdEL3 =document.createElement('td');
        let tdEL4 =document.createElement('td');
        let tdEL5 =document.createElement('td');
        let tdEL6 =document.createElement('td');
        for(let i=0 ;i<arr.length;i++){
        // let tdEL1 =document.createElement('td');
            trEl.appendChild(tdEL1);
            tdEL1.textContent=arr[i].id
        // let tdEL2 =document.createElement('td');
            trEl.appendChild(tdEL2);
            tdEL2.textContent=arr[i].name;
        // let tdEL3 =document.createElement('td');
            trEl.appendChild(tdEL3);
            tdEL3.textContent=arr[i].email;
        // let tdEL4 =document.createElement('td');
            trEl.appendChild(tdEL4);
            tdEL4.textContent=arr[i].mob;
        // let tdEL5 =document.createElement('td');
            trEl.appendChild(tdEL5);
            tdEL5.textContent=arr[i].age;
        // let tdEL6 =document.createElement('td');
            trEl.appendChild(tdEL6);
            tdEL6.textContent=arr[i].tuition;
        }
       
} else{
            arrOfObject=[];
        }
}

let form = document.getElementById('form');
    form.addEventListener('submit' ,addNewStudent);

    function addNewStudent(event){
        event.preventDefault();
        let email = document.getElementById('emailfield').value;
        let mob   = document.getElementById('mobfield').value;
        let tuition =document.getElementById('tuitionSel').value;
        newStudnt = new Student(email,mob,tuition);
        newStudnt.generatAge();
        newStudnt.splitName();
        newStudnt.saveLocl();
        newStudnt.renderTable();
        // console.log(email);
        // console.log(mob);
        // console.log(tuitionN);
        console.log(arrOfObject);
    }

    function headerTable(){
    let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
    let thEl1 = document.createElement('th');
        trEl.appendChild(thEl1);
        thEl1.textContent='id';
    let thEl2 = document.createElement('th');
        trEl.appendChild(thEl2);
        thEl2.textContent='Name';
    let thEl3 = document.createElement('th');
        trEl.appendChild(thEl3);
        thEl3.textContent='Email';
    let thEl4 = document.createElement('th');
        trEl.appendChild(thEl4);
        thEl4.textContent='Mobile';
    let thEl5 = document.createElement('th');
        trEl.appendChild(thEl5);
        thEl5.textContent='Age';
    let thEl6 = document.createElement('th');
        trEl.appendChild(thEl6);
        thEl6.textContent='Tuition';
    }
    headerTable();

    function getDat(){
        arr =JSON.parse(localStorage.getItem('Allstudent'));
if(arr){
    arrOfObject =arr;
    let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
        for(let i=0 ;i<arr.length;i++){
        let tdEL1 =document.createElement('td');
            trEl.appendChild(tdEL1);
            tdEL1.textContent=arr[i].id
        let tdEL2 =document.createElement('td');
            trEl.appendChild(tdEL2);
            tdEL2.textContent=arr[i].name;
        let tdEL3 =document.createElement('td');
            trEl.appendChild(tdEL3);
            tdEL3.textContent=arr[i].email;
        let tdEL4 =document.createElement('td');
            trEl.appendChild(tdEL4);
            tdEL4.textContent=arr[i].mob;
        let tdEL5 =document.createElement('td');
            trEl.appendChild(tdEL5);
            tdEL5.textContent=arr[i].age;
        let tdEL6 =document.createElement('td');
            trEl.appendChild(tdEL6);
            tdEL6.textContent=arr[i].tuition;
        }
       
} else{
            arrOfObject=[];
        }
    }

    getDat();
// console.log(arrOfObject);
// let test =new Student("ali@yahoo.com",'077775862321',200);
// console.log(test.name);
