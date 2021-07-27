import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {returnConfig} from "../../../app.config";
import {checkNested} from "../helpers/check.nested";
import {checkPasswords, validateDate} from "../custom-validators";


@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  private _validators = {
    'required': Validators.required,
    'email': Validators.email,
    'minlength': Validators.minLength,
    'checkPasswords': checkPasswords,
    'validateDate': validateDate
  }

  constructor(private _formBuilder: FormBuilder) { }

  formGenerator(instancename: string, details: {[name: string]: any}){
    const config = returnConfig(instancename).config.editable;
    const formValidator = returnConfig(instancename).config.formValidator;
    let result = {}
    for(const group of config){
      if(group.type!=='actionarea'){
        for(const field of group.fields){
          const val = details[field.name]!==undefined? details[field.name] : field.initialValue!==undefined? field.initialValue : null
          const disabled = field.disabled!==undefined? field.disabled : false
          const onef =  field.validators!==undefined?
            [
              {value: val, disabled: disabled},
              field.validators.map(one=>(one.val!==undefined? this._validators[one.validator](one.val) : this._validators[one.validator]))
            ]
            :
            [{value: val, disabled: disabled}]
          if(field.include!==undefined){
              field.include? result[field.name] = onef : null
            }else{
              result[field.name] = onef
            }
        }
      }
    }

    const form: FormGroup = this._formBuilder.group(result, {
      validators: formValidator ? formValidator.map(one => this._validators[one]) : []
    });

    if (instancename === 'login' && localStorage.getItem('email') && localStorage.getItem('password')) {
      form.patchValue({
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        remember: true
      })
      form.markAsTouched()
      form.markAsDirty()
    }

    return form
  }

  formGeneratorNested(instancename: string, details: {[name: string]: any}): FormGroup {
    const config = returnConfig(instancename).config.editable
    return this._formBuilder.group(config.filter(item => item.type !== 'actionarea').reduce((acc, curr) => {
      acc[curr.title] = this._formBuilder.group(
        curr.fields.filter(item=>item.include? item.include : true).reduce((accc, currc) => {
          let val: any = null
          if (checkNested(details, curr.title, currc.name)) {
            val =  details[curr.title][currc.name]? details[curr.title][currc.name] : currc.initialValue!==undefined? currc.initialValue :  null
          } else {
            val = details[currc.name]? details[currc.name] : currc.initialValue!==undefined? currc.initialValue : null
          }
          if (currc.validators !== undefined) {
            accc[currc.name] = [{
              value: val,
              disabled: currc.disabled !== undefined ? currc.disabled : false
            }, currc.validators.map(item => {
              return item.val !== undefined ? this._validators[item.validator](item.val) : this._validators[item.validator]
            })]
          } else {
            accc[currc.name] = [{value: val, disabled: currc.disabled !== undefined ? currc.disabled : false}]
          }
          return accc
        }, {})
      )
      return acc
    }, {}))
   }

   getOneObjectFromNested(nestedObject) {
    let response = {};
    Object.entries(nestedObject).forEach(([_, value]) => {
      Object.keys(value).forEach(key => {
        response[key] = value[key];
      })
    });
    return response
   }
  }
