import React, { useState } from 'react';
import './SearchBar.css'; // Import CSS file for styling
import MultiRangeSlider from "multi-range-slider-react";
const SearchBar = () => {
  const [city, setCity] = useState('noida');
  const [locality, setLocality] = useState('');
  const [configuration, setConfiguration] = useState('');
  const [unitType, setUnitType] = useState('');
  const [saleType, setsaleType] = useState('buy');
  const [btntype, setbtntype] = useState('buy');
  const [resitype,setresitype] = useState('');
  const [activeBtn, setActiveBtn] = useState('Buy');
  const [minValue, set_minValue] = useState(5);
  const [maxValue, set_maxValue] = useState(2000);
  const [isVisible, setIsVisible] = useState(true); 
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const handleSearch = () => {
    // Implement search functionality here
    const searchData = {
      city: city || undefined,
      locality: locality || undefined,
      configuration: configuration || undefined,
      unitType: unitType || undefined,
      btntype: btntype || undefined,
      minValue: minValue || undefined,
      maxValue: maxValue || undefined,
      saleType: saleType || undefined,
      resitype: resitype || undefined,
    };
    console.log(searchData);
  };
  const handleBtnClick = (type) => {
    setActiveBtn(type);
  };
  return (
    <>

      <div className='container2'>
        <div className='buttonbox'>
          <button
            type="button"
            className={`btn btn-outline-danger btnr ${activeBtn === 'Rent' ? 'active' : ''}`}
            onClick={() => {
              handleBtnClick('Rent')
              setbtntype('rent');
              setIsVisible(true);
            }
            }
          >
            <img src="./rent.png" alt="" className='img' />
            <br />Rent
          </button>
          <button
            type="button"
            className={`btn btn-outline-danger btnr ${activeBtn === 'Buy' ? 'active' : ''}`}
            onClick={() => {
              handleBtnClick('Buy')
              setbtntype('buy');
              setIsVisible(true);
            }

            }
          >
            <img src='./buys.png' className='img' />
            <br />Buy
          </button>
          <button
            type="button"
            className={`btn btn-outline-danger btnr ${activeBtn === 'Commercial' ? 'active' : ''}`}
            onClick={() => {
              handleBtnClick('Commercial')
              setbtntype('commercial');
              setIsVisible(true);
            }
            }
          >
            <img src="./commercial.png" alt="" className='img' />
            <br />Commercial
          </button>
          <button
            type="button"
            className={`btn btn-outline-danger btnr ${activeBtn === 'NewProjects' ? 'active' : ''}`}
            onClick={() => {
              handleBtnClick('NewProjects')
              setbtntype('newproject')
              setIsVisible(false);
            }
            }
          >
            <img src="./new.png" alt="" className='img' />
            <br />New Projects
          </button>
          <button
            type="button"
            className={`btn btn-outline-danger btnr ${activeBtn === 'PlotLand' ? 'active' : ''}`}
            onClick={() => {
              handleBtnClick('PlotLand')
              setbtntype('plotland')
            }
            }
          >
            <img src="./land.png" alt="" className='img' />
            <br />Plot/Land
          </button>
        </div>
        <br></br>
        <div className='homeBlackBox'>
          <div className="search-bar">
            <div className="search-bar-item">
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>
                <option value="noida" id='noida'>Noida</option>
                <option value="greater noida">Greater Noida</option>
                <option value="delhi ">Delhi</option>
                <option value="faridabad">Faridabad</option>
                <option value="ghaziabad">Ghaziabad</option>
                <option value="gurugram">Gurugram</option>
                <option value="doha">Doha</option>
                <option value="dubai">Dubai</option>

                {/* Add more options as needed */}
              </select>
            </div>
            <div className="search-bar-item">
              <input
                type="text"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                placeholder="Search for locality, project"
              />
            </div>
            <div className="search-bar-item">
              {(btntype==='rent' || btntype==='buy')&& (
                <>
                   <select value={configuration} onChange={(e) => setConfiguration(e.target.value)}>
                <option value="">Select Configuration</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4 BHK</option>
                <option value="56bhk">5-6 BHK</option>
                <option value="6plusbhk">6+ BHK</option>
              </select>
                </>
              )}
            {(btntype==='commercial')&& (
              <>
               <select value={saleType} onChange={(e) => setsaleType(e.target.value)}>
                <option value="">Buy Or Rent</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
              </>
            )}
            {btntype ==='newproject' &&(
            <>
              <select value={resitype} onChange={(e) => setresitype(e.target.value)}>
                    <option value="">Select Property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
            </>
           )}
            </div>
            <div className="search-bar-item newprop"
            style={{ display: isVisible ? 'block' : 'none' }}
            >
              {(btntype === 'rent' || btntype === 'buy') && (
                <>
                  <select value={unitType} onChange={(e) => setUnitType(e.target.value)}>
                    <option value="">Select Unit Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="housevilla">House/Villa</option>
                    <option value="builderfloor">Builder Floor</option>
                    <option value="farmhouse">Farmhouse</option>
                  </select>
                </>
              )}
              {btntype === 'commercial' && (
                <>
                  <select value={unitType} onChange={(e) => setUnitType(e.target.value)}>
                    <option value="">Select Unit Type</option>
                    <option value="officespace">OfficeSpace</option>
                    <option value="shop">Shop</option>
                    <option value="coworkingpspace">Coworking Space</option>
                    <option value="showroom">Showroom</option>
                  </select>
                </>
              )}
             
            </div>
            <div className="search-bar-item budget ">
              {(btntype !== 'rent' && saleType ==='buy') && (

                <>
                  <span className='price'>
                    Price: {minValue > 100 ? (minValue / 100).toLocaleString() + ' Cr' : minValue.toLocaleString() + ' L'} -
                    {maxValue > 100 ? (maxValue / 100).toLocaleString() + ' Cr' : maxValue.toLocaleString() + ' L'}
                  </span>

                  <br></br>
                  <MultiRangeSlider
                    className='slider'
                    min={5}
                    max={2000}
                    step={1}
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                      handleInput(e);
                    }}
                    barInnerColor='black'
                    thumbLeftColor='black'
                    thumbRightColor='black'
                    ruler={false}
                  />
                </>
              )}
              {(btntype === 'rent' || saleType ==='rent') && (<>
                <span className='price'>
                  Price: {minValue > 100 ? (minValue / 100).toLocaleString() + ' L' : minValue.toLocaleString() + 'K'} -
                  {maxValue > 100 ? (maxValue / 100).toLocaleString() + ' L' : maxValue.toLocaleString() + ' k'}
                </span>

                <br></br>
                <MultiRangeSlider
                  className='slider'
                  min={5}
                  max={500}
                  step={1}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                  barInnerColor='black'
                  thumbLeftColor='black'
                  thumbRightColor='black'
                  ruler={false}
                />
              </>)}
            </div>

            <div className="search-bar-item">
              <button onClick={handleSearch} id='search-btn'>Search</button>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default SearchBar;
