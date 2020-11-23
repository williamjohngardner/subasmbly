import { Component } from '@angular/core';

interface User {
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public profileCollapse = false;
  public user: User = {
    name: 'Bill Gardner',
    role: 'administrator'
  };
}
