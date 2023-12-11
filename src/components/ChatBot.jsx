import React from "react";
import "../styles/chatBot.css";

const ChatBot = () => {
  const clearChatContainer = () => {
    let questionToRemove = document.querySelectorAll(".btn");
    let elementsArray = Array.from(questionToRemove);
    elementsArray.forEach(function (element) {
      element.remove();
    });
  };

  const scrollToBottom = () => {
    let chatContainer = document.querySelector("#chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  const cleanQuestion = (htmlElement) =>{
    // Видаляємо всі повідомлення
    while (htmlElement.firstChild) {
      htmlElement.removeChild(htmlElement.firstChild);
    }
  }

  const showMessages = () => {
    const chatContainer = document.querySelector("#chat-container");

    cleanQuestion(chatContainer);

    const messages = [
      "Hi!",
      "I'm Mariia Bot, here to assist with any questions about Mariia's work.",
      "How can I help you today?",
    ];

    messages.forEach((text, index) => {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", "bot");
      messageElement.textContent = text;
      messageElement.style.animation = `fadeIn 0.5s ease ${
        index * 0.5
      }s forwards`;

      chatContainer.appendChild(messageElement);
    });

    showQuestions();
  };

  const showQuestions = () => {
    const chatContainer = document.querySelector("#chat-container");

    const questions = [
      "Just saying Hello!👋",
      "Daily Reminder💫",
      "How can I reach out to you?",
      "Tell me about your work experience",
      "Tell me about your soft skills",
    ];

    questions.forEach((text, index) => {
      const questionElement = document.createElement("button");
      questionElement.classList.add("message", "btn");
      questionElement.textContent = text;
      questionElement.style.animation = `fadeIn 0.5s ease ${
        index + 2 * 0.5
      }s forwards`;

      questionElement.addEventListener("click", () => {
        showAnswer(text, index);
      });

      chatContainer.appendChild(questionElement);
      scrollToBottom();
    });
  };

  const addMessageToContainer = (
    text,
    className,
    animationDelay = 0,
    isHTML = false
  ) => {
    const chatContainer = document.querySelector("#chat-container");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);

    if (isHTML) {
      messageElement.innerHTML = text;
    } else {
      messageElement.textContent = text;
    }

    messageElement.style.animation = `fadeIn 0.5s ease ${animationDelay}s forwards`;
    chatContainer.appendChild(messageElement);
  };

  const showAnswer = (text, index) => {
    //delete all question before answer
    clearChatContainer();

    ///user question
    const chatContainer = document.querySelector("#chat-container");
    const userQuestion = document.createElement("div");
    userQuestion.classList.add("message", "user");
    userQuestion.textContent = text;
    chatContainer.appendChild(userQuestion);

    ///message from bot - question after answer
    const botQuestionAfterAnswer = document.createElement("div");
    botQuestionAfterAnswer.classList.add("message", "bot");
    botQuestionAfterAnswer.textContent = "Can I help you with anything else?";

    const remainder = [
      "Love yourself first, and everything else falls into place ❤️",
      "Your thoughts shape your world 🌏",
      "You can overcome tough things 💪🏽",
      "Don't forget to be awesome today 😎",
      "You're someone's reason to smile 😊",
    ];

    switch (index) {
      case 0:
        addMessageToContainer(
          "Hello! Thanks for saying hi 👋 I hope you enjoyed looking at my work.",
          "bot",
          1
        );
        showQuestions();
        break;
      case 1:
        addMessageToContainer(
          remainder[Math.floor(Math.random() * 5)],
          "bot",
          1
        );
        showQuestions();
        break;
      case 2:
        addMessageToContainer(
          "Scroll to the bottom of the page for the links. Or mail me at mariyaschulezhko@gmail.com",
          "bot",
          1
        );
        showQuestions();
        break;
      case 3:
        addMessageToContainer(
          "02.06.2021 - 30.03.2022 - Ukrainian company Aniart, PHP Web Developer position.  <br>12.05.2022 - 07.10.2022 -  Latvian company ScandiWeb, position React Web Developer remotely.",
          "bot",
          1,
          true
        );
        showQuestions();
        break;
      case 4:
        addMessageToContainer(
          "Communication😀<br>Problem-solving😎<br>Organization✍️<br>Design Orientation👀<br>Learning Orientation🤓 <br>Empathy😇",
          "bot",
          1,
          true
        );
        showQuestions();
        break;
        default:
          return '';
    }
  };

  return (
    <>
      <input type="checkbox" id="click" />
      <label onClick={showMessages} for="click">
        <i class="fab fa-facebook-messenger"></i>
        <i class="fas fa-times"></i>
      </label>

      <div className="chatBot-container">
        <div className="chatBot-header">
          <div className="chatBot-title">
            <strong>Mariia Bot</strong>
            <br />
            Ask me a question
          </div>
        </div>
        <div className="chatBot-messages-container">
          <div id="chat-container"></div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
