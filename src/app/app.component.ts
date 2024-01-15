import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StrapiService } from './services/strapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent, HttpClientModule],
  providers: [StrapiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  strapiService = inject(StrapiService);

  title = 'strapi-angular-app';

  ngOnInit() {
    this.strapiService.strapiData$.subscribe((data: any) => {
      console.log(data);
    });
  }
}
