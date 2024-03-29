import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageRequested$ = new BehaviorSubject<string>('');

  onPageRequest(pageRequested: string) {
    this.pageRequested$.next(pageRequested);
  }
}
