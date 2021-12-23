import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProviderService } from '../data-provider.service';
import { MyScore, SomeScore } from '../models/data.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    studentID : String
    assignment: String
    midterm: String
    final: String
    dataScores$: Observable<MyScore>
    OC: String
    SC: String
    dataRange$: Observable<SomeScore>
    min: String
    max: String
    dataPerson$: Observable<SomeScore>
    ids: String
    constructor(private myProvider: DataProviderService) {}
    postScore(){
        this.myProvider.postScore(this.studentID, this.assignment, this.midterm, this.final)
    }
    getAllGrades(){
        this.dataScores$ = this.myProvider.getAllGrades(this.OC, this.SC)
    }
    getByRange(){
        this.dataRange$ = this.myProvider.getByRange(this.min, this.max)
    }
    getPerson(){
        this.dataPerson$ = this.myProvider.getPerson(this.ids)
    }
}
