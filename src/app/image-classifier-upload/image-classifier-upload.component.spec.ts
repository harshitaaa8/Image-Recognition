import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClassfierUploadComponent } from './image-classifier-upload.component';

describe('ImageClassifierUploadComponent', () => {
  let component: ImageClassfierUploadComponent;
  let fixture: ComponentFixture<ImageClassfierUploadComponent>;

  beforeEach( waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ImageClassfierUploadComponent]
    })
    .compileComponents();
  }))

  beforeEach(()=>{
    fixture = TestBed.createComponent(ImageClassfierUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
