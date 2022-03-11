import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDJep-JcZzB_fH1mI80cCQgwhBvGKfYfr4",
    authDomain: "nba-app-ee2d4.firebaseapp.com",
    databaseURL: "https://nba-app-ee2d4-default-rtdb.firebaseio.com",
    projectId: "nba-app-ee2d4",
    storageBucket: "nba-app-ee2d4.appspot.com",
    messagingSenderId: "923747787870",
    appId: "1:923747787870:web:1bda476e16eda5b1ee00cf",
    measurementId: "G-SRKSBYYTEY"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database()
const firebaseArticles = firebaseDB.ref('articles')
const firebaseTeams = firebaseDB.ref('teams')
const firebaseVideos = firebaseDB.ref('videos')

const firebaseLooper = (snapshot) => {
    const data = []
    snapshot.forEach(element => {
        data.push({
            ...element.val(),
            id: element.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}