import { Component } from '@angular/core';
import { QuillConfig } from 'ngx-quill';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editorConfig: QuillConfig = quillGlobalConfig;
  template = `<!DOCTYPE HTML>
  <html lang="en">
  <head>
    <meta content="text/html;charset=UTF-8" http-equiv="Content-Type">
    <title></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
  </head>
  <body">
  <style>
  li {    text-decoration: underline;}
  </style>
  <div style="font-family: Open Sans, sans-serif;background-color: grey;">
    <p>Hi John,</p>

    <p>Greetings from Republic Finance. We received notice the customer below has retained your services.
      <br>Prior to considering a settlement, we will need you to provide a customer signed power of attorney and hardship information for the customer.  </p>

    <div><u>Customer Details:</u></div>
    <ul>
      <li>Representative Customer's ID: <strong>ABC 123</strong>
      </li>
      <li>Name: <strong>John Smith</strong></li>
      <li>DOB: <strong>**/**/1970</strong></li>
      <li>SSN: <strong>XXX-XX-1234</strong></li>
    </ul>

    <p>Please reply to <a href="mailto:specialops@republicfinance.com">specialops@republicfinance.com</a> or call at
      <strong>866-369-7189</strong> for further steps.
    </p>

    <p>Legal Disclaimers:</p>

    <i class="bi bi-check2-square"></i> &#9989; Make sure you read terms and conditions
    <br>
    &#128296; Work going on - this is how HTML codes looks like
  </div>
  </body>
  </html>`;

  doYourMagic() {
    const doc = new jsPDF();
    doc.html(this.template, {
      x: 10,
      y: 10,
      callback: (a) => {
        console.log(a);
      },
    });
    doc.save('rendered-magic.pdf');
  }
}

export const quillGlobalConfig: QuillConfig = {
  format: 'html',
  // modules: {
  //   toolbar: [
  //     ['bold', 'italic', 'underline', 'strike'], // toggled buttons

  //     [{ list: 'ordered' }, { list: 'bullet' }],

  //     [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

  //     [{ header: [1, 2, 3, 4, 5, 6, false] }],

  //     [{ align: [] }],

  //     ['clean'], // remove formatting button
  //   ],
  // },
};
