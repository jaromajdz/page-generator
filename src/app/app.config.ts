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
          title: 'client',
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
            {name: 'home_cell', type: 'input', placeholder: 'home_cell', validators: [{validator: validatorsType.required, errorMessage: 'pls_enter_your_number'}]},
            {name: 'home_street', type: 'input', placeholder: 'home_street', validators: []},
            {name: 'home_house_number', type: 'input', placeholder: 'home_house_number', validators: []},
            {name: 'home_zip_code', type: 'input', placeholder: 'home_zip_code', validators: []},
            {name: 'home_city', type: 'input', placeholder: 'home_city', validators: []},
            {name: 'home_country', type: 'input', placeholder: 'home_country', validators: []},
            {name: 'academic_title', type: 'input', placeholder: 'academic_title', validators: []},
            {name: 'dob', type: fieldTypes.date_picker, placeholder: 'dob', validators: [{validator: 'validateDate', errorMessage: 'wrong_date'}]},//datepicker
            {name: 'quartier', type: 'input', placeholder: 'quartier', validators: []},
            {name: 'password', type: 'password', placeholder: 'password', fieldType:'password', showPasswordButton: true, validators: [{validator: 'required', errorMessage: "required"}]}
          ]
        },
        {
          title: 'property',
          type: 'step-two',
          fields: [
            //region is the canton
            {name: 'region', type: fieldTypes.dropdown, options: canton, validators: [{validator: validatorsType.required, errorMessage: 'pls_chose_canton'}]},
            {name: 'location_id', type: fieldTypes.dependent_dropdown, options:
              regions,
              fieldToObserve: 'property.region',
              validators: [{validator: validatorsType.required, errorMessage: 'pls_chose_region'}]},//dropdown
            {name: 'city', type: fieldTypes.dependent_dropdown,
              options: cities,
              fieldToObserve: 'property.location_id',
              validators: [{validator: validatorsType.required, errorMessage: 'pls_chose_city'}]},//dropdown
            {name: 'zip_code', type: fieldTypes.post_code, fieldToObserve: 'property.city', validators: [{validator: 'required', errorMessage: "required"}]},
            {name: 'street', type: 'input', placeholder: 'street', validators: [{validator: 'required', errorMessage: "required"}]},
            {name: 'house_number', type: 'input', placeholder: 'house_number', validators: [{validator: 'required', errorMessage: "required"}]},
            {name: 'country', type: 'input', placeholder: 'country', initialValue: "Schweiz",
              disabledOnScreen: true,
              translateValue: true,
              validators: [{validator: 'required', errorMessage: "required"}]},
            // object step
            {name: 'rs_type', type: fieldTypes.dropdown, options:[
                {label: 'flat', value: 'APARTMENT'},
                {label: 'house', value: 'HOUSE'}
              ], validators: [{validator: 'required', errorMessage: "required"}]},//dropdown
            {name: 'investment_type', type: fieldTypes.dependent_dropdown,
              fieldToObserve: 'property.rs_type',
               options: [
                   {
                    filter: 'APARTMENT',
                    options: [
                      'ROOF_STOREY',
                      'LOFT',
                      'MAISONETTE',
                      'PENTHOUSE',
                      'TERRACED_FLAT',
                      'APARTMENT',
                      'RAISED_GROUND_FLOOR',
                      'HALF_BASEMENT',
                      'ATTIKA',
                      'OTHER'
                    ]
                  },
                  {
                    filter: 'HOUSE',
                    options: [
                      'SINGLE_FAMILY_HOUSE',
                      'TWO_FAMILY_HOUSE',
                      'TERRACE_HOUSE',
                      'MID_TERRACE_HOUSE',
                      'TERRACE_END_HOUSE',
                      'END_TERRACE_HOUSE',
                      'MULTI_FAMILY_HOUSE',
                      'TOWNHOUSE',
                      'FINCA',
                      'BUNGALOW',
                      'FARMHOUSE',
                      'SEMIDETACHED_HOUSE',
                      'VILLA',
                      'CASTLE_MANOR_HOUSE',
                      'SPECIAL_REAL_ESTATE',
                      'TWIN_SINGLE_FAMILY_HOUSE'
                    ]
                  }
              ],validators: []},//checkbox multiple
            {name: 'number_of_rooms', type: 'input',
              placeholder: 'number_of_rooms',
              numbersOnly: true,
              decimal: false,
              validators: [{validator: 'required', errorMessage: "required"}]
            },
            {name: 'living_space', type: fieldTypes.input, placeholder: 'living_space', numbersOnly: true, postfix: 'm<sup>2</sup>', validators: []},
            {name: 'plot_area', type: fieldTypes.input, placeholder: 'plot_area', numbersOnly: true, postfix: 'm<sup>2</sup>', validators: []},
            {name: 'cubature', type: fieldTypes.input, placeholder: 'cubature', numbersOnly: true, postfix: 'm<sup>3</sup>', validators: []},
            {name: 'number_of_floors', numbersOnly: true, type: 'input', placeholder: 'number_of_floors', validators: []},
            {name: 'number_of_bath_rooms', numbersOnly: true, type: 'input', placeholder: 'number_of_bath_rooms', validators: []},
            {name: 'number_of_bed_rooms', type: 'input', placeholder: 'number_of_bed_rooms', numbersOnly: true, validators: []},
            {name: 'number_of_parking_spaces', numbersOnly: true, type: 'input', placeholder: 'number_of_parking_spaces', validators: []},
            {name: 'number_of_balconies', numbersOnly: true, type: 'input', placeholder: 'number_of_balconies', validators: []},
            {name: 'balcony_space', numbersOnly: true, postfix: 'm<sup>2</sup>', type: 'input', placeholder: 'balcony_space', validators: []},
            {name: 'number_of_terraces', numbersOnly: true, type: 'input', placeholder: 'number_of_terraces', validators: []},
            {name: 'price', type: fieldTypes.input, placeholder: 'price', numbersOnly: true, validators: []},
            {name: 'WennGeschätztDatum', type: fieldTypes.date_picker, validators: [{validator: 'validateDate', errorMessage: 'wrong date'}]},//datepicker
            {name: 'ZeitrahmenFürTausch', type: 'input', placeholder: 'ZeitrahmenFürTausch', validators: []},//dropdown
            {name: 'picture', type: 'file', validators: [{validator: 'required', errorMessage: "pls_chose_the_picture"}]},
            {name: 'guest_toilet', type: fieldTypes.checkbox, validators: []},
            {name: 'lift', type: 'checkbox', validators: []},//checkbox
            {name: 'barrier_free', type: 'checkbox', validators: []},//checkbox
            {name: 'storeroom', type: fieldTypes.checkbox, validators: []},//checkbox
            {name: 'cellar', type: fieldTypes.checkbox, validators: []},//checkbox
            {name: 'chimney', type: fieldTypes.checkbox, validators: []},//checkbox
            {name: 'sauna', type: fieldTypes.checkbox, validators: []},//checkbox
            {name: 'swimming_pool', type: fieldTypes.checkbox, validators: []},//checkbox
            {name: 'garden', type: fieldTypes.checkbox, validators: []},
            {name: 'alarm_system', type: fieldTypes.checkbox, validators: []},//checkbox
            {name: 'air_conditioning', type: fieldTypes.checkbox, validators: []},//checkbox
            {name: 'Waschmaschine', type: fieldTypes.checkbox, validators: []},//checkbox
            {name: 'Tumbler/Trockner', type: fieldTypes.checkbox, validators: []},//checkbox
            {name: 'empty', type: 'empty',include: false, validators: []},
           ]
        },
        {
          title: 'saved_query',
          type: 'step-three',
          fields: [
             // search profile step
            {name: 'regions', type: fieldTypes.checkbox_list, options: canton, validators: [{validator: validatorsType.required, errorMessage: 'pls_chose_canton'}]},
            {name: 'cities', type: fieldTypes.dependent_checkboxes,
              options: cities,
              fieldToObserve: 'saved_query.location_id',
              validators: [
                  //{validator: validatorsType.required, errorMessage: 'pls_chose_city'}
                ]},//dropdown
            {name: 'location_id', type: fieldTypes.dependent_checkboxes, options:
               regions,
               fieldToObserve: 'saved_query.regions',
               validators: [{validator: validatorsType.required, errorMessage: 'pls_chose_region'}]},//dropdown
            {name: 'rs_types', type: fieldTypes.dropdown, options:[
                {label: 'flat', value: 'APARTMENT'},
                {label: 'house', value: 'HOUSE'}
              ], validators: [{validator: 'required', errorMessage: 'pls_chose_type'}]},//dropdown Wohnung / Haus
            {name: "empty", type: fieldTypes.empty, include: false, validators: []},
            {name: 'rs_categories', type: fieldTypes.dependent_checkboxes,
              selectAll: true,
              options: [
                {
                  filter: 'APARTMENT',
                  options: [
                    'ROOF_STOREY',
                    'LOFT',
                    'MAISONETTE',
                    'PENTHOUSE',
                    'TERRACED_FLAT',
                    'APARTMENT',
                    'RAISED_GROUND_FLOOR',
                    'HALF_BASEMENT',
                    'ATTIKA',
                    'OTHER'
                  ]
                },
                {
                  filter: 'HOUSE',
                  options: [
                    'SINGLE_FAMILY_HOUSE',
                    'TWO_FAMILY_HOUSE',
                    'TERRACE_HOUSE',
                    'MID_TERRACE_HOUSE',
                    'TERRACE_END_HOUSE',
                    'END_TERRACE_HOUSE',
                    'MULTI_FAMILY_HOUSE',
                    'TOWNHOUSE',
                    'FINCA',
                    'BUNGALOW',
                    'FARMHOUSE',
                    'SEMIDETACHED_HOUSE',
                    'VILLA',
                    'CASTLE_MANOR_HOUSE',
                    'SPECIAL_REAL_ESTATE',
                    'TWIN_SINGLE_FAMILY_HOUSE'
                  ]
                }
              ],
              fieldToObserve: 'saved_query.rs_types', validators: []//{validator: validatorsType.required, errorMessage: 'pls_chose_category'}]
            },
            {name: 'living_space', type: fieldTypes.input, placeholder: 'living_space', numbersOnly: true, postfix: 'm<sup>2</sup>', validators: []}, //jaki typ pola w bazie
            {name: 'living_space_to', type: fieldTypes.input, placeholder: 'living_space_to', numbersOnly: true, postfix: 'm<sup>2</sup>', validators: []},
            {name: 'number_of_rooms', numbersOnly: true, type: 'input', placeholder: 'number_of_rooms', validators: []},
            {name: 'number_of_rooms_to', numbersOnly: true, type: 'input', placeholder: 'number_of_rooms_to', validators: []},
            {name: 'number_of_bath_rooms', numbersOnly: true, type: 'input', placeholder: 'number_of_bath_rooms', validators: []},
            {name: 'number_of_bath_rooms_to', numbersOnly: true, type: 'input', placeholder: 'number_of_bath_rooms_to', validators: []},
            {name: 'price', type: fieldTypes.input, placeholder: 'price', numbersOnly: true, validators: []},
            {name: 'price_to', type: fieldTypes.input, placeholder: 'price_to', numbersOnly: true, validators: []},
            {name: 'floor', numbersOnly: true, type: 'input', placeholder: 'floor', validators: []},
            {name: 'floor_to', numbersOnly: true, type: 'input', placeholder: 'floor_to', validators: []},
            {name: 'plot_area', type: fieldTypes.input, placeholder: 'plot_area', numbersOnly: true, postfix: 'm<sup>2</sup>', validators: []},
            {name: 'plot_area_to', type: fieldTypes.input, placeholder: 'plot_area_to', numbersOnly: true, postfix: 'm<sup>2</sup>', validators: []},
            {name: 'construction_year', numbersOnly: true, type: 'input', placeholder: 'construction_year', validators: []},
            {name: 'construction_year_to', numbersOnly: true, type: 'input', placeholder: 'construction_year_to', validators: []},
            {name: 'lift', type: fieldTypes.checkbox, validators: []},
            {name: 'garden', type: fieldTypes.checkbox, validators: []},
            //{name: 'rented', type: fieldTypes.checkbox, validators: []},
            {name: 'parking_space', type: fieldTypes.checkbox, validators: []},
            {name: 'barrier_free', type: fieldTypes.checkbox, validators: []},
            {name: 'seesicht', type: fieldTypes.checkbox, validators: []},
            {name: 'empty', type: 'empty', include: false, validators: []}
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
  {
    instancename: 'settings',
    config: {
      apipoint: {
        get: 'api/users/profiles?token={token}',
        update: 'api/profiles/update/{id}?token={token}'
      },
      editable: [
        {
          title: 'Suchprofil', fields: [
            {name: 'id', type: fieldTypes.input, show: false, validators: []},
            {name: 'regions', type: fieldTypes.checkbox_list, options:
              canton,
              //fieldToObserve: 'location_id',
              validators: []},//dropdown
           {name: 'cities', type: fieldTypes.dependent_checkboxes,
             options: cities,
             removeSpaces: true,
             fieldToObserve: 'location_ids',
             validators: []},//dropdown
            {name: 'location_ids', type: fieldTypes.dependent_checkboxes,
              options: regions, fieldToObserve: 'regions',validators: []},
           {name: 'rs_types', type: fieldTypes.dropdown, options:[
               {label: 'flat', value: 'APARTMENT'},
               {label: 'house', value: 'HOUSE'}
             ], validators: []},//dropdown Wohnung / Haus
            {name: 'empty', type: fieldTypes.empty, include: false, validators: []},
            {name: 'rs_categories', type: fieldTypes.dependent_checkboxes,
              selectAll: true,
              options: [
               {
               filter: 'APARTMENT',
               options: [
                 'ROOF_STOREY',
                 'LOFT',
                 'MAISONETTE',
                 'PENTHOUSE',
                 'TERRACED_FLAT',
                 'APARTMENT',
                 'RAISED_GROUND_FLOOR',
                 'HALF_BASEMENT',
                 'ATTIKA',
                 'OTHER'
               ]
             },
             {
              filter: 'HOUSE',
              options: [
                'SINGLE_FAMILY_HOUSE',
                'TWO_FAMILY_HOUSE',
                'TERRACE_HOUSE',
                'MID_TERRACE_HOUSE',
                'TERRACE_END_HOUSE',
                'END_TERRACE_HOUSE',
                'MULTI_FAMILY_HOUSE',
                'TOWNHOUSE',
                'FINCA',
                'BUNGALOW',
                'FARMHOUSE',
                'SEMIDETACHED_HOUSE',
                'VILLA',
                'CASTLE_MANOR_HOUSE',
                'SPECIAL_REAL_ESTATE',
                'TWIN_SINGLE_FAMILY_HOUSE'
              ]
             }
             ],
            fieldToObserve: 'rs_types',
              validators: []},//dropdown multiple, dane zalezne od wyboru pola wyzej flat or house
           {name: 'living_space', type: fieldTypes.input, postfix: 'm<sup>2</sup>', fieldType: 'numeric', numbersOnly: true,validators: []},
           {name: 'living_space_to', type: fieldTypes.input, numbersOnly: true, postfix: 'm<sup>2</sup>', validators: []},
           {name: 'number_of_rooms', type: 'input', fieldType: 'numeric', numbersOnly: true, validators: []},
           {name: 'number_of_rooms_to', type: 'input', fieldType: 'numeric', numbersOnly: true, validators: []},
           {name: 'number_of_bath_rooms', type: 'input', fieldType: 'numeric', numbersOnly: true, validators: []},
            {name: 'number_of_bath_rooms_to', type: 'input', fieldType: 'numeric', numbersOnly: true, validators: []},
           {name: 'price', type: fieldTypes.input, numbersOnly: true, postfix: 'CHF', validators: []},
           {name: 'price_to', type: fieldTypes.input, numbersOnly: true, postfix: 'CHF', validators: []},
           {name: 'floor', type: 'input', numbersOnly: true, validators: []},
           {name: 'floor_to', type: 'input', numbersOnly: true, validators: []},
           {name: 'plot_area', type: fieldTypes.input,  numbersOnly: true, postfix: 'm<sup>2</sup>', validators: []},
           {name: 'plot_area_to', type: fieldTypes.input, numbersOnly: true, postfix: 'm<sup>2</sup>', validators: []},
           {name: 'construction_year', type: 'input', numbersOnly: true, validators: []},
           {name: 'construction_year_to', type: 'input', numbersOnly: true, validators: []},
           {name: 'lift', type: fieldTypes.checkbox, validators: []},
           {name: 'garden', type: fieldTypes.checkbox, validators: []},
           //{name: 'rented', type: fieldTypes.checkbox, validators: []},
           {name: 'parking_space', type: fieldTypes.checkbox, validators: []},
           {name: 'barrier_free', type: fieldTypes.checkbox, validators: []},
           {name: 'seesicht', type: fieldTypes.checkbox, validators: []}, {name: 'empty', type: 'empty', include: false, validators: []}
          ]
        },
        {
          title: 'area', type: 'actionarea', fields: [
            {name: 'save', type: 'button', color: 'primary',  result: 'search-profile-update', send: true}
          ]
        }
      ]
    }
  },
 ]

export const returnConfig = (instancename: string) =>{
  return appConfig.find(one=>one.instancename===instancename)
}
