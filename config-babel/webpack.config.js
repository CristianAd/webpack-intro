//para que la ruta de salida sea más dinámica y la pueda controlar
// dirname equivale al punto donde estamos ejecutando nuestra aplicación
const path = require("path")
const basePath = __dirname
const distpath = 'dist'

module.exports = {
    //modo de funcionamiento
    mode: "production",
    //entry-point
    entry:{
        app: './src/index.js' 
    },

    //Tenemos que decirle a webpack cómo usar Babel, para ello creamos en siguiente objeto
    module: {
        rules:[
            {
                test: /\.js/,
                exclude:/node_modules/,
                use:["babel-loader"],
            }
        ]

    },

    //output point

    output:{
        path: path.join(basePath, distpath),
        filename: 'bundle.js',
        //OTRA OPCIÓN A RIMRAF para Evitar que se creen más archivos en dist es con clean: true 
       // clean: true
    }

}