import React from 'react';
import HomeCard from './HomeCard';
import homeData from './homeData';
import { HomePage, HomeWrapper } from './HomeStyled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
const Home = () => {
    // if mistakenly, body contains the overflow_hide class then remove it.
    document.body.classList.contains('overflow_hide') && document.body.classList.remove('overflow_hide');
    const nav = useNavigate();
    useEffect(() => {
        // console.log(localStorage.getItem('logged-in'));
        if (localStorage.getItem('logged-in') == undefined)
            nav('/');
    }, [])
    const handleClick = () => {
        localStorage.removeItem('logged-in');
        window.location.reload();
      };
    return (
        <>
            <HomePage>
                <div className="container">
                    <header id="header">
                        <h1><span>Lucreaza la info</span><br />
                            {localStorage.getItem('logged-in')}
                        </h1>
                        <h1>
                             <button onClick={handleClick}>Logout</button>
                        </h1>
                    </header>
                    <HomeWrapper>
                        {
                            homeData.map((currValue) => {
                                return (
                                    <HomeCard
                                        key={currValue.id}
                                        {...currValue}
                                    />
                                );
                            })
                        }
                    </HomeWrapper>
                    <footer id="footer">
                        <p> Built by <a href = "http://stefdasca.ro">Stefan Dascalescu</a></p>
                    </footer>
                </div>
            </HomePage>
        </>
    );
};

export default Home;