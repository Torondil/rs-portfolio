const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: "",
    capsLock: false
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
      element.addEventListener("focus", () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
      });
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    var keyLayout = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
      "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "up",
      "shift", "en", "space", "voice", "left", "down", "right"
    ];

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = ["backspace", "]", "enter", "up"].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");
      keyElement.setAttribute("data-key", "76")

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvent("oninput");
            const audio = document.querySelector(`audio[data-key="68"]`);
            audio.currentTime = 0;
            audio.play();
          });

          break;

        case "caps":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click", () => {
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            const audio = document.querySelector(`audio[data-key="75"]`);
            audio.currentTime = 0;
            audio.play();
          });

          break;

        case "shift":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = "Shift";

          keyElement.addEventListener("click", () => {
            this._toggleCapsLock ();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            const audio = document.querySelector(`audio[data-key="74"]`);
            audio.currentTime = 0;
            audio.play();
          });

          break;

          case "voice":
            keyElement.classList.add("keyboard__key--wide");
            keyElement.innerHTML = createIconHTML("keyboard_voice");

            keyElement.addEventListener("click", () => {
              keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
              const audio = document.querySelector(`audio[data-key="76"]`);
              audio.currentTime = 0;
              audio.play();
            });

          break;

          case "up":
            keyElement.innerHTML = createIconHTML("keyboard_arrow_up");

            keyElement.addEventListener("click", () => {
              keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
              const audio = document.querySelector(`audio[data-key="76"]`);
              audio.currentTime = 0;
              audio.play();
            });

          break;

          case "down":
            keyElement.innerHTML = createIconHTML("keyboard_arrow_down");

            keyElement.addEventListener("click", () => {
              keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
              const audio = document.querySelector(`audio[data-key="76"]`);
              audio.currentTime = 0;
              audio.play();
            });

          break;

          case "left":
            keyElement.innerHTML = createIconHTML("keyboard_arrow_left");

            keyElement.addEventListener("click", () => {

              keyElement.onclick = () => {
                document.querySelector(".use-keyboard-input").setRangeText("", document.querySelector(".use-keyboard-input").selectionStart-1,  document.querySelector(".use-keyboard-input").selectionEnd, "end");
                document.querySelector(".use-keyboard-input").focus();
                const audio = document.querySelector(`audio[data-key="76"]`);
                audio.currentTime = 0;
                audio.play();
              };
            });

          break;

          case "right":
            keyElement.innerHTML = createIconHTML("keyboard_arrow_right");

            keyElement.addEventListener("click", () => {
              this.properties.value += " ";
              this._triggerEvent("oninput");
              const audio = document.querySelector(`audio[data-key="76"]`);
              audio.currentTime = 0;
              audio.play();
            });

          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this._triggerEvent("oninput");
            const audio = document.querySelector(`audio[data-key="71"]`);
            audio.currentTime = 0;
            audio.play();
          });

          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
            const audio = document.querySelector(`audio[data-key="76"]`);
            audio.currentTime = 0;
            audio.play();
          });

          break;

        case "done":
          keyElement.classList.add("keyboard__key--dark", "keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener("click", () => {
            this.close();
            this._triggerEvent("onclose");
          });

          break;

        case "en":
          keyElement.classList.add("keyboard__key--wide");

          keyElement.classList.add("ruEn");

          keyElement.innerHTML = "en";

          keyElement.addEventListener("click", () => {

            keyElement.innerHTML = "ru";
            keyLayout = [
              "роп1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
              "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
              "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
              "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "up",
              "shift", "ru/en", "space", "voice", "left", "down", "right"
            ];

            console.log(keyLayout);
            const audio = document.querySelector(`audio[data-key="76"]`);
            audio.currentTime = 0;
            audio.play();

          });
          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener("click", () => {
            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            this._triggerEvent("oninput");
            const audio = document.querySelector(`audio[data-key="76"]`);
            audio.currentTime = 0;
            audio.play();
          });

          break;

      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
      document.querySelector(".use-keyboard-input").focus();
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
    this.properties.value = "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden");
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
