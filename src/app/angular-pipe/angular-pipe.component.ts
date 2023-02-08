import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.scss']
})
export class AngularPipeComponent implements OnInit {
  title:string = "Angular Courses";
  count :number = 5656563;
  dcvalue: number = 3.56898;
  price: number = 99.99;
  postArray :Array<string> = [
      "post 1",
      "post 2",
      "post 3",
      "post 4",
      "post 5",
      "post 6",
  ]
  today: Date = new Date();
  postobj: object ={
    id:1,
    postTitle:"post 1"
  }
  userDetails = {
    name: "Sathish",
    age: "35",
    city: "India"
  }
  dummytext : string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe doloremque consequatur fuga animi ullam, quisquam aliquam accusantium omnis tenetur expedita neque error similique aliquid. Beatae laudantium nisi iste cum impedit saepe illo accusantium, minus non ipsum quibusdam ratione blanditiis pariatur harum? Quod eligendi nam blanditiis quo sint! Molestias sit dolorum soluta saepe accusamus consectetur inventore, odit accusantium quod quo magni reprehenderit reiciendis veniam praesentium obcaecati rerum unde culpa, velit autem doloremque qui eligendi? Assumenda sequi iure at, labore asperiores debitis eligendi, ex officia exercitationem veritatis impedit delectus, accusamus non blanditiis nihil! Harum eum maiores fugiat tempora voluptatem architecto possimus commodi non quos sit, iusto magni natus culpa laborum quam doloremque dolore. Veniam sit aliquam fuga, cum amet unde numquam, provident deserunt nostrum totam impedit? Expedita iste necessitatibus quae, porro inventore repellendus ipsum perferendis dolores soluta ut iure quos mollitia quod explicabo labore quam deleniti cumque incidunt, suscipit, nesciunt dolorum. Dolorum distinctio praesentium blanditiis sint et quibusdam quaerat, numquam, eligendi voluptate maiores nihil a culpa voluptatibus dolore magnam odio recusandae. Dolor ut cumque asperiores ipsa sequi, inventore beatae natus, blanditiis maiores optio temporibus quis ipsam veritatis modi obcaecati. Odit atque deserunt quae quia soluta nulla facilis tempora itaque libero harum."
  constructor() {

  }
  ngOnInit(): void {

  }
}
