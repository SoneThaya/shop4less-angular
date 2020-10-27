import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  productId = 0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = data.id;
    });
  }
}
