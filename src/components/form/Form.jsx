"use client";

import * as Yup from "yup";
import axios from "axios";
import Image from "next/image";
import style from "./Form.module.scss";
import { neueHassDisplay } from "@/app/layout";
import { chevron } from "../../../public/images";
import { Formik, Field, Form as FormularioFormik } from "formik";

const phoneRegExp = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;

function validationSchema() {
    return Yup.object({
        nombreCompleto: Yup.string().required("Campo obligatorio!").min(5, "Nombre muy corto!"),
        email: Yup.string().email("Email erróneo!"),
        celular: Yup.string().required("Campo obligatorio!").matches(phoneRegExp, "Número de celular inválido."),
        comentario: Yup.string(),
        horarioDeContacto: Yup.string(),
    });
}

export const Form = ({ setOpen, setOpenError }) => {
    return (
        <>
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    nombreCompleto: "",
                    celular: "",
                    email: "",
                    horarioDeContacto: "",
                    comentario: "",
                    interesado: "",
                    objetivo: "",
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        await axios.post("https://www.api.desarrollosdelsud.com.ar:1999/api/forms/sendForm", values);
                        setOpen(true);
                        setTimeout(() => {
                            setOpen(false);
                        }, 5000);
                        resetForm();
                    } catch (error) {
                        setOpenError(true);
                        setTimeout(() => {
                            setOpenError(false);
                        }, 5000);
                        resetForm();
                        console.error(error.message);
                    }
                }}
            >
                {({ errors, touched, isSubmitting, values }) => (
                    <FormularioFormik className={style.form_container}>
                        <span>
                            <Field className={neueHassDisplay.className} id='nombreCompleto' name='nombreCompleto' placeholder='Nombre *' />
                            {errors.nombreCompleto && touched.nombreCompleto ? (
                                <span className={style.error_message}>{errors.nombreCompleto}</span>
                            ) : null}
                        </span>

                        <span>
                            <Field className={neueHassDisplay.className} id='celular' name='celular' placeholder='Telefono *' />
                            {errors.celular && touched.celular ? <span className={style.error_message}>{errors.celular}</span> : null}
                        </span>

                        <span>
                            <Field className={neueHassDisplay.className} id='email' name='email' placeholder='Email' />
                            {errors.email && touched.email ? <span className={style.error_message}>{errors.email}</span> : null}
                        </span>

                        <span>
                            <Field
                                className={neueHassDisplay.className}
                                id='horarioDeContacto'
                                name='horarioDeContacto'
                                placeholder='Horario de contacto'
                            />
                        </span>

                        <span>
                            <Field
                                id='comentario'
                                name='comentario'
                                placeholder='Dejanos tu comentario...'
                                component='textarea'
                                rows={10}
                                className={neueHassDisplay.className}
                            />
                        </span>

                        {values.nombreCompleto.length < 5 ? (
                            <span className={style.button_disabled}>Llene los campos por favor</span>
                        ) : !values.celular.match(phoneRegExp) ? (
                            <span className={style.button_disabled}>Llene los campos por favor</span>
                        ) : (
                            <button style={{ cursor: "pointer" }} type='submit' className={neueHassDisplay.className}>
                                {isSubmitting ? null : (
                                    <>
                                        Enviar <Image src={chevron} alt='Enviar' />
                                    </>
                                )}
                            </button>
                        )}
                    </FormularioFormik>
                )}
            </Formik>
        </>
    );
};
