const express = require('express');
const router = express.Router();


const data = [
    { id: 1, titulo: "Primera noticia", resumen: 'Lorem ipsum dolor, sit amet', imagen: 'imagen' },
    { id: 1, titulo: "Segunda noticia", resumen: 'Lorem ipsum dolor, sit amet', imagen: 'imagen' },
    { id: 1, titulo: "tercera noticia", resumen: 'Lorem ipsum dolor, sit amet', imagen: 'imagen' },
    { id: 1, titulo: "cuarta noticia", resumen: 'Lorem ipsum dolor, sit amet', imagen: 'imagen' },
     { id: 1, titulo: "quinta noticia", resumen: 'Lorem ipsum dolor, sit amet', imagen: 'imagen' }];

const productos = [
    { id: 1, nombreProducto: "Linterna", textoProducto: 'Lorem ipsum dolor, sit amet', imagenProducto: 'img/estrellas.png', precioProducto:'500'},
    { id: 1, nombreProducto: "Linterna", textoProducto: 'Lorem ipsum dolor, sit amet', imagenProducto: 'img/estrellas.png', precioProducto:'500'},
    { id: 1, nombreProducto: "Linterna", textoProducto: 'Lorem ipsum dolor, sit amet', imagenProducto: 'img/estrellas.png', precioProducto:'500'},
    { id: 1, nombreProducto: "Linterna", textoProducto: 'Lorem ipsum dolor, sit amet', imagenProducto: 'img/estrellas.png', precioProducto:'500'},
    { id: 1, nombreProducto: "Linterna", textoProducto: 'Lorem ipsum dolor, sit amet', imagenProducto: 'img/estrellas.png', precioProducto:'500'}
   
]



router.get('/', (req, res) =>{
    res.render ('index.html', { 
        title: 'Mileniallis',
        data: data });
})
router.get('/home', (req, res) =>{
    res.render ('index.html', { 
       title: 'Mileniallis',
       data: data });
})

router.get('/post', (req, res)=>{
    res.render('post.html', { title: 'Blog Mileniallis'});

})

router.get('/tienda', (req, res)=>{
    res.render('tienda.html', { title: 'Tienda Online Mileniallis', productos: productos});

})

router.get('/nosotros', (req, res)=>{
    res.render('nosotros.html', { title: 'Mileniallis', productos: productos});

})


module.exports = router;






/*funciones automaticas con cualquier llamada al servidor

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
}); */