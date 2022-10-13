const start = (id) => {
    console.log(id);
    if(id != '' && id != null) {
        window.location.href = "./user";
    } else {
        alert("로그인 해주세요.");
    }
}