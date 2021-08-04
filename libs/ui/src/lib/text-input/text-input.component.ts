import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
export const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(): void {},
  registerOnChange(): void {},
  registerOnTouched(): void {},
};

@Component({
  selector: 'sal-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent,
    },
  ],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({ height: '*', 'padding-top': '4px' })),
      state('false', style({ height: '0px', 'padding-top': '0px' })),
      transition('*=>*', animate('200ms')),
    ]),
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() id = '';
  @ViewChild('input') inputRef: ElementRef;
  errors: Array<any> = ['This field is required'];
  touched = false;
  disabled = false;
  value = '';
  // onChange = (value: string) => {};
  private innerValue = '';

  onTouched = () => {};

  constructor() {}
  ngOnChanges() {}

  ngAfterViewInit() {
    // // set placeholder default value when no input given to pH property
    // if(this.pH === undefined){
    //     this.pH = "Enter "+this.text;
    // }
    // RESET the custom input form control UI when the form control is RESET
    // this.c.valueChanges.subscribe(
    //     () => {
    //         // check condition if the form control is RESET
    //         if (this.c.value == "" || this.c.value == null || this.c.value == undefined) {
    //             this.innerValue = "";
    //             this.inputRef.nativeElement.value = "";
    //         }
    //     }
    // );
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    this.innerValue = value;
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  propagateChange = (_: any) => {};

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  onChange(e: Event, value: any) {
    //set changed value
    this.innerValue = value;
    // propagate value into form control using control value accessor interface
    this.propagateChange(this.innerValue);
    //reset errors
    this.errors = [];
    //setting, resetting error messages into an array (to loop) and adding the validation messages to show below the field area
    // for (var key in this.c.errors) {
    //   if (this.c.errors.hasOwnProperty(key)) {
    //     if (key === 'required') {
    //       this.errors.push('This field is required');
    //     } else {
    //       this.errors.push(this.c.errors[key]);
    //     }
    //   }
    // }
  }
}
