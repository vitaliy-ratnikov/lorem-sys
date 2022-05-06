<template>
  <form class="main-form" @keypress.enter.prevent="submitForm">
    <div class="main-form__row">
      <div class="main-form__item">
        <v-select
          placeholder="Выберите тип системы"
          :options="options"
          v-model="typeSystem"
          class="main-form__input"
        ></v-select>
        <p v-if="typeSystemError" class="main-form__error">
          {{ typeSystemError }}
        </p>
      </div>
      <div class="main-form__item">
        <input
          type="email"
          class="main-form__input"
          placeholder="Ваш e-mail"
          v-model.trim="email"
          required
        />
        <p v-if="emailError" class="main-form__error">{{ emailError }}</p>
      </div>
      <div class="main-form__item">
        <input
          type="text"
          class="main-form__input"
          placeholder="Ваше имя"
          v-model="name"
          name="name"
        />
        <p v-if="nameError" class="main-form__error">{{ nameError }}</p>
      </div>
    </div>

    <div class="main-form__row">
      <div class="main-form__item main-form__item--range form-range">
        <div class="form-range__info">
          <p class="form-range__text">
            Sed ut perspiciatis, unde omnis iste natus
          </p>
          <p class="form-range__val">{{ rangeVal }} %</p>
        </div>
        <vue-slider
          class="main-form__input-range"
          v-model="rangeVal"
          :tooltip="'none'"
          required
        />
      </div>
      <div class="main-form__item">
        <label for="file" class="main-form__label--file">
          <svg width="17" height="20">
            <use xlink:href="@/assets/img/icons/sprite.svg#file-icon"></use>
          </svg>
          <p v-if="files">
            <span v-for="(file, index) in files" :key="index">
              {{ file.name }}
            </span>
          </p>
          <p v-else>Прикрепить файл</p>
        </label>
        <input
          id="file"
          type="file"
          @change.prevent="onFileChange"
          class="main-form__input main-form__input--file"
        />
      </div>
    </div>

    <base-button
      accent
      @click="submitForm"
      type="button"
      class="main-form__button"
      >Отправить</base-button
    >
  </form>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  name: "AppForm",
  data() {
    return {
      rangeVal: 75,
      options: [
        "Sed ut perspiciatis",
        "Nemo enim ipsam",
        "Et harum quidem",
        "Temporibus autem",
        "Itaque earum rerum",
      ],
      name: null,
      email: null,
      nameError: null,
      typeSystemError: null,
      typeSystem: null,
      emailError: null,
      files: false,
    };
  },
  components: { BaseButton, vSelect, VueSlider },
  methods: {
    onFileChange(e) {
      this.files = e.target.files;
    },

    submitForm() {
      if (!this.typeSystem) {
        return (this.typeSystemError = "Выберите значение");
      }
      if (!this.name) {
        return (this.nameError = "Введите имя");
      }
      if (!this.email) {
        return (this.emailError = "Введите email");
      }
      console.log(this.typeSystem, this.name, this.email, this.rangeVal);

      this.typeSystemError = null;
      this.typeSystem = null;
      this.email = null;
      this.emailError = null;
      this.nameError = null;
      this.name = null;
    },
  },
};
</script>

<style lang="scss">
.main-form {
  &__row:not(:first-child) {
    margin-top: vw(30px);
  }
  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: vw(30px);
  }

  &__item {
    position: relative;
  }

  &__item--range {
    grid-column: span 2;
  }

  &__item-info {
    font-weight: 600;
    font-size: vw(18px);
    line-height: 1.2;
    text-align: right;
    color: rgba(255, 255, 255, 0.85);
  }

  &__input {
    background: rgba(255, 255, 255, 0.85);
    padding: vw(10px);
    border: vw(1px) solid #fff;
    border-radius: vw(3px);
    width: 100%;
    font-weight: 400;
    font-size: vw(18px);
    line-height: 1.2;
    color: #272733;

    &::placeholder {
      color: #272733;
    }

    & .vs__search {
      font-weight: 400;
      font-size: vw(18px);
      line-height: 1.2;
      color: #272733;
      padding: 0;
      margin: 0;
      border: none;
    }
    & .vs__actions {
      padding-top: 0;
    }

    & .vs__clear {
      width: vw(20px);
      height: vw(20px);
    }

    & .vs__dropdown-toggle {
      border: none;
      padding: 0;
    }

    & .vs__selected {
      margin: 0;
      padding: 0;
      line-height: 1;
      color: #272733;
    }
    & .vs__selected-options {
      padding: 0;
      margin: 0;
    }

    & .vs__dropdown-option {
      padding: vw(15px) vw(10px);
    }

    & .vs__dropdown-option {
      color: #fff;
      font-weight: 400;
      font-size: vw(18px);
      line-height: 1.2;
    }

    & .vs__dropdown-menu {
      background: #272733;
      max-height: vw(180px);
    }

    & .vs__dropdown-menu::-webkit-scrollbar {
      width: vw(7px);
    }

    & .vs__dropdown-menu::-webkit-scrollbar-track {
      background: #3d4050;
      border-radius: vw(3px);
    }

    & .vs__dropdown-menu::-webkit-scrollbar-thumb {
      background: $accent-light;
      border-radius: vw(3px);
    }

    & .vs__dropdown-option--highlight {
      background: none;
      color: #42a9ed;
    }
  }

  &__input-range {
    margin: vw(15px) 0 0 0;

    & .vue-slider-rail {
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid #fff;
      height: vw(6px);
    }

    & .vue-slider-dot-handle {
      background: #42a9ed;
      border: vw(3px) solid #286690;
    }
  }

  &__button {
    cursor: pointer;
    max-width: vw(370px);
    width: 100%;
    padding: vw(17px);
    text-align: center;
    margin: vw(40px) auto 0 auto;
    display: block;
  }

  &__error {
    position: absolute;
    top: vw(-25px);
    color: orangered;
    font-size: vw(14px);
    line-height: 1.2;
  }

  &__input--file {
    z-index: -1;
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
  }

  &__label--file {
    text-transform: uppercase;
    font-weight: 600;
    font-size: vw(15px);
    line-height: 1.2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: vw(2px) solid $accent-light;
    padding: vw(10px);
    border-radius: vw(3px);
    width: 100%;
    color: #272733;
    cursor: pointer;

    svg {
      margin-right: vw(10px);
    }
  }
}

.form-range {
  &__info {
    display: flex;
    justify-content: space-between;
  }

  &__text {
    font-weight: 400;
    font-size: vw(18px);
    line-height: 1.2;
    color: #fff;
  }

  &__val {
    font-weight: 600;
    font-size: vw(18px);
    line-height: 1.2;
    text-align: right;
    color: rgba(255, 255, 255, 0.85);
  }
}
</style>
