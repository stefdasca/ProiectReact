import styled from 'styled-components';

export const LoadMoreWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  .load_more_card {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;

    h2 {
      margin-bottom: 0.5rem;
    }
  }

  & + .load_more_btn {
    text-align: center;
    margin-top: 1.5rem;
    user-select: none;

    button {
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 0.8rem 1.5rem;
      font-size: 1.2rem;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.03);
      }

      &[disabled] {
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }
`;
