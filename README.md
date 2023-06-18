

![Cinematic Arts Institute](https://i.ibb.co/Fxqz0YX/Screenshot-1.png)


Cinematic Arts Institute live link :   https://cinematic-arts-institute.web.app/

# Cinematic Arts Institute

This is a React app with React Router Dom for navigation, Firebase for authentication, MongoDB as the database, Vercel for server hosting, Stripe for payments, Tanstack Query for efficient data handling, JWT and Axios for communication.

**Welcome to the ultimate Summer Camp platform at the Cinematic Arts Institute! Our website is specifically designed to cater to aspiring filmmakers and provide an immersive summer camp experience like no other. With dedicated dashboards for instructors, administrators, and students, we ensure that everyone can make the most of their time with us. Explore our homepage to discover popular classes, renowned instructors, and exciting summer camp programs. Instructors can easily add new classes and summer camp sessions, while students have a seamless enrollment and payment process. Administrators oversee the smooth operation of the institute, guaranteeing an unforgettable summer camp adventure for all participants. Get ready to embark on a cinematic journey like never before at the ultimate Summer Camp platform of the Cinematic Arts Institute!**

* The website includes a captivating Top Slider Section, showcasing relevant content. The Popular Classes Section highlights the top 6 classes based on enrollment, while the Popular Instructors Section showcases 6 instructors. An extra section is included for supplementary content and features. 
* The Instructors page displays all instructors with their image, name, email, and optionally, the number and names of classes taught. The Classes page showcases approved classes with details like image, name, instructor name, available seats, and price. A "Select" button allows users to choose a class, with conditions like seat availability and user login status.
* The registration and login system includes a login page with email and password fields, a link to the registration page, and Google as social login option. The registration page has fields for name, email, password, confirm password, and photo URL. It enforces password criteria and displays error messages for invalid inputs. Empty email and password fields are not allowed.
* The website implementation includes a dark/light theme toggle on the home page, responsive design for optimal viewing across devices, the use of Tanstack Query for efficient data handling, Axios for API calls, React Hook Form for form handling, and utilization of environment variables for security. JWT token-based authentication is implemented for login and registration, with a custom 404 page featuring an image or animation and a back-to-home button.


**Student Dashboard:**
* The Student Dashboard is a private route where students can manage their classes. It consists of two sections: "My Selected Classes" displays booked classes with relevant information, delete and pay buttons, while "My Enrolled Classes" shows classes after successful payment.
* Payment:
* In the Student Dashboard, students can pay for selected classes by clicking the pay button, redirecting them to the payment page. After successful payment, the class is moved to the "My Enrolled Classes" section. Students can also access a payment history page, sorted in descending order, to view their past payments.


**Instructor Dashboard:**
* The Instructor Dashboard is a private route for instructors. It allows them to add classes and view their existing classes. When adding a class, instructors fill out a form with class details, and the class is initially set to pending. The "My Classes" section displays all added classes, including status, total enrolled students (if any), and feedback (if denied by admin).


**Admin Dashboard:**
* The Admin Dashboard is a private route for admins. It allows them to manage classes, including approval, denial, and feedback. Admins can also manage users by assigning roles such as instructor or admin.




## Cinematic Arts Institute Live Link
**Hosted in Firebase ->** [https://cinematic-arts-institute.web.app/](https://cinematic-arts-institute.web.app/)


**server hosted in vercel ->** [https://cinematic-arts-institute-server.vercel.app/](https://cinematic-arts-institute-server.vercel.app/)

## [Cinematic Arts Institute Live Link](https://cinematic-arts-institute.web.app/)

Github Repo -> [repo](https://cinematic-arts-institute-server.vercel.app/)
