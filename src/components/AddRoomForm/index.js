import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { CountryService } from "../../services/country-service";
import {Button} from "primereact/button";
import { useDispatch } from "react-redux";
import { saveRoom } from "../../redux-store/actions/room";

const AddRoomForm = () => {
    const [countries, setCountries] = useState([]);
    const [roomData, setRoomData] = useState({
        id: null,
        name: '',
        type: '',
        description: '',
        size: 0,
        guests: 0,
        single_beds: 0,
        twin_beds: 0,
        country: '',
        street: '',
        post_code: 0,
        city: ''
    });
    const countryservice = new CountryService();
    const dispatch = useDispatch();

    let types = [
        {name: 'Room', value: 'room'},
        {name: 'Apartment', value: 'apartment'},
        {name: 'Maisonette', value: 'maisonette'},
        {name: 'Studio', value: 'studio'},
        {name: 'Bungalow', value: 'bungalow'},
        {name: 'Camper', value: 'camper'},
        {name: 'Villa', value: 'villa'},
        {name: 'Tent', value: 'tent'},
        {name: 'Lodge', value: 'lodge'},
        {name: 'Bed', value: 'bed'},
        {name: 'Boat', value: 'boat'},
        {name: 'House', value: 'house'},
    ];

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveRoom(roomData))
            .then(() => {
                setRoomData({
                    id: null,
                    name: '',
                    type: '',
                    description: '',
                    size: 0,
                    guests: 0,
                    single_beds: 0,
                    twin_beds: 0,
                    country: '',
                    street: '',
                    post_code: 0,
                    city: ''
                })
            })
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRoomData({...roomData,[name]: value})
    }

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-fluid p-formgrid p-grid p-justify-center">
                <div>
                    <h5>Basic Information</h5>
                    <div className="p-field">
                        <label htmlFor="name" className="p-col-fixed">Room name</label>
                        <div className="p-col">
                            <InputText id="name" name="name" value={roomData.name} onChange={handleChange} type="text"/>
                        </div>
                    </div>
                    <div className="p-field">
                        <label htmlFor="type" className="p-col-fixed">Room type</label>
                        <div className="p-col">
                            <Dropdown id="type" name="type" value={roomData.type} options={types} onChange={handleChange} placeholder="Type" optionLabel="name"/>
                        </div>
                    </div>
                    <div className="p-field">
                        <label htmlFor="size" className="p-col-fixed">Room size</label>
                        <div className="p-col">
                            <InputText id="size" name="size" value={roomData.size} onChange={handleChange} type="number"/>
                        </div>
                    </div>
                    <div className="p-field">
                        <label htmlFor="description" className="p-col-fixed">Room description</label>
                        <div className="p-col">
                            <InputTextarea id="description" name="description" value={roomData.description} onChange={handleChange} type="text"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h5>Persons</h5>
                    <div className="p-field">
                        <label htmlFor="guests" className="p-col-fixed">Number of guests</label>
                        <div className="p-col">
                            <InputText id="guests" name="guests" value={roomData.guests} onChange={handleChange} type="number"  />
                        </div>
                    </div>
                    <div className="p-field">
                        <label htmlFor="single_beds" className="p-col-fixed">Number of single beds</label>
                        <div className="p-col">
                            <InputText id="single_beds" name="single_beds" value={roomData.single_beds} onChange={handleChange} type="number"  />
                        </div>
                    </div>
                    <div className="p-field">
                        <label htmlFor="twin_beds" className="p-col-fixed">Number of twin beds</label>
                        <div className="p-col">
                            <InputText id="twin_beds" name="twin_beds" value={roomData.twin_beds} onChange={handleChange} type="number"  />
                        </div>
                    </div>
                </div>
                <div>
                    <h5>Address data</h5>
                    <div className="p-field">
                        <label htmlFor="country">Country</label>
                        <Dropdown id="country" name="country" value={roomData.country} options={countries} onChange={handleChange} placeholder="Country" optionLabel="name"/>
                    </div>
                    <div className="p-field">
                        <label htmlFor="street" className="p-col-fixed">Street</label>
                        <div className="p-col">
                            <InputText id="street" name="street" value={roomData.street} onChange={handleChange} type="text"  />
                        </div>
                    </div>
                    <div className="p-field">
                        <label htmlFor="post_code" className="p-col-fixed">Post Code</label>
                        <div className="p-col">
                            <InputText id="post_code" name="post_code" value={roomData.post_code} onChange={handleChange} type="number"  />
                        </div>
                    </div>
                    <div className="p-field">
                        <label htmlFor="city" className="p-col-fixed">City</label>
                        <div className="p-col">
                            <InputText id="city" name="city" value={roomData.city} onChange={handleChange} type="text"  />
                        </div>
                    </div>
                </div>
            </div>
            <Button type="submit" label="Save" icon="pi pi-check" autoFocus />
        </form>
    )
}

export default AddRoomForm;