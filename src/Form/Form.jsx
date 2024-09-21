import React, { useState } from 'react'
import { TbAirConditioning } from "react-icons/tb";
import { FaSatelliteDish } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { LuUtensilsCrossed } from "react-icons/lu";
import { PiThermometerHotBold } from "react-icons/pi";
import { GrElevator } from "react-icons/gr";
import { LiaIntercom } from "react-icons/lia";
import { PiPark } from "react-icons/pi";
import { MdMicrowave } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { RiParkingBoxLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { GiKidSlide } from "react-icons/gi";
import { BiCctv } from "react-icons/bi";
import { ImPower } from "react-icons/im";
import { GiGasStove } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { PiCourtBasketball } from "react-icons/pi";
import { TbBuildingBank } from "react-icons/tb";
import { GiChimney } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { TbFridge } from "react-icons/tb";
import { GiGrassMushroom } from "react-icons/gi";
import { GiGrass } from "react-icons/gi";
import { FaChargingStation } from "react-icons/fa6";
import { PiWarehouseLight } from "react-icons/pi";
import './Form.css';
import './Formnavbar.css';
function Form() {
  const [category, setcategory] = useState('residential')
  const [sold, setsold] = useState('')
  const [floorplan, setfloorplan] = useState();
  const [photos, setphotos] = useState();
  const [resitype, setresitype] = useState('sale')
  const [residential, setresidential] = useState('')
  const [commercial, setcommercial] = useState('')
  const [leased, setleased] = useState('no')
  const [activeButton, setActiveButton] = useState('');
  const [activeButton2, setActiveButton2] = useState('');
  const [activeButton3, setActiveButton3] = useState('');
  const [activeButton4, setActiveButton4] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const initialdata = {
    'pincode': '',
    'city': '',
    'locality': '',
    'propertyname': '',
    'address': '',
    'configuration': '',
    'areadetail': '',
    'areatype': '',
    'bathroom': '',
    'balcony': '',
    'description': '',
    'furnishtype': '',
    'reraid': '',
    'floorno': '',
    'totalfloor': '',
    'constructionstatus': '',
    'propertydate': '',
    'propertyfacing': '',
    'price': '',
    'maintenancecharge': '',
    'tokenamount': '',
    'length': '',
    'width': '',
    'montlyrent': '',
    'secuuritydeposit': '',
    'currentlease': '',
    'remainingtime': '',
    'boundarywall': '',
    'noofopenside': '',
    'floorallowed': '',
    'modifyinterior': '',
    'lockinperiod': '',
    'pricerange': 'Lakh',
    'moneytype': 'Rupees',
    amenities: [],
    'metro': '',
    'school': '',
    'hospital': '',
    'mall': '',
    'resturant': '',
    'bus': '',
    'cinema': '',
    'country': 'india'
  }
  const [formdata, setformdata] = useState({
    'pincode': '',
    'city': '',
    'locality': '',
    'propertyname': '',
    'address': '',
    'configuration': '',
    'areadetail': '',
    'areatype': '',
    'bathroom': '',
    'balcony': '',
    'description': '',
    'furnishtype': '',
    'reraid': '',
    'floorno': '',
    'totalfloor': '',
    'constructionstatus': '',
    'propertydate': '',
    'propertyfacing': '',
    'price': '',
    'maintenancecharge': '',
    'tokenamount': '',
    'length': '',
    'width': '',
    'montlyrent': '',
    'secuuritydeposit': '',
    'currentlease': '',
    'remainingtime': '',
    'boundarywall': '',
    'noofopenside': '',
    'floorallowed': '',
    'modifyinterior': '',
    'lockinperiod': '',
    'pricerange': 'Lakh',
    'moneytype': 'Rupees',
    amenities: [],
    'metro': '',
    'school': '',
    'hospital': '',
    'mall': '',
    'resturant': '',
    'bus': '',
    'cinema': '',
    'country': 'india'
  })


  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Set the active button when clicked
  };
  const handleButtonClick2 = (buttonName) => {
    setActiveButton2(buttonName); // Set the active button when clicked
  };
  const handleButtonClick3 = (buttonName) => {
    setActiveButton3(buttonName); // Set the active button when clicked
  };
  const handleButtonClick4 = (buttonName) => {
    setActiveButton4(buttonName); // Set the active button when clicked
  };
  const resihandler1 = () => {
    setformdata(initialdata);
    setresidential('apartment');
  }
  const resihandler2 = () => {
    setformdata(initialdata);
    setresidential('house/villa');
  }
  const resihandler3 = () => {
    setformdata(initialdata);
    setresidential('plot');
  }
  const resihandler4 = () => {
    setformdata(initialdata);
    setresidential('builderfloor');
  }
  const resihandler5 = () => {
    setformdata(initialdata);
    setresidential('farmhouse');
  }
  const commhandler1 = () => {
    setformdata(initialdata);
    setcommercial('officespace');
  }
  const commhandler2 = () => {
    setformdata(initialdata);
    setcommercial('shop');
  }
  const commhandler3 = () => {
    setformdata(initialdata);
    setcommercial('land');
  }
  const commhandler4 = () => {
    setformdata(initialdata);
    setcommercial('coworkingspace');
  }
  const commhandler5 = () => {
    setformdata(initialdata);
    setcommercial('showroom');
  }
  const leasedchange1 = (e) => {
    setleased(e.target.value);
  }
  const modify = (e) => {
    formdata.modifyinterior = e;
  }
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      handleCheckboxChange(name, value, checked);
    } else {
      setformdata((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleFloorplanChange = (event) => {
    let files = Array.from(event.target.files);
    if (files.length > 4) {
      alert('You can upload up to 4 floorplans.');
      files = files.slice(0, 4);
    }
    const filenames = files.map((file) => file.name);
    setfloorplan(filenames);
  };

  // Handle multiple photos upload
  const handlePhotosChange = (event) => {
    const files = Array.from(event.target.files);
    const filenames = files.map((file) => file.name);
    setphotos(filenames);
  };
  const handleCheckboxChange = (name, value, checked) => {
    setformdata((prevData) => ({
      ...prevData,
      [name]: checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataWithExtras = {
      ...formdata,
      resitype: resitype,       // Append resitype
      category: category,       // Append category
      residential: residential, // Append residential type
      floorplan: floorplan,     // Append floorplan
      photos: photos, // Append photos array
      Commercail: commercial,
      leased: leased //commercial category
    };
    console.log('Form submitted:', formDataWithExtras);
    alert('form submitted sucessfully')
  };
  return (
    <>
      <div className='banner' >
      </div>
      <div>
        <>
          <div className='container'>
            <div className="property-tabs stickyclass">
              <div className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <ul className={`prop-tab ${isOpen ? 'active' : ''}`} role="tablist">
                <li>
                  <a href="#property" className="active" role="tab">Property Information</a>
                </li>
                <li>
                  <a href="#over" role="tab">Overview</a>
                </li>
                <li>
                  <a href="#amenties" role="tab">Amenities</a>
                </li>
                <li>
                  <a href="#distance2" role="tab">Distances</a>
                </li>
                <li>
                  <a href="#upload" role="tab">Attachment</a>
                </li>
                <li>
                  <a href="#location" role="tab">Location</a>
                </li>
              </ul>
            </div>
          </div>
        </>
      </div>
      <div className='question' id='property'>
        <p>New to <span id='town'>Townmanor?</span>
          <br></br>
          Let's get you started</p>
      </div>

      <div className='upperbutton'></div>
      <div className='upperbutton'>

        <div><h1 id='head'>property form </h1>
          <button className={activeButton === 'sale' ? 'active' : ''}
            
            onClick={() => {
              setresitype('sale');
              handleButtonClick('sale');
            }}
          >Sale</button>
          <button className={activeButton === 'rent' ? 'active' : ''}
            onClick={() => {
              setresitype('rent');
              handleButtonClick('rent');
            }}>Rent</button>
        </div>
        <br></br>
        <div>
          <button className={activeButton2 === 'residential' ? 'active' : ''}
            onClick={() => {
              setcategory('residential');
              handleButtonClick2('residential');
            }}>Residential</button>
          <button className={activeButton2 === 'commercial' ? 'active' : ''}
            onClick={() => {
              setcategory('commercial');
              handleButtonClick2('commercial');
            }}>Commercial</button>
        </div>
      </div>
      {resitype === 'sale' && category === 'residential' && (
        <>
          <br></br>
          <div className='upperbutton2'>
            <button className={activeButton3 === 'apartment' ? 'active' : ''}
              onClick={() => {
                setresidential('apartment');
                handleButtonClick3('apartment');
                setformdata(initialdata);
              }}>Apartment</button>
            <button className={activeButton3 === 'house/villa' ? 'active' : ''}
              onClick={() => {
                setresidential('house/villa');
                handleButtonClick3('house/villa');
                setformdata(initialdata);
              }}>House/villa</button>
            <button className={activeButton3 === 'plot' ? 'active' : ''}
              onClick={() => {
                setresidential('plot');
                handleButtonClick3('plot');
                setformdata(initialdata);
              }}>Plot</button>
            <button className={activeButton3 === 'builderfloor' ? 'active' : ''}
              onClick={() => {
                setresidential('builderfloor');
                handleButtonClick3('builderfloor');
                setformdata(initialdata);
              }}>Builderfloor</button>
            <button className={activeButton3 === 'farmhouse' ? 'active' : ''}
              onClick={() => {
                setresidential('farmhouse');
                handleButtonClick3('farmhouse');
                setformdata(initialdata);
              }}>Farmhouse</button>
          </div>
          {(residential === 'apartment' || residential === 'house/villa' || residential === 'builderfloor' || residential === 'farmhouse' || residential === 'plot') && (
            <>
              <div className='container3'>
                <form onSubmit={handleSubmit}>
                  <div id='propertyimf'>
                    <div className='fieldbox fieldbox2'>
                      <label className='fieldname'>Country:</label>
                      <select
                        className='fieldvalue fieldvaluex'
                        name='country'
                        onChange={handleChange}
                        value={formdata.country}
                        required

                      >
                        <option value='india'>India</option>
                        <option value='uae'>UAE
                        </option>
                        <option value='qatar'>QATAR</option>
                      </select>
                      <label className='fieldname'>City:</label>
                      <select
                        className='fieldvalue fieldvaluex'
                        name='city'
                        onChange={handleChange}
                        value={formdata.city}
                        required

                      >
                        {formdata.country === 'india' && (
                          <>
                            <option value='noida'>Noida</option>
                            <option value='gurgaon'>Gurgaon
                            </option>
                            <option value='greaternoida'>Greater Noida</option>
                            <option value='ghaziabad'>Ghaziabad</option>
                            <option value='delhi'>Delhi</option>
                            <option value='faridabad'>Faridabad</option>
                          </>
                        )}
                        {formdata.country === 'uae' && (
                          <>
                            <option value='dubai'>Dubai</option>
                          </>
                        )}
                        {formdata.country === 'qatar' && (
                          <>
                            <option value='doha'>Doha</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className='fieldbox fieldbox2'>
                      <label className='fieldname'>locality:</label>
                      <input type='text' className='fieldvalue fieldvaluex' placeholder='Enter locality' name='locality' onChange={handleChange} value={formdata.locality}></input>
                      <label className='fieldname'>Pincode:</label>
                      <input type='text' className='fieldvalue fieldvaluex' placeholder='Enter Pincode' name='pincode' onChange={handleChange} value={formdata.pincode}></input>
                    </div>
                    <div className='fieldbox '>
                      <label className='fieldname'>Property Name:</label>
                      <input className='fieldvalue2' placeholder='Enter Property Name' type='text' name='propertyname' onChange={handleChange} value={formdata.propertyname} required>
                      </input>
                    </div>
                    <div className='fieldbox'>
                      <label className='fieldname'>Property Address:</label>
                      <input className='fieldvalue2' type='text' placeholder='Enter Property address' name='address' onChange={handleChange} value={formdata.address} required>
                      </input>
                    </div>
                    <div className='fieldbox'>
                      <label className='fieldname'>Description</label>
                      <textarea className='fieldvalue3' name="description" placeholder='Tell Something About Your Property' value={formdata.description} onChange={handleChange} rows={7} cols={70} required></textarea>
                    </div>
                  </div>
                  <div>
                    <h2 className='head' id='over'>Overview</h2>
                  </div>
                  <div id='overview'>
                    {residential === 'plot' && (
                      <>
                        <div className='fieldbox'>
                          <label className='fieldname' >RERA ID:</label>
                          <input type='text' className='fieldvalue2' placeholder=' example UPRERAPRJ72xx' name='reraid' onChange={handleChange} value={formdata.reraid}></input>
                          <br />
                        </div>
                      </>
                    )}
                    {residential !== 'plot' && (
                      <>
                        <div className='fieldbox'>
                          <label className='fieldname' >RERA ID:</label>
                          <input type='text' className='fieldvalue2' placeholder=' example UPRERAPRJ72xx' name='reraid' onChange={handleChange} value={formdata.reraid}></input>
                          <br />
                        </div>
                      </>
                    )}
                    {residential !== 'plot' && (
                      <>
                        <div className='fieldbox fieldboxz'>
                          <label className='fieldname'>Configuration:</label>
                          <select
                            className='fieldvalue'
                            name='configuration'
                            onChange={handleChange}
                            value={formdata.configuration}
                            required

                          >
                            <option value='1BHK'>1BHK</option>
                            <option value='1.5BHK'>1.5BHK</option>
                            <option value='2BHK'>2BHK</option>
                            <option value='2.5BHK'>2.5BHK</option>
                            <option value='3BHK'>3BHK</option>
                            <option value='4BHK'>4BHK</option>
                            <option value='5BHK'>5BHK</option>
                            <option value='6BHK'>6BHK</option>
                            <option value='6+ BHK'>6+ BHK</option>
                          </select>
                          <label className='fieldname'>Area Detail(in sq.ft) : </label>
                          <input type='number' className='fieldvalue' name='areadetail' onChange={handleChange} value={formdata.areadetail} required>
                          </input>
                          <select
                            className='fieldvalue'
                            name='areatype'
                            onChange={handleChange}
                            value={formdata.areatype}
                            required
                          >
                            <option value='Super Built-up Area'>Super Built Up Area</option>
                            <option value='Built-up area'>Built-up Area</option>
                            <option value='Carpet Area'>Carpet Area</option>
                          </select>
                        </div>
                        {residential !== 'plot' && (
                          <>
                            <div className='fieldbox fieldboxz'>
                              <label className='fieldname'>Property Facing:</label>
                              <select
                                name='propertyfacing'
                                className='fieldvalue'
                                onChange={handleChange}
                                value={formdata.propertyfacing}
                                required
                              >
                                <option value='North'>North</option>
                                <option value='South'>South</option>
                                <option value='East'>East</option>
                                <option value='West'>West</option>
                                <option value='North-East'>North-East</option>
                                <option value='North-West'>North-West</option>
                                <option value='South-East'>South-East</option>
                                <option value='South-West'>South-West</option>
                              </select>

                              <label className='fieldname fieldnamex'>Maintenance charge per month:</label>
                              <input type='number' className='fieldvalue' name='maintenancecharge' onChange={handleChange} value={formdata.maintenancecharge}></input>
                              <br></br>
                            </div>
                          </>
                        )}



                      </>
                    )}
                    {residential === 'plot' && (
                      <>
                        <div className='fieldbox'>
                          <label className='fieldname'>Plot Dimesion:</label>
                          <br></br>
                          <input type='number' className='fieldvalue' name='length in ft.' onChange={handleChange} value={formdata.length} placeholder='Length' required>
                          </input>
                          X

                          <input type='number' className='fieldvalue' name='width in ft.' onChange={handleChange} value={formdata.width} placeholder='width' required>

                          </input>

                        </div>
                      </>
                    )}


                    {residential !== 'plot' && (
                      <>
                        <div className='fieldbox fieldboxx fieldboxz'>

                          <div>
                            <label className='fieldname'>Construction Status</label>
                            <select
                              name='constructionstatus'
                              className='fieldvalue fieldvaluex fieldvaluez'
                              value={formdata.constructionstatus}
                              onChange={handleChange}
                              required
                            >
                              <option value='Ready to Move'>Ready to Move</option>
                              <option value='Under-Construction'>Under Construction</option>
                              <option value='NewLaunch'>New Launch</option>
                            </select>
                            <label className='fieldname'> possesion date</label>
                            <input className='fieldvalue' type='date' name='propertydate' value={formdata.propertydate} onChange={handleChange}></input>
                          </div>
                        </div>
                        <div className='fieldbox fieldboxx '>
                          <div>
                            <label className='fieldname '>Floor no:</label>
                            <input className='fieldvalue' type='number' name='floorno' onChange={handleChange} value={formdata.floorno}></input>
                          </div>
                          <div>
                            <label className='fieldname'>Total Floor:</label>
                            <input type='number' className='fieldvalue ' name='totalfloor' onChange={handleChange} value={formdata.totalfloor}></input>
                          </div>
                        </div>
                      </>
                    )}

                    <div className='fieldbox fieldboxx'>
                      <div>
                        <label className='fieldname'>No of Bathroom:</label>
                        <select
                          className='fieldvalue '
                          name='bathroom'
                          onChange={handleChange}
                          value={formdata.bathroom}
                          required
                        >
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                          <option value='5+'>5+</option>
                        </select>
                      </div>
                      <div>
                        <label className='fieldname'>Furnish Type:</label>
                        <select
                          className='fieldvalue'
                          name='furnishtype'
                          onChange={handleChange}
                          value={formdata.furnishtype}
                          required
                        >
                          <option value='Fully furnished'>Fully furnished</option>
                          <option value='Semi furnished'>Semi furnished</option>
                          <option value='Un furnished'>Un furnished</option>
                        </select>
                      </div>
                      <div>
                        <label className='fieldname'>No of Balcony:</label>
                        <select
                          className='fieldvalue '
                          name='balcony'
                          onChange={handleChange}
                          value={formdata.balcony}
                          required
                        >
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                          <option value='5+'>5+</option>
                        </select>
                      </div>

                    </div>





                    <div className='fieldbox fieldboxz'>
                      <label className='fieldname'>Price:</label>
                      <input type='number' className='fieldvalue' name='price' onChange={handleChange} value={formdata.price} required></input>
                      <select
                        className='fieldvalue'
                        name='pricerange'
                        onChange={handleChange}
                        value={formdata.pricerange}
                        required
                      >

                        <option value='Lakh'>Lakhs</option>
                        <option value='Crore'>Crore</option>
                        <option value='million'>Million</option>
                        <option value='billion'>Billion</option>
                      </select>
                      <select
                        className='fieldvalue'
                        name='moneytype'
                        onChange={handleChange}
                        value={formdata.moneytype}
                        required
                      >
                        <option value='Rupees' >IND-Rupees</option>
                        <option value='AED'>Dubai - AED</option>
                        <option value='Riyal'>Qatar-Riyal</option>
                      </select>
                    </div>

                    <div className='fieldbox fieldboxz'>
                      <label className='fieldname'>Token amount:</label>
                      <input type='number' className='fieldvalue' name='tokenamount' onChange={handleChange} value={formdata.tokenamount}></input>
                    </div>
                  </div>
                  <div>
                    <h2 id='amenties' className='head'>Amenities</h2>
                  </div>
                  <div id='facility'>
                    {residential !== 'plot' && (
                      <>
                        <div className='fieldbox'>

                          <div className='checkbox-group'>
                            {[
                              { name: 'Air Conditioner', icon: <TbAirConditioning /> },
                              { name: 'Cable Tv', icon: <FaSatelliteDish /> },
                              { name: 'Wifi', icon: <FaWifi /> },
                              { name: 'Dishwasher', icon: <LuUtensilsCrossed /> },
                              { name: 'Heating', icon: <PiThermometerHotBold /> },
                              { name: 'Lift', icon: <GrElevator /> },
                              { name: 'Intercomm Facility', icon: <LiaIntercom /> },
                              { name: 'Microwave', icon: <MdMicrowave /> },
                              { name: 'Park', icon: <PiPark /> },
                              { name: 'Parking', icon: <LuParkingCircle /> },
                              { name: 'Guest Parking', icon: <RiParkingBoxLine /> },
                              { name: 'Security', icon: <MdSecurity /> },
                              { name: 'Play Area', icon: <GiKidSlide /> },
                              { name: 'CCTV', icon: <BiCctv /> },
                              { name: 'Power Backup', icon: <ImPower /> },
                              { name: 'Gas Pipeline', icon: <GiGasStove /> },
                              { name: 'Gym', icon: <GiWeightLiftingUp /> },
                              { name: 'Swimming Pool', icon: <FaPersonSwimming /> },
                              { name: 'Multipurpose Court', icon: <PiCourtBasketball /> },
                              { name: 'Multipurpose Hall', icon: <TbBuildingBank /> },
                              { name: 'Chimney', icon: <GiChimney /> },
                              { name: 'Modular Kitchen', icon: <FaKitchenSet /> },
                              { name: 'Refrigerator', icon: <TbFridge /> },
                              { name: 'Rear Lawn', icon: <GiGrassMushroom /> },
                              { name: 'Front Lawn', icon: <GiGrass /> },
                              { name: 'EV Charge', icon: <FaChargingStation /> },
                              { name: 'Club House', icon: <PiWarehouseLight /> }
                            ].map((amenity, index) => (
                              <label key={index} className='custom-checkbox'>
                                <input
                                  type="checkbox"
                                  name="amenities"
                                  value={amenity.name}
                                  onChange={handleChange}
                                />
                                <p className='fieldname2'>
                                  {amenity.icon && <span className='icon'>{amenity.icon}</span>} {amenity.name}
                                </p>
                                <span className='checkmark'></span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    <div>
                      {
                        residential === 'plot' && (
                          <>
                            <div className='fieldbox'>
                              <label className='fieldname'>Amenities</label>
                              <div className='checkbox-group'>
                                {[
                                  { name: 'Park', icon: <PiPark /> },
                                  { name: 'Parking', icon: <LuParkingCircle /> },
                                  { name: 'Security', icon: <MdSecurity /> },
                                  { name: 'Play Area', icon: <GiKidSlide /> },
                                  { name: 'CCTV', icon: <BiCctv /> },
                                  { name: 'Power Backup', icon: <ImPower /> },
                                  { name: 'Gas Pipeline', icon: <GiGasStove /> },
                                ].map((amenity, index) => (
                                  <label key={index} className='custom-checkbox'>
                                    <input
                                      type="checkbox"
                                      name="amenities"
                                      value={amenity.name}
                                      onChange={handleChange}
                                    />
                                    <p className='fieldname2'>
                                      {amenity.icon && <span className='icon'>{amenity.icon}</span>} {amenity.name}
                                    </p>
                                    <span className='checkmark'></span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </>
                        )
                      }
                    </div>

                  </div>
                  <div>
                    <h2 id='distance2' className='head'>Distance</h2>
                  </div>
                  <div id='distance'>
                    <div className='fieldbox fieldbox2'>
                      <div className='distancebox'>
                        <label className='fieldname'>Metro</label><input className='fieldvalue fieldvalue8' type='number' name='metro' value={formdata.metro} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Bus</label><input className='fieldvalue fieldvalue8' type='number' name='bus' value={formdata.bus} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>School</label><input className='fieldvalue fieldvalue8' type='number' name='school' value={formdata.school} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Hospital</label><input className='fieldvalue fieldvalue8' type='number' name='hospital' value={formdata.hospital} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Mall</label><input className='fieldvalue fieldvalue8' type='number' name='mall' value={formdata.mall} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Resturant: </label><input className='fieldvalue fieldvalue8' type='number' name='resturant' value={formdata.resturant} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Cinema: </label><input className='fieldvalue fieldvalue8' type='number' name='cinema' value={formdata.cinema} onChange={handleChange} placeholder='in Km'></input>

                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 id='upload' className='head'>Floor plan & Attachment</h2>
                  </div>
                  <div id='attachment'>
                    {residential !== 'plot' && (
                      <>
                        <div className='fieldbox fieldboxx'>
                          <label className='fieldname'>Floor Plan:</label>
                          <input
                            className='fieldvalue4'
                            type="file"
                            name="floorplan"
                            id="floorplan"
                            onChange={handleFloorplanChange}
                            multiple
                            accept=".jpg,.png,.pdf"
                          />
                          <label htmlFor="floorplan" className='custom-file-input'>
                            Choose Floor Plan
                          </label>
                        </div>

                        <div className='fieldbox fieldboxx mb-4'>
                          <label className='fieldname'>Attachment: </label>
                          <input
                            className='fieldvalue4'
                            type="file"
                            name="photos"
                            id="photos"
                            onChange={handlePhotosChange}
                            multiple
                            accept=".jpg,.png"
                          />
                          <label htmlFor="photos" className='custom-file-input'>
                            Choose Attachment
                          </label>
                        </div>
                      </>
                    )}
                    {residential === 'plot' && (
                      <>
                        <div className='fieldbox'>
                          <label className='fieldname'>Upload Attachment:</label>
                          <input
                            className='fieldvalue4 '
                            type="file"
                            name="photos"
                            id="photos"
                            onChange={handlePhotosChange}
                            multiple
                            accept=".jpg,.png"
                          />
                          <label htmlFor="photos" className='custom-file-input'>
                            Choose Attachment
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                  <br></br>
                  <button type='submit' className='btn2'>submit</button>
                </form>
              </div>
            </>
          )}
        </>
      )}
      {
        category === 'residential' && resitype === 'rent' && (
          <>
            <div className='upperbutton2' id='upperbuttonx'>
              <button className={activeButton3 === 'apartment' ? 'active' : ''}
                onClick={() => {
                  setresidential('apartment');
                  handleButtonClick3('apartment');
                  setformdata(initialdata);
                }}>Apartment</button>
              <button className={activeButton3 === 'house/villa' ? 'active' : ''}
                onClick={() => {
                  setresidential('house/villa');
                  handleButtonClick3('house/villa');
                  setformdata(initialdata);
                }}>House/villa</button>
              <button className={activeButton3 === 'builderfloor' ? 'active' : ''}
                onClick={() => {
                  setresidential('builderfloor');
                  handleButtonClick3('builderfloor');
                  setformdata(initialdata);
                }}>Builderfloor</button>
              <button className={activeButton3 === 'farmhouse' ? 'active' : ''}
                onClick={() => {
                  setresidential('farmhouse');
                  handleButtonClick3('farmhouse');
                  setformdata(initialdata);
                }}>Farmhouse</button>
            </div>
            {(residential === 'apartment' || residential === 'house/villa' || residential === 'builderfloor' || residential === 'farmhouse') && (
              <>
                <div className='container'>
                  <form onSubmit={handleSubmit}>
                    <div id='propertyimf'>
                      <div className='fieldbox fieldbox2'>
                        <label className='fieldname'>Country:</label>
                        <select
                          className='fieldvalue fieldvaluex'
                          name='country'
                          onChange={handleChange}
                          value={formdata.country}
                          required

                        >
                          <option value='india'>India</option>
                          <option value='uae'>UAE
                          </option>
                          <option value='qatar'>QATAR</option>
                        </select>
                        <label className='fieldname'>City:</label>
                        <select
                          className='fieldvalue fieldvaluex'
                          name='city'
                          onChange={handleChange}
                          value={formdata.city}
                          required

                        >
                          {formdata.country === 'india' && (
                            <>
                              <option value='noida'>Noida</option>
                              <option value='gurgaon'>Gurgaon
                              </option>
                              <option value='greaternoida'>Greater Noida</option>
                              <option value='ghaziabad'>Ghaziabad</option>
                              <option value='delhi'>Delhi</option>
                              <option value='faridabad'>Faridabad</option>
                            </>
                          )}
                          {formdata.country === 'uae' && (
                            <>
                              <option value='dubai'>Dubai</option>
                            </>
                          )}
                          {formdata.country === 'qatar' && (
                            <>
                              <option value='doha'>Doha</option>
                            </>
                          )}
                        </select>
                      </div>
                      <div className='fieldbox fieldbox2'>
                        <label className='fieldname'>locality:</label>
                        <input type='text' className='fieldvalue fieldvaluex' placeholder='Enter locality' name='locality' onChange={handleChange} value={formdata.locality}></input>
                        <label className='fieldname'>Pincode:</label>
                        <input type='text' className='fieldvalue fieldvaluex' placeholder='Enter Pincode' name='pincode' onChange={handleChange} value={formdata.pincode}></input>
                      </div>
                      <div className='fieldbox'>
                        <label className='fieldname'>Property Name:</label>
                        <input className='fieldvalue2' placeholder='Enter Property Name' type='text' name='propertyname' onChange={handleChange} value={formdata.propertyname} required>
                        </input>
                      </div>
                      <div className='fieldbox'>
                        <label className='fieldname'>Property Address:</label>
                        <input className='fieldvalue2' type='text' placeholder='Enter Property address' name='address' onChange={handleChange} value={formdata.address} required>
                        </input>
                      </div>
                      <div className='fieldbox'>
                        <label className='fieldname'>Description : </label>
                        <textarea className='fieldvalue3' name="description" value={formdata.description} onChange={handleChange} rows={7} cols={70} required></textarea>
                      </div>
                    </div>
                    <div>
                      <h2 className='head' id='over'>Overview</h2>
                    </div>
                    <div id='overview'>
                      {residential !== 'plot' && (
                        <>
                          <div className='fieldbox'>
                            <label className='fieldname' >RERA ID:</label>
                            <input type='text' className='fieldvalue2' placeholder=' example UPRERAPRJ72xx' name='reraid' onChange={handleChange} value={formdata.reraid}></input>
                            <br />
                          </div>
                          <div className='fieldbox fieldboxz'>
                            <label className='fieldname'>Configuration:</label>
                            <select
                              className='fieldvalue'
                              name='configuration'
                              onChange={handleChange}
                              value={formdata.configuration}
                              required

                            >
                              <option value='1BHK'>1BHK</option>
                              <option value='1.5BHK'>1.5BHK</option>
                              <option value='2BHK'>2BHK</option>
                              <option value='2.5BHK'>2.5BHK</option>
                              <option value='3BHK'>3BHK</option>
                              <option value='4BHK'>4BHK</option>
                              <option value='5BHK'>5BHK</option>
                              <option value='6BHK'>6BHK</option>
                              <option value='6+ BHK'>6+ BHK</option>
                            </select>
                            <label className='fieldname'>Area Detail(in sq.ft) : </label>
                            <input type='number' className='fieldvalue' name='areadetail' onChange={handleChange} value={formdata.areadetail} required>
                            </input>
                            <select
                              className='fieldvalue'
                              name='areatype'
                              onChange={handleChange}
                              value={formdata.areatype}
                              required
                            >
                              <option value='Super Built-up Area'>Super Built Up Area</option>
                              <option value='Built-up area'>Built-up Area</option>
                              <option value='Carpet Area'>Carpet Area</option>
                            </select>
                          </div>

                          <div className='fieldbox fieldboxz'>

                            <label className='fieldname'>Property Facing:</label>
                            <select
                              name='propertyfacing'
                              className='fieldvalue'
                              onChange={handleChange}
                              value={formdata.propertyfacing}
                              required
                            >
                              <option value='North'>North</option>
                              <option value='South'>South</option>
                              <option value='East'>East</option>
                              <option value='West'>West</option>
                              <option value='North-East'>North-East</option>
                              <option value='North-West'>North-West</option>
                              <option value='South-East'>South-East</option>
                              <option value='South-West'>South-West</option>
                            </select>

                            <label className='fieldname fieldnamex'>Maintenance charge per month:</label>
                            <input type='number' className='fieldvalue' name='maintenancecharge' onChange={handleChange} value={formdata.maintenancecharge}></input>
                            <br></br>
                          </div>

                          <div className='fieldbox fieldboxx'>
                            <div>
                              <label className='fieldname'>No of Bathroom:</label>
                              <select
                                className='fieldvalue'
                                name='bathroom'
                                onChange={handleChange}
                                value={formdata.bathroom}
                                required
                              >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='5+'>5+</option>
                              </select>
                            </div>
                            <div>
                              <label className='fieldname'>Furnish Type:</label>
                              <select
                                className='fieldvalue'
                                name='furnishtype'
                                onChange={handleChange}
                                value={formdata.furnishtype}
                                required
                              >
                                <option value='Fully furnished'>Fully furnished</option>
                                <option value='Semi furnished'>Semi furnished</option>
                                <option value='Un furnished'>Un furnished</option>
                              </select>
                              <br></br>
                            </div>
                            <div>
                              <label className='fieldname'>No of Balcony:</label>
                              <select
                                className='fieldvalue'
                                name='balcony'
                                onChange={handleChange}
                                value={formdata.balcony}
                                required
                              >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='5+'>5+</option>
                              </select>
                            </div>
                          </div>
                        </>
                      )}



                      {residential !== 'plot' && (
                        <>

                          <div className='fieldbox fieldboxx'>
                            <div>
                              <label className='fieldname'>Floor no:</label>
                              <input className='fieldvalue' type='number' name='floorno' onChange={handleChange} value={formdata.floorno}></input>
                            </div>
                            <div>
                              <label className='fieldname'>Total Floor:</label>
                              <input type='number' className='fieldvalue' name='totalfloor' onChange={handleChange} value={formdata.totalfloor}></input>
                            </div>
                          </div>
                        </>
                      )}

                      {residential !== 'plot' && (
                        <>

                        </>
                      )}
                      <div className='fieldbox fieldboxz'>

                        <label className='fieldname'>Montly Rent Price :</label>
                        <input type='number' className='fieldvalue' name='price' onChange={handleChange} value={formdata.price} required></input>
                        <select
                          name='pricerange'
                          onChange={handleChange}
                          value={formdata.pricerange}
                          required
                          className='fieldvalue'
                        >
                          <option value='thousand'>Thousand</option>
                          <option value='Lakh'>Lakhs</option>
                          <option value='Crore'>Crore</option>
                          <option value='million'>million</option>
                          <option value='billion'>billion</option>
                        </select>
                        <select
                          className='fieldvalue'
                          name='moneytype'
                          onChange={handleChange}
                          value={formdata.moneytype}
                          required
                        >
                          <option value='Rupees' >Rupees</option>
                          <option value='AED'>Dubai - AED</option>
                          <option value='Riyal'>Riyal-Qutar</option>
                        </select>
                        <div className='fieldbox fieldboxz'>
                          <label className='fieldname'>Security amount:</label>
                          <input type='number' className='fieldvalue' name='secuuritydeposit' onChange={handleChange} value={formdata.secuuritydeposit}></input>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 id='amenties' className='head'>Amenities</h2>
                    </div>
                    <div id='facility'>
                      {residential !== 'plot' && (
                        <>
                          <div className='fieldbox'>
                            <div className='checkbox-group'>
                              {[
                                { name: 'Air Conditioner', icon: <TbAirConditioning /> },
                                { name: 'Cable Tv', icon: <FaSatelliteDish /> },
                                { name: 'Wifi', icon: <FaWifi /> },
                                { name: 'Dishwasher', icon: <LuUtensilsCrossed /> },
                                { name: 'Heating', icon: <PiThermometerHotBold /> },
                                { name: 'Lift', icon: <GrElevator /> },
                                { name: 'Intercomm Facility', icon: <LiaIntercom /> },
                                { name: 'Microwave', icon: <MdMicrowave /> },
                                { name: 'Park', icon: <PiPark /> },
                                { name: 'Parking', icon: <LuParkingCircle /> },
                                { name: 'Guest Parking', icon: <RiParkingBoxLine /> },
                                { name: 'Security', icon: <MdSecurity /> },
                                { name: 'Play Area', icon: <GiKidSlide /> },
                                { name: 'CCTV', icon: <BiCctv /> },
                                { name: 'Power Backup', icon: <ImPower /> },
                                { name: 'Gas Pipeline', icon: <GiGasStove /> },
                                { name: 'Gym', icon: <GiWeightLiftingUp /> },
                                { name: 'Swimming Pool', icon: <FaPersonSwimming /> },
                                { name: 'Multipurpose Court', icon: <PiCourtBasketball /> },
                                { name: 'Multipurpose Hall', icon: <TbBuildingBank /> },
                                { name: 'Chimney', icon: <GiChimney /> },
                                { name: 'Modular Kitchen', icon: <FaKitchenSet /> },
                                { name: 'Refrigerator', icon: <TbFridge /> },
                                { name: 'Rear Lawn', icon: <GiGrassMushroom /> },
                                { name: 'Front Lawn', icon: <GiGrass /> },
                                { name: 'EV Charge', icon: <FaChargingStation /> },
                                { name: 'Club House', icon: <PiWarehouseLight /> }
                              ].map((amenity, index) => (
                                <label key={index} className='custom-checkbox'>
                                  <input
                                    type="checkbox"
                                    name="amenities"
                                    value={amenity.name}
                                    onChange={handleChange}
                                  />
                                  <p className='fieldname2'>
                                    {amenity.icon && <span className='icon'>{amenity.icon}</span>} {amenity.name}
                                  </p>
                                  <span className='checkmark'></span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div>
                      <h2 id='distance2' className='head'>Distance</h2>
                    </div>
                    <div id='distance'>
                      <div className='fieldbox fieldbox2'>
                        <div className='distancebox'>
                          <label className='fieldname'>Metro</label><input className='fieldvalue fieldvalue8' type='number' name='metro' value={formdata.metro} onChange={handleChange} placeholder='in Km'></input>

                          <label className='fieldname'>Bus</label><input className='fieldvalue fieldvalue8' type='number' name='bus' value={formdata.bus} onChange={handleChange} placeholder='in Km'></input>

                          <label className='fieldname'>School</label><input className='fieldvalue fieldvalue8' type='number' name='school' value={formdata.school} onChange={handleChange} placeholder='in Km'></input>

                          <label className='fieldname'>Hospital</label><input className='fieldvalue fieldvalue8' type='number' name='hospital' value={formdata.hospital} onChange={handleChange} placeholder='in Km'></input>

                          <label className='fieldname'>Mall</label><input className='fieldvalue fieldvalue8' type='number' name='mall' value={formdata.mall} onChange={handleChange} placeholder='in Km'></input>

                          <label className='fieldname'>Resturant: </label><input className='fieldvalue fieldvalue8' type='number' name='resturant' value={formdata.resturant} onChange={handleChange} placeholder='in Km'></input>

                          <label className='fieldname'>Cinema: </label><input className='fieldvalue fieldvalue8' type='number' name='cinema' value={formdata.cinema} onChange={handleChange} placeholder='in Km'></input>

                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 id='upload' className='head'>Floor plan & Attachment</h2>
                    </div>
                    <div id='attachment'>
                      {residential !== 'plot' && (
                        <>
                          <div className='fieldbox fieldboxx'>
                            <label className='fieldname'>Floor Plan:</label>
                            <input
                              className='fieldvalue4'
                              type="file"
                              name="floorplan"
                              id="floorplan"
                              onChange={handleFloorplanChange}
                              multiple
                              accept=".jpg,.png,.pdf"
                            />
                            <label htmlFor="floorplan" className='custom-file-input'>
                              Choose Floor Plan
                            </label>
                          </div>

                          <div className='fieldbox fieldboxx mb-4'>
                            <label className='fieldname'>Attachment: </label>
                            <input
                              className='fieldvalue4'
                              type="file"
                              name="photos"
                              id="photos"
                              onChange={handlePhotosChange}
                              multiple
                              accept=".jpg,.png"
                            />
                            <label htmlFor="photos" className='custom-file-input'>
                              Choose Attachment
                            </label>
                          </div>
                        </>
                      )}
                    </div>
                    <br />
                    <button type='submit' className='btn2'>submit</button>
                  </form>
                </div>
              </>
            )}
          </>
        )
      }
      {resitype === 'sale' && category === 'commercial' && (
        <>
          <div className='upperbutton2 upperbutton3'>
            <button className={activeButton4 === 'officespace' ? 'active' : ''}
              onClick={() => {
                setcommercial('officespace');
                handleButtonClick4('officespace');
              }}
            >OfficeSpace</button>
            <button className={activeButton4 === 'shop' ? 'active' : ''}
              onClick={() => {
                setcommercial('shop');
                handleButtonClick4('shop');
              }}
            >Shop</button>
            <button className={activeButton4 === 'land' ? 'active' : ''}
              onClick={() => {
                setcommercial('land');
                handleButtonClick4('land');
              }}
            >Land</button>
            <button className={activeButton4 === 'coworkingspace' ? 'active' : ''}
              onClick={() => {
                setcommercial('coworkingspace');
                handleButtonClick4('coworkingspace');
              }}
            >CoWorkingSpace</button>
            <button className={activeButton4 === 'showroom' ? 'active' : ''}
              onClick={() => {
                setcommercial('showroom');
                handleButtonClick4('showroom');
              }}
            >Showroom</button>
          </div>
          {(commercial === 'officespace' || commercial === 'shop' || commercial === 'coworkingspace' || commercial === 'showroom' || commercial === 'land') && (
            <>
              <div className='container'>
                <form onSubmit={handleSubmit}>
                  <div id='propertyimf'>
                    <div className='fieldbox fieldbox2'>
                      <label className='fieldname'>Country:</label>
                      <select
                        className='fieldvalue fieldvaluex'
                        name='country'
                        onChange={handleChange}
                        value={formdata.country}
                        required

                      >
                        <option value='india'>India</option>
                        <option value='uae'>UAE
                        </option>
                        <option value='qatar'>QATAR</option>
                      </select>
                      <label className='fieldname'>City:</label>
                      <select
                        className='fieldvalue fieldvaluex'
                        name='city'
                        onChange={handleChange}
                        value={formdata.city}
                        required

                      >
                        {formdata.country === 'india' && (
                          <>
                            <option value='noida'>Noida</option>
                            <option value='gurgaon'>Gurgaon
                            </option>
                            <option value='greaternoida'>Greater Noida</option>
                            <option value='ghaziabad'>Ghaziabad</option>
                            <option value='delhi'>Delhi</option>
                            <option value='faridabad'>Faridabad</option>
                          </>
                        )}
                        {formdata.country === 'uae' && (
                          <>
                            <option value='dubai'>Dubai</option>
                          </>
                        )}
                        {formdata.country === 'qatar' && (
                          <>
                            <option value='doha'>Doha</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className='fieldbox fieldbox2'>
                      <label className='fieldname'>locality:</label>
                      <input type='text' className='fieldvalue fieldvaluex' placeholder='Enter locality' name='locality' onChange={handleChange} value={formdata.locality}></input>
                      <label className='fieldname'>Pincode:</label>
                      <input type='text' className='fieldvalue fieldvaluex' placeholder='Enter Pincode' name='pincode' onChange={handleChange} value={formdata.pincode}></input>
                    </div>
                    <div className='fieldbox'>
                      <label className='fieldname'>Property Name:</label>
                      <input className='fieldvalue2' placeholder='Enter Property Name' type='text' name='propertyname' onChange={handleChange} value={formdata.propertyname} required>
                      </input>
                    </div>
                    <div className='fieldbox'>
                      <label className='fieldname'>Property Address:</label>
                      <input className='fieldvalue2' type='text' placeholder='Enter Property address' name='address' onChange={handleChange} value={formdata.address} required>
                      </input>
                    </div>
                    <div className='fieldbox'>
                      <label className='fieldname'>Description : </label>
                      <textarea className='fieldvalue3' name="description" value={formdata.description} onChange={handleChange} rows={7} cols={70} required></textarea>
                    </div>
                  </div>
                  <div>
                    <h2 className='head' id='over'>Overview</h2>
                  </div>
                  <div id='overview'>
                    <div className='fieldbox fieldboxz'>
                      <label className='fieldname' >RERA ID:</label>
                      <input type='text' className='fieldvalue2' placeholder=' example UPRERAPRJ72xx' name='reraid' onChange={handleChange} value={formdata.reraid}></input>
                      <br />

                      <label className='fieldname'>Area Detail(in sq.ft) : </label>
                      <input className='fieldvalue' type='number' name='areadetail' onChange={handleChange} value={formdata.areadetail} required>
                      </input>
                      <select
                        className='fieldvalue'
                        name='areatype'
                        onChange={handleChange}
                        value={formdata.areatype}
                        required
                      >
                        <option value='Super Built-up-Area'>Super Built Up Area</option>
                        <option value='Built-up area'>Built-up Area</option>
                        <option value='Carpet Area'>Carpet Area</option>
                      </select>
                    </div>


                    {(commercial === 'land' || commercial === 'shop') && (
                      <>
                        <div className='fieldbox'>
                          <label className='fieldname'>Plot Dimesion:</label>
                          <br />
                          <input type='number' className='fieldvalue' name='length in ft.' onChange={handleChange} value={formdata.length} placeholder='Length' required>
                          </input>
                          X

                          <input type='number' className='fieldvalue' name='width in ft.' onChange={handleChange} value={formdata.width} placeholder='width' required>

                          </input>

                        </div>
                      </>
                    )}



                    {commercial !== 'land' && (
                      <>
                        <div className='fieldbox fieldboxz'>
                          <label className='fieldname'>Furnish Type:</label>
                          <select
                            className='fieldvalue'
                            name='furnishtype'
                            onChange={handleChange}
                            value={formdata.furnishtype}
                            required
                          >
                            <option value='Fully furnished'>Fully furnished</option>
                            <option value='Semi furnished'>Semi furnished</option>
                            <option value='Un furnished'>Un furnished</option>
                          </select>
                          <br></br>
                          <label className='fieldname'>Construction Status</label>
                          <select
                            name='constructionstatus'
                            className='fieldvalue'
                            value={formdata.constructionstatus}
                            onChange={handleChange}
                            required
                          >
                            <option value='Ready to Move'>Ready to Move</option>
                            <option value='Under-Construction'>Under Construction</option>
                          </select>
                          <label className='fieldname'> possesion date</label>
                          <input className='fieldvalue' type='date' name='propertydate' value={formdata.propertydate} onChange={handleChange}></input>
                        </div>
                        <div className='fieldbox fieldboxx'>
                          <div>
                            <label className='fieldname'>Floor no:</label>
                            <input className='fieldvalue' type='number' name='floorno' onChange={handleChange} value={formdata.floorno}></input>
                          </div>
                          <div>
                            <label className='fieldname'>Total Floor:</label>
                            <input type='number' className='fieldvalue' name='totalfloor' onChange={handleChange} value={formdata.totalfloor}></input>
                          </div>
                        </div>
                        <div className='fieldbox fieldboxz'>
                          <br />
                          <label className='fieldname'>Property Facing:</label>
                          <select
                            name='propertyfacing'
                            className='fieldvalue'
                            onChange={handleChange}
                            value={formdata.propertyfacing}
                            required
                          >
                            <option value='North'>North</option>
                            <option value='South'>South</option>
                            <option value='East'>East</option>
                            <option value='West'>West</option>
                            <option value='North-East'>North-East</option>
                            <option value='North-West'>North-West</option>
                            <option value='South-East'>South-East</option>
                            <option value='South-West'>South-West</option>
                          </select>

                          <label className='fieldname'>Maintenance charge per month:</label>
                          <input type='number' className='fieldvalue' name='maintenancecharge' onChange={handleChange} value={formdata.maintenancecharge}></input>
                          <br></br>
                        </div>
                      </>
                    )}

                    {commercial === 'land' && (
                      <>
                        <div className='fieldbox'>
                          <label className='fieldname'> Boundary Wall</label>
                          <label className='radio-container'>
                            <span className='radio-label'>Yes</span>
                            <input

                              type="radio"
                              name="boundarywall"
                              value='yes'

                              onChange={handleChange}
                            />
                            <span className='radio-checkmark'></span>
                          </label>
                          <label className='radio-container'>
                            <span className='radio-label'>No</span>
                            <input

                              type="radio"
                              name="boundarywall"
                              value='no'

                              onChange={handleChange}
                            />
                            <span className='radio-checkmark'></span>
                          </label>
                          <br></br>
                          <div className='fieldbox fieldboxx'>
                            <div>
                              <label className='fieldname'>       No of open side</label>
                              <select
                                name='noofopenside'
                                className='fieldvalue'
                                value={formdata.noofopenside}
                                onChange={handleChange}
                              >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                              </select>
                              <label className='fieldname'>Floor Allowed</label>
                            </div>
                            <div>
                              <select
                                className='fieldvalue'
                                name='floorallowed'
                                onChange={handleChange}
                                value={formdata.floorallowed}
                              >
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='7+'>7+</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </>

                    )}

                    {commercial !== 'land' && (
                      <>
                        <div className='fieldbox fieldboxz'>
                          <br />
                          <label className='fieldname'>Property Facing:</label>
                          <select
                            name='propertyfacing'
                            className='fieldvalue'
                            onChange={handleChange}
                            value={formdata.propertyfacing}
                            required
                          >
                            <option value='North'>North</option>
                            <option value='South'>South</option>
                            <option value='East'>East</option>
                            <option value='West'>West</option>
                            <option value='North-East'>North-East</option>
                            <option value='North-West'>North-West</option>
                            <option value='South-East'>South-East</option>
                            <option value='South-West'>South-West</option>
                          </select>
                          <label className='fieldname'>Token amount:</label>
                          <input className='fieldvalue' type='number' name='secuuritydeposit' onChange={handleChange} value={formdata.secuuritydeposit}></input>
                          <br></br>

                        </div>
                        <div className='fieldbox'>

                          <label className='fieldname'>Currently leased Out: </label>
                          <label className='radio-container'>
                            <span className='radio-label'>Yes</span>
                            <input
                              className='fieldvalue'
                              type="radio"
                              name="leased"
                              value='yes'
                              checked={leased === "yes"}
                              onChange={leasedchange1}
                            />
                            <span className='radio-checkmark'></span>
                          </label>
                          <label className='radio-container'>
                            <span className='radio-label'>No</span>
                            <input
                              className='fieldvalue'
                              type="radio"
                              name="leased"
                              value='no'
                              checked={leased === "no"}
                              onChange={leasedchange1}
                            />
                            <span className='radio-checkmark'></span>
                          </label>
                          {
                            leased === 'yes' && (
                              <>
                                <div className='fieldbox fieldboxx'>
                                  <div>
                                    <label className='fieldname'>Montly Rent Price :</label>
                                    <input className='fieldvalue' type='number' name='montlyrent' value={formdata.montlyrent} onChange={handleChange} ></input>
                                  </div>
                                  <div>
                                    <label className='fieldname'>Remaining Days:</label>
                                    <input className='fieldvalue' type='number' name='remainingtime' value={formdata.remainingtime} onChange={handleChange} placeholder='In days'></input>
                                  </div>
                                </div>
                              </>
                            )
                          }
                        </div>
                      </>
                    )}

                    <div className='fieldbox'>

                      <label className='fieldname'>Price:</label>
                      <input type='number' className='fieldvalue' name='price' onChange={handleChange} value={formdata.price} required></input>
                      <select
                        className='fieldvalue'
                        name='pricerange'
                        onChange={handleChange}
                        value={formdata.pricerange}
                        required
                      >

                        <option value='Lakh'>Lakhs</option>
                        <option value='Crore'>Crore</option>
                        <option value='million'>Million</option>
                        <option value='billion'>Billion</option>
                      </select>
                      <select
                        className='fieldvalue'
                        name='moneytype'
                        onChange={handleChange}
                        value={formdata.moneytype}
                        required
                      >
                        <option value='Rupees' >Rupees</option>
                        <option value='AED'>Dubai - AED</option>
                        <option value='Riyal'>Riyal-Qutar</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <h2 id='amenties' className='head'>Amenities</h2>
                  </div>
                  <div id='facility'>
                    {commercial !== 'land' && (
                      <>
                        <div className='fieldbox'>
                          <div className='checkbox-group'>
                            {[
                              { name: 'Air Conditioner', icon: <TbAirConditioning /> },
                              { name: 'Cable Tv', icon: <FaSatelliteDish /> },
                              { name: 'Wifi', icon: <FaWifi /> },
                              { name: 'Dishwasher', icon: <LuUtensilsCrossed /> },
                              { name: 'Heating', icon: <PiThermometerHotBold /> },
                              { name: 'Lift', icon: <GrElevator /> },
                              { name: 'Intercomm Facility', icon: <LiaIntercom /> },
                              { name: 'Microwave', icon: <MdMicrowave /> },
                              { name: 'Park', icon: <PiPark /> },
                              { name: 'Parking', icon: <LuParkingCircle /> },
                              { name: 'Guest Parking', icon: <RiParkingBoxLine /> },
                              { name: 'Security', icon: <MdSecurity /> },
                              { name: 'Play Area', icon: <GiKidSlide /> },
                              { name: 'CCTV', icon: <BiCctv /> },
                              { name: 'Power Backup', icon: <ImPower /> },
                              { name: 'Gas Pipeline', icon: <GiGasStove /> },
                              { name: 'Gym', icon: <GiWeightLiftingUp /> },
                              { name: 'Swimming Pool', icon: <FaPersonSwimming /> },
                              { name: 'Multipurpose Court', icon: <PiCourtBasketball /> },
                              { name: 'Multipurpose Hall', icon: <TbBuildingBank /> },
                              { name: 'Chimney', icon: <GiChimney /> },
                              { name: 'Modular Kitchen', icon: <FaKitchenSet /> },
                              { name: 'Refrigerator', icon: <TbFridge /> },
                              { name: 'Rear Lawn', icon: <GiGrassMushroom /> },
                              { name: 'Front Lawn', icon: <GiGrass /> },
                              { name: 'EV Charge', icon: <FaChargingStation /> },
                              { name: 'Club House', icon: <PiWarehouseLight /> }
                            ].map((amenity, index) => (
                              <label key={index} className='custom-checkbox'>
                                <input
                                  type="checkbox"
                                  name="amenities"
                                  value={amenity.name}
                                  onChange={handleChange}
                                />
                                <p className='fieldname2'>
                                  {amenity.icon && <span className='icon'>{amenity.icon}</span>} {amenity.name}
                                </p>
                                <span className='checkmark'></span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {
                      commercial === 'land' && (
                        <>
                          <div className='fieldbox'>
                            <label className='fieldname'>Amenities</label>
                            <div className='checkbox-group'>
                              {[
                                { name: 'Park', icon: <PiPark /> },
                                { name: 'Parking', icon: <LuParkingCircle /> },
                                { name: 'Security', icon: <MdSecurity /> },
                                { name: 'Play Area', icon: <GiKidSlide /> },
                                { name: 'CCTV', icon: <BiCctv /> },
                                { name: 'Power Backup', icon: <ImPower /> },
                                { name: 'Gas Pipeline', icon: <GiGasStove /> },
                              ].map((amenity, index) => (
                                <label key={index} className='custom-checkbox'>
                                  <input
                                    type="checkbox"
                                    name="amenities"
                                    value={amenity.name}
                                    onChange={handleChange}
                                  />
                                  <p className='fieldname2'>
                                    {amenity.icon && <span className='icon'>{amenity.icon}</span>} {amenity.name}
                                  </p>
                                  <span className='checkmark'></span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </>
                      )
                    }
                  </div>
                  <div>
                    <h2 id='distance2' className='head'>Distance</h2>
                  </div>
                  <div id='distance'>
                    <div className='fieldbox'>

                      <div className='distancebox'>
                        <label className='fieldname'>Metro</label><input className='fieldvalue fieldvalue8' type='number' name='metro' value={formdata.metro} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Bus</label><input className='fieldvalue fieldvalue8' type='number' name='bus' value={formdata.bus} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>School</label><input className='fieldvalue fieldvalue8' type='number' name='school' value={formdata.school} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Hospital</label><input className='fieldvalue fieldvalue8' type='number' name='hospital' value={formdata.hospital} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Mall</label><input className='fieldvalue fieldvalue8' type='number' name='mall' value={formdata.mall} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Resturant: </label><input className='fieldvalue fieldvalue8' type='number' name='resturant' value={formdata.resturant} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Cinema: </label><input className='fieldvalue fieldvalue8' type='number' name='cinema' value={formdata.cinema} onChange={handleChange} placeholder='in Km'></input>

                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 id='upload' className='head'>Floor plan & Attachment</h2>
                  </div>
                  <div id='attachment'>
                    {commercial !== 'land' && (
                      <>
                        <div className='fieldbox fieldboxx'>
                          <label className='fieldname'>Floor Plan:</label>
                          <input
                            className='fieldvalue4'
                            type="file"
                            name="floorplan"
                            id="floorplan"
                            onChange={handleFloorplanChange}
                            multiple
                            accept=".jpg,.png,.pdf"
                          />
                          <label htmlFor="floorplan" className='custom-file-input'>
                            Choose Floor Plan
                          </label>
                        </div>

                        <div className='fieldbox fieldboxx mb-4'>
                          <label className='fieldname'>Attachment: </label>
                          <input
                            className='fieldvalue4'
                            type="file"
                            name="photos"
                            id="photos"
                            onChange={handlePhotosChange}
                            multiple
                            accept=".jpg,.png"
                          />
                          <label htmlFor="photos" className='custom-file-input'>
                            Choose Attachment
                          </label>
                        </div>
                      </>
                    )}
                    {commercial === 'land' && (
                      <>
                        <div className='fieldbox'>
                          <label className='fieldname'>Upload Photos:</label>
                          <input
                            className='fieldvalue4 '
                            type="file"
                            name="photos"
                            id="photos"
                            onChange={handlePhotosChange}
                            multiple
                            accept=".jpg,.png"
                          />
                          <label htmlFor="photos" className='custom-file-input'>
                            Choose Photos
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                  <br></br>
                  <button type='submit' className='btn2'>submit</button>
                </form>
              </div>
            </>
          )}
        </>

      )}
      {
        category === 'commercial' && resitype === 'rent' && (
          <>
            <div className='upperbutton2 upperbutton3'>
              <button className={activeButton4 === 'officespace' ? 'active' : ''}
                onClick={() => {
                  setcommercial('officespace');
                  handleButtonClick4('officespace');
                }}
              >OfficeSpace</button>
              <button className={activeButton4 === 'shop' ? 'active' : ''}
                onClick={() => {
                  setcommercial('shop');
                  handleButtonClick4('shop');
                }}
              >Shop</button>
              <button className={activeButton4 === 'land' ? 'active' : ''}
                onClick={() => {
                  setcommercial('land');
                  handleButtonClick4('land');
                }}
              >Land</button>
              <button className={activeButton4 === 'coworkingspace' ? 'active' : ''}
                onClick={() => {
                  setcommercial('coworkingspace');
                  handleButtonClick4('coworkingspace');
                }}
              >CoWorkingSpace</button>
              <button className={activeButton4 === 'showroom' ? 'active' : ''}
                onClick={() => {
                  setcommercial('showroom');
                  handleButtonClick4('showroom');
                }}
              >Showroom</button>
            </div>
            {(commercial === 'officespace' || commercial === 'shop' || commercial === 'land' || commercial === 'coworkingspace' || commercial === 'showroom') && (
              <>
                <div className='container'>
                  <br></br>
                  <form onSubmit={handleSubmit}>
                    <div id='propertyimf'>
                      <div className='fieldbox fieldbox2'>
                        <label className='fieldname'>Country:</label>
                        <select
                          className='fieldvalue fieldvaluex'
                          name='country'
                          onChange={handleChange}
                          value={formdata.country}
                          required

                        >
                          <option value='india'>India</option>
                          <option value='uae'>UAE
                          </option>
                          <option value='qatar'>QATAR</option>
                        </select>
                        <label className='fieldname'>City:</label>
                        <select
                          className='fieldvalue fieldvaluex'
                          name='city'
                          onChange={handleChange}
                          value={formdata.city}
                          required

                        >
                          {formdata.country === 'india' && (
                            <>
                              <option value='noida'>Noida</option>
                              <option value='gurgaon'>Gurgaon
                              </option>
                              <option value='greaternoida'>Greater Noida</option>
                              <option value='ghaziabad'>Ghaziabad</option>
                              <option value='delhi'>Delhi</option>
                              <option value='faridabad'>Faridabad</option>
                            </>
                          )}
                          {formdata.country === 'uae' && (
                            <>
                              <option value='dubai'>Dubai</option>
                            </>
                          )}
                          {formdata.country === 'qatar' && (
                            <>
                              <option value='doha'>Doha</option>
                            </>
                          )}
                        </select>
                      </div>
                      <div className='fieldbox fieldbox2'>
                        <label className='fieldname'>locality:</label>
                        <input type='text' className='fieldvalue fieldvaluex' placeholder='Enter locality' name='locality' onChange={handleChange} value={formdata.locality}></input>
                        <label className='fieldname'>Pincode:</label>
                        <input type='text' className='fieldvalue fieldvaluex' placeholder='Enter Pincode' name='pincode' onChange={handleChange} value={formdata.pincode}></input>
                      </div>
                      <div className='fieldbox'>
                        <label className='fieldname'>Property Name:</label>
                        <input className='fieldvalue2' placeholder='Enter Property Name' type='text' name='propertyname' onChange={handleChange} value={formdata.propertyname} required>
                        </input>
                      </div>
                      <div className='fieldbox'>
                        <label className='fieldname'>Property Address:</label>
                        <input className='fieldvalue2' type='text' placeholder='Enter Property address' name='address' onChange={handleChange} value={formdata.address} required>
                        </input>
                      </div>
                      <div className='fieldbox'>
                        <label className='fieldname'>Description : </label>
                        <textarea className='fieldvalue3' name="description" value={formdata.description} onChange={handleChange} rows={7} cols={70} required></textarea>
                      </div>
                    </div>
                    <div>
                    <h2 className='head' id='over'>Overview</h2>
                  </div>
                    <div id='overview'>
                      <div className='fieldbox'>
                        <label className='fieldname'>RERA ID:</label>
                        <input type='text' className='fieldvalue2' name='reraid' placeholder=' example UPRERAPRJXXXX' onChange={handleChange} value={formdata.reraid}></input>
                      </div>
                    
                      <div className='fieldbox fieldboxz'>
                        <label className='fieldname'>Area Detail(in sq.ft) : </label>
                        <input className='fieldvalue' type='number' name='areadetail' onChange={handleChange} value={formdata.areadetail} required>
                        </input>
                        <select
                          className='fieldvalue'
                          name='areatype'
                          onChange={handleChange}
                          value={formdata.areatype}
                          required
                        >
                          <option value='Super Built-up-Area'>Super Built Up Area</option>
                          <option value='Built-up area'>Built-up Area</option>
                          <option value='Carpet Area'>Carpet Area</option>
                        </select>
                      </div>

                      {(commercial === 'shop' || commercial === 'land') && (
                        <>
                          <div className='fieldbox'>
                            <label className='fieldname'>Plot Dimesion:</label>
                            <br />
                            <input type='number' className='fieldvalue' name='length in ft.' onChange={handleChange} value={formdata.length} placeholder='Length' required>
                            </input>
                            X

                            <input type='number' className='fieldvalue' name='width in ft.' onChange={handleChange} value={formdata.width} placeholder='width' required>

                            </input>

                          </div>
                        </>
                      )}


                      {commercial !== 'land' && (
                        <>
                          <div className='fieldbox fieldboxz'>
                            <label className='fieldname'>Furnish Type:</label>
                            <select
                              className='fieldvalue'
                              name='furnishtype'
                              onChange={handleChange}
                              value={formdata.furnishtype}
                              required
                            >
                              <option value='Fully furnished'>Fully furnished</option>
                              <option value='Semi furnished'>Semi furnished</option>
                              <option value='Un furnished'>Un furnished</option>
                            </select>
                          </div>

                          <div className='fieldbox fieldboxx'>
                            <div>
                              <label className='fieldname'>Floor no:</label>
                              <input className='fieldvalue' type='number' name='floorno' onChange={handleChange} value={formdata.floorno}></input>
                            </div>
                            <div>
                              <label className='fieldname'>Total Floor:</label>
                              <input type='number' className='fieldvalue' name='totalfloor' onChange={handleChange} value={formdata.totalfloor}></input>
                            </div>
                          </div>
                        </>
                      )}


                      {commercial !== 'land' && (
                        <>
                          <div className='fieldbox fieldboxz'>
                            <label className='fieldname'>Property Facing:</label>
                            <select
                              name='propertyfacing'
                              className='fieldvalue'
                              onChange={handleChange}
                              value={formdata.propertyfacing}
                              required
                            >
                              <option value='North'>North</option>
                              <option value='South'>South</option>
                              <option value='East'>East</option>
                              <option value='West'>West</option>
                              <option value='North-East'>North-East</option>
                              <option value='North-West'>North-West</option>
                              <option value='South-East'>South-East</option>
                              <option value='South-West'>South-West</option>
                            </select>

                            <label className='fieldname'>Maintenance charge per month:</label>
                            <input type='number' className='fieldvalue' name='maintenancecharge' onChange={handleChange} value={formdata.maintenancecharge}></input>
                          </div>
                        </>
                      )}


                      <div className='fieldbox fieldboxz'>

                        <label className='fieldname'>Montly Rent Price:</label>
                        <input type='number' className='fieldvalue' name='montlyrent' onChange={handleChange} value={formdata.montlyrent} required></input>
                        <select
                          className='fieldvalue'
                          name='pricerange'
                          onChange={handleChange}
                          value={formdata.pricerange}
                          required
                        >
                          <option value='Thousand'>Thousand</option>
                          <option value='Lakh'>Lakhs</option>
                          <option value='Crore'>Crore</option>
                          <option value='million'>Million</option>
                          <option value='billion'>Billion</option>
                        </select>
                        <select
                          className='fieldvalue'
                          name='moneytype'
                          onChange={handleChange}
                          value={formdata.moneytype}
                          required
                        >
                          <option value='Rupees' >Rupees</option>
                          <option value='AED'>Dubai - AED</option>
                          <option value='Riyal'>Riyal-Qutar</option>
                        </select>
                      </div>

                      {commercial !== 'land' && (
                        <>
                          <div className='fieldbox'>
                            <label className='fieldname'>Available Status</label>
                            <label className='radio-container'>
                              <span className='radio-label'>Immediate</span>
                              <input

                                type="radio"
                                name="immediate"
                                value={formdata.remainingtime}
                                onChange={handleChange}
                              />
                              <span className='radio-checkmark'></span>
                            </label>
                            <label className='fieldname'> Or </label>
                            <input
                              className='fieldvalue'
                              type="text"
                              name="remainingtime"
                              value={formdata.remainingtime}
                              onChange={handleChange}
                              placeholder='remaining days'
                            />
                          </div>
                          <div className='fieldbox fieldboxz fieldboxx'>
                            <div>
                              <label className='fieldname'>Security amount:</label>

                              <input type='number' className='fieldvalue' name='secuuritydeposit' value={formdata.secuuritydeposit} onChange={handleChange}></input>
                            </div>
                            <div>
                              <label className='fieldname'>Lock in period:</label>
                              <input type='number' className='fieldvalue' name='lockinperiod' value={formdata.lockinperiod} onChange={handleChange} placeholder='In Years'></input>
                            </div>
                          </div>

                        </>
                      )}


                      {commercial !== 'land' && (

                        <>
                          <div className='fieldbox'>
                            <label className='fieldname'>Wiling to modify Interior</label>
                            <label className='radio-container'>
                              <label className='radio-label'>Yes</label>
                              <input
                                type="radio"
                                name="modifyinterior"
                                value={formdata.modifyinterior}

                                onClick={modify('yes')}
                              />
                              <span className='radio-checkmark'></span>
                            </label>
                            <label className='radio-container'>
                              <label className='radio-label'>No</label>
                              <input
                                type="radio"
                                name={formdata.modifyinterior}
                                value='no'

                                onClick={modify('no')}
                              ></input>
                              <span className='radio-checkmark'></span>
                            </label>
                          </div>
                        </>
                      )}
                    </div>
                    <div>
                    <h2 id='amenties' className='head'>Amenities</h2>
                  </div>
                  <div id='facility'>
                    {commercial !== 'land' && (
                      <>
                        <div className='fieldbox'>
                          <div className='checkbox-group'>
                            {[
                              { name: 'Air Conditioner', icon: <TbAirConditioning /> },
                              { name: 'Cable Tv', icon: <FaSatelliteDish /> },
                              { name: 'Wifi', icon: <FaWifi /> },
                              { name: 'Dishwasher', icon: <LuUtensilsCrossed /> },
                              { name: 'Heating', icon: <PiThermometerHotBold /> },
                              { name: 'Lift', icon: <GrElevator /> },
                              { name: 'Intercomm Facility', icon: <LiaIntercom /> },
                              { name: 'Microwave', icon: <MdMicrowave /> },
                              { name: 'Park', icon: <PiPark /> },
                              { name: 'Parking', icon: <LuParkingCircle /> },
                              { name: 'Guest Parking', icon: <RiParkingBoxLine /> },
                              { name: 'Security', icon: <MdSecurity /> },
                              { name: 'Play Area', icon: <GiKidSlide /> },
                              { name: 'CCTV', icon: <BiCctv /> },
                              { name: 'Power Backup', icon: <ImPower /> },
                              { name: 'Gas Pipeline', icon: <GiGasStove /> },
                              { name: 'Gym', icon: <GiWeightLiftingUp /> },
                              { name: 'Swimming Pool', icon: <FaPersonSwimming /> },
                              { name: 'Multipurpose Court', icon: <PiCourtBasketball /> },
                              { name: 'Multipurpose Hall', icon: <TbBuildingBank /> },
                              { name: 'Chimney', icon: <GiChimney /> },
                              { name: 'Modular Kitchen', icon: <FaKitchenSet /> },
                              { name: 'Refrigerator', icon: <TbFridge /> },
                              { name: 'Rear Lawn', icon: <GiGrassMushroom /> },
                              { name: 'Front Lawn', icon: <GiGrass /> },
                              { name: 'EV Charge', icon: <FaChargingStation /> },
                              { name: 'Club House', icon: <PiWarehouseLight /> }
                            ].map((amenity, index) => (
                              <label key={index} className='custom-checkbox'>
                                <input
                                  type="checkbox"
                                  name="amenities"
                                  value={amenity.name}
                                  onChange={handleChange}
                                />
                                <p className='fieldname2'>
                                  {amenity.icon && <span className='icon'>{amenity.icon}</span>} {amenity.name}
                                </p>
                                <span className='checkmark'></span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {
                      commercial === 'land' && (
                        <>
                          <div className='fieldbox'>
                            <label className='fieldname'>Amenities</label>
                            <div className='checkbox-group'>
                              {[
                                { name: 'Park', icon: <PiPark /> },
                                { name: 'Parking', icon: <LuParkingCircle /> },
                                { name: 'Security', icon: <MdSecurity /> },
                                { name: 'Play Area', icon: <GiKidSlide /> },
                                { name: 'CCTV', icon: <BiCctv /> },
                                { name: 'Power Backup', icon: <ImPower /> },
                                { name: 'Gas Pipeline', icon: <GiGasStove /> },
                              ].map((amenity, index) => (
                                <label key={index} className='custom-checkbox'>
                                  <input
                                    type="checkbox"
                                    name="amenities"
                                    value={amenity.name}
                                    onChange={handleChange}
                                  />
                                  <p className='fieldname2'>
                                    {amenity.icon && <span className='icon'>{amenity.icon}</span>} {amenity.name}
                                  </p>
                                  <span className='checkmark'></span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </>
                      )
                    }
                  </div>
                  <div>
                    <h2 id='distance2' className='head'>Distance</h2>
                  </div>
                  <div id='distance'>
                    <div className='fieldbox'>

                      <div className='distancebox'>
                        <label className='fieldname'>Metro</label><input className='fieldvalue fieldvalue8' type='number' name='metro' value={formdata.metro} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Bus</label><input className='fieldvalue fieldvalue8' type='number' name='bus' value={formdata.bus} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>School</label><input className='fieldvalue fieldvalue8' type='number' name='school' value={formdata.school} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Hospital</label><input className='fieldvalue fieldvalue8' type='number' name='hospital' value={formdata.hospital} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Mall</label><input className='fieldvalue fieldvalue8' type='number' name='mall' value={formdata.mall} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Resturant: </label><input className='fieldvalue fieldvalue8' type='number' name='resturant' value={formdata.resturant} onChange={handleChange} placeholder='in Km'></input>

                        <label className='fieldname'>Cinema: </label><input className='fieldvalue fieldvalue8' type='number' name='cinema' value={formdata.cinema} onChange={handleChange} placeholder='in Km'></input>

                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 id='upload' className='head'>Floor plan & Attachment</h2>
                  </div>
                  <div id='attachment'>
                    {commercial !== 'land' && (
                      <>
                        <div className='fieldbox fieldboxx'>
                          <label className='fieldname'>Floor Plan:</label>
                          <input
                            className='fieldvalue4'
                            type="file"
                            name="floorplan"
                            id="floorplan"
                            onChange={handleFloorplanChange}
                            multiple
                            accept=".jpg,.png,.pdf"
                          />
                          <label htmlFor="floorplan" className='custom-file-input'>
                            Choose Floor Plan
                          </label>
                        </div>

                        <div className='fieldbox fieldboxx mb-4'>
                          <label className='fieldname'>Attachment: </label>
                          <input
                            className='fieldvalue4'
                            type="file"
                            name="photos"
                            id="photos"
                            onChange={handlePhotosChange}
                            multiple
                            accept=".jpg,.png"
                          />
                          <label htmlFor="photos" className='custom-file-input'>
                            Choose Attachment
                          </label>
                        </div>
                      </>
                    )}
                    {commercial === 'land' && (
                      <>
                        <div className='fieldbox'>
                          <label className='fieldname'>Upload Attachment :</label>
                          <input
                            className='fieldvalue4 '
                            type="file"
                            name="photos"
                            id="photos"
                            onChange={handlePhotosChange}
                            multiple
                            accept=".jpg,.png"
                          />
                          <label htmlFor="photos" className='custom-file-input'>
                            Choose Attachment
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                  <br></br>
                    <button type='submit' className='btn2'>submit</button>
                  </form>
                </div>
              </>
            )}
          </>
        )
      }
    </>
  )
}

export default Form