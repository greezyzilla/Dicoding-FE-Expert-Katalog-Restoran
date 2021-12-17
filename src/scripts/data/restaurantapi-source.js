import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detail(restaurantId) {
    const response = await fetch(API_ENDPOINT.DETAIL(restaurantId));
    const responseJson = await response.json();
    return responseJson;
  }

  static async addReview(review) {
    const requestBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, requestBody);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantApiSource;
