import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  colors = ['Blue', 'Green', 'Red', 'Yellow'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  setQuery(str: string) {

    console.log('color', str);

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { color: str }
    });
  }

}
