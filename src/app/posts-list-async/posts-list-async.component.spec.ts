import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListAsyncComponent } from './posts-list-async.component';

describe('PostsListAsyncComponent', () => {
  let component: PostsListAsyncComponent;
  let fixture: ComponentFixture<PostsListAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
