import firebase from 'firebase/app';

import 'firebase/firestore'

const firestore = firebase.firestore();


firestore.collection('users').doc('id')

// OR

firestore.doc('/users/id/item/id')
