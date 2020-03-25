
// eslint-disable-next-line no-useless-escape
export const emailRegex = new RegExp(/^([a-zA-Z0-9_\-.+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/);

// min length 8 chars, atleast: 1 lowercase letter, 1 uppercase letter, 1 special char
// eslint-disable-next-line no-useless-escape
export const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^\$\*\.\[\]{\}\(\)\?\-\"\!\@\#\%\&\/\\\,\>\<\'\:\;|_\~\`])(?=.{8,})/);
