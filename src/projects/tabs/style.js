import styled from 'styled-components';

export const TabsWrapper = styled.div`
background-color: #f8f9fa;
max-width: 800px;
width: 100%;
box-shadow: 0px 4px 8px rgba(0,0,0,0.06);
padding: 1.6rem;

    @media (max-width: 576px) {
        padding: 1.2rem;
    }

    .tabs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;

        button {
            padding: 1rem 1.8rem;
            transition: all 0.3s ease;

            &[disabled] {
                cursor: not-allowed;
            }

            &.active {
                color: #007bff;
                border-bottom: 1px solid #007bff;
            }

            @media (max-width: 576px) {
                font-size: 0.9rem;
                padding: 0.8rem;
            }

        }
    }

    .tabs_panel {
        padding: 3rem 1rem 2rem;

        @media (max-width: 576px) {
            padding-top: 2rem;
            padding-bottom: 1rem;
        }

        p {
            letter-spacing: 0.6px;
            line-height: 2;
        }
    }
`;
