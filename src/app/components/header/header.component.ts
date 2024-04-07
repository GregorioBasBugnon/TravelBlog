import { Component } from '@angular/core';
import { HeaderChildComponent } from "./header-child/header-child.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [HeaderChildComponent]
})
export class HeaderComponent {

}

