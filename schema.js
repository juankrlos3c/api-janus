const axios = require('axios');
const User = require('./models/user');
const Book = require('./models/book');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} = require('graphql');

//User Type
const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        googleId: { type: GraphQLString },
        amazonId: { type: GraphQLString },
        name: { type: GraphQLString },
        givenName: { type: GraphQLString },
        photoUri: { type: GraphQLString},
        email: { type: GraphQLString }
    })
});

const bookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        userId: { type: GraphQLInt },
        source: { type: GraphQLString },
        volumeInfo: { type: volumeInfoType },
        status: { type: statusType },
        standardBookDetails: { type: standardBookDetailsType },
        janusBookDetails: { type: janusBookDetailsType }
    })
});

const volumeInfoType = new GraphQLObjectType({
    name: 'VolumeInfo',
    fields: () => ({
        authors: { type: GraphQLList(GraphQLString) },
        title: { type: GraphQLString},
        categories: { type: GraphQLList(GraphQLString) },
        description: { type: GraphQLString },
        imageLinks: { type: bookImageType },
        language: { type: GraphQLString },
        soundTrackLink: { type: GraphQLString }
    })
})

const statusType = new GraphQLObjectType({
    name: 'Status',
    fields: () => ({
        reading: { type: GraphQLBoolean },
        added: { type: GraphQLBoolean },
        completed: { type: GraphQLBoolean }
    })
})

const authorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        name: { type: GraphQLString }
    })
});

const categoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        name: { type: GraphQLString }
    })
})

const bookImageType = new GraphQLObjectType({
    name: 'BookImage',
    fields: () => ({
        smallThumbnail: { type: GraphQLString },
        thumbnail: { type: GraphQLString },
        standard: { type: GraphQLString },
    })
});

const standardBookDetailsType = new GraphQLObjectType({
    name: 'standardBookDetails',
    fields: () => ({
        pageCount: { type: GraphQLInt },
        progressReadCount: { type: GraphQLInt },
        standard: { type: GraphQLString },
    })
});


const janusBookDetailsType = new GraphQLObjectType({
    name: 'JanusBookDetails',
    fields: () => ({
        totalWordsRead: { type: GraphQLInt },
        totalPagesRead: { type: GraphQLInt },
        currentReadPage: { type: GraphQLInt },
        currentWordReadPage: { type: GraphQLInt },
        soundTrackSecond: { type: GraphQLInt },
        soundTrackMinute: { type: GraphQLInt },
        isReading: { type: GraphQLBoolean },
        standard: { type: GraphQLString }
    })
});


// Root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        books: {
            type: new GraphQLList(bookType),
            resolve: async (parent, args) => {
                const result = await axios.get('https://content.googleapis.com/books/v1/volumes?filter=full&maxResults=30&q=fiction&key=AIzaSyDHXiNrPV_RBVw-wWF6zG6RbBe29MncDSE')
                return result.data.items;
            }
        },
        book: {
            type: bookType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios.get('').then(res => res.data);
            }
        },
        user: {
            type: userType,
            args: {
                googleId: {
                    name: 'googleId',
                    type: new GraphQLNonNull(GraphQLString),
                }
            },
            resolve: async (parent, { googleId }) => {
                const result = await User.findOne({googleId: googleId});
                return result.toObject();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});
