const axios = require("axios");
const url = 'http://localhost:5000/api/';

class ItemsService {
  static getItems(name) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}${name}`);
        const { data } = res;
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default ItemsService;