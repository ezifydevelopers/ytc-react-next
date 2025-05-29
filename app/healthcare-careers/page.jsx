'use client';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from '@/app/components/pageHeader';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import ResumeUpload from '@/app/components/ApplyNow/uploadResume';

const countryOptions = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "American Samoa", label: "American Samoa" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Anguilla", label: "Anguilla" },
    { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Aruba", label: "Aruba" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "The Bahamas", label: "The Bahamas" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Barbados", label: "Barbados" },
    { value: "Belarus", label: "Belarus" },
    { value: "Belgium", label: "Belgium" },
    { value: "Belize", label: "Belize" },
    { value: "Benin", label: "Benin" },
    { value: "Bermuda", label: "Bermuda" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
    { value: "Botswana", label: "Botswana" },
    { value: "Brazil", label: "Brazil" },
    { value: "Brunei", label: "Brunei" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Burundi", label: "Burundi" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Canada", label: "Canada" },
    { value: "Cape Verde", label: "Cape Verde" },
    { value: "Cayman Islands", label: "Cayman Islands" },
    { value: "Central African Republic", label: "Central African Republic" },
    { value: "Chad", label: "Chad" },
    { value: "Chole", label: "Chole" },
    { value: "China", label: "China" },
    { value: "Christmas Island", label: "Christmas Island" },
    { value: "Cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
    { value: "Colombia", label: "Colombia" },
    { value: "Comoros", label: "Comoros" },
    { value: "Congo", label: "Congo" },
    { value: "Cook Isiland", label: "Cook Isiland" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Croatia", label: "Croatia" },
    { value: "Cuba", label: "Cuba" },
    { value: "Curacao", label: "Curacao" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Democratic Republic of the Congo", label: "Democratic Republic of the Congo" },
    { value: "Denmark", label: "Denmark" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "Dominica", label: "Dominica" },
    { value: "Dominican Republic", label: "Dominican Republic" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Egypt", label: "Egypt" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Equatorial Guinea", label: "Equatorial Guinea" },
    { value: "Eritrea", label: "Eritrea" },
    { value: "Estonia", label: "Estonia" },
    { value: "Ethiopia", label: "Ethiopia" },
    { value: "Falkland Islands", label: "Falkland Islands" },
    { value: "Faroe Islands", label: "Faroe Islands" },
    { value: "Fiji", label: "Fiji" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "French Polynesia", label: "French Polynesia" },
    { value: "Gabon", label: "Gabon" },
    { value: "The Gambia", label: "The Gambia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Germany", label: "Germany" },
    { value: "Ghana", label: "Ghana" },
    { value: "Gibraltar", label: "Gibraltar" },
    { value: "Greece", label: "Greece" },
    { value: "Greenland", label: "Greenland" },
    { value: "Grenada", label: "Grenada" },
    { value: "Guadeloupe", label: "Guadeloupe" },
    { value: "Guam", label: "Guam" },
    { value: "Guatemala", label: "Guatemala" },
    { value: "Guernsey", label: "Guernsey" },
    { value: "Guinea", label: "Guinea" },
    { value: "Guinea-Bissau", label: "Guinea-Bissau" },
    { value: "Guyana", label: "Guyana" },
    { value: "Haiti", label: "Haiti" },
    { value: "Honduras", label: "Honduras" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran", label: "Iran" },
    { value: "Iraq", label: "Iraq" },
    { value: "Ireland", label: "Ireland" },
    { value: "Israel", label: "Israel" },
    { value: "Italy", label: "Italy" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Japan", label: "Japan" },
    { value: "Jersey", label: "Jersey" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Kenya", label: "Kenya" },
    { value: "Kiribati", label: "Kiribati" },
    { value: "North Korea", label: "North Korea" },
    { value: "South Korea", label: "South Korea" },
    { value: "Kosovo", label: "Kosovo" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    { value: "Laos", label: "Laos" },
    { value: "Latvia", label: "Latvia" },
    { value: "Lebanon", label: "Lebanon" },
    { value: "Lesotho", label: "Lesotho" },
    { value: "Liberia", label: "Liberia" },
    { value: "Libya", label: "Libya" },
    { value: "Liechtenstein", label: "Liechtenstein" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Macau", label: "Macau" },
    { value: "Macedonia", label: "Macedonia" },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Malawi", label: "Malawi" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Maldives", label: "Maldives" },
    { value: "Mali", label: "Mali" },
    { value: "Malta", label: "Malta" },
    { value: "Marshall Islands", label: "Marshall Islands" },
    { value: "Martinique", label: "Martinique" },
    { value: "Mauritania", label: "Mauritania" },
    { value: "Mauritius", label: "Mauritius" },
    { value: "Mayotte", label: "Mayotte" },
    { value: "Mexico", label: "Mexico" },
    { value: "Micronesia", label: "Micronesia" },
    { value: "Moldova", label: "Moldova" },
    { value: "Monaco", label: "Monaco" },
    { value: "Mongolia", label: "Mongolia" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Montserrat", label: "Montserrat" },
    { value: "Morocco", label: "Morocco" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Myanmar", label: "Myanmar" },
    { value: "Nagorno-Karabakh", label: "Nagorno-Karabakh" },
    { value: "Namibia", label: "Namibia" },
    { value: "Nauru", label: "Nauru" },
    { value: "Nepal", label: "Nepal" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Netherlands Antilles", label: "Netherlands Antilles" },
    { value: "New Caledonia", label: "New Caledonia" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nicaragua", label: "Nicaragua" },
    { value: "Niger", label: "Niger" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Niue", label: "Niue" },
    { value: "Norfolk Island", label: "Norfolk Island" },
    { value: "Turkish Republic of Northern Cyprus", label: "Turkish Republic of Northern Cyprus" },
    { value: "Northern Mariana", label: "Northern Mariana" },
    { value: "Norway", label: "Norway" },
    { value: "Oman", label: "Oman" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Palau", label: "Palau" },
    { value: "Palestine", label: "Palestine" },
    { value: "Panama", label: "Panama" },
    { value: "Papua New Guinea", label: "Papua New Guinea" },
    { value: "Paraguay", label: "Paraguay" },
    { value: "Peru", label: "Peru" },
    { value: "Philippines", label: "Philippines" },
    { value: "Pitcairn Islands", label: "Pitcairn Islands" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Puerto Rico", label: "Puerto Rico" },
    { value: "Qatar", label: "Qatar" },
    { value: "Republic of the Congo", label: "Republic of the Congo" },
    { value: "Romania", label: "Romania" },
    { value: "Russia", label: "Russia" },
    { value: "Rwanda", label: "Rwanda" },
    { value: "Saint Barthelemy", label: "Saint Barthelemy" },
    { value: "Saint Helena", label: "Saint Helena" },
    { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
    { value: "Saint Lucia", label: "Saint Lucia" },
    { value: "Saint Martin", label: "Saint Martin" },
    { value: "Saint Pierre and Miquelon", label: "Saint Pierre and Miquelon" },
    { value: "Saint Vincent and the Grenadines", label: "Saint Vincent and the Grenadines" },
    { value: "Samoa", label: "Samoa" },
    { value: "San Marino", label: "San Marino" },
    { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Senegal", label: "Senegal" },
    { value: "Serbia", label: "Serbia" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "Sierra Leone", label: "Sierra Leone" },
    { value: "Singapore", label: "Singapore" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Solomon Islands", label: "Solomon Islands" },
    { value: "Somalia", label: "Somalia" },
    { value: "Somaliland", label: "Somaliland" },
    { value: "South Africa", label: "South Africa" },
    { value: "South Ossetia", label: "South Ossetia" },
    { value: "South Sudan", label: "South Sudan" },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sudan", label: "Sudan" },
    { value: "Suriname", label: "Suriname" },
    { value: "Svalbard", label: "Svalbard" },
    { value: "eSwatini", label: "eSwatini" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Syria", label: "Syria" },
    { value: "Taiwan", label: "Taiwan" },
    { value: "Tajikistan", label: "Tajikistan" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Thailand", label: "Thailand" },
    { value: "Timor-Leste", label: "Timor-Leste" },
    { value: "Tongo", label: "Tongo" },
    { value: "Tokelau", label: "Tokelau" },
    { value: "Tonga", label: "Tonga" },
    { value: "Transnistria Pridnestrovie", label: "Transnistria Pridnestrovie" },
    { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
    { value: "Tristan da Cunha", label: "Tristan da Cunha" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Turkey", label: "Turkey" },
    { value: "Turkmenistan", label: "Turkmenistan" },
    { value: "Turks and Caicos Islands", label: "Turks and Caicos Islands" },
    { value: "Tuvalu", label: "Tuvalu" },
    { value: "Uganda", label: "Uganda" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States", label: "United States" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Uzbekistan", label: "Uzbekistan" },
    { value: "Vanuatu", label: "Vanuatu" },
    { value: "Vatican City", label: "Vatican City" },
    { value: "Venezuela", label: "Venezuela" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "British Virgin Islands", label: "British Virgin Islands" },
    { value: "Isle of Man", label: "Isle of Man" },
    { value: "US Virgin Islands", label: "US Virgin Islands" },
    { value: "Wallis and Futuna", label: "Wallis and Futuna" },
    { value: "Western Sahara", label: "Western Sahara" },
    { value: "Yemen", label: "Yemen" },
    { value: "Zambia", label: "Zambia" },
    { value: "Zimbabwe", label: "Zimbabwe" }
];

const positionOptions = [
    { value: "General Labour", label: "General Labour" },
    { value: "Material Handler", label: "Material Handler" },
    { value: "Machine Operator", label: "Machine Operator" },
    { value: "Cleaner", label: "Cleaner" },
    { value: "Forklift Operator", label: "Forklift Operator" },
    { value: "Welder", label: "Welder" },
    { value: "Construction Worker", label: "Construction Worker" },
    { value: "carpenter", label: "carpenter" },
    { value: "Receptionist", label: "Receptionist" },
    { value: "Data Entry", label: "Data Entry" },
    { value: "Book Keeping", label: "Book Keeping" },
    { value: "Office Administrator", label: "Office Administrator" },
    { value: "Office Clerk", label: "Office Clerk" },
    { value: "AZ Driver", label: "AZ Driver" },
    { value: "DZ Driver", label: "DZ Driver" },
    { value: "GZ Driver", label: "GZ Driver" },
    { value: "G Driver", label: "G Driver" },
    { value: "CNC Operator", label: "CNC Operator" },
    { value: "CNC Machinist", label: "CNC Machinist" },
    { value: "Quality Inspector", label: "Quality Inspector" },
    { value: "Window & Door Assembler Inspector", label: "Window & Door Assembler Inspector" },
    { value: "Painter & Spray Painter", label: "Painter & Spray Painter" },
    { value: "Line Operator", label: "Line Operator" },
    { value: "RN/ RPN", label: "RN/ RPN" },
    { value: "Industrial Millwright", label: "Industrial Millwright" },
    { value: "Industrial Electrician", label: "Industrial Electrician" },
    { value: "Technician", label: "Technician" },
    { value: "HVAC Technician", label: "HVAC Technician" },
    { value: "Gas Fitter", label: "Gas Fitter" },
    { value: "Truck Mechanic", label: "Truck Mechanic" },
    { value: "IT Technician", label: "IT Technician" },
    { value: "Office Admin", label: "Office Admin" },
]

const ApplyNow = () => {
    const [resumeFile, setResumeFile] = useState(null);

    useEffect(() => {
        // Prevent injecting script if already present
        if (document.getElementById("jotform-script")) return;

        const script = document.createElement("script");
        script.src = "https://form.jotform.com/jsform/251134442771452";
        script.id = "jotform-script"; // Unique ID to prevent duplicates
        script.type = "text/javascript";
        script.async = true;
        document.getElementById("jotform-container")?.appendChild(script);
    }, []);

    const handleFileUpload = (file) => {
        setResumeFile(file);
    };

    const initialValues = {
        Firstname: "",
        Lastname: "",
        Email: "",
        CellNumber: "",
        HomePhone: "",
        Birthdate: "",
        Gender: "",
        Position: "",
        Availability: "",
        ShiftPreference: "",
        Message: "",
        EmergencyContactName: "",
        EmergencyContactNumber: "",
        SocialInsuranceNumber: "",
        StreetAddress: "",
        City: "",
        Province: "",
        PostalCode: "",
        Country: "Canada",
        CsaSafetyBoots: "",
        ImmigrationStatus: "",
        CriminalRecord: "",
        PreviousCompany: "",
        PreviousCompanyAddress: "",
        PreviousCompanySupervisorEmail: "",
        WhereDidYouSeeAd: "",
        WhatAreaDidYouSeeAd: "",
        HowWillYouGetToWork: ""
    };

    const validationSchema = Yup.object({
        Firstname: Yup.string().required("First Name is required"),
        Lastname: Yup.string().required("Last Name is required"),
        Email: Yup.string().email("Invalid email format").required("Email is required"),
        CellNumber: Yup.string().matches(/^\d+$/, "Cell number must be only digits").required("Cell number is required"),
        HomePhone: Yup.string().matches(/^\d+$/, "Home phone number must be only digits"),
        Birthdate: Yup.string().required("Birth Date is required"),
        Gender: Yup.string().required("Gender is required"),
        Position: Yup.string().required("Position Applying For is required"),
        Availability: Yup.string().required("Availability is required"),
        ShiftPreference: Yup.string().required("Shift Preference is required"),
        Message: Yup.string().required("Message is required"),
        EmergencyContactName: Yup.string().required("Emergency Contact Person Name is required"),
        EmergencyContactNumber: Yup.string().matches(/^\d+$/, "Emergency contact number must be only digits").required("Emergency Contact Number is required"),
        SocialInsuranceNumber: Yup.string().required("Social Insurance Number is required"),
        StreetAddress: Yup.string().required("Street Address is required"),
        City: Yup.string().required("City is required"),
        Province: Yup.string().required("Province is required"),
        PostalCode: Yup.string().required("Postal Code is required"),
        Country: Yup.string().required("Country is required"),
        CsaSafetyBoots: Yup.string().required("CSA approved safety boots status is required"),
        ImmigrationStatus: Yup.string().required("Immigration Status is required"),
        CriminalRecord: Yup.string().required("Criminal Record status is required"),
        PreviousCompany: Yup.string(), // Validation for previous company
        PreviousCompanyAddress: Yup.string(), // Validation for address
        PreviousCompanySupervisorEmail: Yup.string().email("Invalid email format"), // Validation for supervisor email
        WhereDidYouSeeAd: Yup.string().required("Where Did You See Our Advertisement is required"), // Validation for advertisement source
        HowWillYouGetToWork: Yup.string().required("Please select how you will get to work"),
    });

    const sendMail = (values, { resetForm }) => {

        const formData = new FormData();

        // Append text fields
        Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
        });

        // Submit(formData)

        if (resumeFile) {
            formData.append("resume", resumeFile);
        }

        // Send data to PHP backend
        const phpRequest = fetch("https://staremployment.ca/sendEmail.php", {
            method: "POST",
            body: formData,
        });
        phpRequest.then(async (phpRes) => {
            const phpData = await phpRes.json();
            console.log(phpData, 'phpDataphpDataphpData');

            if (phpData.success === true) {
                toast.success("Form submitted successfully", {
                    position: "bottom-right",
                    autoClose: 5000,
                });
                resetForm();
                setResumeFile(null);
                if (typeof window !== "undefined") {
                    window.location.href = "/";
                }
            } else {
                toast.error("Submission failed on one or both services.", {
                    position: "bottom-right",
                    autoClose: 5000,
                });
            }
        })
            .catch(error => {
                console.error("Error submitting form:", error);
                toast.error("Something went wrong!", {
                    position: "bottom-right",
                    autoClose: 5000,
                });
            });
    };


    return (
        <div>
            <Header />
            <PageHeader
                img={'/images/01-Career.jpg'}
                title={'Healthcare Careers'}
                description={''}
            />
            <div className='py-15 container mx-auto'>
                {/* <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={sendMail}

                >
                    {({ isSubmitting }) => (
                        <Form className="form-block bg-white rounded-2xl p-10 shadow-xl ">

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="checkout-form-list group ">
                                    <label>
                                        First Name <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="Firstname" placeholder="First Name" className="" />
                                    <ErrorMessage name="Firstname" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Last Name <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="Lastname" placeholder="Last Name" className="" />
                                    <ErrorMessage name="Lastname" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Birth Date <span className="required">*</span>
                                    </label>
                                    <Field type="date" name="Birthdate" className="" />
                                    <ErrorMessage name="Birthdate" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Gender <span className="required">*</span>
                                    </label>
                                    <Field as="select" name="Gender" className="select">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Field>
                                    <ErrorMessage name="Gender" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Emergency Contact Name <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="EmergencyContactName" placeholder="Emergency Contact Name" className="" />
                                    <ErrorMessage name="EmergencyContactName" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Emergency Contact Number <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="EmergencyContactNumber" placeholder="Emergency Contact Number" className="" />
                                    <ErrorMessage name="EmergencyContactNumber" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Social Insurance Number <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="SocialInsuranceNumber" placeholder="Social Insurance Number" className="" />
                                    <ErrorMessage name="SocialInsuranceNumber" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Street Address <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="StreetAddress" placeholder="Street Address" className="" />
                                    <ErrorMessage name="StreetAddress" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        City <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="City" placeholder="City" className="" />
                                    <ErrorMessage name="City" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Province <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="Province" placeholder="Province" className="" />
                                    <ErrorMessage name="Province" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Postal Code <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="PostalCode" placeholder="Postal Code" className="" />
                                    <ErrorMessage name="PostalCode" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Country <span className="required">*</span>
                                    </label>
                                    <Field as="select" name="Country" className="select">
                                        {countryOptions.map((country) => (
                                            <option key={country.value} value={country.value}>
                                                {country.label}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="Country" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Your Email <span className="required">*</span>
                                    </label>
                                    <Field type="email" name="Email" placeholder="Your Email" className="" />
                                    <ErrorMessage name="Email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Cell Number
                                    </label>
                                    <Field type="text" name="CellNumber" placeholder="Cell Number" className="" />
                                    <ErrorMessage name="CellNumber" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Home Phone Number
                                    </label>
                                    <Field type="text" name="HomePhone" placeholder="Home Phone Number" className="" />
                                    <ErrorMessage name="HomePhone" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Position Applying For <span className="required">*</span>
                                    </label>
                                    <Field as="select" name="Position" className="select">
                                        <option value="">Position Applying For</option>
                                        {positionOptions.map((position) => (
                                            <option key={position.value} value={position.value}>
                                                {position.label}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="Position" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Availability <span className="required">*</span>
                                    </label>
                                    <Field type="text" name="Availability" placeholder="Availability" className="" />
                                    <ErrorMessage name="Availability" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Shift Preference <span className="required">*</span>
                                    </label>
                                    <Field as="select" name="ShiftPreference" className="select">
                                        <option value="">Select a shift</option>
                                        <option value="Morning Shift">Morning Shift</option>
                                        <option value="Afternoon Shift">Afternoon Shift</option>
                                        <option value="Night Shift">Night Shift</option>
                                    </Field>
                                    <ErrorMessage name="ShiftPreference" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Do you have CSA Approved Safety Boots? <span className="required">*</span>
                                    </label>
                                    <Field as="select" name="CsaSafetyBoots" className="select">
                                        <option value="">Do you have CSA Approved Safety Boots?</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </Field>
                                    <ErrorMessage name="CsaSafetyBoots" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Immigration Status <span className="required">*</span>
                                    </label>
                                    <Field as="select" name="ImmigrationStatus" className="select">
                                        <option value="">Immigration Status</option>
                                        <option value="citizen">Citizen</option>
                                        <option value="permanent-resident">Permanent Resident</option>
                                        <option value="work-permit">Work Permit</option>
                                        <option value="work-permit">Citizen</option>
                                    </Field>
                                    <ErrorMessage name="ImmigrationStatus" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Do you have a criminal record? <span className="required">*</span>
                                    </label>
                                    <Field as="select" name="CriminalRecord" className="select">
                                        <option value="">Do you have a criminal record?</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </Field>
                                    <ErrorMessage name="CriminalRecord" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Previous Company You Worked For
                                    </label>
                                    <Field type="text" name="PreviousCompany" placeholder="Previous Company You Worked For" className="" />
                                    <ErrorMessage name="PreviousCompany" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Address of Previous Company You Worked For
                                    </label>
                                    <Field type="text" name="PreviousCompanyAddress" placeholder="Address of Previous Company You Worked For" className="" />
                                    <ErrorMessage name="PreviousCompanyAddress" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Provide Your Previous Company Supervisor's Email
                                    </label>
                                    <Field type="email" name="PreviousCompanySupervisorEmail" placeholder="Provide Your Previous Company Supervisor's Email" className="" />
                                    <ErrorMessage name="PreviousCompanySupervisorEmail" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        Where Did You See Our Advertisement? <span className="required">*</span>
                                    </label>
                                    <Field as="select" name="WhereDidYouSeeAd" className="select">
                                        <option value="">Where Did You See Our Advertisement?</option>
                                        <option value="social-media">Social Media</option>
                                        <option value="website">Website</option>
                                        <option value="referral">Referral</option>
                                        <option value="job-board">Job Board</option>
                                        <option value="other">Other</option>
                                    </Field>
                                    <ErrorMessage name="WhereDidYouSeeAd" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="checkout-form-list">
                                    <label>
                                        How will you get to work? <span className="required">*</span>
                                    </label>
                                    <Field as="select" name="HowWillYouGetToWork" className="select">
                                        <option value="">How will you get to work?</option>
                                        <option value="car">Drive</option>
                                        <option value="public-transport">Ride</option>
                                        <option value="bicycle">Transit</option>
                                    </Field>
                                    <ErrorMessage name="HowWillYouGetToWork" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                            </div>
                            <div className="checkout-form-list my-5">
                                <label>
                                    Additional Comments <span className="required">*</span>
                                </label>
                                <Field
                                    as="textarea"
                                    name="Message"
                                    placeholder="Write Message"
                                    style={{ height: "150px", padding: "10px" }}
                                />
                                <ErrorMessage name="Message" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div >
                                <ResumeUpload onFileUpload={handleFileUpload} resumeFile={resumeFile} />
                            </div>
                            <div className='my-5'>
                                <button type="submit" className="bg-teal-600 text-white px-6 py-4 rounded-2xl hover:bg-teal-700 transition w-fit" disabled={isSubmitting} >
                                    {isSubmitting ? 'Sending...' : `Submit`} {!isSubmitting && <i className="fa-solid fa-arrow-right-long ms-1" />}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik> */}
                <div id="jotform-container" />
            </div>
            <Footer />
        </div>
    );
};

export default ApplyNow;