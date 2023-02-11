import React, { useEffect, useState } from 'react';
import { LoadMoreWrapper } from './style';
import { useNavigate } from 'react-router';
const LoadMore = (props) => {

  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('logged-in') ==  undefined)
      nav('/');
  })

  const [items, setItems] = useState([]);
  let visibleItems = props.value;


  useEffect(() => {
    const data = [
      {
        id: "Sfat 1",
        body: 'apeleaza cu incredere la serviciile mele de pe stefdasca.ro'
      },
      {
        id: "Sfat 2",
        body: 'lucreaza ceva in fiecare zi'
      },
      {
        id: "Sfat 3",
        body: 'nu ezita sa ceri ajutorul'
      },
      {
        id: "Sfat 4",
        body: 'citeste cu atentie problemele'
      },
      {
        id: "Sfat 5",
        body: 'nu lasa un concurs prost sa te demotiveze'
      },
      {
        id: "Sfat 6",
        body: 'colaborarea cu colegii este utila (nu in timpul concursului)'
      },
      {
        id: "Sfat 7",
        body: 'Nu invatati cod pe de rost, deveniti zei altfel'
      },
      {
        id: "Sfat 8",
        body: 'Banii aduc fericirea'
      },
      {
        id: "Sfat 9",
        body: 'Nu lasa pe maine ce poti face ieri'
      },
    ]
    setItems(data);
  }, []);


  // Load More functionality
  const loadMoreItems = () => {
    props.upd(visibleItems + 3);
  };

  const loadLessItems = () => {
    props.upd(visibleItems - 3);
  }

  return (
    <>
      <section className="section">
        <div>
          <LoadMoreWrapper>
            {
              items.slice(0, visibleItems).map((currValue) => {
                const { id, body } = currValue;
                return (
                  <div className="load_more_card" key={id}>
                    <h2>{id}</h2>
                    <p>{body}</p>
                  </div>
                );
              })
            }
          </LoadMoreWrapper>

          <div className="load_more_btn">
            <button
              type="button"
              onClick={loadMoreItems}
              disabled={visibleItems > 6}
            >
              Load More
            </button>
            <button
              type="button"
              onClick={loadLessItems}
              disabled={visibleItems == 0}
            >
              Load Less
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoadMore;