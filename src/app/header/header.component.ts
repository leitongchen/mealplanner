import { OnInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() routTo = new EventEmitter<string>();
  activeRoute: string = 'recipes';

  ngOnInit() {
    this.routTo.emit(this.activeRoute);
  }

  onNavigate(route: string) {
    this.routTo.emit(route);
    this.activeRoute = route;
  }
}
