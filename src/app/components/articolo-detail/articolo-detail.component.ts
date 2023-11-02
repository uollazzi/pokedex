import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articolo } from 'src/app/models/articolo';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-articolo-detail',
  templateUrl: './articolo-detail.component.html',
  styleUrls: ['./articolo-detail.component.css']
})
export class ArticoloDetailComponent implements OnInit {
  articolo?: Articolo;

  constructor(private bs: BlogService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.bs.getArticoloById(id)
      .subscribe(articolo => {
        this.articolo = articolo;
      })
  }
}
