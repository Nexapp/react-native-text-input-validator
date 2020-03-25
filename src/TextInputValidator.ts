import { emailRegex } from "./fieldValidators";

export enum TextInputValidation {
  Empty = "Empty",
  DoNotMatch = "Do Not Match",
  BadEmailFormat = "Bad Email Format",
  Valid = "Valid"
}

class TextInputValidator {

  public validateEmail(email: string) {
    const validationEmailNotEmpty = this.validateNotEmpty(email);
    if (validationEmailNotEmpty === TextInputValidation.Empty) {
      return TextInputValidation.Empty;
    } else {
      return emailRegex.test(email) ?
        TextInputValidation.Valid :
        TextInputValidation.BadEmailFormat;
    }
  }

  public validatePasswords(text1?: string, text2?: string): TextInputValidation {
    const validationText1 = this.validateNotEmpty(text1);
    const validationText2 = this.validateNotEmpty(text2);
    if (validationText1 === TextInputValidation.Empty ||
      validationText2 === TextInputValidation.Empty) {
      return TextInputValidation.Empty;
    } else {
      return this.validateMatch(text1, text2);
    }
  }

  public validateMatch(text1?: string, text2?: string): TextInputValidation {
    return text1 !== text2 ? TextInputValidation.DoNotMatch : TextInputValidation.Valid;
  }

  public validateNotEmpty(text?: string): TextInputValidation {
    if (text === undefined || text.length === 0) {
      return TextInputValidation.Empty;
    }
    return TextInputValidation.Valid;
  }

}

export default new TextInputValidator();