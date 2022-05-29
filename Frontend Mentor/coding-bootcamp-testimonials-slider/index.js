const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const testimonial = document.querySelector(".testimonial");
const userName = document.querySelector(".name");
const designation = document.querySelector(".designation");
const userPic = document.querySelector(".user-pic");

const firstUser = () => {
  testimonial.innerText =
    "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
  userName.innerText = "Tanya Sinclair";
  designation.innerText = "UX Engineer";
  userPic.setAttribute("src", "./images/image-tanya.jpg");
  previous.removeEventListener("click", firstUser);
  next.addEventListener("click", secondUser);
  previous.classList.add("disabled");
  next.classList.remove("disabled");
};

const secondUser = () => {
  testimonial.innerText =
    "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
  userName.innerText = "John Tarkpor";
  designation.innerText = "Junior Front-end Developer";
  userPic.setAttribute("src", "./images/image-john.jpg");
  next.removeEventListener("click", secondUser);
  previous.addEventListener("click", firstUser);
  next.classList.add("disabled");
  previous.classList.remove("disabled");
};

next.addEventListener("click", secondUser);
previous.addEventListener("click", firstUser);
