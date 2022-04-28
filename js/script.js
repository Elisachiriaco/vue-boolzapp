const app = new Vue({
    el: '#app',
    data: {
        aggiuntaEmoticon:{
            display: false
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        display: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        display: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        display: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true, 
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        display: false 
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        display: false 
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        display: false 
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        display: false 
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        display: false 
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        display: false 
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        display: false 
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        display: false 
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        display: false 
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        display: false 
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        display: false 
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        display: false 
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        display: false 
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        display: false 
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        display: false 
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        display: false 
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        display: false 
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        display: false 
                    }
                ],
            }
        ],
        activeIndex: 0,
        message: '',
        search:'',
    },
    methods: {
        // funzione per vedere la chat corrente
        viewChat(index){
            this.activeIndex = index;
        },
        // funzione che permette di inviare un messaggio e di risposta automatica
        sendMessage(){
            if(this.message === '') return 
            const newMessage = {
                date: dayjs().format('HH:mm'),
                message: this.message,
                status: 'sent'
            };
            let randomMessage =['Ok','Ciao','Ma guarda chi si risente!','Come va?','Mi sa che hai sbagliato persona','Novità?','Ieri ti ho visto!'];
            const rispostaMessage = {
                date: dayjs().format('HH:mm'),
                message: randomMessage[Math.floor(Math.random() * randomMessage.length)],
                status:'received'
            };
            this.contacts[this.activeIndex].messages.push(newMessage);
            this.message= '';
            setTimeout(()=>{
                this.contacts[this.activeIndex].messages.push(rispostaMessage);
            },2000)
        },
        // funzione che filtra i contatti
        filterContact(){
            this.contacts.forEach((contact)=>{
                if(contact.name.toLowerCase().includes(this.search.toLowerCase())){
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            })
        },
        // funzione che mostra il dropmenu
        dropMenu(activeIndex,index){
            (this.contacts[activeIndex].messages[index].display == false) ? this.contacts[activeIndex].messages[index].display = true : this.contacts[activeIndex].messages[index].display = false;
        },
        // funzione per rimuovere il messaggio dentro la chat
        removeMessage(index){
            if(this.contacts[this.activeIndex].messages.length > 0){
            this.contacts[this.activeIndex].messages.splice(index,1)
            } else return;
        },
        // funzione per vedere le emoticon
        addEmoticon(){
            (this.aggiuntaEmoticon.display == false) ? this.aggiuntaEmoticon.display = true : this.aggiuntaEmoticon.display = false;       
        },
        // funzione per cancellare il contatto tramite l'icona del cestino sulla lista di persone di sinistra
        deleteContact(index){
            if (this.contacts[index].name != '') {
                this.contacts.splice(index, 1);
                this.activeIndex = 0;            
            }
        },
    },
})

