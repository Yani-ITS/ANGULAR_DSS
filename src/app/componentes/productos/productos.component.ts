import { Component, OnInit } from '@angular/core';
import { Esmaltes } from './productos'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  esmaltes= [
    {
    nombre: "Esmalte Gel Color Pink Mask",
    precio: 1200,
    url: "http://d3ugyf2ht6aenh.cloudfront.net/stores/002/098/products/jelly-todos1-9803ba5b751b89286a16052089283655-640-0.png",
    disponibilidad: true
  },
  {
    nombre: "Base Coat Rubber Pink Mask",
    precio: 1400,
    url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/979/products/df6b694c-755d-4e11-b3b4-db857fc41cb51-df40d038498566870816121515314772-1024-1024.jpg",
    disponibilidad: true
  },
  {
    nombre: "Builde-Gel in a Bottle Pink Mask",
    precio: 1700,
    url: "https://pink-mask.com/wp-content/uploads/2022/01/Builder-Gel-Clear-scaled-1.webp",
    disponibilidad: true
  },
  {
    nombre: "Top Coat Pink Mask",
    precio: 1200,
    url: "http://d3ugyf2ht6aenh.cloudfront.net/stores/002/098/products/jelly-todos1-9803ba5b751b89286a16052089283655-640-0.png",
    disponibilidad: true
  },]

  constructor() { }

  ngOnInit(): void {
  }

}
