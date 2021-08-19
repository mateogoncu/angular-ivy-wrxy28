import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverConsumerComponent } from './observer-consumer.component';

describe('ObserverConsumerComponent', () => {
  let component: ObserverConsumerComponent;
  let fixture: ComponentFixture<ObserverConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserverConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
