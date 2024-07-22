//Configurações do express
import express from 'express';
import routes from './routes';

class App{

    //Quando essa classe for chamada, o constructor é carregado
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        //Referenciando a pasta routes para enxutar o código
        this.server.use(routes);
    }
}

//Exportando a classe

export default new App();