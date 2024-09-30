'use strict';

//////////////////////////////////////////////////////////

const { createApp } = Vue

  createApp({
    data() {
      return {
        
      contacts: [
          {
              name: 'Michele',
              avatar: './img/avatar_1.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: './img/avatar_2.jpg',
              visible: false,
              messages: [
                  {
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                  },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: './img/avatar_3.jpg',
              visible: false,
              messages: [
                  {
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                  },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro B.',
              avatar: './img/avatar_4.jpg',
              visible: false,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro L.',
              avatar: './img/avatar_5.jpg',
              visible: false,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Claudia',
              avatar: './img/avatar_6.jpg',
              visible: false,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Federico',
              avatar: './img/avatar_7.jpg',
              visible: false,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Davide',
              avatar: './img/avatar_8.jpg',
              visible: false,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                  }
              ],
          }
      ],
      dates: [],
      currentChat: 0,
      newMessage: null,
      receivedMessage: null,
      searchedContact: "",
      filteredArray: [],
      isOpen: false,
      isClose: true,
      
      }
    },

    methods: {

      isSent(position) {
          if(this.contacts[this.currentChat].messages[position].status === 'sent') return true;
      },

      isReceived(position) {
        if(this.contacts[this.currentChat].messages[position].status === 'received') return true;
      },

      chooseChat(position){

        if(this.searchedContact !== "") {

            let objKeys = Object.keys(this.filteredArray[position]);
            let rightPosition = objKeys;
            this.currentChat = parseInt(rightPosition[0]);
    
        } else {
            this.filteredArray = [];
            this.currentChat = position;
        }
        
      },

      sendMessage() {

        let DateTime = luxon.DateTime;
        let dt = DateTime.now();

        let justSent =
        {
            date: `${dt.day}/${dt.month}/${dt.year} ${dt.hour}:${dt.minute}:${dt.second}`,
            message: this.newMessage,
            status: 'sent',
        }
        this.contacts[this.currentChat].messages.push(justSent);
        this.newMessage = "";

        this.receivedMessage = setTimeout(this.receiveMessage, 1000);

      },

      receiveMessage() {
        
        let DateTime = luxon.DateTime;
        let dt = DateTime.now();

        let justReceived =
        {
            date: `${dt.day}/${dt.month}/${dt.year} ${dt.hour}:${dt.minute}:${dt.second}`,
            message: 'ok',
            status: 'received',
        }
        this.contacts[this.currentChat].messages.push(justReceived);
        console.log(this.conversation);

      },

      searchChat() {

        if(this.searchedContact !== "") {
            return this.contacts.filter((contact, index) => {

                if(contact.name.includes(this.searchedContact) === true) {
                    let objEntries = [[index, contact.name]];
                    let newObject = Object.fromEntries(objEntries);
                    this.filteredArray.push(newObject);
                    //console.log(this.filteredArray);
                }
                return contact.name.includes(this.searchedContact);

            });
        } else {
            this.filteredArray = [];
            return this.contacts;
        }

      },

      openMessageInfo(position) {
        if(this.isOpen === true) return this.isOpen = false;
        if(this.isOpen === false) return this.isOpen = true;
      }

    },

    created() {

        let DateTime = luxon.DateTime;
        let now = DateTime.now();
        console.log(now);

        /*
        let dataProva = this.contacts[this.currentChat].messages[0].date;
        //let dataProva = "29/09/2024 00:00:01";
        //console.log(dataProva);
        let formatoProva = DateTime.fromFormat(dataProva, 'dd/MM/yyyy HH:mm:ss');
        console.log(formatoProva.weekdayLong);
        console.log(formatoProva.minute);
        console.log(formatoProva.hour);
        console.log(formatoProva.toLocaleString());
        console.log(now.plus({ days: -1 }).toLocaleString());
        console.log(now.plus({ days: -6 }).toLocaleString());
        if(formatoProva.toLocaleString() < now.plus({ days: -6 }).toLocaleString()) {
            console.log(formatoProva.toLocaleString());
        } else if(formatoProva.toLocaleString() === now.plus({ days: -1 }).toLocaleString()) {
            console.log("ieri");
        } else {
            console.log(formatoProva.weekdayLong);
        }
        */


        /////////////////////////
        this.contacts.forEach((contact, index) => {
            //console.log(contact.name);
            this.dates.push(new Array);
            let numContact = index;
            contact.messages.forEach(message => {
                //console.log(numContact);
                let formatDate = DateTime.fromFormat(message.date, 'dd/MM/yyyy HH:mm:ss');
                this.dates[numContact].push(formatDate);
                //console.log(message.date);
            });
        });
        console.log(this.dates);
        console.log(this.dates[this.currentChat]);
    }

  }).mount('#app')