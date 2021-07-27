export interface sortByT {
  name: string;
  direction: string;
}

export interface validatorT {
  validator: string;
  errorMessage: string;
  val?: any;
}

export interface oneFieldT {
  name: string;
  postfix?: string;
  type: string;
  showPasswordButton?: boolean;
  disabled?: boolean;
  show?: boolean;
  result?: string;
  send?: boolean;
  color?: string;
  include?: boolean;
  disabledOnScreen?: boolean;
  removeSpaces?: boolean;
  options?: dropdownOptionsT[] | dropdownListT[];
  interface?: string;
  fieldToObserve?: string;
  selectAll?: boolean;
  fieldType?: string;
  numbersOnly?: boolean;
  decimal?: boolean;
  formatInput?: boolean;
  translateValue?: boolean;
  config?: checkboxListConfigT[];
  optionsFilter?: string;
  keys?: string;
  validators?: validatorT[];
  initialValue?: string;
  isLabelColored?: boolean;
  placeholder?: string;
}

export interface fieldTypeT{
  fieldType?: string;
  numbersOnly?: boolean;
}

export interface editableT {
  title: string;
  type?: string;
  fields: oneFieldT[];
}

export interface instanceConfigT {
  allcols?: string[];//all possible columns to show
  cols?: string[];
  sortCols?: sortByT[];
  editable?: editableT[];
  apipoint?: apiPointT;
  formValidator?: string[];
  makeFormTouched?: boolean;
  headerConfig?: headerConfigT;
}

export interface headerConfigT {
  logoPicture: string;
  logoPictureLink: string;
  headPicture: string;
  toolbarConfig: toolbarConfigT[] ;
  toolbarIfLoggedIn?: toolbarConfigT[];
}

export enum toolbarElementType  {
  icon = 'icon',
  button = 'button',
  languageSelection = 'languageSelection',
  logout = 'logout'
}

export interface toolbarConfigT {
  type: toolbarElementType;
  label?: string;
  icon_name?: string;
  link?: string;
  color?: string;
  size?: number
}



export interface dataConfigT {
  instancename: string;
  config: instanceConfigT;
}

export interface dropdownOptionsT {
  label: string;
  value: any;
  filter?: string;
}

export interface checkboxListConfigT {
  label: string;
  value: any;
  filter?: string;
}

export interface dropdownListT {
  filter: string;
  options: string[]
}

export interface fieldToObserveT {
  fieldToObserve: string
}


export interface apiPointT {
  create?: string;
  get?: string;
  update?: string;
  delete?: string;
}
