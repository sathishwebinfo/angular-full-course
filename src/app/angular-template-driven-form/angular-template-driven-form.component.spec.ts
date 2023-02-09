import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTemplateDrivenFormComponent } from './angular-template-driven-form.component';

describe('AngularTemplateDrivenFormComponent', () => {
  let component: AngularTemplateDrivenFormComponent;
  let fixture: ComponentFixture<AngularTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTemplateDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
