import * as FormData from 'form-data';
import { Injectable, Inject } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { MailModuleOptions } from './mail.interfaces';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class MailService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions,
    private readonly httpService: HttpService,
  ) {}

  private async sendEmail(subject: string, template: string) {
    const form = new FormData();
    form.append('from', `Excited User <mailgun@${this.options.domain}>`);
    form.append('to', `odest66@gmail.com`);
    form.append('template', template);
    form.append('v:code', 'sdfasdf');
    form.append('v:username', 'Human!!!');
    form.append('subject', subject);
    const response = await this.httpService
      .axiosRef(`https://api.mailgun.net/v3/${this.options.domain}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(
            `api:${this.options.apiKey}`,
          ).toString('base64')}`,
        },
        data: form,
      })
      .then((res) => console.log(res.data))
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }
}
