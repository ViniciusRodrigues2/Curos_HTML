let output = document.getElementById('output');
let mostrarOne = document.getElementById('mostarOutput');
let mostrartwo = document.getElementById('MostrarAlert');
function mostraroutput(){
   mostrarOne.addEventListener('click',()=>{
    let n1 =parseFloat(prompt('digite um numero'));
    let n2 = parseFloat(prompt('digite outro numero'));
    let calculoDaArea = (n1 * n2);
    if(isNaN(n1) || isNaN(n2)){
      alert('chamada somente passando numeros');
      let zero = '0'
      output.innerHTML = zero;
    }else{
        output.innerHTML = calculoDaArea;
    }
   });
}
mostraroutput();

function MostraNoAlert(){
    mostrartwo.addEventListener('click',()=>{
        let n1 =parseFloat(prompt('digite um numero'));
        let n2 = parseFloat(prompt('digite outro numero'));
        let calculoDaArea = (n1 * n2);
        if(isNaN(n1) || isNaN(n2)){
          alert('chamada somente passando numeros');
          let zero = '0'
          alert(zero)
        }else{
            alert(calculoDaArea);
        }
       });
}
MostraNoAlert();
