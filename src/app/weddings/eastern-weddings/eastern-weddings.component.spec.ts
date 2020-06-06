import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasternWeddingsComponent } from './eastern-weddings.component';

describe('EasternWeddingsComponent', () => {
  let component: EasternWeddingsComponent;
  let fixture: ComponentFixture<EasternWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasternWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasternWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
