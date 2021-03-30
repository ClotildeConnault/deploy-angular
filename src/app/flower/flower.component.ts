import { Component, OnInit } from '@angular/core';
import { Flower, FlowerService } from './flower.service';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent implements OnInit {

  flowers : Flower[];

  constructor(
    private flowerService : FlowerService
  ) { }

  ngOnInit(): void {
    this.flowerService.getAll().subscribe(f => {
      this.flowers = f;
    })
  }

}
