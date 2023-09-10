import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink__active"
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.authors}
            className="NavLink"
            activeClassName="NavLink__active"
          >
            Авторы
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.books}
            className="NavLink"
            activeClassName="NavLink__active"
          >
            Книги
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
