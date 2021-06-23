const messages = {
  sucessLogin: (msg = "Успешная авторизация") => msg,
  failedLogin: (msg = "Не удалось авторизироваться") => msg,
  sucessRegistration: (msg = "Успешная регистрация") => msg,
  failedRegistration: (msg = "Не удалось зарегистрироваться") => msg,
  inProcess: (msg = "Авторизируемся...") => msg,
  successRegister: (msg = "Success registration. Please check e-mail") => msg,
};

export const {
  sucessLogin,
  failedLogin,
  sucessRegistration,
  failedRegistration,
  inProcess,
  successRegister,
} = messages;
