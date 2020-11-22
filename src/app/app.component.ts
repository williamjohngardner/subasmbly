import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public profileCollapse = false;
  public user: object = {
    name: 'Bill Gardner',
    role: 'administrator'
  };
}
