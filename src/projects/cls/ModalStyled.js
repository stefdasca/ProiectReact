import styled from 'styled-components';

export const Button = styled.button`
color: #fff;
background-color: #d3d3d3;
border: 2px solid #d3d3d3;
font-size: 1.2rem;
padding: 0.8rem 1.5rem;
transition: background-color 0.3s ease, color 0.2s ease;

&:hover {
    background-color: #fff;
    color: #d3d3d3;
}
`;

export const ModalWrapper = styled.div`
background-color: rgba(255, 255, 255, 0.7);
position: fixed;
top: 0;
left: 0;
z-index: 99;
width: 100%;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
pointer-events: none;
opacity: 0;
visibility: hidden;
transition: opacity 0.3s ease, visibility 0.2s ease;

&.open {
    pointer-events: all;
    opacity: 1;
    visibility: visible;
}

.modal_content {
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    max-width: 600px;
    padding: 3rem;
    display: grid;
    place-items: center;
    text-align: center;
    overflow: hidden;
    transform: scale(0);
    transition: transform 0.4s ease;

    .modal_img {
        width: 150px;
    }

    .modal_txt {
        margin-top: 1rem;
        margin-bottom: 2rem;
        line-height: 1.6;
        letter-spacing: 0.8px;
    }
}

/* when the ModalWrapper has 'open' class then modal_content will... */
&.open .modal_content {
    transform: scale(1);
}
`;
