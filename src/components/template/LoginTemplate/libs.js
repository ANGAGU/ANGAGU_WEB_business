/* eslint-disable no-alert */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getLogin = async (titleType, api, id, pw, history) => {
  try {
    console.log(id, pw);
    /* **************************** 기업 로그인 ***************************** */
    if (titleType === '로그인') {
      const result = await api.post('/company/login', {
        email: id,
        password: pw,
      });
      if (result.status === 'success') {
        // eslint-disable-next-line no-alert
        alert('기업 로그인 성공');
        localStorage.setItem('token', result.data.token);
        history.push('/Main');
      } else {
        alert('로그인에 실패하였습니다.');
        history.push('/');
      }
    } else {
      /* **************************** 관리자 로그인 ***************************** */
      localStorage.setItem('isAdmin', true);
      const result = await api.post('/admin/login', {
        email: id,
        password: pw,
      });
      if (result.status === 'success') {
        // eslint-disable-next-line no-alert
        alert('관리자 로그인 성공');
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('isAdmin', true);
        history.push('/Main');
      } else {
        alert('로그인에 실패하였습니다.');
        history.push('/');
      }
    }
  } catch (err) {
    alert('로그인에 실패하였습니다.');
    history.push('/');
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const findPw = async history => {
  try {
    // 여기에 비밀번호 찾기 페이지 필요
    history.push('/Main');
  } catch (err) {
    history.push('/Main');
  }
};

export { getLogin, findPw };
