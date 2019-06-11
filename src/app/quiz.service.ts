import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public radioGroupForm: FormGroup;
  public formBuilder: FormBuilder;

  // answersPool: any = [];
  // scores: number = 0;
  score: number = 0;
  username: any;
  answerArray: any = [];
  results: any;
  questions: any = [];

  constructor(private http: HttpClient, private router: Router) { }

  getQuestions() { //making a get request to that address and expecting rsponse to be json
    return this.http.get("/api/questions", { responseType: "json"});
  }

  getScores() { //making a get request to that address and expecting rsponse to be json
    return this.http.get("/api/scores", { responseType: "json"});
  }

  postScores(newScore) {
    return this.http.post("./api/scores", newScore, {responseType: "json"});
  }

  getScore(form, questions) {
    console.log(form.value);
    let answerArray = Object.values(form.value);
    
    for (let i = 1; i < answerArray.length; i++) {
      if (answerArray[i] === questions[i - 1].answer) {
        console.log("Got one right!.");
        // console.log(form.value.username);
        this.score++;
      }
    }
    console.log(form.value.username);
    console.log(this.score);

    this.postScores({ username: form.value.username, scores: this.score}).subscribe(response => {
      questions=response
    });

    
      this.results = answerArray;
    

    this.router.navigate(["results"]);
  }

  getResults(): any {
    console.log(this.results);
    return this.results;
  }

  getFinalScore(): any {
    console.log(this.score);
    return this.score;
  }



  // addNewName(newName) { 
  //   return this.http.post("/api/scores", newName , { responseType: "json"});
  // }

  // addScore(answer: string, index: number): any {
  //   return this.http.post("/api/scores", answer , { responseType: "json"});

  //   // this.cats[index].name = newCatName;
  //   // console.log(this.cats);
  //   // return this.cats;
  // }

//   calculateScore(submitted) {
//     this.scores = 0;
//     for(let i = 0; i < submitted.length; i++) {
//     if (submitted[i] == true) {
//       this.scores++;
//       // console.log(this.scores);
//     // return this.http.post("/api/scores", scores, { responseType: "json"});
    
//     }
    
//   }
//   this.router.navigate(["results"]);
//   console.log(this.scores);
// }



    // let temp = questionForm[i];
  // console.log(temp);
  // for (let i = this.questionList.answers; i < 0; i++) {
  //   // let scoreTally = null;
  //   if (temp == this.questionList.answers[i]) {
  //     let scoreTally = null;
  //     scoreTally++;
  //     // console.log(scoreTally);
  //     return scoreTally;


  // addItems(newItem) { 
  //   return this.http.post("/api/cartitems", newItem , { responseType: "json"});
  // }

  // deleteItems(name) { //delet name parameter
  //   return this.http.delete(`/api/cartitems/${name}`, { responseType: "json"});
  // }

  // updateItems(item) { //endpoint with old name parameter, newly updated name, response type
  //   return this.http.put(`/api/cartitems/${item.id}`, item, { responseType: "json"});
  // }


}
