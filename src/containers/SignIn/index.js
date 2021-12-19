import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { StyledForm } from "./styled";
import { login } from "../../redux-store/actions/auth"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MiddleCenter from "../../hoc/MiddleCenter";

const SignIn = () => {
    const [formData, setFormData] = useState({});
    const defaultValues = {
        email: '',
        password: '',
    }
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setFormData(data);
        dispatch(login(formData))
            .then(() => {
                navigate("/dashboard");
            })
        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <MiddleCenter>
            <StyledForm className="p-shadow-1">
                <div className="card p-p-4">
                    <h5 style={{ fontSize: "3.5rem "}} className="p-text-center">Booking<span style={{ color: "#14B8A6"}}>Scape</span></h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="p-field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <Controller name="email" control={control}
                                            rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                            )} />
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                    <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} header={passwordHeader} footer={passwordFooter} />
                                )} />
                                <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <Button type="submit" label="Submit" className="p-mt-2" />
                    </form>
                    <div className="p-d-flex p-jc-between">
                        <Button label="I forgot my password" className="p-button-text" />
                        <Button onClick={() => {navigate("/register")}} label="Register" className="p-button-text" />
                    </div>
                </div>
            </StyledForm>
        </MiddleCenter>
    );
}

export default SignIn;