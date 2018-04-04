import { Component, OnInit } from '@angular/core';
import { PhraseAppCompiler } from 'ngx-translate-phraseapp';
import { initializePhraseAppEditor } from 'ngx-translate-phraseapp';
import { environment } from '../../../environments/environment';
import { createForm } from 'formiojs';

@Component({
  selector: 'app-phraseapp-edit',
  templateUrl: './phraseapp-edit.component.html',
  styleUrls: ['./phraseapp-edit.component.scss']
})

export class PhraseappEditComponent implements OnInit {
  formRemote: string;
  phraseConfig: object;

  constructor() {
    this.formRemote = environment.appUrl + '/phraseapp';

    this.phraseConfig = {
      projectId: environment.phraseAppId,
      phraseEnabled: true,
      prefix: '[[__',
      suffix: '__]]',
    };

    initializePhraseAppEditor(this.phraseConfig);
  }

  ngOnInit() {
    createForm(document.getElementById('PhraseEdit'), this.formRemote, {
      readOnly: false,
    });
  }
}
