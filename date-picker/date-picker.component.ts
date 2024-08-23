import { Component ,input,Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgModel } from '@angular/forms';
import { NgIf,NgFor} from '@angular/common';
import { MatDatepickerInput ,MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule,MatOption,MatOptionSelectionChange } from '@angular/material/core';
import { MatDatepickerControl,MatDateSelectionModel } from '@angular/material/datepicker';
import { MatDatepicker } from '@angular/material/datepicker';
@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [NgIf,NgFor,MatDatepickerInput,MatFormFieldModule,MatCommonModule,MatDatepicker,MatOption,],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  selectedDate: Date;
  selectedLanguage: string = 'en'; // Default language

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  onLanguageChange(lang: string) {
    this.translate.use(lang);
  }
}
