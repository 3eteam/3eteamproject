// 사용자 이름 눌렀을 때 댓글 로딩
document.querySelectorAll('#user-list tr').forEach((el) => {
  el.addEventListener('click', function () {
    const id = el.querySelector('td').textContent;
    getComment(id);
  });
});
// 사용자 로딩
async function getUser() {
  try {
    const res = await axios.get('/users');
    const users = res.data;
    console.log(users);
    const tbody = document.querySelector('#user-list tbody');
    tbody.innerHTML = '';
    users.map(function (user) {
      const row = document.createElement('tr');
      row.addEventListener('click', () => {
        getComment(user.id);
      });
    });
  } catch (err) {
    console.error(err);
  }
}
// 댓글 로딩
async function getComment(id) {
  try {
    const res = await axios.get(`/users/${id}/comments`);
    const comments = res.data;
    const tbody = document.querySelector('#comment-list tbody');
    tbody.innerHTML = '';
    comments.map(function (comment) {
      const edit = document.createElement('button');
      edit.textContent = '수정';
      edit.addEventListener('click', async () => { // 수정 클릭 시
        const newComment = prompt('바꿀 내용을 입력하세요');
        if (!newComment) {
          return alert('내용을 반드시 입력하셔야 합니다');
        }
        try {
          await axios.patch(`/comments/${comment.id}`, { comment: newComment });
          getComment(id);
        } catch (err) {
          console.error(err);
        }
      });
      const remove = document.createElement('button');
      remove.textContent = '삭제';
      remove.addEventListener('click', async () => { // 삭제 클릭 시
        try {
          await axios.delete(`/comments/${comment.id}`);
          getComment(id);
        } catch (err) {
          console.error(err);
        }
      });
      // 버튼 추가
      td = document.createElement('td');
      td.appendChild(edit);
      row.appendChild(td);
      td = document.createElement('td');
      td.appendChild(remove);
      row.appendChild(td);
      tbody.appendChild(row);
    });
  } catch (err) {
    console.error(err);
  }
}
// // 사용자 등록 시
// document.getElementById('user-form').addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const email = e.target.email.value;
//   const password = e.target.password.value;
//   // const married = e.target.married.checked;
//   if (!email) {
//     return alert('이메일을 입력하세요');
//   }
//   if (!password) {
//     return alert('비밀번호를 입력하세요');
//   }
//   try {
//     //post에 /users가 맞나???????????????
//     await axios.post('/users', { email, password });
//     getUser();
//   } catch (err) {
//     console.error(err);
//   }
//   e.target.email.value = '';
//   e.target.password.value = '';
//   // e.target.married.checked = false;
// });

// // 댓글 등록 시
// document.getElementById('comment-form').addEventListener('submit', async (e) => {
//   e.preventDefault();
//   // userid -> id로 바꿔봤음
//   const nick = e.target.nick.value;
//   const comment = e.target.comment.value;
//   if (!nick) {
//     return alert('닉네임을 입력하세요');
//   }
//   if (!comment) {
//     return alert('댓글을 입력하세요');
//   }
//   try {
//     //post에 /comments가 맞나???????????????
//     await axios.post('/comments', { nick, comment });
//     getComment(nick);
//   } catch (err) {
//     console.error(err);
//   }
//   // userid -> nick으로 바꿔봤음
//   e.target.nick.value = '';
//   e.target.comment.value = '';
// });