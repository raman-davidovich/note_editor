import React from 'react';
import s from './Header.module.scss';
import GlobalSvgSelector from '../../assets/icon/GlobalSvgSelector';

function Header() {
  // useLayoutEffect(() => {
  //   startApplication();
  // });
  return (
    <div className={s.header}>
      <div className={`${s.header__container} ${s.container}`}>
        <div className={s.header__logo}>
          <div className={s.header__logo__image}>
            <GlobalSvgSelector id="header-logo" />
          </div>
          <h2 className={s.header__logo__title}>Thullo</h2>
        </div>
        <div className={s.header__select_date}>
          <div className={`${s.header__date} ${s.date}`}>
            <h2 className={s.date__day}>00</h2>
            <h2 className={s.date__hours}>00</h2>
            <h2 className={s.date__divider}>:</h2>
            <h2 className={s.date__minutes}>00</h2>
          </div>
          <hr className={s.header__separator} />
          <div className={s.header__search}>
            <form className={s.header__search__form}>
              <input type="text" className={s.header__search__input} placeholder="Keyword..." />
              <button type="button" className={s.header__search__button}>Search</button>
              <span className={`${s.header__search__span} ${s.hide}`}>0</span>
            </form>
          </div>
          <hr className={`${s.header__separator} ${s.separator2}`} />
        </div>
      </div>
    </div>
  );
}

export default Header;
