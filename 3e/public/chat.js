"use strict"
const socket = io();

console.log(io);

const nickname = document.querySelector("#nickname")
const chatlist = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displyContainer = document.querySelector(".display-container");

chatInput.addEventListener("keypress", (event)=>{
    if(event.keyCode === 13) {
        send()
    }
})

function send(){
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }
    socket.emit("chatting", param)
    chatInput.value = ''
}

sendButton.addEventListener("click", send)



socket.on("chatting", (data) => {
    const { name, msg, time } = data;
    const item = new LiModel(name, msg, time);
    item.makeLi()
    displyContainer.scrollTo(0, displyContainer.scrollHeight)
})

function LiModel(name, msg, time){
    this.name = name;
    this.msg = msg;
    this.time = time;
    this.makeLi = ()=>{
        const li = document.createElement("li");
        li.classList.add(nickname.value === this.name ? "sent": "received")//"received": "sent"
        const dom = `<li class="profile">
        <li class="user">${this.name}</li>
        <img class="image" src="https://i.esdrop.com/d/cl3pewp2aooj/KLxhBUlwtC.jpeg" alt="any">
    </li>
    <li class="message">${this.msg}</li>
    <li class="time">${this.time}</li>`;
    li.innerHTML = dom;
    chatlist.appendChild(li)
    }
}