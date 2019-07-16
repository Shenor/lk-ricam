class DataService {
    constructor() {
        this.url = "http://192.168.1.25:3000";//192.168.1.25
    }
      
    createClient(body) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: this.url + "/createClient", 
                crossDomian: true,
                data: body
              }).done((data) => { resolve( data )})
                .fail((err) => { reject( err ) });
        });  
    }

    editClient(body) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: this.url + "/editClient",
                crossDomian: true,
                data: body
              }).done(() => { resolve( )})
                .fail((err) => { reject( err ) });
        });  
    }

    deleteClient(delBody) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: this.url + "/deleteClient",
                crossDomian: true,
                data: delBody
              }).done(data => { resolve( data )})
                .fail((err) => { reject( err ) });
        });  
    }

    getAll() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url:this.url + '/database',
                crossDomian: true
            }).done((data) => {
                resolve( data );
            }).fail((err) => {
                reject( err );
            });
        });    
    }
}

module.exports = DataService;