<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { PeopleService } from "../people.service";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"]
})
export class PersonListComponent implements OnInit {
  public listOfPerson: object[];

  constructor(private service: PeopleService) {}

  ngOnInit() {
    this.service
      .findPeople()
      .then(response => response.json())
      .then(response => (this.listOfPerson = response));
  }
=======
import {Component, OnInit} from '@angular/core';
import {Person} from '../models/person';
import {PersonService} from '../services/person-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) {
    this.personService = personService;
  }

  ngOnInit() {
    this.personService.findAll()
      .then(result => result.json())
      .then(result => this.persons = result);
  }

>>>>>>> e5d8334d8eb161836b324345d7e8d285e2d74608
}
