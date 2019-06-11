import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  

  scoresList: any;
    
  constructor(private quizService: QuizService) {
    this.quizService.getScores().subscribe(response => {
      this.scoresList = response;
      console.log(this.scoresList);
    });
   }

  ngOnInit() {

  }

}
