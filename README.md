
# MERN Doctor 📝 Appointment App

Doctor Appointment App is a comprehensive platform designed for managing users, doctors, and appointments seamlessly.


## Features
User Management
- Users can create account.
- Users can login.
- Users can apply for the role of a doctor.
- Administrative approval is required for users to become doctors.

Appointment Management
- Users can create appointments within the system.
- Automatic notifications are sent to the relevant doctor upon appointment creation.
- Doctors receive notifications for pending appointment requests.

Notification System
- Admin is notified of new doctor applications.
- Users receive notifications regarding the acceptance or rejection of their application for the role of a doctor by the administrator.
- Users are notified of appointment acceptance or rejection by the doctor.
## Tech Stack

**Client:** React, ReactTypeScript, Redux Toolkit, Material UI, Formik

**API Handlers:** RTK Query

**Server:** Node, Express

**Database:** Mongo DB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Backend ###

```bash
 NODE_ENV:  development
 PORT:      4000
 DATABASE:  Insert your MongoDB database connection link
```

### Frontend ###

```bash
 REACT_APP_API_URL:  'http://127.0.0.1:3000/api/v1/'
```




## API Reference

### ROUTES

- Endpoint: `http://127.0.0.1:5000/api/v1/users`
- Endpoint: `http://127.0.0.1:5000/api/v1/doctors`

## USERS API

#### Signup
- **Method:** `POST`
- **Endpoint:** `/signup`

#### Login
- **Method:** `POST`
- **Endpoint:** `/login`

#### Get All Users
- **Method:** `GET`
- **Endpoint:** `/`

#### Get User
- **Method:** `GET`
- **Endpoint:** `/:id`

#### Delete User
- **Method:** `DELETE`
- **Endpoint:** `/:id`

#### Verify User
- **Method:** `GET`
- **Endpoint:** `/verify-user/:id`

#### Book Appointment
- **Method:** `POST`
- **Endpoint:** `/book-appointment`

#### User Appointments
- **Method:** `GET`
- **Endpoint:** `/user-appointments/:id`

#### Notifications Seen
- **Method:** `POST`
- **Endpoint:** `mark-all-notification-as-seen`

#### Delete Notifications
- **Method:** `POST`
- **Endpoint:** `/delete-all-notifications`

#### Change Doctor Status
- **Method:** `POST`
- **Endpoint:** `/change-doctor-status`

## DOCTORS API

#### Get All Doctors
- **Method:** `GET`
- **Endpoint:** `/`

#### Get All Approved Doctors
- **Method:** `GET`
- **Endpoint:** `/approved-doctors`

#### Doctor Signup
- **Method:** `POST`
- **Endpoint:** `/signup`

#### Get Doctors
- **Method:** `GET`
- **Endpoint:** `/:id`

#### Update Doctor
- **Method:** `PUT`
- **Endpoint:** `/:id`

#### Get All Doctor Appointments
- **Method:** `GET`
- **Endpoint:** `/appointments/:id`

#### Get Booked Doctor Appointments
- **Method:** `GET`
- **Endpoint:** `/booked-appointments/:id`

#### Change Appointment Status
- **Method:** `POST`
- **Endpoint:** `/change-appointment-status`

#### Appointment Booking Availability
- **Method:** `POST`
- **Endpoint:** `/check-booking-availability`

<div align="center">

---

Made with ❤️ by Narender

</div>
