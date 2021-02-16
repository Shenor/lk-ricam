class DataService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  editClient(body) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url: this.url + "/users/edit",
        crossDomian: true,
        data: body
      })
        .done(data => {
          resolve(data);
        })
        .fail(err => {
          reject(err);
        });
    });
  }

  deleteClient(id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "DELETE",
        url: `${this.url}/users/delete/${id}`,
        crossDomian: true,
      })
        .done(data => {
          resolve(data);
        })
        .fail(err => {
          reject(err);
        });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: this.url + "/users/all",
        crossDomian: true
      })
        .done(data => {
          resolve(data);
        })
        .fail(err => {
          reject(err);
        });
    });
  }
}

module.exports = DataService;
