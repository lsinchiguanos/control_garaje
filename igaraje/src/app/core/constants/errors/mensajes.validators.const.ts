export const ERRORS_VALIDATIONS = {
  AUTH: {
    USERNAME_REQUIRED: '*El usuario es requerido!',
    USERNAME_PATTERN:
      '*El formato de usuario debe tener al menos una mayúscula y un número!',
    PASSWORD_REQUIRED: '*La contraseña es requerida!',
    PASSWORD_PATTERN:
      '*La contraseña debe contener un caracter especial, y al menos una minuscula, una mayúscula y un número!'
  },
  SOLO_LETRAS: {
    REQUIRED_FIELD: '*El campo es requerido!',
    FORMATED_PATTERN: '*Formato del texto no es válido!',
  },
  SOLO_NUMEROS: {
    REQUIRED_FIELD: '*El campo es requerido!',
    FORMATED_PATTERN: '*Campo solo acepta número!',
  },
  ALFANUMERICO: {
    REQUIRED_FIELD: '*El campo es requerido!',
    FORMATED_PATTERN: '*Formato del texto no es válido!',
  },
  EMAIL: {
    REQUIRED_FIELD: '*El campo es requerido!',
    FORMATED_PATTERN: '*Email no es válido! Ej: info@gmail.com',
  },
  LONGITUD: {
    MIN_LENGTH: '*Logintud mínima del campo: ',
    MAX_LENGTH: '*Logintud máxima del campo: ',
    MIN: '*El campo debe ser mayor o igual a: ',
    MAX: '*El campo debe ser menor o igual a: '
  },
  COMBO_BOX: {
    MIN: '*Escoger una opción válida'
  },
  HORARIO: {
    REQUIRED_FIELD: '*El campo es requerido!',
    FORMATED_PATTERN: '*Horario no válida',
  },
  COORDENADAS: {
    REQUIRED_FIELD: '*El campo es requerido!',
    FORMATED_PATTERN: '*Coordenada no válida',
  }
}
