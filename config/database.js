const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://useradmin:Esqueciminhasenha@fiaptecnico.l4son.mongodb.net/test')
}

module.exports = conexao
