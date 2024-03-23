import { Outlet } from 'react-router-dom';

import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Space } from '../styles/variables';

export const CommonLayout: React.FC = () => {
  return (
    <Container>
      <div style={{ height: '100%', padding: `0 ${Space * 2}px` }}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};
