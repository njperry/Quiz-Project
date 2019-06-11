import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import { summaryForJitFileName } from '@angular/compiler/src/aot/util';
// import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})



export class QuizComponent implements OnInit {

  // public radioGroupForm: FormGroup;
  // public formBuilder: FormBuilder

  // questionList: any;
  // nameList: any;
  // answersPool: any[] = [];
  // scoreTally: any;
  questions: any = [];


  constructor(private quizService: QuizService) {
    this.quizService.getQuestions().subscribe(response => {
      this.questions = response;
      console.log(this.questions);
    });
  }

  submitAnswers(form) {
    this.quizService.getScore(form, this.questions);
    console.log(form);
    // console.log(form.value.username);
  }

  ngOnInit() {
    // this.radioGroupForm = this.formBuilder.group({
    //   'model': 1
    // });
  }

  // addNewName(newName) {

  //   this.quizService.addNewName(newName.value).subscribe(response => {
  //     this.nameList = response;
  //     // console.log(newName);
  //     console.log(newName.value);
  //   });
  // }


  // check(choice, answer, index) {
  //   if (choice == answer) {
  //     console.log(choice, answer, index);
  //     this.answersPool[index] = true;
  //     console.log(this.answersPool);
  //   }
  // }

  // submitQuiz() {
  //   this.quizService.calculateScore(this.answersPool);
  //   console.log(this.answersPool);    
  //   // this.service..getQuestions(this.questions);
    
  // }



//   answers(form: any, i: number): void {

//     this.answersPool = this.quizService.addScore(form.value.answer, i);
//     console.log(this.answersPool);
//   }

}
  //   submitName(form) {
  //     console.log(form.value.name);
  //     this.service.setName()
  //   }

  //   summaryForJitFileName(name) {
  //     this.name = name;
  //   }
  // on top name: any;
  
//   // let answerQ = "";
//     for (let answer of this.questionList) {
//       console.log(answer.answer);
//       console.log(answer);
//       // answerQ += this.questionList[questionForm.value.answer];
//       // console.log(answerQ);
//       return answer;
//     }
//   }
// }




  // getAnswer(stuff): any { //added | string to make it pass into catdetails.comp.ts
  //   // let index = this.questionList.findIndex(question => question.answer == answer);
  //   // console.log(index);
  //   // return this.questionList[index];

  //   for(let thing of this.questionList) {
  //     if (this.questionList.answer == stuff) {
  //       console.log(thing);
  //       // console.log(this.questionList.answer);
  //       return thing;
  //     }
  //   }
  // }




  // console.log( ...questionForm.value);
  // console.log(questionForm.value.choice1);
  // console.log(questionForm.value.choice2);
  // console.log(questionForm.value.choice3);
  // console.log(questionForm.value.choice4);


  // const answersPool: any[] = [];
  // this.answersPool.push(questionForm);
  // console.log(
  //   questionForm.value.choice1,
  //   questionForm.value.choice2,
  //   questionForm.value.choice3,
  //   questionForm.value.choice4
  // );
  // console.log(this.answersPool);



  //     for (let i = this.answersPool.length; i < 0; i++) {
  //       if (this.answersPool[i] == questionForm.value.answer) {
  //         console.log(this.answersPool[1]);
  //         console.log(questionForm.value.answer);
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  //   }
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

  // }
  // console.log(scoreTally);       
  // }
  // console.log(scoreTally);
  // }
  // console.log(scoreTally);
  // }
  // console.log(scoreTally);
  // }
