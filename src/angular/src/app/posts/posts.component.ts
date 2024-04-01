import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatProgressSpinnerModule, MatTableModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  data: Post[] = [];
  isLoading: boolean = false;
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    const req = this.http.get<Post[]>('/api/todos');
    req.subscribe((posts) => {
      this.data = posts;
      this.isLoading = false;
    });
  }
}

class Post {
  id: number = 0;
  userId: number = 0;
  title: string = '';
  completed: boolean = false;
}
