
var app = new Vue({
  el:"#app",
  data:{
    textUser:'',
    textPc:'ok',
    searchName:'',
    attivo: 0,
    nameLists:[{
      name:'Michele',
      lastAccess:'10/10/2020, 20:59',
      seek: true,
      image: 'https://www.britishinstitutes.it/sedi/skin/default-avatar.jpg',
      selection:[
        {
          message:'Come ti chiami ?',
          stato:'inviato'
        },
        {
          message:'Sono Filippo',
          stato:'ricevuto'
        },
        {
          message:'Piacere di conoscerti',
          stato:'inviato'
        }
      ]
    },
    {
      name:'Luisa',
      lastAccess:'10/10/2020, 10:57',
      seek: true,
      image: 'https://www.britishinstitutes.it/sedi/skin/default-avatar.jpg',
      selection:[
        {
          message:'che cosa volete da mangiare ?',
          stato:'inviato'
        },
        {
          message:'pizzaaaaaaa',
          stato:'ricevuto'
        },
        {
          message:'perfettooo!!!',
          stato:'inviato'
        }
      ]
    },
    {
      name:'Fabio',
      lastAccess:'10/10/2020, 19:44',
      seek: true,
      image: 'https://www.britishinstitutes.it/sedi/skin/default-avatar.jpg',
      selection:[
        {
          message:'Allora caldi per il calcetto ?',
          stato:'inviato'
        },
        {
          message:'Manca un giocatore...',
          stato:'ricevuto'
        },
        {
          message:'Meraviglioso...perderemo sicuramente',
          stato:'inviato'
        }
      ]
    },
    {
    name:'Samuele',
    lastAccess:'10/10/2020, 02:59',
    seek: true,
    image: 'https://www.britishinstitutes.it/sedi/skin/default-avatar.jpg',
    selection:[
      {
        message:' Fiestaaaaa',
        stato:'inviato'
      },
      {
        message:'Sei ubriaco??',
        stato:'ricevuto'
      },
      {
        message:'Alllaaaaa ggggrandeeee',
        stato:'inviato'
      }
    ]

    }

    ]
  },
  // inserire testo input funzione
  methods :{
    addText: function(){
      if(this.textUser!=''){
        let newMess = {message: this.textUser,  stato: 'inviato'};
        this.nameLists[this.attivo].selection.push(newMess);
        setTimeout(this.risposta, 1000);
        this.attivo = 0;
        this.textUser = "";
      }

    },
    // funzione per definire la risposta automatica del pc
    risposta: function() {
       let pcReturn = {message: this.textPc , stato: 'ricevuto'};
       this.nameLists[this.attivo].selection.push(pcReturn);
   },
   // funzione per  selezionare nome  chat 
   searchUser(){//step processo logico v-if ponte
     this.nameLists.forEach(item => {
       if(item.name.toLowerCase().includes(this.searchName.toLowerCase())) {
         item.seek = true;
       }else{
         item.seek = false;
       }
     });
   }


  }



  })
