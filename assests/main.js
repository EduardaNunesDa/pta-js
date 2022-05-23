let button = document.getElementById('botao');
let colors = ['#F2F2F2','#C7C7C7','#292929'];
let phases = ['Backgound: #F2F2F2', 'Background: #C7C7C7', 'Backgound: #292929'];
let contador = 0;
button.addEventListener('click',function(){
    if(contador==0){
        document.getElementById('corpo').style.background = colors[0] ;
        document.getElementById('fonte-2').innerHTML = phases[0];
        contador++;
    }
    else if(contador==1){
        document.getElementById('corpo').style.background = colors[1] ;
        document.getElementById('fonte-2').innerHTML = phases[1];
        contador++;
    }
    else{
        document.getElementById('corpo').style.background = colors[2] ;
        document.getElementById('fonte-2').innerHTML = phases[2];
        contador-=2;
    }
})