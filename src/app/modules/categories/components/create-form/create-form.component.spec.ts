import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormComponent } from './create-form.component';
import { CategoriesService } from '../../services/categories.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateFormComponent', () => {
  let component: CreateFormComponent;
  let fixture: ComponentFixture<CreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [CategoriesService],
      declarations: [CreateFormComponent]
    });
    fixture = TestBed.createComponent(CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
