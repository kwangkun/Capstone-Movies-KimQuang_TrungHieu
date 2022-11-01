import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';

const MainLayout = () => {
    return (
        <Container className='Main-layout'>
            <main className='main-outlet'>
                <Outlet />
            </main>
        </Container>
    )
}

export default MainLayout


const Container = styled.div`
  &.MainLayout {
    .Header {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 101;
      background-color: #2b2b31;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }

    .main-content {
      flex: 1;
    }

    .Footer {
      background-color: #2b2b31;
    }
  }
`;