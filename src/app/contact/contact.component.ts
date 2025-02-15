import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../core/services/contact.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'shen-contact',
  imports: [
    ButtonComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy {

  contactForm!: FormGroup;
  isEmailSent: boolean = false;
  isEmailError: boolean = false;
  isSending: boolean = false;

  private destroyed$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  get name(): AbstractControl {
    return this.contactForm.get('name') as AbstractControl;
  }

  get email(): AbstractControl {
    return this.contactForm.get('email') as AbstractControl;
  }

  get message(): AbstractControl {
    return this.contactForm.get('message') as AbstractControl;
  }

  submitContactForm(): void {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.contactService.postMessage(this.contactForm.value)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: () => {
          this.isEmailSent = true;
          this.isSending = false;
          this.contactForm.reset();

          setTimeout(() => {
            this.isEmailSent = false;
          }, 5000);
        },
        err: () => {
          this.isEmailError = true;
          this.isSending = false;
        }
      });
  }

  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(255)]],
      access_key: ['38ddc041-845f-47b0-b154-5ed4d2346d62'] 
    });
  }
}
