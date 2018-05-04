import { Component } from '@angular/core';
import { ContactProvider } from './../../providers/contact/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ContactEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html',
})
export class ContactEditPage {

  title: string;
  form: FormGroup;
  contact: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ContactProvider,
    private toast: ToastController) {

    this.contact = this.navParams.data.contact || {};
    this.createForm();
    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando produto' : 'Novo produto';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.contact.key],
      nameProduto: [this.contact.nameProduto, Validators.required],
      codProturo: [this.contact.codProturo, Validators.required],
      qtdProturo: [this.contact.qtdProturo, Validators.required],
      dataVencimento: [this.contact.dataVencimento, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactEditPage');
  }

}
