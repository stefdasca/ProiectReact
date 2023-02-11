import React from 'react';
import { Button, ModalWrapper } from './ModalStyled';
import { useEffect } from 'react';

const ModalBox = (props) => {

    function random(mn, mx) {
        return Math.random() * (mx - mn) + mn;
    }

    const { isModalOpen, setIsModalOpen } = props;
    const typeOfProblems = ['programare dinamica', 'siruri de caractere', 'stiva', 'APM'];
    const sites = ['infoarena.ro', 'codeforces.com', 'pbinfo.ro'];
    let text = "Lucreaza o problema de " + typeOfProblems[parseInt(random(0, typeOfProblems.length))] + " de pe site-ul: " + sites[parseInt(random(0, sites.length))];
    return (
        <>
            <ModalWrapper className={isModalOpen ? 'open' : ''}>
                <div className="modal_centered">
                    <div className="modal_content">
                        <p className="modal_txt"> {text} </p>
                        <Button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Inchide
                        </Button>
                    </div>
                </div>
            </ModalWrapper>
        </>
    );
};

export default ModalBox;