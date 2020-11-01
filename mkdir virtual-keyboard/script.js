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
    this.elements.keysContainer.appendChild(this._createKeys());

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

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
      "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "up",
      "shift", "ru/en", "space", "voice", "left", "down", "right"
    ];

    const keyArrId = [
      [
        {
          code: 'Backquote', en: '`', EN: '~', ru: 'ё', RU: 'Ё', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
          code: 'Digit1', en: '1', EN: '!', ru: '1', RU: '!', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Digit2', en: '2', EN: '@', ru: '2', RU: '"', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Digit3', en: '3', EN: '#', ru: '3', RU: '№', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Digit4', en: '4', EN: '$', ru: '4', RU: ';', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Digit5', en: '5', EN: '%', ru: '5', RU: '%', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Digit6', en: '6', EN: '^', ru: '6', RU: ':', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Digit7', en: '7', EN: '&', ru: '7', RU: '?', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Digit8', en: '8', EN: '*', ru: '8', RU: '*', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Digit9', en: '9', EN: '(', ru: '9', RU: '(', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Digit0', en: '0', EN: ')', ru: '0', RU: ')', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Minus', en: '-', EN: '_', ru: '-', RU: '_', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Equal', en: '=', EN: '+', ru: '=', RU: '+', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Backspace', en: 'Backspace', EN: 'Backspace', ru: 'Backspace', RU: 'Backspace', letterEn: 0, letterRu: 0, activeKey: 1,
        },
      ],
      [
        {
          code: 'Tab', en: 'Tab', EN: 'Tab', ru: 'Tab', RU: 'Tab', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'KeyQ', en: 'q', EN: 'Q', ru: 'й', RU: 'Й', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyW', en: 'w', EN: 'W', ru: 'ц', RU: 'Ц', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyE', en: 'e', EN: 'E', ru: 'у', RU: 'У', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyR', en: 'r', EN: 'R', ru: 'к', RU: 'К', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyT', en: 't', EN: 'T', ru: 'е', RU: 'Е', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyY', en: 'y', EN: 'Y', ru: 'н', RU: 'Н', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyU', en: 'u', EN: 'U', ru: 'г', RU: 'Г', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyI', en: 'i', EN: 'I', ru: 'ш', RU: 'Ш', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyO', en: 'o', EN: 'O', ru: 'щ', RU: 'Щ', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyP', en: 'p', EN: 'P', ru: 'з', RU: 'З', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'BracketLeft', en: '[', EN: '{', ru: 'х', RU: 'Х', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
          code: 'BracketRight', en: ']', EN: '}', ru: 'ъ', RU: 'Ъ', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
          code: 'Backslash', en: '\\', EN: '|', ru: '\\', RU: '/', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'Del', en: 'Del', EN: 'Del', ru: 'Del', RU: 'Del', letterEn: 0, letterRu: 0, activeKey: 1,
        },
      ],
      [
        {
          code: 'CapsLock', en: 'CapsLock', EN: 'CapsLock', RU: 'CapsLock', ru: 'CapsLock', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'KeyA', en: 'a', EN: 'A', RU: 'Ф', ru: 'ф', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyS', en: 's', EN: 'S', RU: 'Ы', ru: 'ы', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyD', en: 'd', EN: 'D', RU: 'В', ru: 'в', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyF', en: 'f', EN: 'F', RU: 'А', ru: 'а', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyG', en: 'g', EN: 'G', RU: 'П', ru: 'п', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyH', en: 'h', EN: 'H', RU: 'Р', ru: 'р', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyJ', en: 'j', EN: 'J', RU: 'О', ru: 'о', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyK', en: 'k', EN: 'K', RU: 'Л', ru: 'л', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyL', en: 'l', EN: 'L', RU: 'Д', ru: 'д', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'Semicolon', en: ';', EN: ':', RU: 'Ж', ru: 'ж', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
          code: 'Quote', en: "'", EN: '"', RU: 'Э', ru: 'э', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
          code: 'Enter', en: 'Enter', EN: 'Enter', RU: 'Enter', ru: 'Enter', letterEn: 0, letterRu: 0, activeKey: 1,
        },
      ],
      [
        {
          code: 'ShiftLeft', en: 'Shift', EN: 'Shift', RU: 'Shift', ru: 'Shift', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'KeyZ', en: 'z', EN: 'Z', RU: 'Я', ru: 'я', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyX', en: 'x', EN: 'X', RU: 'Ч', ru: 'ч', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyC', en: 'c', EN: 'C', RU: 'С', ru: 'с', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyV', en: 'v', EN: 'V', RU: 'М', ru: 'м', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyB', en: 'b', EN: 'B', RU: 'И', ru: 'и', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyN', en: 'n', EN: 'N', RU: 'Т', ru: 'т', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'KeyM', en: 'm', EN: 'M', RU: 'Ь', ru: 'ь', letterEn: 1, letterRu: 1, activeKey: 0,
        },
        {
          code: 'Comma', en: ',', EN: '<', RU: 'Б', ru: 'б', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
          code: 'Period', en: '.', EN: '>', RU: 'Ю', ru: 'ю', letterEn: 0, letterRu: 1, activeKey: 0,
        },
        {
          code: 'Slash', en: '/', EN: '?', RU: '.', ru: ',', letterEn: 0, letterRu: 0, activeKey: 0,
        },
        {
          code: 'ArrowUp', en: '↑', EN: '↑', RU: '↑', ru: '↑', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'ShiftRight', en: 'Shift', EN: 'Shift', RU: 'Shift', ru: 'Shift', letterEn: 0, letterRu: 0, activeKey: 1,
        },
      ],
      [
        {
          code: 'ControlLeft', en: 'Ctrl', EN: 'Ctrl', RU: 'Ctrl', ru: 'Ctrl', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'MetaLeft', en: 'Win', EN: 'Win', RU: 'Win', ru: 'Win', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'AltLeft', en: 'Alt', EN: 'Alt', RU: 'Alt', ru: 'Alt', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'Space', en: ' ', EN: ' ', RU: ' ', ru: ' ', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'AltRight', en: 'alt', EN: 'alt', RU: 'alt', ru: 'alt', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'ArrowLeft', en: '←', EN: '←', RU: '←', ru: '←', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'ArrowDown', en: '↓', EN: '↓', RU: '↓', ru: '↓', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'ArrowRight', en: '→', EN: '→', RU: '→', ru: '→', letterEn: 0, letterRu: 0, activeKey: 1,
        },
        {
          code: 'ControlRight', en: 'Ctrl', EN: 'Ctrl', RU: 'Ctrl', ru: 'Ctrl', letterEn: 0, letterRu: 0, activeKey: 1,
        },
      ],
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

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvent("oninput");
          });

          break;

        case "caps":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click", () => {
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          });

          break;

        case "shift":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = "Shift";

          keyElement.addEventListener("click", () => {
            this._toggleCapsLock ();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          });

          break;

          case "voice":
            keyElement.classList.add("keyboard__key--wide");
            keyElement.innerHTML = createIconHTML("keyboard_voice");

            keyElement.addEventListener("click", () => {
              this._toggleCapsLock ();
              keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            });

          break;

          case "up":
            keyElement.innerHTML = createIconHTML("keyboard_arrow_up");

            keyElement.addEventListener("click", () => {
              this._toggleCapsLock ();
              keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            });

          break;

          case "down":
            keyElement.innerHTML = createIconHTML("keyboard_arrow_down");

            keyElement.addEventListener("click", () => {
              this._toggleCapsLock ();
              keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            });

          break;

          case "left":
            keyElement.innerHTML = createIconHTML("keyboard_arrow_left");

            keyElement.addEventListener("click", () => {
              this._toggleCapsLock ();
              keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            });

          break;

          case "right":
            keyElement.innerHTML = createIconHTML("keyboard_arrow_right");

            keyElement.addEventListener("click", () => {
              this._toggleCapsLock ();
              keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            });

          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          });

          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
          });

          break;

        case "done":
          keyElement.classList.add("keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener("click", () => {
            this.close();
            this._triggerEvent("onclose");
          });

          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener("click", () => {
            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            this._triggerEvent("oninput");
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
