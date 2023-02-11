import { useState, useEffect } from 'react';
import { Wrap } from './style';
import { useNavigate } from 'react-router';
const Accordion = () => {
    const accordionData = [
        {
            id: 1,
            title: "Care sunt cele mai bune site-uri pentru lucratul de probleme la informatica?",
            content: "Cele mai bune site-uri pentru lucratul de probleme la informatica sunt pbinfo.ro, infoarena.ro, codeforces.com si atcoder.jp"
        },
        {
            id: 2,
            title: "Cum te poti pregati cel mai bine pentru olimpiada?",
            content: "Pentru a te pregati de olimpiada trebuie sa lucrezi problemele date in anii trecuti, precum si sa studiezi foarte bine teoria necesara pentru a rezolva problemele"
        },
        {
            id: 3,
            title: "Cum te califici la nationala?",
            content: "Pentru a te califica la nationala trebuie sa obtii cel putin 120 de puncte la etapa judeteana si fie sa fii primul pe judet, fie sa fii intre primii 90 pe tara"
        },
        {
            id: 4,
            title: "La ce e utila algoritmica in viata?",
            content: "Algoritmica e utila pentru a intelege mai usor lumea din jurul nostru, precum si pentru a dezvolta o gandire logica, bazata pe intuitia matematica."
        },
    ]
    
    const nav = useNavigate();

    useEffect(() => {
      if (localStorage.getItem('logged-in') ==  undefined)
        nav('/');
    })
  

    const [isClicked, setIsClicked] = useState(null);

    const handleIsClicked = (id) => {
        if (isClicked === id) {
            // if previously clicked accordion-item is already open, then close it.
            return setIsClicked(null);
        }

        // and open the currently clicked accordion-item having the id value we passed.
        setIsClicked(id);
    };

    return (
        <>
            <section className="section">
                <Wrap>
                    {
                        accordionData.map((currValue) => {
                            const { id, title, content } = currValue;
                            return (
                                <div className="accordion_item" key={id}>

                                    {/*===== Accordion-title =====*/}
                                    <div
                                        className={`accordion_title ${isClicked === id ? 'active' : ''}`}
                                        onClick={() => handleIsClicked(id)}
                                    >
                                        <h2>{title}</h2>
                                        <div className="toggle_icon">
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>

                                    {/* ===== Accordion-content ===== */}
                                    <div className="accordion_content">
                                        <p>{content}</p>
                                    </div>

                                </div>
                            );
                        })
                    }
                </Wrap>
            </section>
        </>
    );
};

export default Accordion;