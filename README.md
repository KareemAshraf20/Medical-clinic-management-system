# Medical clinic management system

1. Login Page (login.html)
Purpose: The primary entry point into the system for employees or students to access their accounts.

Content: A simple form requiring a username and password.

Design: A central, clean design with input fields and a "Log In" button.

Action: When "Log In" is clicked, the user is directed to the home page (main.html).

2. Home Page (main.html)
Purpose: The main control panel that displays the student's profile and basic information.

Structure:

Sidebar for navigating between system sections.

Main content area displays:

Student avatar (avatar).

Basic student information such as name, gender, date of birth, height, weight, blood type, phone number, national ID number, college, and grade.

Internal navigation: It contains four buttons to switch between the student file sections: (student data, examination date, re-examination date, medical prescription).

3. Booking Page (booking.html)
Purpose: Allows students or employees to book a medical appointment.

Content:

A list of medical specialties (such as ENT, general surgery, dentistry, etc.) with radio buttons to choose from.

A date picker to select the appointment day.

A large "Book" button to complete the booking process.

Note: This page is for booking new appointments, not existing appointments.

4. Follow-up Page (follow-up.html)
Purpose: To book a follow-up appointment after the initial diagnosis, with the ability to upload files.

Content: Similar to the regular booking page, but with an additional section:

Upload File: For the "Tests ordered by the doctor (optional)" field, indicating that they are for subsequent stages of the initial examination.

5. Appointment Page (appointment.html)
Purpose: A dashboard for an employee or administrator to view and manage all appointments.

Content:

A tab bar to switch between "New Appointments" and "Completed Appointments" and a "New Appointment" button.

A search bar and date picker to filter appointments.

A table showing a list of patients (or students) with information such as name, specialty (Position), office (Office), age, start date, and salary (possibly for trial data).

Page numbering at the bottom.

Function: This page is intended for administration, not students.

6. Examination Appointment Page (Detection time.html)
Purpose: Displays the status of a student's upcoming medical appointment.

Content: When no appointment is scheduled, the page displays the message "No Examination Appointment" with a button directing the user to the booking page.

Structure: Uses the same structure as the home page with four buttons to navigate within the student's profile.

7. Repeat Appointment Page (repeat appointment.html)
Purpose: Displays the status of a student's follow-up (repeat) appointment.

Content: Exactly the same as the "Review Appointment" page, but for follow-up appointments. Displays a "No Reappointment" message with a button to book.

8. Confirmation Page (sure.html)
Purpose: Requests final confirmation from the user before completing the booking process.

Content: A pop-up window (or standalone page) containing:

Question: "Are you sure you want to book the date?"

A green "Confirm" button to complete the booking.

A red animated "Close" button (x) to cancel the process and return to the home page.

9. Admin Page (admin.html) & Student Info Page (student info.html)
admin.html: Contains only the sidebar and an empty content area. This is likely a template or a page under development for advanced administration functionality.

student info.html: Completely empty, possibly under development or broken.

# System Overview:
Target Audience: BSNU University/College students, medical staff, and administrators.

Design: Uses a fixed sidebar for navigation between all pages, unifying the user interface.

# Key Features:

Student profile management.

Make medical appointments (new and follow-up).

Upload medical files (for follow-up).

Appointment management panel for staff.

Divide appointments into "review" and "return" categories.
