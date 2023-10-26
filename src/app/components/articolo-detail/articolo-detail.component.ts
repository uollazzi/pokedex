import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/blog.service';
import { Articolo } from 'src/app/models/articolo';


@Component({
  selector: 'app-articolo-detail',
  templateUrl: './articolo-detail.component.html',
  styleUrls: ['./articolo-detail.component.css']
})
export class ArticoloDetailComponent implements OnInit {
  articolo$?: Observable<Articolo>;

  constructor(private bs: BlogService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.articolo$ = this.bs.getArticoloById(id);
  }
}
