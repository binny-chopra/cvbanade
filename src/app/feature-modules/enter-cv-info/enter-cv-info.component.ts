import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Validators, UntypedFormBuilder, UntypedFormGroup, UntypedFormArray, UntypedFormControl } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable, take } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-enter-cv-info',
  templateUrl: './enter-cv-info.component.html',
  styleUrls: ['./enter-cv-info.component.scss']
})
export class EnterCvInfoComponent implements OnInit {
  @ViewChildren('skillInput') skillInput!: QueryList<ElementRef>;
  public showAddWorkExBtn: boolean = true;
  public fillInLaterFlag: boolean = false;
  public formBuilder = new UntypedFormBuilder;
  public piGroup!: UntypedFormGroup;
  public workExpGroup!: UntypedFormGroup;
  public workExpItems!: UntypedFormArray;
  public educationGroup!: UntypedFormGroup;
  public eduDetailsItems!: UntypedFormArray;
  public schGroup!: UntypedFormGroup;
  public skillsItems!: UntypedFormArray;
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
    this.schGroup = new UntypedFormGroup({
      schSkills: new UntypedFormArray([]),
      schCertifications: new UntypedFormArray([]),
      schHobbies: new UntypedFormArray([])
    });
    this.addWorkExp();
    this.addEduDetails();
    this.addSkills();
  }

  get workExperience() {
    return this.workExpGroup.get('workExperience') as UntypedFormArray;
  }

  get educationDetails() {
    return this.educationGroup.get('educationDetails') as UntypedFormArray;
  }

  get schSkills() {
    return this.schGroup.get('schSkills') as UntypedFormArray;
  }

  public addWorkExp(): void {
    this.workExpItems = this.workExpGroup.get('workExperience') as UntypedFormArray;
    this.workExpItems.push(this.generateWorkExpRow());
  }

  public addEduDetails(): void {
    this.eduDetailsItems = this.educationGroup.get('educationDetails') as UntypedFormArray;
    this.eduDetailsItems.push(this.generateEducationRow());
  }

  public addSkills(e?: Event): void {
    console.log(e)
    this.skillInput?.changes.pipe(take(1)).subscribe({
      next: changes => changes.last.nativeElement.focus()
    });
    this.skillsItems = this.schGroup.get('schSkills') as UntypedFormArray;
    // let skillsArray = this.schGroup.get('schSkills')?.value;
    // if(!this.skillsItems.value.some((item: { [x: string]: string; })=> item['skills'] === "")) {
    //   this.skillsItems.push(this.generateSchSkillsRow());
    // }
    // this.schGroup.value['schSkills'] = skillsArray;
    const index = this.skillsItems.value.findIndex((item: any) => item['schSkills'] === "");
    if (index === -1) {
      this.skillsItems.push(this.generateSchSkillsRow());
    } else {
      this.skillsItems.removeAt(index);
    }
    console.log(this.skillsItems.value)
    console.log(this.schGroup.value);
  }

  public removeWorkExp(i: number): void {
    this.workExpItems.removeAt(i);
  }

  public removeEduDetails(i: number): void {
    this.eduDetailsItems.removeAt(i);
  }

  public removeSchSkills(i: number): void {
    this.skillsItems.removeAt(i);
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

  private generateSchSkillsRow(): UntypedFormGroup {
    return new UntypedFormGroup({
      skills: new UntypedFormControl("", Validators.required)
    });
  }
}
