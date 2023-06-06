
function addqualify(){
let newNode = document.createElement('input');

let newNode3 = document.createElement('hr');


newNode.classList.add('inptq');


let btOb = document.getElementById('qbtn');
let one11 = document.getElementById('qdiv');
newNode.style.width = '80%';
newNode.style.border = '4px groove silver';
newNode.style.borderRadius = '20px';
newNode.style.background = 'transparent';
newNode.style.textAlign = 'center';
newNode.style.webkitTextFillColor = 'rgb(134, 131, 131)';
newNode.style.color = 'black';
newNode.style.letterSpacing = '1.5px';
newNode.style.fontWeight = 'bold';
newNode.style.marginBottom = '5px';
newNode.style.marginTop = '5px';
newNode.style.height = '38px';





one11.insertBefore(newNode,btOb);

one11.insertBefore(newNode3,btOb);

}


function addskill(){
    let newNode = document.createElement('input');

    let newNode3 = document.createElement('hr');
    
    newNode.classList.add('inpts');
    
    
    
    let btOb = document.getElementById('skilbtn');
    let one11 = document.getElementById('skil');
    newNode.style.width = '80%';
    newNode.style.border = '4px groove silver';
    newNode.style.borderRadius = '20px';
    newNode.style.background = 'transparent';
    newNode.style.textAlign = 'center';
    newNode.style.webkitTextFillColor = 'rgb(134, 131, 131)';
    newNode.style.color = 'black';
    newNode.style.letterSpacing = '1.5px';
    newNode.style.fontWeight = 'bold';
    newNode.style.marginBottom = '5px';
    newNode.style.marginTop = '5px';
    newNode.style.height = '38px';
    
    
    
    one11.insertBefore(newNode,btOb);

    one11.insertBefore(newNode3,btOb);
    
    }





function addcert(){
    let newNode = document.createElement('input');
 
    let newNode3 = document.createElement('hr');
    
    newNode.classList.add('inptc');
    
    
    let btOb = document.getElementById('certbtn');
    let one11 = document.getElementById('certdiv');
    newNode.style.width = '80%';
    newNode.style.border = '4px groove silver';
    newNode.style.borderRadius = '20px';
    newNode.style.background = 'transparent';
    newNode.style.textAlign = 'center';
    newNode.style.webkitTextFillColor = 'rgb(134, 131, 131)';
    newNode.style.color = 'black';
    newNode.style.letterSpacing = '1.5px';
    newNode.style.fontWeight = 'bold';
    newNode.style.marginBottom = '5px';
    newNode.style.marginTop = '5px';
    newNode.style.height = '38px';
    
    
    one11.insertBefore(newNode,btOb);
   
    one11.insertBefore(newNode3,btOb);
    
    }

    function printcv(){
        window.print();
    }





    function generatemycv(){


        let file = document.getElementById("photo").files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        
        
        reader.onloadend =function (){
        document.getElementById("pic").src = reader.result;
        
        }
        
        




    document.getElementById('tname').innerHTML =document.getElementById('name').value;
    document.getElementById('unumber').innerHTML =document.getElementById('phnumber').value;
    document.getElementById('umail').innerHTML =document.getElementById('e-mail').value;
    document.getElementById('uaddress').innerHTML =document.getElementById('addr').value;
    document.getElementById('objtxt').innerHTML =document.getElementById('objin').value;
    document.getElementById('fnamein').innerHTML =document.getElementById('fname').value;
    document.getElementById('genderin').innerHTML =document.getElementById('gender').value;
    document.getElementById('countryin').innerHTML =document.getElementById('country').value;
    document.getElementById('statusin').innerHTML =document.getElementById('status').value;
    document.getElementById('cnicin').innerHTML =document.getElementById('cnic').value;
    document.getElementById('dobin').innerHTML =document.getElementById('dob').value;


    document.getElementById('hob1').innerHTML =document.getElementById('hobby1').value;
    document.getElementById('hob2').innerHTML =document.getElementById('hobby2').value;
    document.getElementById('hob3').innerHTML =document.getElementById('hobby3').value;
    document.getElementById('hob4').innerHTML =document.getElementById('hobby4').value;
    document.getElementById('l1').innerHTML =document.getElementById('language1').value;
    document.getElementById('l2').innerHTML =document.getElementById('language2').value;
    document.getElementById('l3').innerHTML =document.getElementById('language3').value;
    

    //getting values from qualification

    let quali = document.getElementsByClassName("inptq");

    let str = "";
    for (let e of quali){
        str = str + `<li> ${e.value} </li>`;

    }
    document.getElementById('qualifin').innerHTML = str;

    //getting values from skills



    let skls = document.getElementsByClassName("inpts");

    let str1 = "";
    for (let s of skls){
        str1 = str1 + `<li> ${s.value} </li>`;

    }
    document.getElementById('skillsin').innerHTML = str1;

    //getting values from certificates



    let sklc = document.getElementsByClassName("inptc");

    let str2 = "";
    for (let c of sklc){
        str2 = str2 + `<li> ${c.value} </li>`;

    }
    document.getElementById('certiin').innerHTML = str2;





document.getElementById("template").style.display = "block";
document.getElementById("inputarea").style.display = "none";

    }