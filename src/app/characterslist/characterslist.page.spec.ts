import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterslistPage } from './characterslist.page';

describe('CharacterslistPage', () => {
  let component: CharacterslistPage;
  let fixture: ComponentFixture<CharacterslistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharacterslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
