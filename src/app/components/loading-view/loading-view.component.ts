import { Component } from '@angular/core';
import { Interface } from 'readline';
import { timer } from 'rxjs';

@Component({
  selector: 'app-loading-view',
  standalone: true,
  imports: [],
  templateUrl: './loading-view.component.html',
  styleUrl: './loading-view.component.scss'
})
export class LoadingViewComponent {
  public loading: boolean = true;

  public loadView(objectComponent: any) {
    if (typeof window !== 'undefined' && objectComponent !== undefined) {
      this.loading = false;
    } else if (typeof window !== 'undefined') {
      timer(5000)
        .subscribe(() => {
          this.loading = false;
        });
    }
  }
}
