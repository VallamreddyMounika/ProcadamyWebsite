import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses=[
    {img:"assets/CourseImages/angular.png",title:'Angular For Beginners',defi:'In this course you will learn purely the fundamentals of Angular',stats:'Free',price:0},
    {img:"assets/CourseImages/css.png",title:'CSS for Beginners',defi:'In this course you will learn purely the fundamentals of CSS',stats:'Premium',price:200},
    {img:"assets/CourseImages/html.png",title:'HTML for Beginners',defi:'In this course you will learn purely the fundamentals of HTML',stats:'Free',price:0},
    {img:"assets/CourseImages/java.png",title:'Java for Beginners',defi:'In this course you will learn purely the fundamentals of Java',stats:'Premium',price:500},
    {img:"assets/CourseImages/python.png",title:'Python for Beginners',defi:'In this course you will learn purely the fundamentals of Python',stats:'Free',price:0},
    {img:"assets/CourseImages/js.png",title:'JS for Beginners',defi:'In this course you will learn purely the fundamentals of JS',stats:'Premium',price:600},
    {img:"assets/CourseImages/angular.png",title:'Angular for Beginners',defi:'In this course you will learn purely the fundamentals of Angular',stats:'Premium',price:900},
    {img:"assets/CourseImages/python.png",title:'Python for Beginners',defi:'In this course you will learn purely the fundamentals of Python',stats:'Premium',price:400},
    {img:"assets/CourseImages/java.png",title:'Java for Beginners',defi:'In this course you will learn purely the fundamentals of Java',stats:'Premium',price:400},
    {img:"assets/CourseImages/html.png",title:'HTML for Beginners',defi:'In this course you will learn purely the fundamentals of HTML',stats:'Free',price:0},
    {img:"assets/CourseImages/css.png",title:'CSS for Beginners',defi:'In this course you will learn purely the fundamentals of CSS',stats:'Premium',price:200},
    {img:"assets/CourseImages/js.png",title:'JS for Beginners',defi:'In this course you will learn purely the fundamentals of JS',stats:'Premium',price:1100}
  ]

  getTotalCoarses(){
    return this.courses.length;
  }

  getFreeCoarses(){
    return this.courses.filter(course => course.stats==='Free').length;
  }

  getPreCoarses(){
    return this.courses.filter(coarse =>coarse.stats==='Premium').length;
  }

  selectedCourses:string='All';
  searchedCourse:string="";

  changedCourses(data : string){
    this.selectedCourses=data;
    //console.log(data);
  }

  searchCourse(searchVal :string){
    this.searchedCourse=searchVal;
  }
}
