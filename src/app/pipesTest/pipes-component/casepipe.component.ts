import { Component } from '@angular/core';

@Component({
  selector: 'case-pipe',
  template: `
    <div>Lower Case Pipe</div>
    <p>
      TRANSFORM THIS TEXT TO LOWER CASE ->
      {{ 'TRANSFORM THIS TEXT TO LOWER CASE' | lowercase }}
    </p>
    <div>Upper Case Pipe</div>
    <p>transform this text to upper case ->
      {{ 'transform this text to upper case' | uppercase }}</p>
      <div>Title Case Pipe</div>
    <p>transform this text to title case ->
      {{ 'transform this text to title case a,b, c' | titlecase }}</p>
  `,
})
export class CasePipeComponent {}
