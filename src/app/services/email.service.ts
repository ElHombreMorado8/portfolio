import { environment } from '../../../environment';
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({ providedIn: 'root' })
export class EmailService {
    sendEmail(data: { name: string; email: string; message: string }) {
        return emailjs.send(
            environment.emailServiceId,
            environment.emailTemplateId,
            {
                from_name: data.name,
                from_email: data.email,
                message: data.message
            },
            environment.emailPublicKey
        );
    }
}
