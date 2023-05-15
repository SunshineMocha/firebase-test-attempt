import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, Firestore } from 'firebase/firestore/lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'testpjt';

  firebaseConfig = {
    apiKey: "AIzaSyC3DrfI7TdPapV6g295NPPZ85pLAqADt2c",
    authDomain: "testing-for-project-def1c.firebaseapp.com",
    projectId: "testing-for-project-def1c",
    storageBucket: "testing-for-project-def1c.appspot.com",
    messagingSenderId: "697544390327",
    appId: "1:697544390327:web:882e08d51da6084801ff32",
    measurementId: "G-PK9T936MQT"
  };

  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);

  async getUsernames(db: any) {
    const usernamesCol = collection(db, 'users');
    const usernameSnapshot = await getDocs(usernamesCol);
    const usernameList = usernameSnapshot.docs.map(doc => doc.data());
    console.log(usernameList);
    return usernameList;
  }

  ngOnInit(): void {
    this.getUsernames(this.db).then(data => console.log(data))
  }

  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     yob: 1815
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  // const querySnapshot = await getDocs(collection(db, "testing-for-project-def1c"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });

}

