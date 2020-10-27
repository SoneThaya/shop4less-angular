import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  productId = 0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = data.id;
    });
  }
}
