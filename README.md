# TextInputValidator

## What is it ?

Utility class that allow you to validate text formats for valid emails format, non-empty text and/or text matching.

## Installation

`npm install @nexapp/react-native-text-input-validator --save`

or

`yarn add @nexapp/react-native-text-input-validator`

## Usage

`import { TextInputValidator } from "@nexapp/react-native-text-input-validator"`

### Use to validate email

```
const validation = TextInputValidator.validateEmail("chucknorris@nexapp.ca");
```
The return value will be one of the following :  
`TextInputValidation.Empty`  
`TextInputValidation.Valid`  
`TextInputValidation.BadEmailFormat`  

### Use to validate passwords

```
const validation =  TextInputValidator.validatePasswords("12345", "12345");
```
The return value will be one of the following :   
`TextInputValidation.Empty`  
`TextInputValidation.DoNotMatch`  
`TextInputValidation.Valid`  

### Use to validate that a field is not empty

```
const validation =  TextInputValidator.validateNotEmpty("notEmptyString");
```
The return value will be one of the following :   
`TextInputValidation.Empty`  
`TextInputValidation.Valid`

## Licence
MIT
