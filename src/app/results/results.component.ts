import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
// import { Router } from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  answerArray: any;
  newScore: any;
  results: any;
  score: any;
  questions: any = [];

  constructor(private quizService: QuizService) { 
  }

 

  ngOnInit() {
    this.results = this.quizService.getResults();
    console.log(this.results);

    this.score = this.quizService.getFinalScore();
    console.log(this.score);
    
  }

}
