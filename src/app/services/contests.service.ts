import { Injectable } from '@angular/core';
import { collection,Firestore , query, where, getDocs,} from '@angular/fire/firestore';

import { collectionData } from '@angular/fire/firestore';
import { Icontest } from './../models/icontest';
import { IcontestSection } from './../models/icontestsection';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContestsService {

  contests : Icontest[] = []
  contestSections : IcontestSection[] = []
  constructor(private firestore: Firestore ) { }
  
  getContests() {
    let contest = collection(this.firestore, "contests")
    return collectionData(contest, { idField: "id" }) as Observable<Icontest[]>
  }


 async getContestsBySectionId(sectionId: string) {
      const q = query(collection(this.firestore, "contests"), where('sectionId', '==', sectionId));

      const querySnapshot = await getDocs(q);

      var newArr : Array<object> = [];

      querySnapshot.forEach((doc) => {
        
        newArr.push(doc.data());

      });

      return newArr;

  }

  getContestSections() {
    let contestSections = collection(this.firestore, "contestSections")
    return collectionData(contestSections, { idField: "id" }) as Observable<IcontestSection[]>
  }
  

  
}
