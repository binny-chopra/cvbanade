import { Component, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder, UntypedFormGroup, UntypedFormArray, UntypedFormControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-enter-cv-info',
  templateUrl: './enter-cv-info.component.html',
  styleUrls: ['./enter-cv-info.component.scss']
})
export class EnterCvInfoComponent implements OnInit {
  public showAddWorkExBtn: boolean = true;
  public fillInLaterFlag: boolean = false;
  public formBuilder = new UntypedFormBuilder;
  public piGroup!: UntypedFormGroup;
  public workExpGroup!: UntypedFormGroup;
  public workExpItems!: UntypedFormArray;
  public educationGroup!: UntypedFormGroup;
  public eduDetailsItems!: UntypedFormArray;
  public thirdFormGroup = this.formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  public stepperOrientation: Observable<StepperOrientation>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 768px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.piGroup = new UntypedFormGroup({
      piFirstName: new UntypedFormControl("", [Validators.required, Validators.minLength(3), Validators.pattern(`^[a-zA-Z]*$`)]),
      piLastName: new UntypedFormControl("", [Validators.required, Validators.minLength(3), Validators.pattern(`^[a-zA-Z]*$`)]),
      piEmail: new UntypedFormControl("", [Validators.required, Validators.email]),
      piPhoneNumber: new UntypedFormControl("", [Validators.required, Validators.pattern(`^((\\+91-?)|0)?[0-9]{10}$`)])
    });
    this.workExpGroup = new UntypedFormGroup({
      workExperience: new UntypedFormArray([])
    });
    this.educationGroup = new UntypedFormGroup({
      educationDetails: new UntypedFormArray([])
    });
    this.addWorkExp();
    this.addEduDetails();
  }

  get workExperience() {
    return this.workExpGroup.get('workExperience') as UntypedFormArray;
  }

  get educationDetails() {
    return this.educationGroup.get('educationDetails') as UntypedFormArray;
  }

  public addWorkExp(): void {
    this.workExpItems = this.workExpGroup.get('workExperience') as UntypedFormArray;
    this.workExpItems.push(this.generateWorkExpRow());
  }

  public addEduDetails(): void {
    this.eduDetailsItems = this.educationGroup.get('educationDetails') as UntypedFormArray;
    this.eduDetailsItems.push(this.generateEducationRow());
    console.log(this.educationGroup.value)
  }

  public removeWorkExp(i: number): void {
    this.workExpItems.removeAt(i);
  }

  public removeEduDetails(i: number): void {
    this.eduDetailsItems.removeAt(i);
  }

  public fillInLaterFn(e: MatCheckboxChange, formGroupName: UntypedFormGroup): void {
    this.fillInLaterFlag = e?.checked;
    this.showAddWorkExBtn = !this.fillInLaterFlag;
    if (this.fillInLaterFlag) {
      formGroupName.disable();
    } else {
      formGroupName.reset();
      formGroupName.enable();
    }
  }

  private generateWorkExpRow(): UntypedFormGroup {
    return new UntypedFormGroup({
      workExpCompany: new UntypedFormControl("", Validators.required),
      workExpDesigantion: new UntypedFormControl("", Validators.required),
      workExpLocation: new UntypedFormControl("", Validators.required),
      workExpType: new UntypedFormControl("", Validators.required),
      workExpStartDate: new UntypedFormControl("", Validators.required),
      workExpEndDate: new UntypedFormControl(""),
      recentDate: new UntypedFormControl(""),
      workExpDescription: new UntypedFormControl("", Validators.required)
    });
  }

  private generateEducationRow(): UntypedFormGroup {
    return new UntypedFormGroup({
      universityName: new UntypedFormControl("", Validators.required),
      eduLocation: new UntypedFormControl("", Validators.required),
      eduLevel: new UntypedFormControl("", Validators.required),
      eduStartDate: new UntypedFormControl("", Validators.required),
      eduEndDate: new UntypedFormControl("", Validators.required),
      eduGrades: new UntypedFormControl("", Validators.required),
      eduExtraCurricular: new UntypedFormControl(""),
      eduOtherDetail: new UntypedFormControl("")
    });
  }
}
