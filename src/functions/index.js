export const getUserInfo = (user) => ({
   userInfo: user.teacher || user.parent || user.student,
   roleText: user.teacher? 'Вчительський аккаунт' :
       user.parent ? 'Батьківський аккаунт' :
           user.student ? 'Студентський аккаунт': ''
});

