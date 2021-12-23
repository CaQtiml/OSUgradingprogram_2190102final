import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { MyScore, SomeScore } from './models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
    private mURL = "http://817a-35-236-221-127.ngrok.io/"
    constructor(private http: HttpClient) {}

    postScore(id:String, asgm:String, mt:String, fn:String) {
        const body = {"id":id, "mt":+mt, "fn":+fn, "asgm":+asgm}
        this.http.post(this.mURL+`insert`,body).subscribe(data => {
            console.log(data)
            location.reload()
        })
    }

    getAllGrades(OC:String, SC:String){
        return this.http.get<MyScore>(this.mURL+`getallgrades?oc=${OC}&sc=${SC}`)
    }

    getByRange(min:String, max:String){
        return this.http.get<SomeScore>(this.mURL+`getbyrange?min=${min}&max=${max}`)
    }

    getPerson(ids:String){
        return this.http.get<SomeScore>(this.mURL+`getgroup?ids=${ids}`)
    }

}
