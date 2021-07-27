import {dataConfigT, instanceConfigT, toolbarElementType} from "./ui/types/types";
import {canton, cities, regions} from "./cantos.cities";

export enum fieldTypes  {
  checkbox = 'checkbox',
  checkbox_list = 'checkbox-list',
  input = 'input',
  dropdown = 'dropdown',
  dependent_dropdown = 'dependent-dropdown',
  dependent_checkboxes = 'dependent-checkboxes',
  date_picker = 'date-picker',
  post_code = 'post-code',
  empty = 'empty'
}

export enum validatorsType {
  email ='email',
  required = 'required'
}

export const  dashbordToolbar =  [
  {
    type: toolbarElementType.icon,
    icon_name: 'pulse',
    link: '/mainpage/objects',
    color: 'primary',
    size: 32
  },
  {
    type: toolbarElementType.icon,
    icon_name: 'spreadsheet',
    link: '/mainpage/dashboard',
    color: 'primary',
    size: 32
  },
  {
    type: toolbarElementType.icon,
    icon_name: "magnifying-glass",
    link: '/mainpage/search-profile',
    color: 'primary',
    size: 32
  },
  {
    type: toolbarElementType.logout,
    icon_name: 'account-log-out',
    link: '/mainpage/logout',
    color: 'primary',
    size: 32
  },
  {
    type: toolbarElementType.languageSelection
  }
]

export const appConfig: dataConfigT[] = [
  {
   instancename: 'welcome',
   config: {
     headerConfig: {
       logoPicture: 'a_tre_logo.jpg',
       logoPictureLink: 'appinfo',
       headPicture: 'north_sea.jpg',
       toolbarIfLoggedIn: dashbordToolbar,
       toolbarConfig: [
         {
          type: toolbarElementType.button,
          label: 'login',
          link: '/home/login',
          color: 'primary'
         },
         {
           type: toolbarElementType.button,
           label: 'register',
           link: '/home/registration',
           color: 'primary'
         },
         {
           type: toolbarElementType.languageSelection
         }
       ]
     }
   }
  },
  {
    instancename: 'registration',
    config: {
      headerConfig: {
        logoPicture: '',
        logoPictureLink: '/home/welcome',
        headPicture: '',
        toolbarIfLoggedIn: dashbordToolbar,
        toolbarConfig: [
          {
            type: toolbarElementType.button,
            label: 'login',
            link: '/home/login',
            color: 'primary'
          },
          {
            type: toolbarElementType.button,
            label: 'register',
            link: '/home/registration',
            color: 'primary'
          },
          {
            type: toolbarElementType.languageSelection
          }
        ]
      }
    }
  },
  {
    instancename: 'appinfo',
    config: {
      headerConfig: {
        logoPicture: 'a_tre_logo.jpg',
        logoPictureLink: '/welcome',
        headPicture: 'north_sea2.jpg',
        toolbarIfLoggedIn: dashbordToolbar,
        toolbarConfig: [
          {
            type: toolbarElementType.button,
            label: 'login',
            link: '/home/login',
            color: 'primary'
          },
          {
            type: toolbarElementType.button,
            label: 'register',
            link: '/home/registration',
            color: 'primary'
          },
          {
            type: toolbarElementType.languageSelection
          }
        ]
      }
    }
  },
  {
    instancename: 'dashboard',
    config: {
      headerConfig: {
    logoPicture: '',
    logoPictureLink: '/home/welcome',
    headPicture: '',
    toolbarConfig: [
      {
        type: toolbarElementType.icon,
        icon_name: 'home',
        link: '/mainpage/settings',
        color: 'primary',
        size: 45
      },
      {
        type: toolbarElementType.logout,
        icon_name: 'log-out',
        link: '/mainpage/logout',
        color: 'primary',
        size: 52
      },
      {
        type: toolbarElementType.languageSelection
      }
    ]
  }
    }
  },
  {
    instancename: 'registration',
    config: {
      headerConfig: {
        logoPicture: 'Logo_ImmoTinder_RGB.png',
        logoPictureLink: '/home/welcome',
        headPicture: 'north_sea.jpg',
        toolbarConfig: [
          {
            type: toolbarElementType.button,
            label: 'login',
            link: '/home/login',
            color: 'primary'
          },
          {
            type: toolbarElementType.languageSelection
          }
        ]
      }
    }
  },
  {
    instancename: 'login',
    config: {
      makeFormTouched: true,
      headerConfig: {
        logoPicture: '',
        logoPictureLink: '/home/welcome',
        headPicture: '',
        toolbarConfig: [
          {
            type: toolbarElementType.button,
            label: 'register',
            link: '/home/registration',
            color: 'primary'
          },
          {
            type: toolbarElementType.languageSelection
          }
        ]
      },
      editable: [
        {
          title: 'login', fields: [
            {name: 'email', type: 'input', validators: [
              {validator: 'required', errorMessage: 'pls_enter_your_email'},
              {validator: 'email', errorMessage: 'email_not_valid'}
              ]
            },
            {name: 'password', type: 'password', fieldType: 'password', validators: [
                {validator: 'required', errorMessage: "password_required"},
                {validator: 'minlength', val: 4, errorMessage: "password_min_length"}
              ]
            },
            {name: 'remember', type: fieldTypes.checkbox, validators: []},
            {name: 'passreset', include: false, type: 'passreset'}
            ]
        },
        {
          title: 'area', type: 'actionarea', fields: [
            {name: 'login', type: 'button', color: 'primary',  result: 'login', send: true, keys: 'enter'},
          ]
        }
      ]
    }
  },
  {
    instancename: 'reset-password',
    config: {
      editable: [
        {
          title: 'reset password', fields: [
            {name: 'email', type: 'input', validators: [
              {validator: 'required', errorMessage: 'pls_enter_your_email'},
              {validator: 'email', errorMessage: 'email_not_valid'}
              ]
            }
          ]
        },
        {
          title: 'area', type: 'actionarea', fields: [
            {name: 'reset-password', type: 'button', color: 'primary',  result: 'reset-password', send: true, keys: 'enter'}
          ]
        }
      ]
    }
  },
  {
    instancename: 'registration-step',
    config: {
      headerConfig: {
        logoPicture: '',
        logoPictureLink: '/home/welcome',
        headPicture: 'north_sea.jpg',
        toolbarConfig: [
          {
            type: toolbarElementType.button,
            label: 'login',
            link: '/home/login',
            color: 'primary'
          },
          {
            type: toolbarElementType.languageSelection
          }
        ]
      },
      editable: [
        {
          title: 'personal_data',
          type: 'step-one',
          fields: [
            // person step
            {name: 'salutation', type: 'dropdown', options: [
                {label: 'Mr', value: 'mr', filter: 'ende'},
                {label: 'Ms', value: 'ms', filter: 'ende'},
                {label: 'Family', value: 'family', filter: 'ende'}
            ], validators: []},//dropdown
            {name: 'empty', type: 'empty', include: false, validators: []},
            {name: 'first_name', type: 'input', placeholder: 'first_name', validators: [{validator: 'required', errorMessage: "required"}]},
            {name: 'last_name', type: 'input', placeholder: 'last_name', validators: [{validator: 'required', errorMessage: "required"}]},
            {name: 'language', type: fieldTypes.dropdown, options: [
                {label: 'en', value: 'en'},
                {label: 'de', value: 'de'}
              ], validators: []},//dropdown
            {name: 'email', type: 'input', placeholder: 'email', validators: [
                                                        {validator: 'required', errorMessage: "pls_enter_your_email"},
                                                        {validator: 'email', errorMessage: 'email_not_valid'}
                                                        ]},
                {name: 'password', type: 'password', placeholder: 'password', fieldType:'password', showPasswordButton: true, validators: [{validator: 'required', errorMessage: "required"}]}
          ]
        },
        {
          title: 'additional_info',
          type: 'step-two',
          fields: [
                     ]
        },
        {
          title: 'area', type: 'actionarea', fields: [
            {name: 'register', type: 'button', color: 'primary', result: 'register-step', send: true},
          ]
        }
      ]
    }
  },
  {
    instancename: 'set-password',
    config: {
      formValidator: ['checkPasswords'],
      editable: [
        {
          title: 'set password', fields: [
            {name: 'password', type: 'password', validators: [
                {validator: 'required', errorMessage: "Please enter the password!"},
                {validator: 'minlength', val: 8, errorMessage: "The password should contain min. 8 characters!"}
              ]
            },
            {name: 'confirmPassword', type: 'password', validators: [
              {validator: 'required', errorMessage: "Please confirm the password!"},
              {validator: 'minlength', val: 8, errorMessage: "The password should contain min. 8 characters!"},
            ]
          },
          ]
        },
        {
          title: 'area', type: 'actionarea', fields: [
            {name: 'register', type: 'button', color: 'primary', result: 'register-with-code', send: true},
          ]
        }
      ]
    }
  },
]

export const returnConfig = (instancename: string) =>{
  return appConfig.find(one=>one.instancename===instancename)
}
