function ePaisagem(larg, alt){
    if(larg > alt){
        console.log('A foto está em modo paisagem')
    } else if (larg < alt) {
        console.log('A foto está em modo horizontal')
    } else {
        console.log('A imagem possui o mesmo tamanho de altura e largura')
    }
} 

ePaisagem(500, 500)