const initailState: any = {
    username: '',
    isUsernameValid: true,
    password: '',
    isPasswordValid: true
};

const USER_ACTIONS: any = {
    USERNAME_UPDATE: 'USERNAME_UPDATE',
    ERROR_USERNAME: 'ERROR_USERNAME',
    PASSWORD_UPDATE: 'PASSWORD_UPDATE',
    ERROR_PASSWORD: 'ERROR_PASSWORD'
};

const USER_VALIDATIONS: any = {
    MAX_USERNAME_LEN: 32,
    MAX_PASSWORD_LEN: 15,
    MIN_USERNAME_LEN: 15,
    MIN_PASSWORD_LEN: 8
};

export { initailState, USER_ACTIONS, USER_VALIDATIONS };