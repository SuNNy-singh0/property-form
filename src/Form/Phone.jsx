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
import './PhoneFrom.css'

function Phone() {
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
    const [visiblepart1, setvisiblepart1] = useState(true)
    const [visiblepart2, setvisiblepart2] = useState(false)
    const [visiblepart3, setvisiblepart3] = useState(false)
    const [visiblepart4, setvisiblepart4] = useState(false)
    const [visiblepart5, setvisiblepart5] = useState(false)
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
    const handleCheckboxChange = (name, value, checked) => {
        setformdata((prevData) => ({
            ...prevData,
            [name]: checked
                ? [...prevData[name], value]
                : prevData[name].filter((item) => item !== value),
        }));
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
    return (
        <>
            <div className='formbody'>
                <div id='upperview'>
                    <h1>Property Listing Form</h1>
                </div>

                <>

                    {/* Property navigation button */}
                    <div className='propbtn'>
                        <button className={`propertybtn   ${activeButton === 'sale' ? 'activeb' : ''}`}

                            onClick={() => {
                                setresitype('sale');
                                handleButtonClick('sale');
                            }}
                        >Sale</button>
                        <button className={`propertybtn ${activeButton === 'rent' ? 'activeb' : ''}`}
                            onClick={() => {
                                setresitype('rent');
                                handleButtonClick('rent');
                            }}>Rent</button>

                        <br></br>
                        <button className={`propertybtn   ${activeButton2 === 'residential' ? 'activeb2' : ''}`}
                            onClick={() => {
                                setcategory('residential');
                                handleButtonClick2('residential');
                            }}>Residential</button>
                        <button className={`propertybtn ${activeButton2 === 'commercial' ? 'activeb2' : ''}`}
                            onClick={() => {
                                setcategory('commercial');
                                handleButtonClick2('commercial');
                            }}>Commercial</button>

                    </div>
                    {
                        resitype === 'sale' && category === 'residential' && (
                            <>
                                <div className='innerbuttonbox'>

                                    <button className={`propertybtn  ${activeButton3 === 'apartment' ? 'activeb3' : ''}`}
                                        onClick={() => {
                                            setresidential('apartment');
                                            handleButtonClick3('apartment');
                                            setformdata(initialdata);
                                        }}>Apartment</button>
                                    <button className={`propertybtn   ${activeButton3 === 'house/villa' ? 'activeb3' : ''}`}
                                        onClick={() => {
                                            setresidential('house/villa');
                                            handleButtonClick3('house/villa');
                                            setformdata(initialdata);
                                        }}>House/villa</button>
                                    <button className={`propertybtn  ${activeButton3 === 'plot' ? 'activeb3' : ''}`}
                                        onClick={() => {
                                            setresidential('plot');
                                            handleButtonClick3('plot');
                                            setformdata(initialdata);
                                        }}>Plot</button>
                                    <button className={`propertybtn   ${activeButton3 === 'builderfloor' ? 'activeb3' : ''}`}
                                        onClick={() => {
                                            setresidential('builderfloor');
                                            handleButtonClick3('builderfloor');
                                            setformdata(initialdata);
                                        }}>Builderfloor</button>
                                    <button className={`propertybtn   ${activeButton3 === 'farmhouse' ? 'activeb3' : ''}`}
                                        onClick={() => {
                                            setresidential('farmhouse');
                                            handleButtonClick3('farmhouse');
                                            setformdata(initialdata);
                                        }}>Farmhouse</button>
                                </div>
                                <div className='formbox'
                                    style={{ display: visiblepart1 ? 'block' : 'none' }}>

                                    <div id='property'>
                                        <p>New to <span id='town'>Townmanor?</span>
                                            <br></br>
                                            Let's get you started</p>
                                    </div>
                                </div>
                                <div className='part1' style={{ display: visiblepart1 ? 'block' : 'none' }}>
                                    <div className='partition'>
                                        <label className='formtext'>Country:</label>
                                        <select
                                            className='formfield'
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
                                        <label className='formtext'>City:</label>
                                        <select
                                            className='formfield'
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
                                    <div className='partition'>
                                        <label className='formtext'>locality:</label>
                                        <input type='text' className='formfield-b' placeholder='Enter locality' name='locality' onChange={handleChange} value={formdata.locality}></input>
                                        <label className='formtext'>Pincode:</label>
                                        <input type='text' className='formfield-b' placeholder='Enter Pincode' name='pincode' onChange={handleChange} value={formdata.pincode}></input>
                                    </div>
                                    <div className='partition'>
                                        <label className='formtext'>Property Name:</label>
                                        <input className='formfield-a' placeholder='Enter Property Name' type='text' name='propertyname' onChange={handleChange} value={formdata.propertyname} required>
                                        </input>
                                    </div>
                                    <div className='partition'>
                                        <label className='formtext'>Property Address:</label>
                                        <input className='formfield-a' type='text' placeholder='Enter Property address' name='address' onChange={handleChange} value={formdata.address} required>
                                        </input>
                                    </div>
                                    <div className='partition'>
                                        <label className='formtext'>Description</label>
                                        <textarea className='formfield-c' name="description" placeholder='Tell Something About Your Property' value={formdata.description} onChange={handleChange} rows={7} cols={70} required></textarea>
                                    </div>

                                </div>
                                <div className='partition' 
                                    style={{ display: visiblepart1 ? 'block' : 'none' }}>
                                    <button className='save' id='first' disabled onClick={() => {
                                    
                                    }}>back</button>
                                    <button  className='save' onClick={() => {
                                        setvisiblepart2(true);
                                        setvisiblepart1(false);
                                    }}
                                    
                                    >Save & next</button>
                                </div>
                                {/* overview section */}
                                <div className='formbox'
                                    style={{ display: visiblepart2 ? 'block' : 'none' }}>

                                    <div id='property'>
                                        <h3>Overview</h3>
                                    </div>
                                </div>
                                <div className='part2' style={{ display: visiblepart2 ? 'block' : 'none' }}>
                                    <div className='partition'>
                                        <label className='formtext' >RERA ID:</label>
                                        <input type='text' className='formfield-a' placeholder=' example UPRERAPRJ72xx' name='reraid' onChange={handleChange} value={formdata.reraid}></input>
                                    </div>
                                    {residential !== 'plot' && (
                                        <>
                                            <div className='partition'>
                                                <div>
                                                    <label className='formtext'>Configuration:</label>
                                                    <select
                                                        className='formfield-b'
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
                                                </div>
                                                <div>
                                                    <label className='formtext'> Bathroom:</label>
                                                    <select
                                                        className='formfield-b'
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
                                                    <label className='formtext'> Balcony:</label>
                                                    <select
                                                        className='formfield-b'
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
                                            <div className='partition'>
                                                <label className='formtext'>Area Detail(in sq.ft) : </label>
                                                <br></br>
                                                <input type='number' className='formfield formfield-d' name='areadetail' onChange={handleChange} value={formdata.areadetail} required>
                                                </input>
                                                <select
                                                    className='formfield formfield-d'
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
                                            <div className='partition'>
                                                <div>
                                                    <label className='formtext'>Property Facing:</label>
                                                    <select
                                                        name='propertyfacing'
                                                        className='formfield-a'
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
                                                </div>
                                                <div>
                                                    <label className='formtext'>Furnish Type:</label>
                                                    <select
                                                        className='formfield-a'
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

                                            </div>
                                            <div className='partition'>

                                                <div>
                                                    <label className='formtext'>Construction Status</label>
                                                    <select
                                                        name='constructionstatus'
                                                        className='formfield-a'
                                                        value={formdata.constructionstatus}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value='Ready to Move'>Ready to Move</option>
                                                        <option value='Under-Construction'>Under Construction</option>
                                                        <option value='NewLaunch'>New Launch</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className='formtext'> possesion date</label>
                                                    <input className='formfield-a' type='date' name='propertydate' value={formdata.propertydate} onChange={handleChange}></input>
                                                </div>

                                            </div>

                                            <div className='partition'>
                                                <div>
                                                    <label className='formtext'>Floor no:</label>
                                                    <input className='formfield-b' type='number' name='floorno' onChange={handleChange} value={formdata.floorno}></input>
                                                </div>
                                                <div>
                                                    <label className='formtext'>Total Floor:</label>
                                                    <input type='number' className='formfield-b' name='totalfloor' onChange={handleChange} value={formdata.totalfloor}></input>
                                                </div>
                                            </div>
                                            <div className='partition'>
                                                <label className='formtext'>Maintenance charge per month:</label>
                                                <input type='number' className='formfield-a' placeholder='e.g 1500' name='maintenancecharge' onChange={handleChange} value={formdata.maintenancecharge}></input>

                                            </div>
                                        </>)}
                                    {residential === 'plot' && (
                                        <>
                                            <div className='partition'>
                                                <label className='formtext'>Plot Dimesion:</label>
                                                <br></br>
                                                <input type='number' className='formfield' name='length in ft.' onChange={handleChange} value={formdata.length} placeholder='Length' required>
                                                </input>
                                                X

                                                <input type='number' className='formfield' name='width in ft.' onChange={handleChange} value={formdata.width} placeholder='width' required>

                                                </input>

                                            </div>
                                        </>
                                    )}
                                    <div className='partition'>
                                        <label className='formtext'>Price:</label>
                                        <input type='number' className='formfield' name='price' onChange={handleChange} value={formdata.price} required></input>
                                        <select
                                            className='formfield'
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
                                            className='formfield'
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

                                    <div className='partition'>
                                        <label className='formtext'>Token amount:</label>
                                        <input type='number' className='formfield-a' name='tokenamount' onChange={handleChange} value={formdata.tokenamount}></input>
                                    </div>


                                </div>

                                <div className='partition'
                                    style={{ display: visiblepart2 ? 'block' : 'none' }}>
                                    <button className='save' onClick={() => {
                                        setvisiblepart1(true);
                                        setvisiblepart2(false);
                                    }}>back</button>
                                    <button className='save' onClick={() => {
                                        setvisiblepart2(false);
                                        setvisiblepart3(true);
                                    }}>Save & Next</button>
                                </div>
                                <div className='formbox'
                                    style={{ display: visiblepart3 ? 'block' : 'none' }}>

                                    <div id='property'>
                                        <h3>Amenties</h3>
                                    </div>
                                </div>
                                <div className='part3'
                                    style={{ display: visiblepart3 ? 'block' : 'none' }}>
                                    {residential !== 'plot' && (<>
                                        <div className='checkbox-true'>
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
                                                <div>
                                                <label key={index} className='custom'>
                                                    <input
                                                        type="checkbox"
                                                        name="amenities"
                                                        value={amenity.name}
                                                        onChange={handleChange}
                                                    />
                                                    <p className='fieldname2'>
                                                        {amenity.icon && <span className='icon'>{amenity.icon}</span>} {amenity.name}
                                                    </p>
                                                    <span className='checkmk'></span>
                                                </label>
                                                </div>
                                            ))}
                                        </div>

                                    </>)}
                                    <div>
                                        {
                                            residential === 'plot' && (
                                                <>
                                                    <div className='checkbox-true'>
                                                        {[
                                                            { name: 'Park', icon: <PiPark /> },
                                                            { name: 'Parking', icon: <LuParkingCircle /> },
                                                            { name: 'Security', icon: <MdSecurity /> },
                                                            { name: 'Play Area', icon: <GiKidSlide /> },
                                                            { name: 'CCTV', icon: <BiCctv /> },
                                                            { name: 'Power Backup', icon: <ImPower /> },
                                                            { name: 'Gas Pipeline', icon: <GiGasStove /> },
                                                        ].map((amenity, index) => (
                                                            <label key={index} className='custom'>
                                                                <input
                                                                    type="checkbox"
                                                                    name="amenities"
                                                                    value={amenity.name}
                                                                    onChange={handleChange}
                                                                />
                                                                <p className='fieldname2'>
                                                                    {amenity.icon && <span className='icon'>{amenity.icon}</span>} {amenity.name}
                                                                </p>
                                                                <span className='checkmk'></span>
                                                            </label>
                                                        ))}
                                                    </div>

                                                </>
                                            )
                                        }


                                    </div>




                                </div>
                                <div className='partition'
                                    style={{ display: visiblepart3 ? 'block' : 'none' }}>
                                    <button className='save' onClick={() => {
                                        setvisiblepart2(true);
                                        setvisiblepart3(false);
                                    }}>back</button>
                                    <button className='save' onClick={() => {
                                        setvisiblepart3(false);
                                        setvisiblepart4(true);
                                    }}>Save & Next</button>
                                </div>
                                <div className='formbox'
                                    style={{ display: visiblepart4 ? 'block' : 'none' }}>

                                    <div id='property'>
                                        <h3>Distance</h3>
                                    </div>
                                </div>
                                <div className='part4'
                                    style={{ display: visiblepart4 ? 'block' : 'none' }}
                                >

                                    <div className='partition2'>

                                        <label className='formtext'>Metro</label><input className='formfield' type='number' name='metro' value={formdata.metro} onChange={handleChange} placeholder='in Km'></input>

                                        <label className='formtext'>Bus</label><input className='formfield' type='number' name='bus' value={formdata.bus} onChange={handleChange} placeholder='in Km'></input>

                                        <label className='formtext'>School</label><input className='formfield' type='number' name='school' value={formdata.school} onChange={handleChange} placeholder='in Km'></input>

                                        <label className='formtext'>Hospital</label><input className='formfield' type='number' name='hospital' value={formdata.hospital} onChange={handleChange} placeholder='in Km'></input>

                                        <label className='formtext'>Mall</label><input className='formfield' type='number' name='mall' value={formdata.mall} onChange={handleChange} placeholder='in Km'></input>

                                        <label className='formtext'>Resturant: </label><input className='formfield' type='number' name='resturant' value={formdata.resturant} onChange={handleChange} placeholder='in Km'></input>

                                        <label className='formtext'>Cinema: </label><input className='formfield' type='number' name='cinema' value={formdata.cinema} onChange={handleChange} placeholder='in Km'></input>

                                    </div>

                                </div>

                                <div className='partition'
                                    style={{ display: visiblepart4 ? 'block' : 'none' }}>
                                    <button className='save' onClick={() => {
                                        setvisiblepart3(true);
                                        setvisiblepart4(false);
                                    }}>back</button>
                                    <button className='save' onClick={() => {
                                        setvisiblepart4(false);
                                        setvisiblepart5(true);
                                    }}>Save & Next</button>
                                </div>
                                <div className='formbox'
                                    style={{ display: visiblepart5 ? 'block' : 'none' }}>

                                    <div id='property'>
                                        <h3>Floor plan & Attachment</h3>
                                    </div>
                                </div>
                                <div className='part5'
                                style={{ display: visiblepart5 ? 'block' : 'none' }}
                                >
                                    
                                        {residential !== 'plot' && (
                                            <>
                                                <div className='partition'>
                                                    <div>
                                                    <label className='formtext'>Floor Plan:</label>
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

                                                    <div>
                                                    <label className='formtext'>Attachment: </label>
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
                                <div className='partition'
                                    style={{ display: visiblepart5 ? 'block' : 'none' }}>
                                    <button className='save' onClick={() => {
                                        setvisiblepart4(true);
                                        setvisiblepart5(false);
                                    }}>back</button>
                                    <button id='last' className='save' onClick={() => {
                                    }}
                                    disabled
                                    >Save & next</button>
                                </div>
                                <button type='submit'
                                style={{ display: visiblepart5 ? 'block' : 'none' }}
                                className='btn2'>submit</button>
                            </>
                        )
                    }
                </>
            </div>
        </>
    )
}

export default Phone