import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [],
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class AlertMessageComponent {
  private alert!: HTMLElement;
  private progress!: HTMLElement;
  private subscription!: Subscription;

  ngOnInit(): void {
    this.initializeAlertElements();
    this.startpAlertTimer();
  }

  private initializeAlertElements(): void {
    if (typeof window !== 'undefined') {
      this.alert = document.querySelector(".alert") as HTMLElement;
      this.progress = document.querySelector(".progress") as HTMLElement;
    }
  }
  private startpAlertTimer(): void {
    if (this.alert) {
      this.subscription = timer(1000).subscribe(() => {
        this.alert?.classList.add("active");
        this.progress?.classList.add("active");
      });
      this.subscription = timer(8000).subscribe(() => {
        this.alert?.classList.remove("active");
      });
      this.subscription = timer(8300).subscribe(() => {
        this.progress?.classList.remove("active");
        this.alert?.classList.remove("unactive");
      });
    }
  }


  handleCloserAlert(): void {
    if (this.alert && this.progress) {
      this.subscription?.unsubscribe();
      this.progress.classList.remove("active");

      timer(800)
        .subscribe(t => {
          this.alert.classList?.remove("active");
        });
    }
  }
}



