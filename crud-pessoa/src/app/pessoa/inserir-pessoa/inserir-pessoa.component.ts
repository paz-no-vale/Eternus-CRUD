import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit {
  @ViewChild ('fomrPessoa') formPessoa! : NavigatorAutomationInformation;

  constructor() { }

  ngOnInit(): void {
  }

}
