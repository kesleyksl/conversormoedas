import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ResolveEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  destroy$ = new Subject<any>();
  private _route: string;
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      (a: NavigationEnd)=>{

          this.route = a.url;
      }
    )
  }

  get route(){
    return this._route;
  }
  set route(route: string){
    this._route = route;
  }
  ngOnDestroy(){
    this.destroy$.next();
  }
}
