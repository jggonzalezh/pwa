import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Service Worker & pwa V 1.11 ';
  items: Observable<any[]>;

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

 constructor(
             //private swUpdate:SwUpdate,
             db: AngularFirestore
             ){
   console.log("prueba firebase"); 
   this.items = db.collection('items').valueChanges();

 }

  ngOnInit():void{
       /* if (this.swUpdate.isEnabled){
         this.swUpdate.available.subscribe(
            ()=>{window.location.reload()}
         );
       } */
  }

}
