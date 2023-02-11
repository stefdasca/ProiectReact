import React, { useState, useEffect } from 'react';
import ClickedModalBox from './ClickedModalBox';
import { ClickedModalWrapper, Button } from './style.js';
import { useNavigate } from 'react-router';

const ClickedModal = () => {

  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('logged-in') ==  undefined)
      nav('/');
  })

  const clickedModalData = [
    {
        id: 1,
        img: "./pbinfo.png",
        title: 'Pbinfo',
        desc: 'www.pbinfo.ro îți propune să rezolvi probleme de informatică, cu evaluator automat. Știi pe loc dacă soluția ta este corectă sau dacă trebuie să mai lucrezi la ea.'
    },
    {
        id: 2,
        img: "./infoarena.png",
        title: 'Infoarena',
        desc: 'infoarena ajuta elevi si studenti sa invete informatica si programare. Organizam concursuri de informatica, scriem articole, dezvoltam software, facem schimb de experienta si idei.'
    },
    {
        id: 3,
        img: "./codeforces.png",
        title: 'Codeforces',
        desc: 'Codeforces este un site cu probleme si competitii de informatica organizate de pasionati din intreaga lume.'
    },
];


  const [isModalOpen, setIsModalOpen] = useState(false);


  // disable the body-scroll when the Modal is open.
  const docBody = document.body;
  isModalOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');


  // closing the Modal on clicking outside of it.
  useEffect(() => {
    const outsideClose = (e) => {
      if (e.target.className === 'modal_centered') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('click', outsideClose);

    return () => {
      window.removeEventListener('click', outsideClose);
    };
  }, [isModalOpen]);


  // closing the Modal on pressing the 'Escape' key.
  useEffect(() => {
    const escapeClose = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', escapeClose);

    return () => {
      window.removeEventListener('keydown', escapeClose);
    };
  }, [isModalOpen]);


  return (
    <>
      <section className="section">
        <ClickedModalWrapper>
          {
            clickedModalData.map((currValue) => {
              const { id, img, title, desc } = currValue;
              return (
                <div className="modal_card">
                  <img src={img} alt={title} />
                  <h3>{title}</h3>
                  <p>{desc.slice(0, 40)}...</p>
                  <Button
                    type="button"
                    onClick={() => setIsModalOpen(id)}
                  >
                    Know More
                  </Button>
                </div>
              );
            })
          }
        </ClickedModalWrapper>
      </section>


      {/*===== All the Modals =====*/}
      {
        clickedModalData.map((currValue) => {
          return (
            <ClickedModalBox
              key={currValue.id}
              {...currValue}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          );
        })
      }
    </>
  );
};

export default ClickedModal;