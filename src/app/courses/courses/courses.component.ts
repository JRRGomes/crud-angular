import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [{ _id: '1', name: 'Java Web', category: 'Back-end' }];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
