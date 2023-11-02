import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropartyComponent } from './proparty.component';

describe('PropartyComponent', () => {
  let component: PropartyComponent;
  let fixture: ComponentFixture<PropartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropartyComponent]
    });
    fixture = TestBed.createComponent(PropartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
