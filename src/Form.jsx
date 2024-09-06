import React, { useState } from 'react'

function Form() {
  const [category, setcategory] = useState('residential')
  const [sold, setsold] = useState('')
  const [floorplan, setfloorplan] = useState();
  const [photos, setphotos] = useState();
  const [resitype, setresitype] = useState('sale')
  const [residential, setresidential] = useState('apartment')
  const [commercial, setcommercial] = useState('officespace')
  const [leased, setleased] = useState('no')
  const initialdata = {
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
      'movingstatus': '',
      'movingdate': '',
      'montlyrent': '',
      'secuuritydeposit': '',
      'currentlease': '',
      'remainingtime': '',
      'boundarywall': '',
      'noofopenside': '',
      'floorallowed': '',
      'modifyinterior': '',
      'lockinperiod': '',
      'range': 'Lakh',
      'moneytype': 'Rupees',
      amenities: [],
      'metro': '',
      'school': '',
      'hospital': '',
      'mall': '',
      'resturant': '',
      'bus': '',
      'cinema': '',
      'country':'india'
   }
  const [formdata, setformdata] = useState({
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
    'movingstatus': '',
    'movingdate': '',
    'montlyrent': '',
    'secuuritydeposit': '',
    'currentlease': '',
    'remainingtime': '',
    'boundarywall': '',
    'noofopenside': '',
    'floorallowed': '',
    'modifyinterior': '',
    'lockinperiod': '',
    'range': 'Lakh',
    'moneytype': 'Rupees',
    amenities: [],
    'metro': '',
    'school': '',
    'hospital': '',
    'mall': '',
    'resturant': '',
    'bus': '',
    'cinema': '',
    'country':'india'
  })
  const clickhandler1 = () => {
    setresitype('sale');
  }
  const clickhandler2 = () => {
    setresitype('rent');
  }
  const clickhandler3 = () => {
    setcategory('residential');
  }
  const clickhandler4 = () => {
    setcategory('commercial');
  }
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
  const modify =(e)=>{
    formdata.modifyinterior=e;
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
      leased:leased //commercial category
    };
    console.log('Form submitted:', formDataWithExtras);
    alert('form submitted sucessfully')
  };
  return (
    <>
      <div><h1>property form </h1>
        <button onClick={clickhandler1}>Sale</button>
        <button onClick={clickhandler2}>Rent</button>
      </div>
      <br></br>
      <div>
        <button onClick={clickhandler3}>Residential</button>
        <button onClick={clickhandler4}>Commercial</button>
      </div>
      {resitype === 'sale' && category === 'residential' && (
        <>
          <br></br>
          <button onClick={resihandler1}>Apartment</button>
          <button onClick={resihandler2} >House/villa</button>
          <button onClick={resihandler3}>Plot</button>
          <button onClick={resihandler4}>Builderfloor</button>
          <button onClick={resihandler5}>farmhouse</button>
          {(residential === 'apartment' || residential === 'house/villa' || residential === 'builderfloor' || residential === 'farmhouse' || residential === 'plot') && (
            <>
              <div>
                <br></br>
                <form onSubmit={handleSubmit}>
                <label>Country:</label>
                <select
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
                <label>City:</label>
                <select
                        name='city'
                        onChange={handleChange}
                        value={formdata.city}
                        required

                      >
                        {formdata.country ==='india' && (
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
                        {formdata.country ==='uae' && (
                        <>
                         <option value='dubai'>Dubai</option>
                        </>
                        )}
                        {formdata.country ==='qatar' && (
                        <>
                         <option value='doha'>Doha</option>
                        </>
                        )}
                  </select>
                  <br></br>
                  <label>locality:</label>
                  <input type='text' name='locality' onChange={handleChange} value={formdata.locality}></input>
                  <br></br>
                  <label>Property Name:</label>
                  <input type='text' name='propertyname' onChange={handleChange} value={formdata.propertyname} required>
                  </input>
                  <br></br>
                  <label>Property Address:</label>
                  <input type='text' name='address' onChange={handleChange} value={formdata.address} required>
                  </input>
                  <br></br>
                  {residential !== 'plot' && (
                    <>
                      <label>Configuration:</label>
                      <select
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
                      <label>Area Detail(in sq.ft) : </label>
                      <input type='number' name='areadetail' onChange={handleChange} value={formdata.areadetail} required>
                      </input>
                      <select
                        name='areatype'
                        onChange={handleChange}
                        value={formdata.areatype}
                        required
                      >
                        <option value='Super Built-up Area'>Super Built Up Area</option>
                        <option value='Built-up area'>Built-up Area</option>
                        <option value='Carpet Area'>Carpet Area</option>
                      </select>
                      <br></br>
                      <label>No of Bathroom:</label>
                      <select
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
                      <label>No of Balcony:</label>
                      <select
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
                    </>
                  )}
                  {residential === 'plot' && (
                    <>
                      <label>Plot Dimesion:</label>
                      <input type='number' name='length' onChange={handleChange} value={formdata.length} placeholder='Length' required>
                      </input>
                      ft.
                      X
                      
                      <input type='number' name='width' onChange={handleChange} value={formdata.width} placeholder='width' required>
                
                      </input>
                      ft.
                    </>
                  )}

                  <br></br>
                  <label>Description : </label>
                  <textarea name="description" value={formdata.description} onChange={handleChange} rows={7} cols={70} required></textarea>
                  <br></br>

                  {residential !== 'plot' && (
                    <>
                      <label>Furnish Type:</label>
                      <select
                        name='furnishtype'
                        onChange={handleChange}
                        value={formdata.furnishtype}
                        required
                      >
                        <option value='Fully furnished'>Fully furnished</option>
                        <option value='Semi furnished'>Semi furnished</option>
                        <option value='Un furnished'>Un furnished</option>
                      </select>

                      <label>Construction Status</label>
                      <select
                        name='constructionstatus'
                       
                        value={formdata.constructionstatus}
                        onChange={handleChange}
                        required
                      >
                        <option value='Ready to Move'>Ready to Move</option>
                        <option value='Under-Construction'>Under Construction</option>
                      </select>
                      <label> possesion date</label>
                      <input type='date' name='propertydate' value={formdata.propertydate} onChange={handleChange}></input>
                      <br></br>
                      <label>Floor no:</label>
                      <input type='number' name='floorno' onChange={handleChange} value={formdata.floorno}></input>

                      <label>Total Floor:</label>
                      <input type='number' name='totalfloor' onChange={handleChange} value={formdata.totalfloor}></input>
                      <br></br>
                    </>
                  )}


                  <br></br>
                  <label>RERA ID:</label>
                  <input type='text' name='reraid' onChange={handleChange} value={formdata.reraid}></input>

                  {residential !== 'plot' && (
                    <>
                      <label>Property Facing:</label>
                      <select
                        name='propertyfacing'
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
                      <label>Maintenance charge per month:</label>
                      <input type='number' name='maintenancecharge' onChange={handleChange} value={formdata.maintenancecharge}></input>
                      <br></br>
                    </>
                  )}



                  <select
                    name='moneytype'
                    onChange={handleChange}
                    value={formdata.moneytype}
                    required
                  >
                    <option value='Rupees' >Rupees</option>
                    <option value='AED'>Dubai - AED</option>
                    <option value='Riyal'>Riyal-Qutar</option>
                  </select>
                  <label>Price:</label>
                  <input type='number' name='price' onChange={handleChange} value={formdata.price} required></input>
                  <select
                    name='range'
                    onChange={handleChange}
                    value={formdata.range}
                    required
                  >
                    <option value='Lakh'>Lakhs</option>
                    <option value='Crore'>Crore</option>
                  </select>
                  <br></br>
                  <label>Token amount:</label>
                  <input type='number' name='tokenamount' onChange={handleChange} value={formdata.tokenamount}></input>
                  <br></br>
                  {residential !== 'plot' && (
                    <>
                      <label>Floor Plan:</label>
                      <input type="file" name="floorplan" onChange={handleFloorplanChange} multiple accept=".jpg,.png,.pdf" />
                      <br />
                    </>
                  )}

                  <label>Upload Photos:</label>
                  <input type="file" name="photos" multiple onChange={handlePhotosChange} accept=".jpg,.png" />
                  <br />
                  <br></br>
                  {residential !== 'plot' && (
                    <>
                      <label>Amenties</label>
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="AirConditioner"
                        onChange={handleChange}
                      />
                      Air Conditioner

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Cable Tv"
                        onChange={handleChange}
                      />
                      Cable TV

                      <input
                        type="checkbox"
                        name="amenities"
                        value="wifi"
                        onChange={handleChange}
                      />
                      Wifi

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Dishwasher"
                        onChange={handleChange}
                      />
                      Dishwasher

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Heating"
                        onChange={handleChange}
                      />
                      Heating
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="Lift"
                        onChange={handleChange}
                      />
                      Lift

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Intercomm Facility"
                        onChange={handleChange}
                      />
                      Intercomm Facility

                      <input
                        type="checkbox"
                        name="amenities"
                        value="MicroWave"
                        onChange={handleChange}
                      />
                      Microwave

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Park"
                        onChange={handleChange}
                      />
                      Park

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Parking"
                        onChange={handleChange}
                      />
                      parking
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="Guest Parking"
                        onChange={handleChange}
                      />
                      Guest Parking

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Security"
                        onChange={handleChange}
                      />
                      Security

                      <input
                        type="checkbox"
                        name="amenities"
                        value="playarea"
                        onChange={handleChange}
                      />
                      playarea

                      <input
                        type="checkbox"
                        name="amenities"
                        value="CCTV"
                        onChange={handleChange}
                      />
                      CCTV

                      <input
                        type="checkbox"
                        name="amenities"
                        value="powerbackup"
                        onChange={handleChange}
                      />
                      powerbackup
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="gas pipeline"
                        onChange={handleChange}
                      />
                      Gas pipeline

                      <input
                        type="checkbox"
                        name="amenities"
                        value="gym"
                        onChange={handleChange}
                      />
                      GYM

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Swimmingpool"
                        onChange={handleChange}
                      />
                      Swimming pool

                      <input
                        type="checkbox"
                        name="amenities"
                        value="multipurpose court"
                        onChange={handleChange}
                      />
                      multipurpose court

                      <input
                        type="checkbox"
                        name="amenities"
                        value="multipurpose hall"
                        onChange={handleChange}
                      />
                      multipurpose hall
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="gas pipeline"
                        onChange={handleChange}
                      />

                      chimmney

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Modular kitchen"
                        onChange={handleChange}
                      />
                      Modular kitchen

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Refrigetor"
                        onChange={handleChange}
                      />
                      Refrigetor

                      <input
                        type="checkbox"
                        name="amenities"
                        value="rear lawn"
                        onChange={handleChange}
                      />
                      rear lawn
                      <br></br>

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Front lawn"
                        onChange={handleChange}
                      />
                      Front lawn

                      <input
                        type="checkbox"
                        name="amenities"
                        value="ev charge"
                        onChange={handleChange}
                      />
                      ev charge

                      <input
                        type="checkbox"
                        name="amenities"
                        value="club house"
                        onChange={handleChange}
                      />
                      club house

                    </>
                  )}
                  {
                    residential === 'plot' && (
                      <>
                        <label>Amenties </label>
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="park"
                          onChange={handleChange}
                        />
                        Park
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="CCTV"
                          onChange={handleChange}
                        />

                        CCTV

                        <input
                          type="checkbox"
                          name="amenities"
                          value="parking"
                          onChange={handleChange}
                        />
                        Parking

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Security"
                          onChange={handleChange}
                        />
                        Security

                        <input
                          type="checkbox"
                          name="amenities"
                          value="play area"
                          onChange={handleChange}
                        />
                        Play Area
                        <br></br>

                        <input
                          type="checkbox"
                          name="amenities"
                          value="guest parking"
                          onChange={handleChange}
                        />
                        Guest Parking

                        <input
                          type="checkbox"
                          name="amenities"
                          value="power backup"
                          onChange={handleChange}
                        />
                        Power Backup

                        <input
                          type="checkbox"
                          name="amenities"
                          value="gas pipeline"
                          onChange={handleChange}
                        />
                        gas pipeline
                      </>
                    )
                  }
                  <br></br>
                  <h3>Distance</h3>
                  <label>Metro</label><input type='number' name='metro' value={formdata.metro} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Bus</label><input type='number' name='bus' value={formdata.bus} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>School</label><input type='number' name='school' value={formdata.school} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Hospital</label><input type='number' name='hospital' value={formdata.hospital} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Mall</label><input type='number' name='mall' value={formdata.mall} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Resturant: </label><input type='number' name='resturant' value={formdata.resturant} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Cinema: </label><input type='number' name='cinema' value={formdata.cinema} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <button type='submit'>submit</button>
                </form>
              </div>
            </>
          )}
        </>
      )}
      {
        category === 'residential' && resitype === 'rent' && (
          <>
            <h1>rent</h1>
            <br></br>
            <button onClick={resihandler1}>Apartment</button>
            <button onClick={resihandler2} >House/villa</button>

            <button onClick={resihandler4}>Builderfloor</button>
            <button onClick={resihandler5}>farmhouse</button>
            {(residential === 'apartment' || residential === 'house/villa' || residential === 'builderfloor' || residential === 'farmhouse') && (
              <>
                <div>
                  <br></br>
                  <form onSubmit={handleSubmit}>
                  <label>Country:</label>
                <select
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
                <label>City:</label>
                <select
                        name='city'
                        onChange={handleChange}
                        value={formdata.city}
                        required

                      >
                        {formdata.country ==='india' && (
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
                        {formdata.country ==='uae' && (
                        <>
                         <option value='dubai'>Dubai</option>
                        </>
                        )}
                        {formdata.country ==='qatar' && (
                        <>
                         <option value='doha'>Doha</option>
                        </>
                        )}
                  </select>
                  <br></br>
                    <label>locality:</label>
                    <input type='text' name='locality' onChange={handleChange} value={formdata.locality}></input>
                    <br></br>
                    <label>Property Name:</label>
                    <input type='text' name='propertyname' onChange={handleChange} value={formdata.propertyname} required>
                    </input>
                    <br></br>
                    <label>Property Address:</label>
                    <input type='text' name='address' onChange={handleChange} value={formdata.address} required>
                    </input>
                    <br></br>
                    {residential !== 'plot' && (
                      <>
                        <label>Configuration:</label>
                        <select
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
                        <label>Area Detail(in sq.ft) : </label>
                        <input type='number' name='areadetail' onChange={handleChange} value={formdata.areadetail} required>
                        </input>
                        <select
                          name='areatype'
                          onChange={handleChange}
                          value={formdata.areatype}
                          required
                        >
                          <option value='Super Built-up Area'>Super Built Up Area</option>
                          <option value='Built-up area'>Built-up Area</option>
                          <option value='Carpet Area'>Carpet Area</option>
                        </select>
                        <br></br>
                        <label>No of Bathroom:</label>
                        <select
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
                        <label>No of Balcony:</label>
                        <select
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
                      </>
                    )}
                    {residential === 'plot' && (
                      <>
                        <label>Plot Dimesion:</label>
                        <input type='number' name='length' onChange={handleChange} value={formdata.length} placeholder='Length' required>
                        </input>
                        X
                        <input type='number' name='width' onChange={handleChange} value={formdata.width} placeholder='width' required>
                        </input>
                      </>
                    )}

                    <br></br>
                    <label>Description : </label>
                    <textarea name="description" value={formdata.description} onChange={handleChange} rows={7} cols={70} required></textarea>
                    <br></br>

                    {residential !== 'plot' && (
                      <>
                        <label>Furnish Type:</label>
                        <select
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
                        <label>Floor no:</label>
                        <input type='number' name='floorno' onChange={handleChange} value={formdata.floorno}></input>

                        <label>Total Floor:</label>
                        <input type='number' name='totalfloor' onChange={handleChange} value={formdata.totalfloor}></input>
                        <br></br>
                      </>
                    )}
                    <br></br>
                    <label></label>

                    <br></br>
                    <label>RERA ID:</label>
                    <input type='text' name='reraid' onChange={handleChange} value={formdata.reraid}></input>

                    {residential !== 'plot' && (
                      <>
                        <label>Property Facing:</label>
                        <select
                          name='propertyfacing'
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
                        <label>Maintenance charge per month:</label>
                        <input type='number' name='maintenancecharge' onChange={handleChange} value={formdata.maintenancecharge}></input>
                        <br></br>
                      </>
                    )}

                    <select
                      name='moneytype'
                      onChange={handleChange}
                      value={formdata.moneytype}
                      required
                    >
                      <option value='Rupees' >Rupees</option>
                      <option value='AED'>Dubai - AED</option>
                      <option value='Riyal'>Riyal-Qutar</option>
                    </select>
                    <label>Montly Rent Price :</label>
                    <input type='number' name='price' onChange={handleChange} value={formdata.price} required></input>
                    <select
                      name='range'
                      onChange={handleChange}
                      value={formdata.range}
                      required
                    >
                      <option value='thousand'>Thousand</option>
                      <option value='Lakh'>Lakhs</option>
                      <option value='Crore'>Crore</option>
                      <option value='million'>million</option>
                      <option value='billion'>billion</option>
                    </select>
                    <br></br>
                    <label>Security amount:</label>
                    <input type='number' name='secuuritydeposit' onChange={handleChange} value={formdata.secuuritydeposit}></input>
                    <br></br>
                    {residential !== 'plot' && (
                      <>
                        <label>Floor Plan:</label>
                        <input type="file" name="floorplan" onChange={handleFloorplanChange} multiple accept=".jpg,.png,.pdf" />
                        <br />
                      </>
                    )}

                    <label>Upload Photos:</label>
                    <input type="file" name="photos" multiple onChange={handlePhotosChange} accept=".jpg,.png" />
                    <br />
                    <br></br>
                    {residential !== 'plot' && (
                      <>
                        <label>Amenties</label>
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="AirConditioner"
                          onChange={handleChange}
                        />
                        Air Conditioner

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Cable Tv"
                          onChange={handleChange}
                        />
                        Cable TV

                        <input
                          type="checkbox"
                          name="amenities"
                          value="wifi"
                          onChange={handleChange}
                        />
                        Wifi

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Dishwasher"
                          onChange={handleChange}
                        />
                        Dishwasher

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Heating"
                          onChange={handleChange}
                        />
                        Heating
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="Lift"
                          onChange={handleChange}
                        />
                        Lift

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Intercomm Facility"
                          onChange={handleChange}
                        />
                        Intercomm Facility

                        <input
                          type="checkbox"
                          name="amenities"
                          value="MicroWave"
                          onChange={handleChange}
                        />
                        Microwave

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Park"
                          onChange={handleChange}
                        />
                        Park

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Parking"
                          onChange={handleChange}
                        />
                        parking
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="Guest Parking"
                          onChange={handleChange}
                        />
                        Guest Parking

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Security"
                          onChange={handleChange}
                        />
                        Security

                        <input
                          type="checkbox"
                          name="amenities"
                          value="playarea"
                          onChange={handleChange}
                        />
                        playarea

                        <input
                          type="checkbox"
                          name="amenities"
                          value="CCTV"
                          onChange={handleChange}
                        />
                        CCTV

                        <input
                          type="checkbox"
                          name="amenities"
                          value="powerbackup"
                          onChange={handleChange}
                        />
                        powerbackup
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="gas pipeline"
                          onChange={handleChange}
                        />
                        Gas pipeline

                        <input
                          type="checkbox"
                          name="amenities"
                          value="gym"
                          onChange={handleChange}
                        />
                        GYM

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Swimmingpool"
                          onChange={handleChange}
                        />
                        Swimming pool

                        <input
                          type="checkbox"
                          name="amenities"
                          value="multipurpose court"
                          onChange={handleChange}
                        />
                        multipurpose court

                        <input
                          type="checkbox"
                          name="amenities"
                          value="multipurpose hall"
                          onChange={handleChange}
                        />
                        multipurpose hall
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="gas pipeline"
                          onChange={handleChange}
                        />

                        chimmney

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Modular kitchen"
                          onChange={handleChange}
                        />
                        Modular kitchen

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Refrigetor"
                          onChange={handleChange}
                        />
                        Refrigetor

                        <input
                          type="checkbox"
                          name="amenities"
                          value="rear lawn"
                          onChange={handleChange}
                        />
                        rear lawn
                        <br></br>

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Front lawn"
                          onChange={handleChange}
                        />
                        Front lawn

                        <input
                          type="checkbox"
                          name="amenities"
                          value="ev charge"
                          onChange={handleChange}
                        />
                        ev charge

                        <input
                          type="checkbox"
                          name="amenities"
                          value="club house"
                          onChange={handleChange}
                        />
                        club house

                      </>
                    )}
                    {
                      residential === 'plot' && (
                        <>
                          <label>Amenties </label>
                          <br></br>
                          <input
                            type="checkbox"
                            name="amenities"
                            value="park"
                            onChange={handleChange}
                          />
                          Park
                          <br></br>
                          <input
                            type="checkbox"
                            name="amenities"
                            value="CCTV"
                            onChange={handleChange}
                          />

                          CCTV

                          <input
                            type="checkbox"
                            name="amenities"
                            value="parking"
                            onChange={handleChange}
                          />
                          Parking

                          <input
                            type="checkbox"
                            name="amenities"
                            value="Security"
                            onChange={handleChange}
                          />
                          Security

                          <input
                            type="checkbox"
                            name="amenities"
                            value="play area"
                            onChange={handleChange}
                          />
                          Play Area
                          <br></br>

                          <input
                            type="checkbox"
                            name="amenities"
                            value="guest parking"
                            onChange={handleChange}
                          />
                          Guest Parking

                          <input
                            type="checkbox"
                            name="amenities"
                            value="power backup"
                            onChange={handleChange}
                          />
                          Power Backup

                          <input
                            type="checkbox"
                            name="amenities"
                            value="gas pipeline"
                            onChange={handleChange}
                          />
                          gas pipeline
                        </>
                      )
                    }
                    <br></br>
                    <h3>Distance</h3>
                    <label>Metro</label><input type='number' name='metro' value={formdata.metro} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>Bus</label><input type='number' name='bus' value={formdata.bus} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>School</label><input type='number' name='school' value={formdata.school} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>Hospital</label><input type='number' name='hospital' value={formdata.hospital} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>Mall</label><input type='number' name='mall' value={formdata.mall} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>Resturant: </label><input type='number' name='resturant'   value={formdata.resturant} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>Cinema: </label><input type='number' name='cinema' value={formdata.cinema}  onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <button type='submit'>submit</button>
                  </form>
                </div>
              </>
            )}
          </>
        )
      }
      {resitype === 'sale' && category === 'commercial' && (
        <>
          <button onClick={commhandler1}>Office Space</button>
          <button onClick={commhandler2} >Shop</button>
          <button onClick={commhandler3} >Land</button>
          <button onClick={commhandler4}>CoWorking Space</button>
          <button onClick={commhandler5}>Showroom</button>
          <h1>Sale - commercial</h1>
          {(commercial === 'officespace' || commercial === 'shop' || commercial === 'coworkingspace' || commercial === 'showroom' || commercial === 'land') && (
            <>
              <div>
                <br></br>
                <form onSubmit={handleSubmit}>
                <label>Country:</label>
                <select
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
                <label>City:</label>
                <select
                        name='city'
                        onChange={handleChange}
                        value={formdata.city}
                        required

                      >
                        {formdata.country ==='india' && (
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
                        {formdata.country ==='uae' && (
                        <>
                         <option value='dubai'>Dubai</option>
                        </>
                        )}
                        {formdata.country ==='qatar' && (
                        <>
                         <option value='doha'>Doha</option>
                        </>
                        )}
                  </select>
                  <br></br>
                  <label>locality:</label>
                  <input type='text' name='locality' onChange={handleChange} value={formdata.locality}></input>
                  <br></br>
                  <label>Property Name:</label>
                  <input type='text' name='propertyname' onChange={handleChange} value={formdata.propertyname} required>
                  </input>
                  <br></br>
                  <label>Property Address:</label>
                  <input type='text' name='address' onChange={handleChange} value={formdata.address} required>
                  </input>
                  <br></br>


                  <label>Area Detail(in sq.ft) : </label>
                  <input type='number' name='areadetail' onChange={handleChange} value={formdata.areadetail} required>
                  </input>
                  <select
                    name='areatype'
                    onChange={handleChange}
                    value={formdata.areatype}
                    required
                  >
                    <option value='Super Built-up-Area'>Super Built Up Area</option>
                    <option value='Built-up area'>Built-up Area</option>
                    <option value='Carpet Area'>Carpet Area</option>
                  </select>



                  {(commercial === 'land' || commercial==='shop') && (
                    <>
                      <br></br>
                      <label>Plot Dimesion:</label>
                      <input type='number' name='length' onChange={handleChange} value={formdata.length} placeholder='Length' required>
                      </input>
                      ft.

                      X 

                      <input type='number' name='width' onChange={handleChange} value={formdata.width} placeholder='width' required>
                      </input>
                      ft.
                    </>
                  )}

                  <br></br>
                  <label>Description : </label>
                  <textarea name="description" value={formdata.description} onChange={handleChange} rows={7} cols={70} required></textarea>
                  <br></br>

                  {commercial !== 'land' && (
                    <>
                      <label>Construction Status   </label>
                      <select
                        name='constructionstatus'
                        onChange={handleChange}
                        value={formdata.constructionstatus}
                        required
                      >
                        <option value='Ready to Move'>Ready to Move</option>
                        <option value='Under-Construction'>Under Construction</option>
                      </select>
                      <label>Furnish Type:</label>
                      <select
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
                      <label>Floor no:</label>
                      <input type='number' name='floorno' onChange={handleChange} value={formdata.floorno}></input>

                      <label>Total Floor:</label>
                      <input type='number' name='totalfloor' onChange={handleChange} value={formdata.totalfloor}></input>
                      <br></br>
                    </>
                  )}
                  <br></br>
                  <label></label>

                  <br></br>
                  <label>RERA ID:</label>
                  <input type='text' name='reraid' onChange={handleChange} value={formdata.reraid}></input>
                  <br></br>
                  {commercial === 'land' && (
                    <>
                      <label> Boundary Wall</label>
                      <label>  Yes</label>
                      <input
                        type="radio"
                        name="boundarywall"
                        value='yes'

                        onChange={handleChange}
                      />
                      <label> No</label>
                      <input
                        type="radio"
                        name="boundarywall"
                        value='no'

                        onChange={handleChange}
                      ></input>
                      <label>       No of open side</label>
                      <select
                        name='noofopenside'
                       
                        value={formdata.noofopenside}
                        onChange={handleChange}
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                      </select>
                      <br></br>
                      <label>Floor Allowed</label>
                      <select
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
                    </>

                  )}

                  {commercial !== 'land' && (
                    <>
                      <label>Property Facing:</label>
                      <select
                        name='propertyfacing'
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
                      <br></br>
                      <label>Maintenance charge per month:</label>
                      <input type='number' name='maintenancecharge' onChange={handleChange} value={formdata.maintenancecharge}></input>
                      <br></br>
                      <label>Currently leased Out: </label>
                      <label>  Yes</label>
                      <input
                        type="radio"
                        name="leased"
                        value='yes'
                        checked={leased === "yes"}
                        onChange={leasedchange1}
                      />
                      <input
                        type="radio"
                        name="leased"
                        value='no'
                        checked={leased === "no"}
                        onChange={leasedchange1}

                      />
                      {
                        leased === 'yes' && (
                          <>
                            <br></br>
                            <label>Montly Rent Price :</label>
                            <input type='number' name='montlyrent'  value={formdata.montlyrent} onChange={handleChange} ></input>
                            <br></br>
                            <label>Remaining Days:</label>
                            <input type='number' name='remainingtime'  value={formdata.remainingtime} onChange={handleChange}  placeholder='In days'></input>
                          </>
                        )
                      }
                    </>
                  )}

                  <br></br>
                  <label>Price :</label>
                  <input type='number' name='price' onChange={handleChange} value={formdata.price} required></input>
                  <select
                    name='range'
                    onChange={handleChange}
                    value={formdata.range}
                    required
                  >
                    <option value='Lakh'>Lakhs</option>
                    <option value='Crore'>Crore</option>
                    <option value='million'>million</option>
                    <option value='billion'>billion</option>
                  </select>
                  <select
                    name='moneytype'
                    onChange={handleChange}
                    value={formdata.moneytype}
                    required
                  >
                    <option value='Rupees' >Rupees</option>
                    <option value='AED'>Dubai - AED</option>
                    <option value='Riyal'>Riyal-Qutar</option>
                  </select>
                  <br></br>
                  <label>Token amount:</label>
                  <input type='number' name='secuuritydeposit' onChange={handleChange} value={formdata.secuuritydeposit}></input>
                  <br></br>

                  <br></br>
                  {commercial !== 'land' && (
                    <>
                      <label>Floor Plan:</label>
                      <input type="file" name="floorplan" onChange={handleFloorplanChange} multiple accept=".jpg,.png,.pdf" />
                      <br />
                    </>
                  )}

                  <label>Upload Photos:</label>
                  <input type="file" name="photos" multiple onChange={handlePhotosChange} accept=".jpg,.png" />
                  <br />
                  <br></br>
                  {commercial !== 'land' && (
                    <>
                      <label>Amenties</label>
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="AirConditioner"
                        onChange={handleChange}
                      />
                      Air Conditioner

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Cable Tv"
                        onChange={handleChange}
                      />
                      Cable TV

                      <input
                        type="checkbox"
                        name="amenities"
                        value="wifi"
                        onChange={handleChange}
                      />
                      Wifi

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Dishwasher"
                        onChange={handleChange}
                      />
                      Dishwasher

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Heating"
                        onChange={handleChange}
                      />
                      Heating
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="Lift"
                        onChange={handleChange}
                      />
                      Lift

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Intercomm Facility"
                        onChange={handleChange}
                      />
                      Intercomm Facility

                      <input
                        type="checkbox"
                        name="amenities"
                        value="MicroWave"
                        onChange={handleChange}
                      />
                      Microwave

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Park"
                        onChange={handleChange}
                      />
                      Park

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Parking"
                        onChange={handleChange}
                      />
                      parking
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="Guest Parking"
                        onChange={handleChange}
                      />
                      Guest Parking

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Security"
                        onChange={handleChange}
                      />
                      Security

                      <input
                        type="checkbox"
                        name="amenities"
                        value="playarea"
                        onChange={handleChange}
                      />
                      playarea

                      <input
                        type="checkbox"
                        name="amenities"
                        value="CCTV"
                        onChange={handleChange}
                      />
                      CCTV

                      <input
                        type="checkbox"
                        name="amenities"
                        value="powerbackup"
                        onChange={handleChange}
                      />
                      powerbackup
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="gas pipeline"
                        onChange={handleChange}
                      />
                      Gas pipeline

                      <input
                        type="checkbox"
                        name="amenities"
                        value="gym"
                        onChange={handleChange}
                      />
                      GYM

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Swimmingpool"
                        onChange={handleChange}
                      />
                      Swimming pool

                      <input
                        type="checkbox"
                        name="amenities"
                        value="multipurpose court"
                        onChange={handleChange}
                      />
                      multipurpose court

                      <input
                        type="checkbox"
                        name="amenities"
                        value="multipurpose hall"
                        onChange={handleChange}
                      />
                      multipurpose hall
                      <br></br>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="gas pipeline"
                        onChange={handleChange}
                      />

                      chimmney

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Modular kitchen"
                        onChange={handleChange}
                      />
                      Modular kitchen

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Refrigetor"
                        onChange={handleChange}
                      />
                      Refrigetor

                      <input
                        type="checkbox"
                        name="amenities"
                        value="rear lawn"
                        onChange={handleChange}
                      />
                      rear lawn
                      <br></br>

                      <input
                        type="checkbox"
                        name="amenities"
                        value="Front lawn"
                        onChange={handleChange}
                      />
                      Front lawn

                      <input
                        type="checkbox"
                        name="amenities"
                        value="ev charge"
                        onChange={handleChange}
                      />
                      ev charge

                      <input
                        type="checkbox"
                        name="amenities"
                        value="club house"
                        onChange={handleChange}
                      />
                      club house

                    </>
                  )}
                  {
                    commercial === 'land' && (
                      <>
                        <label>Amenties </label>
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="park"
                          onChange={handleChange}
                        />
                        Park
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="CCTV"
                          onChange={handleChange}
                        />

                        CCTV

                        <input
                          type="checkbox"
                          name="amenities"
                          value="parking"
                          onChange={handleChange}
                        />
                        Parking

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Security"
                          onChange={handleChange}
                        />
                        Security

                        <input
                          type="checkbox"
                          name="amenities"
                          value="play area"
                          onChange={handleChange}
                        />
                        Play Area
                        <br></br>

                        <input
                          type="checkbox"
                          name="amenities"
                          value="guest parking"
                          onChange={handleChange}
                        />
                        Guest Parking

                        <input
                          type="checkbox"
                          name="amenities"
                          value="power backup"
                          onChange={handleChange}
                        />
                        Power Backup

                        <input
                          type="checkbox"
                          name="amenities"
                          value="gas pipeline"
                          onChange={handleChange}
                        />
                        gas pipeline
                      </>
                    )
                  }
                  <br></br>
                  <h3>Distance</h3>
                  <label>Metro</label><input type='number' name='metro' value={formdata.metro} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Bus</label><input type='number' name='bus' value={formdata.bus} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>School</label><input type='number' name='school' value={formdata.school} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Hospital</label><input type='number' name='hospital' value={formdata.hospital} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Mall</label><input type='number' name='mall' value={formdata.mall} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Resturant: </label><input type='number' name='resturant' value={formdata.resturant} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <label>Cinema: </label><input type='number' name='cinema' value={formdata.cinema} onChange={handleChange} placeholder='in Km'></input>
                  <br></br>
                  <button type='submit'>submit</button>
                </form>
              </div>
            </>
          )}
        </>

      )}
      {
        category === 'commercial' && resitype === 'rent' && (
          <>
            <h1>commercial-rent</h1>
            <br></br>
            <button onClick={commhandler1}>Office Space</button>
            <button onClick={commhandler2} >Shop</button>
            <button onClick={commhandler3} >Land</button>
            <button onClick={commhandler4}>Coworking Space</button>
            <button onClick={commhandler5}>Showroom</button>
            {(commercial === 'officespace' || commercial === 'shop' || commercial === 'land' || commercial === 'coworkingspace' || commercial === 'showroom') && (
              <>
                <div>
                  <br></br>
                  <form onSubmit={handleSubmit}>
                  <label>Country:</label>
                <select
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
                <label>City:</label>
                <select
                        name='city'
                        onChange={handleChange}
                        value={formdata.city}
                        required

                      >
                        {formdata.country ==='india' && (
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
                        {formdata.country ==='uae' && (
                        <>
                         <option value='dubai'>Dubai</option>
                        </>
                        )}
                        {formdata.country ==='qatar' && (
                        <>
                         <option value='doha'>Doha</option>
                        </>
                        )}
                  </select>
                  <br></br>
                    <label>locality:</label>
                    <input type='text' name='locality' onChange={handleChange} value={formdata.locality}></input>
                    <br></br>
                    <label>Property Name:</label>
                    <input type='text' name='propertyname' onChange={handleChange} value={formdata.propertyname} required>
                    </input>
                    <br></br>
                    <label>Property Address:</label>
                    <input type='text' name='address' onChange={handleChange} value={formdata.address} required>
                    </input>
                    <br></br>
                    {(commercial !== 'land' || commercial === 'land') && (
                      <>
                        <label>Area Detail(in sq.ft) : </label>
                        <input type='number' name='areadetail' onChange={handleChange} value={formdata.areadetail} required>
                        </input>
                        <select
                          name='areatype'
                          onChange={handleChange}
                          value={formdata.areatype}
                          required
                        >
                          <option value='Super Built-up Area'>Super Built Up Area</option>
                          <option value='Built-up area'>Built-up Area</option>
                          <option value='Carpet Area'>Carpet Area</option>
                        </select>
                        <br></br>
                      </>
                    )}
                    {(commercial === 'shop' || commercial === 'land') && (
                      <>
                        <br></br>
                        <label>Plot Dimesion:</label>
                        <input type='number' name='length' onChange={handleChange} value={formdata.length} placeholder='Length' required>
                        </input>
                        X
                        <input type='number' name='width' onChange={handleChange} value={formdata.width} placeholder='width' required>
                        </input>
                      </>
                    )}
                    <br></br>
                    <label>Description : </label>
                    <textarea name="description" value={formdata.description} onChange={handleChange} rows={7} cols={70} required></textarea>
                    <br></br>

                    {commercial !== 'land' && (
                      <>
                        <label>Furnish Type:</label>
                        <select
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
                        <label>Floor no:</label>
                        <input type='number' name='floorno' onChange={handleChange} value={formdata.floorno}></input>

                        <label>Total Floor:</label>
                        <input type='number' name='totalfloor' onChange={handleChange} value={formdata.totalfloor}></input>
                        <br></br>
                      </>
                    )}
                    <br></br>
                    <label></label>

                    <br></br>
                    <label>RERA ID:</label>
                    <input type='text' name='reraid' onChange={handleChange} value={formdata.reraid}></input>

                    {commercial !== 'land' && (
                      <>
                        <label>Property Facing:</label>
                        <select
                          name='propertyfacing'
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
                        <label>Maintenance charge per month:</label>
                        <input type='number' name='maintenancecharge' onChange={handleChange} value={formdata.maintenancecharge}></input>
                        <br></br>
                      </>
                    )}


                    <label>Montly Rent Price :</label>
                    <input type='number' name='montlyrent' onChange={handleChange} value={formdata.montlyrent} required></input>
                    <select
                      name='range'
                      onChange={handleChange}
                      value={formdata.range}
                      required
                    >
                      <option value='thousand'>Thousand</option>
                      <option value='Lakh'>Lakhs</option>
                      <option value='Crore'>Crore</option>
                      <option value='million'>million</option>
                      <option value='billion'>billion</option>
                    </select>
                    <select
                      name='moneytype'
                      onChange={handleChange}
                      value={formdata.moneytype}
                      required
                    >
                      <option value='Rupees' >Rupees</option>
                      <option value='AED'>Dubai - AED</option>
                      <option value='Riyal'>Riyal-Qutar</option>
                    </select>
                    <br></br>
                    {commercial !== 'land' && (
                      <>
                        <label>Available Status</label>
                        <input
                          type="radio"
                          name="immediate"
                          value={formdata.remainingtime}
                          onChange={handleChange}
                        />
                        Immediate
                        <label> Or </label>
                        <input
                          type="text"
                          name="remainingtime"
                          value={formdata.remainingtime}
                          onChange={handleChange}
                          placeholder='remaining days'
                        />
                        <br></br>
                        <label>Security amount:</label>
                        <input type='number' name='secuuritydeposit'  value={formdata.secuuritydeposit} onChange={handleChange}></input>
                        <br></br>
                        <label>Lock in period:</label>
                        <input type='number' name='lockinperiod'  value={formdata.lockinperiod} onChange={handleChange} placeholder='In Years'></input>
                        <br></br>
                      </>
                    )}


                    {commercial !== 'land' && (

                      <>
                        <label>Wiling to modify Interior</label>
                        <label>  Yes</label>
                        <input
                          type="radio"
                          name="modifyinterior"
                          value={formdata.modifyinterior}

                          onClick={modify('yes')}
                        />
                        <label> No</label>
                        <input
                          type="radio"
                          name={formdata.modifyinterior}
                          value='no'

                          onClick={modify('no')}
                        ></input>
                        <br></br>
                        <label>Floor Plan:</label>
                        <input type="file" name="floorplan" onChange={handleFloorplanChange} multiple accept=".jpg,.png,.pdf" />
                        <br />
                      </>
                    )}

                    <label>Upload Photos:</label>
                    <input type="file" name="photos" multiple onChange={handlePhotosChange} accept=".jpg,.png" />
                    <br />
                    <br></br>
                    {commercial !== 'land' && (
                      <>
                        <label>Amenties</label>
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="AirConditioner"
                          onChange={handleChange}
                        />
                        Air Conditioner

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Cable Tv"
                          onChange={handleChange}
                        />
                        Cable TV

                        <input
                          type="checkbox"
                          name="amenities"
                          value="wifi"
                          onChange={handleChange}
                        />
                        Wifi

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Dishwasher"
                          onChange={handleChange}
                        />
                        Dishwasher

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Heating"
                          onChange={handleChange}
                        />
                        Heating
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="Lift"
                          onChange={handleChange}
                        />
                        Lift

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Intercomm Facility"
                          onChange={handleChange}
                        />
                        Intercomm Facility

                        <input
                          type="checkbox"
                          name="amenities"
                          value="MicroWave"
                          onChange={handleChange}
                        />
                        Microwave

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Park"
                          onChange={handleChange}
                        />
                        Park

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Parking"
                          onChange={handleChange}
                        />
                        parking
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="Guest Parking"
                          onChange={handleChange}
                        />
                        Guest Parking

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Security"
                          onChange={handleChange}
                        />
                        Security

                        <input
                          type="checkbox"
                          name="amenities"
                          value="playarea"
                          onChange={handleChange}
                        />
                        playarea

                        <input
                          type="checkbox"
                          name="amenities"
                          value="CCTV"
                          onChange={handleChange}
                        />
                        CCTV

                        <input
                          type="checkbox"
                          name="amenities"
                          value="powerbackup"
                          onChange={handleChange}
                        />
                        powerbackup
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="gas pipeline"
                          onChange={handleChange}
                        />
                        Gas pipeline

                        <input
                          type="checkbox"
                          name="amenities"
                          value="gym"
                          onChange={handleChange}
                        />
                        GYM

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Swimmingpool"
                          onChange={handleChange}
                        />
                        Swimming pool

                        <input
                          type="checkbox"
                          name="amenities"
                          value="multipurpose court"
                          onChange={handleChange}
                        />
                        multipurpose court

                        <input
                          type="checkbox"
                          name="amenities"
                          value="multipurpose hall"
                          onChange={handleChange}
                        />
                        multipurpose hall
                        <br></br>
                        <input
                          type="checkbox"
                          name="amenities"
                          value="gas pipeline"
                          onChange={handleChange}
                        />

                        chimmney

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Modular kitchen"
                          onChange={handleChange}
                        />
                        Modular kitchen

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Refrigetor"
                          onChange={handleChange}
                        />
                        Refrigetor

                        <input
                          type="checkbox"
                          name="amenities"
                          value="rear lawn"
                          onChange={handleChange}
                        />
                        rear lawn
                        <br></br>

                        <input
                          type="checkbox"
                          name="amenities"
                          value="Front lawn"
                          onChange={handleChange}
                        />
                        Front lawn

                        <input
                          type="checkbox"
                          name="amenities"
                          value="ev charge"
                          onChange={handleChange}
                        />
                        ev charge

                        <input
                          type="checkbox"
                          name="amenities"
                          value="club house"
                          onChange={handleChange}
                        />
                        club house

                      </>
                    )}
                    {
                      commercial === 'land' && (
                        <>
                          <label>Amenties </label>
                          <br></br>
                          <input
                            type="checkbox"
                            name="amenities"
                            value="park"
                            onChange={handleChange}
                          />
                          Park
                          <br></br>
                          <input
                            type="checkbox"
                            name="amenities"
                            value="CCTV"
                            onChange={handleChange}
                          />

                          CCTV

                          <input
                            type="checkbox"
                            name="amenities"
                            value="parking"
                            onChange={handleChange}
                          />
                          Parking

                          <input
                            type="checkbox"
                            name="amenities"
                            value="Security"
                            onChange={handleChange}
                          />
                          Security

                          <input
                            type="checkbox"
                            name="amenities"
                            value="play area"
                            onChange={handleChange}
                          />
                          Play Area
                          <br></br>

                          <input
                            type="checkbox"
                            name="amenities"
                            value="guest parking"
                            onChange={handleChange}
                          />
                          Guest Parking

                          <input
                            type="checkbox"
                            name="amenities"
                            value="power backup"
                            onChange={handleChange}
                          />
                          Power Backup

                          <input
                            type="checkbox"
                            name="amenities"
                            value="gas pipeline"
                            onChange={handleChange}
                          />
                          gas pipeline
                        </>
                      )
                    }
                    <br></br>
                    <h3>Distance</h3>
                    <label>Metro</label><input type='number' name='metro' value={formdata.metro} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>Bus</label><input type='number' name='bus' value={formdata.bus} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>School</label><input type='number' name='school' value={formdata.school} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>Hospital</label><input type='number' name='hospital' value={formdata.hospital} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>Mall</label><input type='number' name='mall' value={formdata.mall} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <label>Resturant: </label><input type='number' name='resturant' value={formdata.resturant} onChange={handleChange}  placeholder='in Km'></input>
                    <br></br>
                    <label>Cinema: </label><input type='number' name='cinema' value={formdata.cinema} onChange={handleChange} placeholder='in Km'></input>
                    <br></br>
                    <button type='submit'>submit</button>
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