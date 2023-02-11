import React, { useEffect } from 'react';
import { TabsWrapper } from './style.js';
import { useNavigate } from 'react-router';
const Tabs = (props) => {

    const nav = useNavigate();

    useEffect(() => {
      if (localStorage.getItem('logged-in') ==  undefined)
        nav('/');
    })
  
    const tabsData = [
        {
            id: 1,
            title: "DP",
            content: "Programarea dinamică este o metodă de rezolvare a unor probleme de informatică în care se cere de regulă determinarea unei valori maxime sau minime, sau numărarea elementelor unei mulțimi.",
        },
        {
            id: 2,
            title: "LEE",
            content: "Algoritmul lui Lee este folosit pentru determinarea ieșirii dintr-un labirint sau în alte probleme similare cu aceasta.",
        },
        {
            id: 3,
            title: "APM",
            content: "Considerăm un graf neorientat ponderat (cu costuri) conex G. Se numește arbore parțial un graf parțial al lui G care este arbore. Se numește arbore parțial de cost minim un arbore parțial pentru care suma costurilor muchiilor este minimă.",
        },

        {
            id: 4,
            title: "Stive",
            content: "Stiva (stack) este o structură de date liniară abstractă, pentru care sunt definite operațiile de adăugare a unui element și eliminare a unui element și aceste operații se realizează la un singur capăt al structurii, numit vârful stivei.",
        },

        {
            id: 5,
            title: "Cozi",
            content: "Coada (queue) este o structură de date abstractă în care operația de adăugare se realizează la un capăt, iar cea de eliminare se realizează la celălalt capăt.",
        },
    ];

    let activeTab = props.active;
    return (
        <>
            <section className="section">
                <TabsWrapper>
                    <div className="tabs">
                        {
                            tabsData.map((currValue) => {
                                const { id, title } = currValue;
                                return (
                                    <button
                                        key={id}
                                        type="button"
                                        className={activeTab === id ? 'active' : ''}
                                        disabled={activeTab === id}
                                        onClick={() => props.upd(id)}
                                    >
                                        {title}
                                    </button>
                                );
                            })
                        }
                    </div>
                    <div className="tabs_panel">
                        {
                            tabsData.map((currValue) => {
                                const { id, content } = currValue;
                                return (
                                    <p key={id}>
                                        {activeTab === id && content}
                                    </p>
                                );
                            })
                        }
                    </div>
                </TabsWrapper>
            </section>
        </>
    );
};

export default Tabs;