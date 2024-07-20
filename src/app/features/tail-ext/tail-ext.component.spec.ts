import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailExtComponent } from './tail-ext.component';

describe('TailExtComponent', () => {
  let component: TailExtComponent;
  let fixture: ComponentFixture<TailExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailExtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TailExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
