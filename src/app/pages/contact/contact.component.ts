import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactService } from '../../services/contact.service';

import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { take } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(
    public contactService: ContactService,
    private router: Router,
    private builder: UntypedFormBuilder
  ) {

    this.form = this.builder.group({

      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  sendEmail(values) {

    this.contactService.loading = true;

    this.contactService.sendMessage(values).pipe(take(1)).subscribe(({
      next: () => {
        this.contactService.loading = false;
        Swal.fire({

          position: 'center',
          icon: 'success',
          title: 'Email Sent',
          showConfirmButton: true
        }).then(result => {

          if (result.value) {

            this.router.navigate(['/about']);
          }
        });
      },
      error: (err) => {
        console.log(err)
      }
    }));
  }
}
