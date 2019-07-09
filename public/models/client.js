class Client {
    constructor() {
        this.url = "http://192.168.1.25:3000";
    }
      

    createClient() {

    }

    deleteClient(delBody) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: this.url + "/deleteClient", //192.168.1.25
                crossDomian: true,
                dataType: "json",
                data: JSON.stringify(delBody)
              }).done(data => { resolve( data )})
                .fail((err) => { reject( err ) });
        });  
    }

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url:this.url + '/database', //192.168.1.25
                crossDomian: true
            }).done((data) => {
                resolve(data);
            }).fail((err) => {
                reject(err);
            });
        });    
    }
}

module.exports = Client;