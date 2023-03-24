import styled from 'styled-components';

export const CharacterFilmItemStyle = styled.div`
  border: 3px rgba(37, 17, 147, 1) solid;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    font-family: StarJedi;

    &.date {
      color: #D0E10C;
    }
  }
`