import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { StyledForm } from "./styled";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MiddleCenter from "../../hoc/MiddleCenter";
import { Checkbox } from "primereact/checkbox";

const SignUp = () => {
    const [formData, setFormData] = useState({});
    const defaultValues = {
        email: '',
        password: '',
        accept: false,
    }
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // setFormData(data);
        // dispatch(login(formData))
        //     .then(() => {
        //         navigate("/dashboard");
        //     })
        // reset();
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
                <div className="card p-p-6">
                    <h5 style={{ fontSize: "3.5rem "}} className="p-text-center">Booking<span style={{ color: "#14B8A6"}}>Scape</span></h5>
                    <p style={{ fontSize: "1.5rem", color: "#14B8A6"}} className="p-text-center">Register Free Account</p>
                    <p className="p-text-center">No contracts, no obligations, no credit card details</p>
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
                        <div className="p-field-checkbox">
                            <Controller name="accept" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                                <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} className={classNames({ 'p-invalid': fieldState.invalid })} />
                            )} />
                            <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>I agree to the terms and conditions*</label>
                        </div>
                        <Button type="submit" label="Create Free Account" className="p-mt-2" />
                    </form>
                    <div className="p-d-flex p-jc-center p-ai-center">
                        <p>Already have an account?</p>
                        <Button onClick={() => {navigate("/login")}} label="Sign In" className="p-button-text" />
                    </div>
                </div>
            </StyledForm>
        </MiddleCenter>
    );
}

export default SignUp;