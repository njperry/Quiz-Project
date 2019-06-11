import { Component } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trivia-project';

  questions: any;

  constructor(private quizService: QuizService) {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
      // console.log(this.questions);
    });
  }


}
