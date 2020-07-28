import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactService } from '../../services/contact.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    public contactService: ContactService,
    private router: Router,
    private builder: FormBuilder
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

    this.contactService.sendMessage(values)
        .subscribe(res => {

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

        err => console.log(err));

  }
}
