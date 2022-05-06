<template>
  <header class="header">
    <base-container>
      <div class="header__wrapper">
        <a href="/" class="header__logo">
          <svg width="245" height="21">
            <use xlink:href="@/assets/img/icons/sprite.svg#logo"></use>
          </svg>
        </a>
        <nav class="header__nav header-nav" :class="{ active: isNavOpen }">
          <a href="#" class="header-nav__item header-nav__item--active"
            >Бизнес</a
          >
          <a href="#" class="header-nav__item">О нас</a>
          <a href="#" class="header-nav__item">Цены</a>
          <a href="#" class="header-nav__item">Оформить заказ</a>
        </nav>
        <button
          class="header__menu"
          @click.prevent="showNav"
          :class="{ active: isNavOpen }"
        >
          <span></span>
        </button>
      </div>
    </base-container>
  </header>
  <main class="main">
    <section class="hero">
      <base-container>
        <div class="hero__wrap">
          <h1 class="hero__title">
            <span class="title-accent">Lorem ipsum</span> dolor sit amet
            consectetur <span class="title-accent">adipiscing</span>
          </h1>

          <h3 class="hero__subtitle">
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </h3>

          <ul class="hero__list hero-list">
            <li class="hero-list__item">Totam rem aperiam eaque ipsa</li>
            <li class="hero-list__item">
              Sit voluptatem accusantium doloremque laudantium
            </li>
            <li class="hero-list__item">
              Sed ut perspiciatis, unde omnis iste natus error
            </li>
          </ul>

          <div class="hero__link-wrap">
            <base-button class="hero__link" href="#order" is-link accent
              >Заказать</base-button
            >
            <base-button class="hero__link" href="#" is-link secondary
              >Подробнее</base-button
            >
          </div>
        </div>
      </base-container>
    </section>
    <section class="checkout" id="order">
      <base-container>
        <h2 class="checkout__title">
          Оформление <span class="title-accent">заказа</span>
        </h2>
        <h3 class="checkout__subtitle">
          Перед заполнением формы ознакомьтесь с нашей схемой работы!
        </h3>
        <ul class="checkout__list scheme-list">
          <li class="scheme-list__item">
            <div class="scheme-list__icon-wrap">
              <svg class="scheme-list__icon" width="55" height="55">
                <use xlink:href="@/assets/img/icons/sprite.svg#glass"></use>
              </svg>
            </div>
            <p class="scheme-list__text">Lorem ipsum dolor sit amet</p>
          </li>
          <li class="scheme-list__item">
            <div class="scheme-list__icon-wrap">
              <svg class="scheme-list__icon" width="55" height="55">
                <use xlink:href="@/assets/img/icons/sprite.svg#percent"></use>
              </svg>
            </div>
            <p class="scheme-list__text">Сonsecteturadipiscing elit</p>
          </li>
          <li class="scheme-list__item">
            <div class="scheme-list__icon-wrap">
              <svg class="scheme-list__icon" width="55" height="55">
                <use xlink:href="@/assets/img/icons/sprite.svg#file"></use>
              </svg>
            </div>
            <p class="scheme-list__text">Sed do eiusmod tempor</p>
          </li>
          <li class="scheme-list__item">
            <div class="scheme-list__icon-wrap">
              <svg class="scheme-list__icon" width="55" height="55">
                <use xlink:href="@/assets/img/icons/sprite.svg#s-mail"></use>
              </svg>
            </div>
            <p class="scheme-list__text">Esse cillum dolore eu fugiat</p>
          </li>
          <li class="scheme-list__item">
            <div class="scheme-list__icon-wrap">
              <svg class="scheme-list__icon" width="55" height="55">
                <use xlink:href="@/assets/img/icons/sprite.svg#bill"></use>
              </svg>
            </div>
            <p class="scheme-list__text">
              Excepteur sint occaecat cupidatat non proident
            </p>
          </li>
        </ul>

        <div class="form-wrap">
          <app-form />
        </div>
      </base-container>
    </section>
  </main>
  <footer class="footer">
    <base-container>
      <div class="footer__wrap">
        <h4 class="footer__copy">
          © 2018 «LoremIpsum.net» Все права защищены.
        </h4>
        <div class="footer__payment footer-payment">
          <a href="#" class="footer-payment__link">
            <svg class="scheme-list__icon" width="99" height="20">
              <use xlink:href="@/assets/img/icons/sprite.svg#qiwi"></use>
            </svg>
          </a>
          <a href="#" class="footer-payment__link">
            <svg class="scheme-list__icon" width="116" height="20">
              <use xlink:href="@/assets/img/icons/sprite.svg#yandex"></use>
            </svg>
          </a>
          <a href="#" class="footer-payment__link">
            <svg class="scheme-list__icon" width="102" height="20">
              <use xlink:href="@/assets/img/icons/sprite.svg#web"></use>
            </svg>
          </a>
        </div>

        <div class="footer__contacts footer-contacts">
          <a href="mailto:info@ipsum228.com" class="footer-contacts__link">
            <svg class="footer-contacts__icon" width="20" height="20">
              <use xlink:href="@/assets/img/icons/sprite.svg#mail"></use>
            </svg>
            info@ipsum228.com
          </a>

          <a href="#" class="footer-contacts__link">
            <svg class="footer-contacts__icon" width="20" height="20">
              <use xlink:href="@/assets/img/icons/sprite.svg#vk"></use>
            </svg>
            Мы вконтакте
          </a>
        </div>
      </div>
    </base-container>
  </footer>
</template>

<script>
import BaseContainer from "@/components/BaseContainer";
import BaseButton from "@/components/BaseButton";
import AppForm from "@/components/AppForm";
export default {
  components: {
    AppForm,
    BaseButton,
    BaseContainer,
  },

  data() {
    return {
      isNavOpen: false,
    };
  },

  methods: {
    showNav() {
      this.isNavOpen = !this.isNavOpen;
      if (this.isNavOpen === true) {
        document.body.classList.add("nav-open");
      } else {
        document.body.classList.remove("nav-open");
      }
    },
  },
};
</script>
<style lang="scss">
.main {
  flex: 1 0 auto;
}

.title-accent {
  color: $accent-light;
}

.header {
  padding: vw(33px) 0 vw(31px) 0;
  background-color: rgba(16, 16, 29, 0.9);
  position: fixed;
  z-index: 25;
  top: 0;
  left: 0;
  right: 0;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    svg {
      width: vw(245px);
      height: vw(21px);
    }
  }

  &__menu {
    display: none;
  }
}

.header-nav {
  display: flex;

  &__item {
    font-weight: 600;
    font-size: vw(13px);
    line-height: vw(16px);
    color: #fff;
    text-transform: uppercase;
    transition: all 0.2s ease-in;

    &--active {
      color: $accent;
    }
    &:hover {
      color: $accent;
    }
  }

  &__item + &__item {
    margin-left: vw(60px);
  }
}

.hero {
  padding: vw(103px) 0 vw(206px) 0;
  background-image: url("@/assets/img/hero-bg-1.jpg");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;

  &__wrap {
    padding: vw(103px) 0 0 0;
    max-width: vw(730px);
  }

  &__title {
    font-weight: 700;
    font-size: vw(48px);
    line-height: vw(58px);
    text-transform: uppercase;
  }

  &__subtitle {
    margin-top: vw(40px);
    font-weight: 700;
    font-size: vw(20px);
    line-height: vw(24px);
    color: #000000;
  }

  &__list {
    margin-top: vw(10px);
  }

  &__link + &__link {
    margin-left: vw(30px);
  }

  &__link-wrap {
    margin: vw(80px) 0 0 0;
  }

  &__link {
    max-width: vw(183px);
    width: 100%;
  }
}

.hero-list {
  &__item {
    position: relative;
    padding-left: vw(20px);
    font-weight: 400;
    font-size: vw(20px);
    line-height: vw(24px);
    color: #000000;

    &:after {
      position: absolute;
      content: "-";
      left: vw(5px);
      top: 0;
      color: #000000;
    }
  }

  &__item + &__item {
    margin-top: 5px;
  }
}

.checkout {
  padding: vw(103px) 0 vw(206px) 0;
  background-image: url("@/assets/img/checkout-bg.jpg");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;

  &__title {
    font-weight: 700;
    font-size: vw(36px);
    line-height: 1.2;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
  }

  &__subtitle {
    font-weight: 400;
    font-size: vw(18px);
    line-height: 1.2;
    color: #bbb;
    text-align: center;
    margin: vw(30px) 0 0 0;
  }

  &__list {
    margin: vw(80px) 0 0 0;
  }
}

.scheme-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: vw(30px);

  &__icon-wrap {
    width: vw(100px);
    height: vw(100px);
    background-color: $accent-light;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border: vw(5px) solid #286690;
    box-shadow: 0 0 0 0 #286690;
    animation: pulse 1.5s infinite;
  }

  &__item {
    text-align: center;
    position: relative;

    &:not(:last-child):after {
      content: "";
      position: absolute;
      right: vw(-70px);
      top: 30%;
      width: vw(110px);
      height: vw(6px);
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url("data:image/svg+xml,%3Csvg width='111' height='6' viewBox='0 0 111 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='81.0111' cy='3' r='3' fill='%23C4C4C4'/%3E%3Ccircle cx='107.011' cy='3' r='3' fill='%23C4C4C4'/%3E%3Ccircle cx='55.0111' cy='3' r='3' fill='%23C4C4C4'/%3E%3Ccircle cx='29.0111' cy='3' r='3' fill='%23C4C4C4'/%3E%3Ccircle cx='3.01111' cy='3' r='3' fill='%23C4C4C4'/%3E%3C/svg%3E%0A");
    }
  }

  &__icon {
    max-width: 100%;
    height: auto;
  }

  &__text {
    font-weight: 400;
    font-size: vw(16px);
    line-height: 1.2;
    color: #fff;
    margin-top: vw(20px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.98);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 vw(20px) rgba(90, 153, 212, 0);
  }
  100% {
    transform: scale(0.98);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
}

.form-wrap {
  margin-top: vw(80px);
}

.footer {
  flex: 0 0 auto;
  background-color: #3d4050;
  padding: vw(30px) 0;
  &__wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__copy {
    font-weight: 400;
    font-size: vw(13px);
    line-height: 1.2;
    color: #fff;
    max-width: vw(220px);
  }

  &__payment {
    position: relative;

    &:after,
    &:before {
      content: "";
      position: absolute;
      width: vw(1px);
      height: vw(18px);
      background-color: #c3c3c3;
      top: vw(2px);
    }

    &:after {
      left: vw(-20px);
    }
    &:before {
      right: vw(-20px);
    }
  }
}

.footer-payment {
  display: grid;
  grid-template-columns: repeat(3, minmax(vw(100px), vw(120px)));
  gap: vw(35px);
}

.footer-contacts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: vw(35px);

  &__link {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: vw(13px);
    line-height: 1.2;
    color: #fff;
  }
  &__icon {
    width: vw(20px);
    height: vw(20px);
    margin-right: vw(10px);
  }
}

@media (max-width: 860px) {
  .container {
    padding: 0 vw-m(15px);
    width: auto;
  }

  .btn {
    font-size: vw-m(9px);
    line-height: 1.2;
    padding: vw-m(7px);
    border-radius: vw-m(2px);
    border: vw-m(1px) solid transparent;

    &--accent {
      border: vw-m(1px) solid #ffffff;
    }

    &--secondary {
      border: vw-m(1px) solid #6f6d7b;
    }
  }

  .header {
    padding: vw-m(10px) 0;

    &__logo {
      svg {
        width: vw-m(120px);
        height: vw-m(21px);
      }
    }

    &__menu {
      display: block;
      right: vw-m(10px);
      width: vw-m(18px);
      height: vw-m(12px);
      border: none;
      background: transparent;
      position: absolute;
      cursor: pointer;
      margin: vw-m(15px);
      &:focus {
        outline: none;
      }
      &:after,
      &:before,
      span {
        width: 100%;
        height: vw-m(1.5px);
        border-radius: vw-m(0px);
        position: absolute;
        left: 0;
        background: $accent;
        transform: rotate(0deg);
        transition: all 0.2s;
      }

      &:after,
      &:before {
        content: "";
      }

      &:after {
        top: 0;
        margin-top: 0;
      }

      &:before {
        bottom: 0;
        margin-bottom: 0;
      }

      span {
        top: 50%;
        margin-top: vw-m(-1px);
      }

      &.active {
        &:after {
          display: none;
        }

        &:before {
          transform: rotate(225deg);
          bottom: 50%;
          margin-bottom: vw-m(-0.5px);
        }

        span {
          transform: rotate(135deg);
        }
      }
    }
  }

  .header-nav {
    display: none;
    position: fixed;
    top: 0;
    padding: vw-m(10px) vw-m(15px);
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    overflow-y: auto;
    margin: 0;
    background-color: rgba(16, 16, 29, 0.9);

    &.active {
      display: block;
      padding-top: vw-m(40px);
    }

    &__item {
      font-size: vw-m(13px);
      line-height: 1.2;
      display: block;
      text-align: center;

      &--active {
        color: $accent;
      }
      &:hover {
        color: $accent;
      }
    }

    &__item + &__item {
      margin: vw-m(10px) 0 0 0;
    }
  }

  .hero {
    padding: vw-m(60px) 0 vw-m(30px) 0;
    background-position: 40% 0;

    &__wrap {
      max-width: 100%;
      padding: 0;
    }

    &__title {
      font-size: vw-m(18px);
      line-height: 1.2;
    }

    &__subtitle {
      margin-top: vw-m(10px);
      font-size: vw-m(12px);
      line-height: 1.2;
    }

    &__list {
      margin-top: vw-m(10px);
    }

    &__link + &__link {
      margin: 0 0 0 vw-m(15px);
    }

    &__link-wrap {
      margin: vw-m(20px) 0 0 0;
      text-align: center;
    }

    &__link {
      max-width: vw-m(120px);
    }
  }

  .hero-list {
    &__item {
      padding-left: vw-m(10px);
      font-size: vw-m(10px);
      line-height: 1.2;

      &:after {
        left: vw-m(5px);
      }
    }

    &__item + &__item {
      margin-top: vw-m(5px);
    }
  }

  .checkout {
    padding: vw-m(30px) 0;

    &__title {
      font-size: vw-m(14px);
    }
    &__subtitle {
      font-size: vw-m(10px);
    }

    &__list {
      margin-top: vw-m(20px);
    }
  }
  .scheme-list {
    grid-template-columns: repeat(auto-fill, minmax(vw-m(50px), vw-m(100px)));
    justify-content: center;
    gap: vw-m(20px);

    &__icon-wrap {
      width: vw-m(60px);
      height: vw-m(60px);
      border: vw-m(5px) solid #286690;
    }

    &__item {
      &:not(:last-child):after {
        content: none;
      }
    }

    &__text {
      font-size: vw-m(8px);
      margin-top: vw-m(10px);
    }
  }

  .form-wrap {
    margin-top: vw-m(50px);
  }

  .main-form {
    &__row {
      grid-template-columns: 1fr;
      gap: vw-m(20px);
    }
    &__row + &__row {
      margin: vw-m(25px) 0 0 0;
    }
    &__item {
      grid-column: auto;
    }
    &__item-info {
      font-size: vw-m(14px);
    }

    &__input {
      padding: vw-m(7px);
      border: vw-m(1px) solid #fff;
      border-radius: vw-m(2px);
      font-size: vw-m(12px);

      & .vs__search {
        font-size: vw-m(12px);
      }

      & .vs__clear {
        width: vw-m(10px);
        height: vw-m(14px);
      }

      & .vs__dropdown-option {
        padding: vw-m(8px) vw-m(5px);
        font-size: vw-m(12px);
      }

      & .vs__dropdown-menu {
        max-height: vw-m(100px);
      }

      & .vs__dropdown-menu::-webkit-scrollbar {
        width: vw-m(5px);
        border-radius: vw-m(3px);
      }
    }

    &__input-range {
      margin: vw-m(8px) 0 0 0;

      & .vue-slider-rail {
        border: vw-m(1px) solid #fff;
        height: vw-m(8px);
      }

      & .vue-slider-dot-handle {
        border: vw-m(2px) solid #286690;
      }
    }

    &__button {
      max-width: 100%;
      padding: vw-m(12px);
      margin: vw-m(20px) auto 0 auto;
    }

    &__error {
      top: vw-m(-16px);
      font-size: vw-m(10px);
    }

    &__label--file {
      font-size: vw-m(11px);
      border: vw-m(2px) solid $accent-light;
      padding: vw-m(7px);
      border-radius: vw-m(2px);
      svg {
        margin-right: vw-m(5px);
      }
    }
  }

  .form-range {
    &__text {
      font-size: vw-m(13px);
    }

    &__val {
      font-size: vw-m(12px);
    }
  }

  .footer {
    padding: vw-m(15px) 0;

    &__wrap {
      flex-direction: column;
      align-items: center;
    }

    &__copy {
      font-size: vw-m(13px);
      max-width: 100%;
      order: 1;
      margin: vw-m(15px) 0 0 0;
    }

    &__payment {
      &:after,
      &:before {
        content: none;
      }
    }
  }

  .footer-payment {
    grid-template-columns: repeat(3, 1fr);
    gap: vw-m(25px);
    margin: vw-m(20px) 0 0 0;
  }

  .footer-contacts {
    gap: vw-m(10px);
    order: -1;

    &__link {
      font-size: vw-m(10px);
      justify-content: center;
    }
    &__icon {
      width: vw-m(15px);
      height: vw-m(15px);
      margin-right: vw-m(5px);
    }
  }
}
</style>
