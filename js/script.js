
var app = new Vue({
  el:"#app",
  data:{
    attivo: 0,
    nameLists:[{
      name:'Michele',
      lastAccess:'10/10/2020, 20:59',
      image: 'https://www.britishinstitutes.it/sedi/skin/default-avatar.jpg',
      selection:[
        {message:'Come ti chiami ?'},
        {message:'Sono Filippo'},
        {message:'Piacere di conoscerti'}
      ]
    },
    {
      name:'Luisa',
      lastAccess:'10/10/2020, 10:57',
      image: 'https://www.britishinstitutes.it/sedi/skin/default-avatar.jpg',
      selection:[
        {message:'che cosa volete da mangiare ?'},
        {message:'pizzaaaaaaa'},
        {message:'perfettooo!!!'}
      ]
    },
    {
      name:'Fabio',
      lastAccess:'10/10/2020, 19:44',
      image: 'https://www.britishinstitutes.it/sedi/skin/default-avatar.jpg',
      selection:[
        {message:'Allora caldi per il calcetto ?'},
        {message:'Manca un giocatore...'},
        {message:'Meraviglioso...perderemo sicuramente'}
      ]
    },
    {
    name:'Samuele',
    lastAccess:'10/10/2020, 02:59',
    image: 'https://www.britishinstitutes.it/sedi/skin/default-avatar.jpg',
    selection:[
      {message:' Fiestaaaaa'},
      {message:'Sei ubriaco??'},
      {message:'Alllaaaaa ggggrandeeee'}
    ]

    }

    ]
  }


  });
