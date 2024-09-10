import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {
  @Input() itemsType: string[] = [];
  @Input() itemPrice: string = "";

}
