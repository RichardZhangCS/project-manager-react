const config = {
    apiKey: "AIzaSyBVkAae2NvBnLd1sN-scx1yqa3hK0fknbw",
    authDomain: "projectmanager-45a0f.firebaseapp.com",
    projectId: "projectmanager-45a0f",
    storageBucket: "projectmanager-45a0f.appspot.com",
    messagingSenderId: "711181533996",
    appId: "1:711181533996:web:41005591631a8ee1886289",
    measurementId: "G-Q8RDGQJZ8Q"
};
  
export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }