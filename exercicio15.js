const escolherCarro = modelo =>{
    switch (modelo){
        case 'hatch':
            console.log('Compra efetuada com sucesso')
        case 'sedan':
        case 'motocicleta':
        case 'caminhote':
            console.log('Tem certeza que nao prefere este modelo?')
        default:
            return 'Não trabalhamos com este tipo de automovel aqui'
    }
}

escolherCarro('hatch')
escolherCarro('motocicleta')
escolherCarro('sedan')
escolherCarro('caminhote')
escolherCarro('jetski')