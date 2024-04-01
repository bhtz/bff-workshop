import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full', title: 'Home' },
  { path: 'counter', component: CounterComponent, title: 'Counter' },
  { path: 'posts', component: PostsComponent, title: 'Posts', canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, title: 'User', canActivate: [AuthGuard] }
];
