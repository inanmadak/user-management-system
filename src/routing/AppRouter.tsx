import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './routes';

export const AppRouter = () => {
  return (
    <Routes>
      {ROUTES.map(({ component: Component, ...rest }, index) => {
        return <Route key={index} element={<Component />} {...rest}></Route>;
      })}
      <Route path='*' element={<div>Not found.</div>} />
    </Routes>
  );
};
