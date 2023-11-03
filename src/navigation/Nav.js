import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';

// Styled components
const StyledNav = styled.nav`
  display: flex;
  border-bottom: 2px solid #f3f3f3;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  z-index: 999;
  margin-left: 2rem;
  color: black;
`;

const SearchInput = styled.input`
  padding: 12px 20px;
  border: none;
  background: #f7f6f6;
  outline: none;
  margin-right: 20px;
  border-radius: 5px;
  position: relative;
  width: 14rem;
`;

const IconWrapper = styled.div`
  .nav-icons {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 2rem;
  }
`;

// Nav component
const Nav = ({ handleInputChange, query }) => {
  return (
    <StyledNav>
      <div>
        <SearchInput
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <IconWrapper>
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </IconWrapper>
    </StyledNav>
  );
};

export default Nav;