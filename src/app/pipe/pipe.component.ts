import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from '../pipes/currency-convertor.pipe';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule,CurrencyConvertorPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  title="coDe step by step";
  date = new Date()
  amount = 10;
} 
