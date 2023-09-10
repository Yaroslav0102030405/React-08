// Это статический импорт который долден находиться сверху файла и вебпак его анализирует и строит дерево компонентов
// Модули
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// import HomePage from './Pages/HomePages';
// import AuthorsPage from './Pages/AuthorsPage';
// import BooksPage from './Pages/BooksPage';
// import NotFoundPage from './Pages/NotFoundPage';

// import BookDetalisPage from './Pages/BookDetalisPage';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

// динамический импорт сделали ассинхроными
const HomePage = React.lazy(() =>
  import('./Pages/HomePages' /* webpackChunkName: "home-page" */),
);
const AuthorsPage = React.lazy(() =>
  import('./Pages/AuthorsPage' /* webpackChunkName: "authors-page" */),
);
const BooksPage = React.lazy(() =>
  import('./Pages/BooksPage' /* webpackChunkName: "books-page" */),
);
const BookDetalisPage = React.lazy(() =>
  import('./Pages/BookDetalisPage' /* webpackChunkName: "booldetails-page" */),
);
const NotFoundPage = React.lazy(() =>
  import('./Pages/NotFoundPage' /* webpackChunkName: "notfound-page" */),
);

const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.authors} component={AuthorsPage} />
        <Route exact path={routes.books} component={BooksPage} />
        <Route path={routes.bookDetails} component={BookDetalisPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
