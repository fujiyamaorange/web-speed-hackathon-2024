import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import { SvgIcon } from './features/icons/components/SvgIcon';
import { Box } from './foundation/components/Box';
import { Flex } from './foundation/components/Flex';
import { Link } from './foundation/components/Link';
import { Text } from './foundation/components/Text';
import { ActionLayout } from './foundation/layouts/ActionLayout';
import { CommonLayout } from './foundation/layouts/CommonLayout';
import { Color, Space, Typography } from './foundation/styles/variables';
import { AuthorDetailPage } from './pages/AuthorDetailPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { EpisodeDetailPage } from './pages/EpisodeDetailPage';
import { SearchPage } from './pages/SearchPage';
import { TopPage } from './pages/TopPage';
import { CoverSection } from './pages/TopPage/internal/CoverSection';

const _BackToTopButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${Space * 1}px;
  border: none;
  background-color: transparent;
`;

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />} path={'/'}>
        <Route
          element={
            <Flex align="flex-start" direction="column" gap={Space * 2} justify="center" pb={Space * 2}>
              <Box as="header" maxWidth="100%" width="100%">
                <CoverSection />
              </Box>
              <TopPage />
            </Flex>
          }
          path={''}
        />
      </Route>
      <Route
        element={
          <ActionLayout
            leftContent={
              <_BackToTopButton href={'/'}>
                <SvgIcon color={Color.MONO_100} height={32} type="ArrowBack" width={32} />
                <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                  トップへ戻る
                </Text>
              </_BackToTopButton>
            }
          />
        }
        path={'/'}
      >
        <Route element={<BookDetailPage />} path={'books/:bookId'} />
        <Route element={<EpisodeDetailPage />} path={'books/:bookId/episodes/:episodeId'} />
        <Route element={<AuthorDetailPage />} path={'authors/:authorId'} />
        <Route element={<SearchPage />} path={'search'} />
      </Route>
    </Routes>
  );
};
