const MongoLib = require('../lib/mongo');

class UserMoviesService {
    constructor() {
        this.collection = 'user-movies';
        this.mongoDB = new MongoLib;
    }

    async getUserMovies({ userId }) {
        const query = userId && { userId };
        const userMovies = await this.mongoDB.getAll(this.collection, query);

        return userMovies || []; 
    }

    async createUserMovie({ userMovie }) {
        const createdUserMovie = await this.mongoDB.create(this.collection, userMovie);

        return createdUserMovie;
    } 

    async deleteUserMovie({ userMovieId }) {
        const deletedUserMovie = await this.mongoDB.delete(this.collection, userMovieId);

        return deletedUserMovie;
    }
}

module.exports = UserMoviesService;